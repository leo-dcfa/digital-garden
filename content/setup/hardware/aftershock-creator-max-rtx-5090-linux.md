---
title: Aftershock Creator Max with RTX 5090 on Linux [In Progress]
description: Step-by-step guide to setting up Ubuntu 24.04 on an Aftershock Creator Max workstation with an RTX 5090 — USB prep, BIOS, drivers.
date: 2026-04-30 14:55:29 +1000
tags:
  - linux
  - ubuntu
  - rtx 5090
  - hardware setup
---

This is going to be my primary research machine for training.

# Pre-installation

1. Buy a USB stick, at least 8GB.
2. Buy peripherals if you don't have any
3. Download [Ubuntu](https://ubuntu.com/download/desktop)
4. Download [Balena Etcher](https://etcher.balena.io/)

# Prepare USB

1. Plug USB stick into MacBook (don't forget you need an adapter) - side thought: are there USB-C sticks?
2. Install Balena Etcher
3. Open Balena Etcher
3. Click "Flash from file" → select the Ubuntu 24.04 ISO you downloaded
4. Click "Select target" → choose the USB stick
5. Click "Flash!"
6. Eject USB

# Boot new machine

1. Start the machine and make sure it is not DOA.
2. Perform Windows setup (setup account, windows updates, etc)
3. (Optional Step) Spend 6h trying to figure out why the GPU is not available
4. (Optional Step) Figure out the reason is the GPU was not plugged in
5. Run Task Manager and verify all components you bought are available and correct (especially the GPU!)

# Prepare BIOS

1. Power on workstation, immediately tap Delete key repeatedly to enter BIOS
2. Find Secure Boot setting (location varies by motherboard, usually under "Boot" or "Security" tab)
3. Set Secure Boot to "Disabled"
4. Verify Boot mode is UEFI (not Legacy/CSM) and SATA mode is AHCI
5. Save and exit

# Boot from USB

1. With workstation off, plug Ubuntu USB into rear USB port
2. Power on, immediately tap Delete key repeatedly to enter BIOS
3. Navigate to Boot menu / Boot Priority
4. Move the USB drive to the top of boot order
5. Save and exit (F10)
6. Machine reboots, Ubuntu installer launches

# Install Ubuntu

1. At welcome screen: select language → English
2. Choose "Install Ubuntu" (not "Try Ubuntu")
3. Keyboard layout: select your layout (English (US) or English (UK))
4. Network: connect to your network if prompted (ethernet should auto-connect)
5. Updates and software:
  - Select "Normal installation"
  - Check "Download updates while installing Ubuntu"
  - Check "Install third-party software for graphics and Wi-Fi hardware"

## Disk Partioning

For this is going to be a dedicated research machine; as tempting as it is to turn this to leave space for a gaming PC, I am going to skip that option (the Switch 2 keeps me busy enough).
1. Select "Erase disk and install Ubuntu"
2. Click "Install Now"
3. Confirm changes when prompted
4. The entire 2TB becomes one Linux partition

## Complete installation

The rest of the installation covers timezone and whether I want to install other third party drivers, which I chose to accept so the NVIDIA drivers are all ready to go.
