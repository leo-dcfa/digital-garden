---
title: AI Research Stack - CUDA / PyTorch [In Progress]
description: Setting up the AI research software stack on Ubuntu 26.04 with an RTX 5090 — driver verification, Python environment, PyTorch with Blackwell support, and an optional CUDA toolkit for kernel work.
date: 2026-05-01 15:00:00 +1000
tags:
  - cuda
  - pytorch
  - ai
  - ubuntu
  - rtx 5090
  - software setup
---

With the [workstation up and running](../hardware/aftershock-creator-max-rtx-5090-linux.md), the next step is the actual research stack: Python and PyTorch, with CUDA pieces only if you actually need them.

The RTX 5090 is Blackwell (compute capability `sm_120`), which means CUDA 12.8+ and a recent PyTorch build. Stable PyTorch wheels caught up earlier this year, so nightlies are no longer mandatory — but worth double-checking before installing.

A note on Ubuntu 26.04: the [official CUDA install guide](https://docs.nvidia.com/cuda/cuda-installation-guide-linux/) doesn't list 26.04 yet — only 22.04 and 24.04. NVIDIA does publish a `ubuntu2604` apt repository, but at the time of writing it only contains driver packages (`cuda-drivers`, `nvidia-*`), no `cuda-toolkit-*` and no cuDNN. So the apt-based toolkit install isn't going to work; this article uses the runfile installer when the toolkit is actually needed.

# Verify the driver

Before touching CUDA, confirm the NVIDIA driver is healthy.

```bash
nvidia-smi
```

You should see the RTX 5090 listed along with a driver version (570+ for Blackwell). If not, go back to the [hardware setup](../hardware/aftershock-creator-max-rtx-5090-linux.md#install-nvidia-drivers).

# Do you need the CUDA toolkit?

Probably not. PyTorch's CUDA wheels bundle their own runtime and cuDNN — the system driver is enough to load and run models, and even develop in pure PyTorch. You only need a system toolkit if you're:

- Writing raw CUDA C++ kernels (`.cu` files compiled with `nvcc`)
- Building PyTorch C++ extensions that compile CUDA from source
- Using Numba `@cuda.jit` (needs the NVVM library)

For ML kernel work specifically, [Triton](https://triton-lang.org/) is worth a look before reaching for raw CUDA. It emits PTX directly, JITs through the driver, and needs no toolkit — and most modern ML kernel research (FlashAttention, Mamba, etc.) is written in it.

If none of the above applies, skip ahead to the [Python environment](#python-environment) section.

# (Optional) Install the CUDA toolkit via runfile

Since the `ubuntu2604` apt repo doesn't ship `cuda-toolkit-*` yet, the cleanest way to get `nvcc` on 26.04 is NVIDIA's runfile installer.

1. Download the runfile

Check the [CUDA downloads page](https://developer.nvidia.com/cuda-downloads) for the current version and exact URL. As of writing, CUDA 13.2 is the latest:

```bash
wget https://developer.download.nvidia.com/compute/cuda/13.2.0/local_installers/cuda_13.2.0_linux.run
```

2. Run the installer with `--toolkit` only (skip the bundled driver — you already have a newer one from apt)

```bash
sudo sh cuda_13.2.0_linux.run --toolkit --silent --override
```

3. Add CUDA to your shell

```bash
echo 'export PATH=/usr/local/cuda/bin:$PATH' >> ~/.bashrc
echo 'export LD_LIBRARY_PATH=/usr/local/cuda/lib64:$LD_LIBRARY_PATH' >> ~/.bashrc
source ~/.bashrc
```

4. Validate

```bash
nvcc --version
```

# (Optional) cuDNN

Same story: PyTorch wheels bundle cuDNN, so you don't need a system install for normal use. The 26.04 apt repo doesn't have `libcudnn9-*` packages yet either. If you need it for non-PyTorch frameworks or custom builds, grab it from the [cuDNN downloads page](https://developer.nvidia.com/cudnn-downloads) — the tar archive works on 26.04 by extracting headers/libs into `/usr/local/cuda`.

# Python environment

I prefer `uv` over conda these days — faster, lighter, and the lockfile story is cleaner.

1. Install uv

```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
```

2. Create a project directory and a virtual environment

```bash
mkdir -p ~/research && cd ~/research
uv venv --python 3.12
source .venv/bin/activate
```

# Install PyTorch

For Blackwell support, install from the CUDA 12.8 index. These wheels bundle their own CUDA runtime and cuDNN — they do **not** require a system toolkit install.

```bash
uv pip install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/cu128
```

# Validate the stack

```bash
python -c "import torch; print(torch.__version__); print(torch.cuda.is_available()); print(torch.cuda.get_device_name(0))"
```

Expected output: a recent PyTorch version, `True`, and `NVIDIA GeForce RTX 5090`.

Quick sanity check that compute actually works:

```python
import torch
x = torch.randn(8192, 8192, device="cuda")
y = x @ x
torch.cuda.synchronize()
print(y.shape, y.device)
```

# Verify Triton

If you took the driver-only path and want to write GPU kernels, Triton is the tool. PyTorch's Linux wheels already pull `triton` in as a dependency, so it's installed.

Verify the import:

```bash
python -c "import triton; print(triton.__version__)"
```

If it's missing for some reason, install it directly:

```bash
uv pip install triton
```

Smoke test that Triton can compile and run a kernel on the 5090:

```python
import torch
import triton
import triton.language as tl

@triton.jit
def add_kernel(x_ptr, y_ptr, out_ptr, n, BLOCK: tl.constexpr):
    pid = tl.program_id(0)
    offs = pid * BLOCK + tl.arange(0, BLOCK)
    mask = offs < n
    x = tl.load(x_ptr + offs, mask=mask)
    y = tl.load(y_ptr + offs, mask=mask)
    tl.store(out_ptr + offs, x + y, mask=mask)

n = 1024 * 1024
x = torch.randn(n, device="cuda")
y = torch.randn(n, device="cuda")
out = torch.empty_like(x)
add_kernel[(triton.cdiv(n, 1024),)](x, y, out, n, BLOCK=1024)
torch.cuda.synchronize()
print(torch.allclose(out, x + y))  # True
```

If it prints `True`, Triton is JIT-compiling PTX, the driver is loading it, and the 5090 is running it — no toolkit needed.

# Common additions

The rest of the stack I tend to install up front:

```bash
uv pip install \
  numpy pandas matplotlib \
  jupyterlab ipykernel \
  transformers datasets accelerate \
  einops tqdm \
  wandb
```

# Jupyter over SSH

Since I'll mostly drive this from the MacBook, I want Jupyter accessible remotely without exposing it to the network.

On the workstation:

```bash
jupyter lab --no-browser --port=8888
```

From the MacBook:

```bash
ssh -L 8888:localhost:8888 <username>@<workstation-ip>
```

Then open `http://localhost:8888` locally and paste the token from the workstation terminal.
