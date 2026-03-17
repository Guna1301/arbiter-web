import { useAuth } from "@clerk/react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isSignedIn, isLoaded } = useAuth();

  if (!isLoaded) {
    return (
      <div className="flex items-center justify-center h-screen text-white">
        Loading...
      </div>
    );
  }

  if (!isSignedIn) {
    return <Navigate to="/auth" replace />; 
  }

  return children;
}