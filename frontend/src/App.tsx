import {Routes, Route } from "react-router-dom"

import DashboardLayout from "./layout/DashboardLayout"


import Overview from "./pages/dashboard/Overview"
import Projects from "./pages/dashboard/Projects"
import Analytics from "./pages/dashboard/Analytics"
import ApiKeys from "./pages/dashboard/ApiKeys"


export default function App() {
  return (

      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route path="dashboard" element={<Overview />} />
          <Route path="projects" element={<Projects />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="apikeys" element={<ApiKeys />} />
        </Route>
      </Routes>

  )
}