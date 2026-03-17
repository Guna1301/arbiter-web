import { useSignIn, useAuth } from "@clerk/react";
import { Navigate } from "react-router-dom";
import OAuthButton from "../../components/OAuthButton";

function Auth() {
  const { isSignedIn, isLoaded } = useAuth();
  const { signIn } = useSignIn();

  if (!isLoaded || !signIn) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black text-white">
        <div className="animate-pulse">Loading...</div>
      </div>
    );
  }

  if (isSignedIn) {
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <div className="flex min-h-screen text-white relative font-sans overflow-hidden bg-black bg-[url('/Auth-bg.jpg')] bg-cover bg-center">
      
      <div className="absolute inset-0 bg-black/60 z-0 pointer-events-none"></div>

      <div className="absolute top-8 left-8 flex items-center gap-2 z-20 pointer-events-none">
        <span className="text-xl font-semibold ">
          Arbiter
        </span>
      </div>

      <div className="relative z-10 flex w-full">
        
        <div className="hidden lg:flex flex-1 items-center justify-center">
          <div className="relative flex items-center justify-center">
            
            <div className="absolute w-[420px] h-[420px] bg-indigo-500/10 blur-3xl rounded-full"></div>

            <img
              src="/Auth_page.svg"
              alt="Arbiter Graphic"
              className="relative w-[360px] xl:w-[420px] object-contain opacity-90 
                        drop-shadow-[0_20px_80px_rgba(99,102,241,0.25)]"
            />
            
          </div>
        </div>

        <div className="flex-1 flex items-center justify-center p-8">
          
          <div className="w-full max-w-sm flex flex-col ">
            
            <h1 className="text-[1.35rem] font-semibold mb-8 text-center">
              Sign in <span className="text-zinc-400 font-normal">/ sign up</span>
            </h1>

            <div className="flex flex-col gap-4">
              <OAuthButton strategy="oauth_google" label="Continue with Google" />
              <OAuthButton strategy="oauth_github" label="Continue with GitHub" />
            </div>

            <p className="text-xs text-zinc-400 mt-8 text-center">
              By signing up you agree to our{" "}
              <a href="/terms" className="text-zinc-200 hover:text-white font-medium transition-colors">
                terms of service
              </a>.
            </p>

          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Auth;