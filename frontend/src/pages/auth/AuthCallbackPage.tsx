import { Card, CardContent } from "../../components/ui/card";
import { api } from "../../lib/api";
import { useUser } from "@clerk/react";
import { Loader } from "lucide-react";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const AuthCallbackPage = () => {
  const { isLoaded, user } = useUser();
  const navigate = useNavigate();
  const syncAttempted = useRef(false);

  useEffect(() => {
    const syncUser = async () => {
      if (!isLoaded || !user) return;
      if (syncAttempted.current) return;
      syncAttempted.current = true;

      try {
        await api.post("/auth/callback", {
          id: user.id,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.emailAddresses[0]?.emailAddress,
        });
      } catch (error) {
        console.log("Error in auth callback", error);
      } finally {
        navigate("/dashboard");
      }
    };

    syncUser();
  }, [isLoaded, user, navigate]);

  return (
    <div className="h-screen w-full bg-black flex items-center justify-center p-4">
      <Card className="w-[90%] max-w-sm bg-zinc-900/90 border border-zinc-800 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.6)] backdrop-blur-sm">
        <CardContent className="flex flex-col items-center gap-5 pt-10 pb-10">
          
          <Loader 
            className="size-6 text-yellow-300 animate-spin" 
            strokeWidth={2}
          />
          
          <div className="flex flex-col gap-1.5 items-center text-center">
            <h3 className="text-zinc-100 text-2xl font-bold tracking-tight">
              Logging you in
            </h3>
            
            <p className="text-zinc-500 text-sm font-medium">
              Redirecting...
            </p>
          </div>
          
        </CardContent>
      </Card>
    </div>
  );
};

export default AuthCallbackPage;