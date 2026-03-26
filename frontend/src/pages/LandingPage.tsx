import { Link } from "react-router-dom";
import { 
  ChevronRight, ArrowRight, Terminal, Shield, Server, Globe, 
  Database, BookOpen
} from "lucide-react";
import InstallCommandSnippet from "../components/landing/InstallCommandSnippet";
import ConfigCodeBlock from "../components/landing/ConfigCodeBlock";
import AnalyticsMock from "../components/landing/AnalyticsMock";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#030303] text-zinc-100 font-sans selection:bg-zinc-800 overflow-x-hidden">
      
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-250 h-150 bg-blue-500/5 blur-[120px] rounded-full"></div>
      </div>

      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-800/50 bg-[#030303]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <h1 className="text-xl font-bold bg-linear-to-br from-zinc-100 to-zinc-500 bg-clip-text text-transparent tracking-tight">
              Arbiter
            </h1>
          </Link>

          <div className="flex items-center gap-6 text-sm font-medium">
            <a href="/docs" className="text-zinc-400 hover:text-zinc-100 transition-colors hidden sm:block">Documentation</a>
            <a href="https://github.com/Guna1301/arbiter" target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-zinc-100 transition-colors hidden sm:block">GitHub</a>
            
            <div className="h-4 w-px bg-zinc-800 hidden sm:block" />

            <Link to="/auth" className="bg-zinc-100 text-zinc-950 hover:bg-white px-5 py-2.5 rounded-full transition-all font-semibold shadow-[0_0_15px_rgba(255,255,255,0.1)]">
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      <main className="relative z-10 pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-400 mb-8">
            <span className="flex h-1.5 w-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]"></span>
            v1.0.0 released
          </div>
          
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight mb-6 text-zinc-100 leading-[1.1]">
            Protect your APIs from <br className="hidden md:block" />
            <span className="text-zinc-500 font-light">abuse</span> in minutes.
          </h1>
          
          <p className="text-lg md:text-xl text-zinc-400 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
            Define rate limits and security rules in code. <br className="hidden sm:block" />
            Arbiter evaluates every request and returns a clear decision. <br className="hidden sm:block" />
            Configure rules. Enforce them in your backend.
          </p>

          <div className="flex flex-col items-center justify-center gap-6">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
              <Link to="/auth" className="flex items-center gap-2 bg-zinc-100 text-zinc-950 hover:bg-white px-7 py-3.5 rounded-full font-semibold transition-all w-full sm:w-auto justify-center">
                Get API Key <ChevronRight size={18} strokeWidth={2.5} />
              </Link>
              
              <InstallCommandSnippet />
            </div>
            <p className="text-sm font-mono text-zinc-500 bg-zinc-900/50 px-4 py-2 rounded-lg border border-zinc-800/50">
              Runs inside your backend. No proxy or gateway required.
            </p>
          </div>
        </div>
      </main>

      <section className="relative z-10 py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="border border-zinc-800 rounded-[2rem] p-8 md:p-16 shadow-2xl relative overflow-hidden bg-[#08080a]">
            
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:24px_24px]"></div>

            <div className="flex flex-col md:flex-row items-center md:items-start justify-between relative z-10 w-full">
              
              <div className="flex flex-col items-center w-full md:w-32">
                <div className="h-24 flex items-center justify-center">
                  <div className="w-16 h-16 bg-zinc-950 border border-zinc-800 rounded-2xl flex items-center justify-center shadow-sm">
                    <Globe className="text-zinc-500" size={28} />
                  </div>
                </div>
                <div className="mt-2 text-center">
                  <h3 className="font-semibold text-zinc-200">The Internet</h3>
                  <p className="text-[10px] text-zinc-500 mt-1 font-mono uppercase tracking-widest">Untrusted</p>
                </div>
              </div>

              <div className="hidden md:flex flex-1 h-24 items-center px-2 relative">
                <div className="w-full h-0.5 bg-zinc-800 relative flex items-center">
                  <ChevronRight className="text-zinc-700 absolute right-[-10px] z-10" size={20} />
                </div>
              </div>

              <div className="flex flex-col items-center w-full md:w-40 relative">
                <div className="h-24 flex items-center justify-center relative">
                  <div className="w-20 h-20 bg-zinc-100 border border-white rounded-3xl flex items-center justify-center relative shadow-[0_0_30px_rgba(255,255,255,0.05)] z-10">
                    <Shield className="text-zinc-950" size={32} strokeWidth={2.5} />
                  </div>
                  
                  <div className="absolute top-[80px] left-1/2 -translate-x-1/2 flex flex-col items-center">
                    <div className="h-8 w-px border-l-3 border-dashed border-zinc-800"></div>
                    <div className="flex items-center gap-1.5 bg-zinc-900 border border-zinc-800 px-3 py-1.5 rounded-md shadow-sm whitespace-nowrap">
                      <span className="text-[10px] font-mono text-zinc-400">Decision (allow / block)</span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-16 text-center">
                  <h3 className="font-bold text-zinc-100">Arbiter SDK</h3>
                </div>
              </div>

              <div className="hidden md:flex flex-1 h-24 items-center px-2 relative">
                <div className="w-full h-0.5 bg-green-900/30 relative flex items-center ">
                  <ChevronRight className="text-green-500 absolute right-[-10px] z-10" size={20} />
                </div>
              </div>

              <div className="flex flex-col items-center w-full md:w-32">
                <div className="h-24 flex items-center justify-center">
                  <div className="w-16 h-16 bg-zinc-950 border border-green-500/20 rounded-2xl flex items-center justify-center shadow-[0_0_20px_rgba(34,197,94,0.05)] relative z-10">
                    <Server className="text-green-500" size={28} />
                  </div>
                </div>
                <div className="mt-2 text-center">
                  <h3 className="font-semibold text-zinc-200">Your API</h3>
                  <p className="text-[10px] text-green-500 mt-1 font-mono uppercase tracking-widest">Protected</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 py-24 bg-[#030303] border-t border-zinc-900 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
          <div className="sticky top-32">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6 text-zinc-100 leading-snug">
              Granular control,<br/>
              <span className="text-zinc-500 font-light">defined your way.</span>
            </h2>
            <div className="space-y-4 mb-8">
              <p className="text-zinc-400 text-lg leading-relaxed font-light">
                Define rate limits, block conditions, and access rules in code or in the dashboard.
              </p>
              <p className="text-zinc-400 text-lg leading-relaxed font-light">
                Arbiter evaluates each request and returns a structured result you can act on.
              </p>
            </div>
            
            <div className="mb-8 p-5 bg-zinc-900/40 border border-zinc-800/80 rounded-xl inline-block space-y-3">
              <p className="text-sm text-zinc-300 font-medium">
                Arbiter does not sit in front of your API.<br/>
                <span className="text-zinc-500 font-normal">It runs inside your application as a decision layer.</span>
              </p>
              <p className="text-sm text-zinc-300 font-medium border-t border-zinc-800/80 pt-3">
                You decide how to handle the response — <br/>
                <span className="text-zinc-500 font-normal">Arbiter does not enforce it automatically.</span>
              </p>
            </div>

            <br />

            <Link to="/docs" className="inline-flex items-center text-zinc-300 hover:text-white font-medium transition-colors border-b border-zinc-800 hover:border-zinc-300 pb-1">
              View docs <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
          <div className="border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl">
            <ConfigCodeBlock />
          </div>
        </div>
      </section>

      <section className="relative z-10 py-32 bg-[#050505] border-t border-zinc-900 px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto space-y-32">
          
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-100 mb-4">Predictable, type-safe responses.</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto font-light text-lg">
              Every request returns a structured JSON response,<br className="hidden md:block"/>
              so you can handle limits and blocks consistently in your request flow.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <div className="bg-[#09090b] border border-zinc-800 rounded-xl overflow-hidden shadow-2xl font-mono text-[13px] leading-relaxed">
                <div className="px-4 py-2 border-b border-zinc-800 bg-zinc-900/50 text-zinc-500 flex items-center gap-2">
                  <Terminal size={14} /> sdk_response.log
                </div>
                <div className="p-4 space-y-2">
                  <div className="text-zinc-500">Req 1: <span className="text-green-400">{"{ allowed: true, remaining: 3, resetIn: 60 }"}</span></div>
                  <div className="text-zinc-500">Req 2: <span className="text-green-400">{"{ allowed: true, remaining: 2, resetIn: 60 }"}</span></div>
                  <div className="text-zinc-300 bg-zinc-900 -mx-4 px-4 py-1">Req 4: <span className="text-orange-400 font-semibold">{"{ allowed: false, remaining: 0, resetIn: 60 }"}</span></div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h3 className="text-2xl font-semibold text-zinc-100 mb-4">Smart Rate Limiting</h3>
              <p className="text-zinc-400 text-lg font-light leading-relaxed">
                Define request limits and get exact remaining counts and reset times on every request.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-1 md:order-1">
              <h3 className="text-2xl font-semibold text-zinc-100 mb-4">Security & Abuse Bans</h3>
              <p className="text-zinc-400 text-lg font-light leading-relaxed">
                Detect repeated violations and block requests based on defined thresholds. Each block includes a clear reason.
              </p>
            </div>
            <div className="order-2 md:order-2">
               <div className="bg-[#09090b] border border-zinc-800 rounded-xl overflow-hidden shadow-2xl font-mono text-[13px] leading-relaxed">
                <div className="px-4 py-2 border-b border-zinc-800 bg-zinc-900/50 text-zinc-500 flex items-center gap-2">
                  <Shield size={14} /> decision_engine.js
                </div>
                <div className="p-5 space-y-4 text-zinc-300">
                  <div className="flex flex-col">
                    <span className="text-zinc-600 text-[11px] mb-1 uppercase tracking-wider">// Exceeded failure threshold</span>
                    <span><span className="text-red-400 font-semibold">{"{ allowed: false, reason: 'abuse_detected' }"}</span></span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-zinc-600 text-[11px] mb-1 uppercase tracking-wider">// Internal admin IP (Bypass)</span>
                    <span><span className="text-green-400 font-semibold">{"{ allowed: true, reason: 'whitelisted' }"}</span></span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <div className="bg-[#09090b] border border-zinc-800 rounded-xl overflow-hidden shadow-2xl font-mono text-[13px]">
                <div className="px-4 py-2 border-b border-zinc-800 bg-zinc-900/50 text-zinc-500 flex items-center gap-2">
                  <Database size={14} /> redis-sync.log
                </div>
                <div className="p-4 space-y-2 text-zinc-400">
                  <div className="text-green-400">✓ Distributed rate limits synchronized</div>
                  <div>[10:42:01] <span className="text-blue-400">Pod_1</span> connected to Arbiter</div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h3 className="text-2xl font-semibold text-zinc-100 mb-4">Cross-Service Sync</h3>
              <p className="text-zinc-400 text-lg font-light leading-relaxed">
                Share rate limits across services using Redis, so limits remain consistent across multiple services.
              </p>
            </div>
          </div>

        </div>
      </section>

      <section className="relative z-10 py-24 bg-[#030303] border-t border-zinc-900 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <AnalyticsMock />
          <div className="order-1 lg:order-2 sticky top-32">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6 text-zinc-100">
              Understand how your API is being used
            </h2>
            <p className="text-zinc-300 text-lg leading-relaxed mb-4 font-medium">
              See how traffic interacts with your rules in real time.
            </p>
            <p className="text-zinc-400 text-lg leading-relaxed mb-6 font-light">
              See how many requests are allowed or blocked, which rules are triggered, and which IPs are hitting limits.
            </p>
            <p className="text-zinc-400 text-lg leading-relaxed font-light">
              Track traffic patterns and identify where limits are being applied.
            </p>
          </div>
        </div>
      </section>

      <section className="relative z-10 py-32 bg-[#050505] border-t border-zinc-900 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-zinc-100 mb-6">
            Start using Arbiter
          </h2>
          <p className="text-xl text-zinc-400 mb-10 font-light max-w-2xl mx-auto">
            Create a project, get your API key, and integrate it into your request flow.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/auth" className="flex items-center gap-2 bg-white text-zinc-950 hover:bg-zinc-200 px-8 py-4 rounded-full font-semibold transition-colors text-lg shadow-lg">
              Get Started Free <ArrowRight size={20} />
            </Link>
            <a href="/docs" className="flex items-center gap-2 bg-transparent border border-zinc-800 hover:bg-zinc-900 text-zinc-300 px-8 py-4 rounded-full font-semibold transition-colors text-lg">
              <BookOpen size={20} /> Read the Docs
            </a>
          </div>
        </div>
      </section>

      <footer className="relative z-10 border-t border-zinc-900 py-12 px-6 bg-[#030303]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Link to="/">
              <h1 className="text-xl font-bold bg-gradient-to-br from-zinc-100 to-zinc-500 bg-clip-text text-transparent tracking-tight">
                Arbiter
              </h1>
            </Link>
             <span className="text-sm text-zinc-700 font-medium ml-2">© {new Date().getFullYear()} Arbiter SDK.</span>
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