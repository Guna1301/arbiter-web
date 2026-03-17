import { useSignIn, useAuth } from "@clerk/react";
import { Navigate } from "react-router-dom";
import OAuthButton from "../../components/OAuthButton";

function Auth() {
  const { isSignedIn, isLoaded } = useAuth();
  const { signIn } = useSignIn();

  if (!isLoaded) {
    return (
      <div className="flex items-center justify-center h-screen bg-black text-white">
        Loading...
      </div>
    );
  }

  if (isSignedIn) {
    return <Navigate to="/dashboard" replace />;
  }

  if (!signIn) {
    return (
      <div className="flex items-center justify-center h-screen bg-black text-white">
        Loading...
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <div className="w-full max-w-sm space-y-3 p-6">
        <h1 className="text-white text-2xl font-bold text-center mb-6">Sign in</h1>
        <OAuthButton strategy="oauth_google" label="Continue with Google" />
        <OAuthButton strategy="oauth_github" label="Continue with GitHub" />
      </div>
    </div>
  );
}

export default Auth;