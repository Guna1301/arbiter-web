import { useSignIn } from "@clerk/react";
import { Button } from "./ui/button";
import { useState } from "react";
import { Loader } from "lucide-react";

type Strategy = "oauth_google" | "oauth_github";

function OAuthButton({ strategy, label }: { strategy: Strategy; label: string }) {
  const { signIn } = useSignIn();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (!signIn) return null;

  const handleOAuth = async () => {
    if (loading) return;
    setLoading(true);
    setError(null);
    try {
      await signIn.sso({
        strategy,
        redirectCallbackUrl: `${window.location.origin}/sso-callback`,
        redirectUrl: "/auth-callback",
      });
    } catch (err: any) {
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
        variant="secondary"
        className="w-full text-zinc-600 border-zinc-200 h-11"
      >
        {loading && <Loader className="size-4 animate-spin mr-2" />}
        {label}
      </Button>
      {error && (
        <p className="text-red-400 text-xs text-center">{error}</p>
      )}
    </div>
  );
}

export default OAuthButton;