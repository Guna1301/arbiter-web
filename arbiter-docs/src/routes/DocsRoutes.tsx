import { Routes, Route } from "react-router-dom"
import { lazy, Suspense } from "react"

const DocsLayout = lazy(() => import("../layouts/DocsLayout"))

const Introduction = lazy(() => import("../content/introduction.mdx"))
const Installation = lazy(() => import("../content/installation.mdx"))
const Quickstart = lazy(() => import("../content/quickstart.mdx"))
const RateLimits = lazy(() => import("../content/rate-limits.mdx"))
const Projects = lazy(() => import("../content/projects.mdx"))
const ApiKeys = lazy(() => import("../content/api-keys.mdx"))
const Architecture = lazy(() => import("../content/architecture.mdx"))
const AnalyticsPage = lazy(() => import("../content/analytics.mdx"))

const Loader = () => (
  <div className="flex items-center justify-center h-screen">
    <p className="text-gray-500 text-sm">Loading...</p>
  </div>
)

export default function DocsRoutes() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<Loader />}>
              <DocsLayout />
            </Suspense>
          }
        >
          <Route
            index
            element={
              <Suspense fallback={<Loader />}>
                <Introduction />
              </Suspense>
            }
          />

          <Route
            path="installation"
            element={
              <Suspense fallback={<Loader />}>
                <Installation />
              </Suspense>
            }
          />

          <Route
            path="quickstart"
            element={
              <Suspense fallback={<Loader />}>
                <Quickstart />
              </Suspense>
            }
          />

          <Route
            path="rate-limits"
            element={
              <Suspense fallback={<Loader />}>
                <RateLimits />
              </Suspense>
            }
          />

          <Route
            path="projects"
            element={
              <Suspense fallback={<Loader />}>
                <Projects />
              </Suspense>
            }
          />

          <Route
            path="api-keys"
            element={
              <Suspense fallback={<Loader />}>
                <ApiKeys />
              </Suspense>
            }
          />

          <Route
            path="architecture"
            element={
              <Suspense fallback={<Loader />}>
                <Architecture />
              </Suspense>
            }
          />

          <Route
            path="analytics"
            element={
              <Suspense fallback={<Loader />}>
                <AnalyticsPage />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </Suspense>
  )
}