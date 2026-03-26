import { useSignIn } from "@clerk/react";
import { Button } from "../ui/button";
import { useState } from "react";
import { Loader } from "lucide-react";
import { FaGithub, FaGoogle } from "react-icons/fa";

type Strategy = "oauth_google" | "oauth_github";

function OAuthButton({ strategy, label }: { strategy: Strategy; label: string }) {
  const { signIn } = useSignIn();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (!signIn) return null;

  const getIcon = (strategy: Strategy) => {
    if (strategy === "oauth_github") {
      return <FaGithub className="size-4" />;
    }
    if (strategy === "oauth_google") {
      return <FaGoogle className="size-4" />;
    }
    return null;
  };

  const handleOAuth = async () => {
    if (loading) return;

    setLoading(true);
    setError(null);

    try {
      await signIn.sso({
        strategy,
        redirectUrl: "/auth-callback",
        redirectCallbackUrl: `${window.location.origin}/sso-callback`,
      });
    } catch (err: unknown) {
      console.error(`${label} OAuth error`, err);
      setError("Something went wrong. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="space-y-1">
      <Button
        onClick={handleOAuth}
        disabled={loading}
        variant="outline"
        className="w-full h-11 flex items-center justify-center gap-2 
                   bg-zinc-900/60 border border-zinc-700 text-zinc-200 
                   hover:bg-zinc-800 hover:border-zinc-500 
                   transition-all duration-200 cursor-pointer"
      >
        {loading ? (
          <Loader className="size-4 animate-spin" />
        ) : (
          getIcon(strategy)
        )}
        <span className="text-sm font-medium">{label}</span>
      </Button>

      {error && (
        <p className="text-red-400 text-xs text-center">{error}</p>
      )}
    </div>
  );
}

export default OAuthButton;