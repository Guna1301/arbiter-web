import { Routes, Route } from "react-router-dom"
import DocsLayout from "../layouts/DocsLayout"

import Introduction from "../content/introduction.mdx"
import Installation from "../content/installation.mdx"
import Quickstart from "../content/quickstart.mdx"
import RateLimits from "../content/rate-limits.mdx"
import Projects from "../content/projects.mdx"
import ApiKeys from "../content/api-keys.mdx"
import Architecture from "../content/architecture.mdx"
import Analytics from "../content/analytics.mdx"

export default function DocsRoutes() {
  return (
    <Routes>
      <Route path="/" element={<DocsLayout />}>
        <Route index element={<Introduction />} />
        <Route path="installation" element={<Installation />} />
        <Route path="quickstart" element={<Quickstart />} />
        <Route path="rate-limits" element={<RateLimits />} />
        <Route path="projects" element= {<Projects />} />
        <Route path="api-keys" element={<ApiKeys />} />
        <Route path="architecture" element={<Architecture />} />
        <Route path="analytics" element={<Analytics />} />
      </Route>
    </Routes>
  )
}