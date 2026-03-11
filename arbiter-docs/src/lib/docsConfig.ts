export type DocsItem = {
  title: string
  path: string
  end?: boolean
}

export type DocsSection = {
  section: string
  items: DocsItem[]
}

export const docsNav: DocsSection[] = [
  {
    section: "Getting Started",
    items: [
      {
        title: "Introduction",
        path: "/docs",
        end: true
      },
      {
        title: "Installation",
        path: "/docs/installation"
      },
      {
        title: "Quick Start",
        path: "/docs/quickstart"
      }
    ]
  },
  {
    section: "Core Concepts",
    items: [
      {
        title: "Projects",
        path: "/docs/projects"
      },
      {
        title: "API Keys",
        path: "/docs/api-keys"
      },
      {
        title: "Rate Limits",
        path: "/docs/rate-limits"
      }
    ]
  },
  {
    section: "Advanced",
    items: [
      {
        title: "Architecture",
        path: "/docs/architecture"
      },
      {
        title: "Analytics",
        path: "/docs/analytics"
      }
    ]
  }
]