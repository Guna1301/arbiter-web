import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function NotFoundPage() {
  const { pathname } = useLocation();

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#030303] font-sans text-zinc-100 selection:bg-zinc-800">


      <main className="relative z-10 flex w-full flex-col items-center justify-center px-6 py-20">
        <div className="mb-8 flex items-center gap-2 rounded-full border border-zinc-800/80 bg-zinc-900/50 px-3 py-1.5 backdrop-blur-md">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-red-500" />
          <span className="font-mono text-xs text-zinc-400">
            404 error
          </span>
        </div>

        <h1 className="mb-4 text-center text-5xl font-bold tracking-tight text-white md:text-7xl">
          Route not found.
        </h1>

        <p className="mb-12 max-w-xl text-center text-lg text-zinc-400">
          The page you are trying to reach doesn't exist or has been moved.
        </p>

        <div className="w-full max-w-3xl overflow-x-auto pb-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="mx-auto flex min-w-[640px] items-center justify-between rounded-2xl border border-zinc-800/60 bg-[#0a0a0c]/80 p-8 shadow-2xl backdrop-blur-sm md:w-full md:min-w-0 md:p-10">
            <div className="mr-4 flex flex-col font-mono text-xs uppercase tracking-widest text-zinc-500">
              <span>Client</span>
              <span>Request</span>
            </div>

            <div className="max-w-[80px] flex-grow border-b border-dotted border-zinc-700" />

            <div className="z-10 ml-4 whitespace-nowrap rounded-md border border-zinc-700 bg-zinc-900 px-4 py-2 font-mono text-sm text-zinc-300 shadow-lg">
              [ Arbiter Router ]
            </div>

            <div className="relative h-[140px] w-16 shrink-0">
              <svg
                className="absolute inset-0 h-full w-full"
                viewBox="0 0 64 140"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M 0 70 L 12 70 Q 24 70 24 58 L 24 24 Q 24 12 36 12 L 64 12"
                  stroke="#3f3f46"
                  strokeWidth="1.5"
                />
                <path
                  d="M 0 70 L 64 70"
                  stroke="#3f3f46"
                  strokeWidth="1.5"
                />
                <path
                  d="M 0 70 L 12 70 Q 24 70 24 82 L 24 116 Q 24 128 36 128 L 64 128"
                  stroke="#ef4444"
                  strokeWidth="1.5"
                />
              </svg>
            </div>

            <div className="flex h-[140px] shrink-0 flex-col justify-between py-[2px] font-mono text-sm">
              <div className="flex items-center gap-4">
                <span className="text-zinc-300">/dashboard</span>
                <span className="rounded border border-green-900/40 bg-green-950/30 px-2 py-0.5 text-xs text-green-500">
                  200 OK
                </span>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-zinc-300">/api/rules</span>
                <span className="rounded border border-green-900/40 bg-green-950/30 px-2 py-0.5 text-xs text-green-500">
                  200 OK
                </span>
              </div>

              <div className="flex items-center gap-4">
                <span className="max-w-[150px] truncate text-red-500 sm:max-w-[200px]">
                  {pathname}
                </span>
                <span className="whitespace-nowrap rounded border border-red-900/40 bg-red-950/30 px-2 py-0.5 text-xs text-red-500">
                  [X 404]
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            to="/"
            className="flex w-full items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 font-medium text-black transition-colors hover:bg-zinc-200 sm:w-auto"
          >
            Back to Home
            <ArrowRight size={18} aria-hidden="true" />
          </Link>

          <button
            type="button"
            onClick={() => window.history.back()}
            className="flex w-full items-center justify-center gap-2 rounded-full border border-zinc-800 bg-transparent px-7 py-3.5 font-medium text-zinc-300 transition-colors hover:bg-zinc-900 sm:w-auto"
          >
            <ArrowLeft size={18} aria-hidden="true" />
            Go back
          </button>
        </div>
      </main>
    </div>
  );
}
