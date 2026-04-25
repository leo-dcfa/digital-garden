import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Leo's Notebook",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "garden.azl.au",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Fraunces",
        body: "DM Sans",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#FAF8F5", // cream — page background
          lightgray: "#E8F1FA", // blue-100 — borders, dividers, code chip bg
          gray: "#94A3B8", // muted slate
          darkgray: "#4A5568", // slate — body copy
          dark: "#1A202C", // midnight — headings
          secondary: "#1E5AA8", // blue-700 — primary accent / links
          tertiary: "#3B82C4", // blue-500 — link hover / accents
          highlight: "rgba(30, 90, 168, 0.08)", // soft blue wiki-link bg
          textHighlight: "#D4A85388", // gold marker
        },
        darkMode: {
          light: "#0B2545", // blue-900 — page background
          lightgray: "#16385F", // muted blue divider
          gray: "#5BA3D9", // blue-300 — secondary text
          darkgray: "#E8F1FA", // blue-100 — body copy
          dark: "#FFFFFF", // headings
          secondary: "#5BA3D9", // blue-300 — links
          tertiary: "#D4A853", // gold — link hover
          highlight: "rgba(91, 163, 217, 0.12)",
          textHighlight: "#D4A85388",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
