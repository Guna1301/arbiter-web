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
        path: "/",
        end: true
      },
      {
        title: "Installation",
        path: "/installation"
      },
      {
        title: "Quick Start",
        path: "/quickstart"
      }
    ]
  },
  {
    section: "Core Concepts",
    items: [
      {
        title: "Projects",
        path: "/projects"
      },
      {
        title: "API Keys",
        path: "/api-keys"
      },
      {
        title: "Rate Limits",
        path: "/rate-limits"
      }
    ]
  },
  {
    section: "Advanced",
    items: [
      {
        title: "Architecture",
        path: "/architecture"
      },
      {
        title: "Analytics",
        path: "/analytics"
      }
    ]
  }
]