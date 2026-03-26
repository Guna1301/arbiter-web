import { Link } from "react-router-dom";
import { 
  CheckCircle2,
  ChevronRight,
} from "lucide-react";
import InstallCommandSnippet from "../components/landing/InstallCommandSnippet";
import ConfigCodeBlock from "../components/landing/ConfigCodeBlock";
import AnalyticsMock from "../components/landing/AnalyticsMock";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-zinc-800">
      
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-900/80 bg-zinc-950/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <h1 className="text-xl font-bold bg-gradient-to-br from-zinc-100 to-zinc-500 bg-clip-text text-transparent tracking-tight">
              Arbiter
            </h1>
          </Link>

          <div className="flex items-center gap-6 text-sm font-medium">
            <a href="/docs" className="text-zinc-400 hover:text-zinc-100 transition-colors hidden sm:block">Documentation</a>
            <a href="https://github.com/Guna1301/arbiter" target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-zinc-100 transition-colors hidden sm:block">GitHub</a>
            
            <div className="h-4 w-px bg-zinc-800 hidden sm:block" />

            <Link to="/auth" className="bg-zinc-100 text-zinc-950 hover:bg-white px-5 py-2.5 rounded-full transition-colors font-semibold">
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-24 px-6 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-zinc-900/50 border border-zinc-800/50 text-xs font-mono text-zinc-400 mb-8">
            <span className="flex h-1.5 w-1.5 rounded-full bg-green-500"></span>
            v1.0.0 released
          </div>
          
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight mb-6 text-zinc-100 leading-[1.1]">
            Traffic protection for <br className="hidden md:block" />
            <span className="font-serif italic text-zinc-400 font-normal">modern</span> backend APIs.
          </h1>
          
          <p className="text-lg md:text-xl text-zinc-400 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
            Developer-first rate limiting, abuse prevention, and traffic analytics. 
            Configure granular rules in your code or manage them on the fly from your dashboard.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/auth" className="flex items-center gap-2 bg-zinc-100 text-zinc-950 hover:bg-white px-7 py-3.5 rounded-full font-semibold transition-colors w-full sm:w-auto justify-center">
              Start Building Free <ChevronRight size={18} strokeWidth={2.5} />
            </Link>
            
            <InstallCommandSnippet />
          </div>
        </div>
      </main>

      <section className="py-24 bg-zinc-950 border-t border-zinc-900/50 px-6 relative">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
          
          <div className="sticky top-32">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6 text-zinc-100 leading-snug">
              Granular control,<br/>
              <span className="font-serif italic text-zinc-400 font-normal">defined your way.</span>
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed mb-8 font-light">
              Arbiter doesn't just stop at rate limits. Apply global or route-specific whitelists, blacklists, and abuse thresholds. Define your security policies entirely in code, or let your operations team manage them via the dashboard.
            </p>
            <ul className="space-y-4">
              {[
                "Global & Route-specific policies",
                "Leaky Bucket & Token Bucket algorithms",
                "Automatic abuse banning based on thresholds",
                "Syncs instantly with your Dashboard"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-zinc-300 font-medium text-sm">
                  <CheckCircle2 size={16} className="text-zinc-600" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <ConfigCodeBlock />

        </div>
      </section>

      <section className="py-24 bg-zinc-950 border-t border-zinc-900/50 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          
          <AnalyticsMock />

          <div className="order-1 lg:order-2 sticky top-32">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6 text-zinc-100">
              Insights that actually<br/>
              <span className="font-serif italic text-zinc-400 font-normal">make sense.</span>
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed mb-6 font-light">
              Stop guessing why your server is struggling. Arbiter provides a crystal-clear view into your API's health. 
            </p>
            <p className="text-zinc-400 text-lg leading-relaxed font-light">
              Instantly see exactly how many requests are passing through your rules, how much malicious traffic is being dropped at the edge, and identify exactly which IPs are abusing your system.
            </p>
          </div>

        </div>
      </section>

      <footer className="border-t border-zinc-900/80 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Link to="/">
              <h1 className="text-lg font-bold bg-gradient-to-br from-zinc-100 to-zinc-500 bg-clip-text text-transparent tracking-tight">
                Arbiter
              </h1>
            </Link>
             <span className="text-sm text-zinc-600 font-medium ml-2">© {new Date().getFullYear()} Arbiter SDK.</span>
          </div>
          <div className="flex gap-6 text-sm font-medium text-zinc-500">
            <a href="/docs" className="hover:text-zinc-200 transition-colors">Documentation</a>
            <a href="https://github.com/Guna1301/arbiter" target="_blank" rel="noreferrer" className="hover:text-zinc-200 transition-colors">GitHub</a>
            <a href="https://npmjs.com/package/arbiter-sdk" target="_blank" rel="noreferrer" className="hover:text-zinc-200 transition-colors">NPM</a>
          </div>
        </div>
      </footer>

    </div>
  );
}