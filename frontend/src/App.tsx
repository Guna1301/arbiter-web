import { Routes, Route, Navigate } from "react-router-dom";
import { AuthenticateWithRedirectCallback, useAuth } from "@clerk/react";

import DashboardLayout from "./layout/DashboardLayout";
import Overview from "./pages/dashboard/Overview";
import Projects from "./pages/dashboard/Projects";
import Analytics from "./pages/dashboard/Analytics";
import ApiKeys from "./pages/dashboard/ApiKeys";

import ProtectedRoute from "./components/ProtectedRoute";
import AuthCallbackPage from "./pages/auth/AuthCallbackPage";
import Auth from "./pages/auth/AuthPage";
import ProjectDetails from "./pages/dashboard/ProjectDetails";

import { setAuthTokenGetter } from "./lib/authToken";

export default function App() {
  const { getToken } = useAuth();

  setAuthTokenGetter(() => getToken());

  return (
    <Routes>
      <Route path="/sso-callback" element={<AuthenticateWithRedirectCallback />} />
      <Route path="/auth-callback" element={<AuthCallbackPage />} />
      <Route path="/auth" element={<Auth />} />

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Overview />} />
        <Route path="projects" element={<Projects />} />
        <Route path="projects/:projectId" element={<ProjectDetails />} />
        <Route path="analytics" element={<Analytics />} />
        <Route path="apikeys" element={<ApiKeys />} />
      </Route>
    </Routes>
  );
}