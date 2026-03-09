import { Routes, Route } from "react-router-dom"
import DocsLayout from "../layouts/DocsLayout"

import Introduction from "../content/introduction.mdx"
import Installation from "../content/installation.mdx"
import Quickstart from "../content/quickstart.mdx"
import RateLimits from "../content/rate-limits.mdx"

export default function DocsRoutes() {
  return (
    <Routes>
      <Route path="/docs" element={<DocsLayout />}>
        <Route index element={<Introduction />} />
        <Route path="installation" element={<Installation />} />
        <Route path="quickstart" element={<Quickstart />} />
        <Route path="rate-limits" element={<RateLimits />} />
      </Route>
    </Routes>
  )
}