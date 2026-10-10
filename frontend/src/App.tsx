import { Navigate, Routes, Route } from "react-router-dom";
import { AuthenticateWithRedirectCallback, useAuth } from "@clerk/react";

import DashboardLayout from "./layout/DashboardLayout";
import Projects from "./pages/dashboard/Projects";


import ProtectedRoute from "./components/auth/ProtectedRoute";
import AuthCallbackPage from "./pages/auth/AuthCallbackPage";
import Auth from "./pages/auth/AuthPage";
import ProjectDetails from "./pages/dashboard/ProjectDetails";

import LandingPage from "./pages/LandingPage"; 
import NotFoundPage from "./pages/404/NotFoundPage";
import SiteInfoPage from "./pages/SiteInfoPage";

import { setAuthTokenGetter } from "./lib/authToken";
import { useEffect } from "react";

import { Analytics } from '@vercel/analytics/react';

function HomeRoute({
  isLoaded,
  isSignedIn,
}: {
  isLoaded: boolean;
  isSignedIn: boolean | undefined;
}) {
  if (!isLoaded) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#030303] text-zinc-400">
        Loading...
      </div>
    );
  }

  if (isSignedIn) {
    return <Navigate to="/dashboard" replace />;
  }

  return <LandingPage />;
}

export default function App() {
  const { getToken, isLoaded, isSignedIn } = useAuth();

  useEffect(() => {
    if (!isLoaded) return;

    setAuthTokenGetter(getToken);
  }, [getToken, isLoaded]);


  return (
    <>
      <Analytics />
      <Routes>
        <Route
          path="/"
          element={<HomeRoute isLoaded={isLoaded} isSignedIn={isSignedIn} />}
        />
        
        <Route path="/sso-callback" element={<AuthenticateWithRedirectCallback />} />
        <Route path="/auth-callback" element={<AuthCallbackPage />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/about" element={<SiteInfoPage page="about" />} />
        <Route path="/contact" element={<SiteInfoPage page="contact" />} />
        <Route path="/privacy" element={<SiteInfoPage page="privacy" />} />
        <Route path="/terms" element={<SiteInfoPage page="terms" />} />

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

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}