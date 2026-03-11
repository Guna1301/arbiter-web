import { Routes, Route, Navigate } from "react-router-dom"

import DashboardLayout from "./layout/DashboardLayout"

import Overview from "./pages/dashboard/Overview"
import Projects from "./pages/dashboard/Projects"
import Analytics from "./pages/dashboard/Analytics"
import ApiKeys from "./pages/dashboard/ApiKeys"

import Login from "./pages/auth/Login"
import Signup from "./pages/auth/Signup"

import ProtectedRoute from "./components/ProtectedRoute"

export default function App() {
  return (
    <Routes>

      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      <Route
        element={
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Navigate to="/dashboard" replace />} />
        <Route path="/dashboard" element={<Overview />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/apikeys" element={<ApiKeys />} />
      </Route>

    </Routes>
  )
}