import { Navigate, Routes, Route } from "react-router-dom";
import { AuthenticateWithRedirectCallback, useAuth } from "@clerk/react";
import { lazy, Suspense, useEffect } from "react";

import ProtectedRoute from "./components/auth/ProtectedRoute";

import { setAuthTokenGetter } from "./lib/authToken";

import { Analytics } from '@vercel/analytics/react';

const DashboardLayout = lazy(() => import("./layout/DashboardLayout"));
const Projects = lazy(() => import("./pages/dashboard/Projects"));
const ProjectDetails = lazy(() => import("./pages/dashboard/ProjectDetails"));
const AuthCallbackPage = lazy(() => import("./pages/auth/AuthCallbackPage"));
const Auth = lazy(() => import("./pages/auth/AuthPage"));
const LandingPage = lazy(() => import("./pages/LandingPage"));
const NotFoundPage = lazy(() => import("./pages/404/NotFoundPage"));
const SiteInfoPage = lazy(() => import("./pages/SiteInfoPage"));

function LoadingScreen() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#030303] text-zinc-100">
      <div className="text-center">
        <p className="mb-2 text-lg font-semibold tracking-tight">Arbiter</p>
        <p className="font-mono text-xs uppercase tracking-[0.12em] text-zinc-500">
          Loading...
        </p>
      </div>
    </div>
  );
}

function HomeRoute({
  isLoaded,
  isSignedIn,
}: {
  isLoaded: boolean;
  isSignedIn: boolean | undefined;
}) {
  if (!isLoaded) {
    return <LoadingScreen />;
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
      <Suspense fallback={<LoadingScreen />}>
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
      </Suspense>
    </>
  );
}