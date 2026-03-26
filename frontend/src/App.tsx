import { Routes, Route, Navigate } from "react-router-dom";
import { AuthenticateWithRedirectCallback, useAuth } from "@clerk/react";

import DashboardLayout from "./layout/DashboardLayout";
import Projects from "./pages/dashboard/Projects";


import ProtectedRoute from "./components/auth/ProtectedRoute";
import AuthCallbackPage from "./pages/auth/AuthCallbackPage";
import Auth from "./pages/auth/AuthPage";
import ProjectDetails from "./pages/dashboard/ProjectDetails";

import LandingPage from "./pages/LandingPage"; 

import { setAuthTokenGetter } from "./lib/authToken";

export default function App() {
  const { getToken } = useAuth();

  setAuthTokenGetter(() => getToken());

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      
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
        <Route index element={<Projects />} />
        <Route path="projects" element={<Projects />} />
        <Route path="projects/:projectId" element={<ProjectDetails />} />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}