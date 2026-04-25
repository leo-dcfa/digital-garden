import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"

const PageTitle: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  const title = cfg?.pageTitle ?? i18n(cfg.locale).propertyDefaults.title
  const baseDir = pathToRoot(fileData.slug!)
  return (
    <h2 class={classNames(displayClass, "page-title")}>
      <a href={baseDir} class="page-title-link" aria-label={`${title} home`}>
        <span class="page-title-mark" aria-hidden="true">
          <svg viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="20" y="20" width="472" height="472" rx="48" fill="var(--secondary)" />
            <rect x="244" y="240" width="24" height="200" rx="12" fill="var(--light)" />
            <path d="M 256 250 Q 175 245 130 130 Q 235 175 256 250 Z" fill="var(--light)" />
            <path d="M 256 250 Q 337 245 382 130 Q 277 175 256 250 Z" fill="var(--light)" />
          </svg>
        </span>
        <span class="page-title-text">{title}</span>
      </a>
    </h2>
  )
}

PageTitle.css = `
.page-title {
  font-size: 1.5rem;
  margin: 0;
  font-family: var(--titleFont);
  font-weight: 500;
  letter-spacing: -0.01em;
}

.page-title-link {
  display: inline-flex;
  align-items: center;
  gap: 0.625rem;
  color: var(--dark);
  background: none !important;
  padding: 0 !important;
}

.page-title-mark {
  display: inline-flex;
  width: 36px;
  height: 36px;
  flex-shrink: 0;
}

.page-title-mark svg {
  width: 100%;
  height: 100%;
  display: block;
}

.page-title-text {
  line-height: 1.1;
}
`

export default (() => PageTitle) satisfies QuartzComponentConstructor
