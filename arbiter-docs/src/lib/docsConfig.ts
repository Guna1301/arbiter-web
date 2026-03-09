export const docsNav = [
  {
    section: "Getting Started",
    items: [
      // FIX: `end: true` so /docs only highlights when exactly on /docs,
      // not on /docs/installation, /docs/quickstart, etc.
      { title: "Introduction", path: "/docs", end: true },
      { title: "Installation", path: "/docs/installation", end: false },
      { title: "Quick Start", path: "/docs/quickstart", end: false },
    ],
  },
  {
    section: "Core Concepts",
    items: [
      { title: "Projects", path: "/docs/projects", end: false },
      { title: "API Keys", path: "/docs/api-keys", end: false },
      { title: "Rate Limits", path: "/docs/rate-limits", end: false },
    ],
  },
]