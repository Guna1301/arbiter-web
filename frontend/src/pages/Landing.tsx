import React from "react";

export default function LandingPage() {
  return (
    <div className="bg-black text-white min-h-screen scroll-smooth">

      {/* ================= NAVBAR ================= */}
      <nav className="fixed top-0 w-full backdrop-blur-md bg-black/60 border-b border-white/10 z-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex justify-between items-center">
          <h1 className="font-semibold text-lg tracking-tight">
            Arbiter
          </h1>

          <div className="hidden md:flex gap-8 text-sm text-gray-300 items-center">
            <a href="#features" className="hover:text-white transition">
              Features
            </a>
            <a href="#code" className="hover:text-white transition">
              Usage
            </a>
            <a
              href="https://www.npmjs.com/package/arbiter-sdk"
              target="_blank"
              className="hover:text-white transition"
            >
              NPM
            </a>
            <a
              href="https://github.com"
              target="_blank"
              className="bg-indigo-600 hover:bg-indigo-500 px-4 py-2 rounded-md text-white transition"
            >
              GitHub
            </a>
          </div>
        </div>
      </nav>

      {/* ================= HERO ================= */}
      <section className="relative pt-40 pb-32 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-indigo-600/10 via-purple-600/10 to-transparent blur-3xl" />

        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
            Distributed API Traffic Control <br />
            <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
              Built for Scale
            </span>
          </h1>

          <p className="mt-8 text-lg text-gray-400 max-w-2xl mx-auto">
            High-performance rate limiting using Token Bucket and Leaky Bucket.
            Redis-backed. Multi-instance ready. Production-grade.
          </p>

          <div className="mt-12 flex justify-center gap-6 flex-wrap">
            <a
              href="https://www.npmjs.com/package/arbiter-sdk"
              target="_blank"
              className="bg-indigo-600 hover:bg-indigo-500 px-8 py-3 rounded-lg font-medium transition"
            >
              npm install arbiter-sdk
            </a>

            <a
              href="#code"
              className="border border-white/20 hover:border-white/40 px-8 py-3 rounded-lg transition"
            >
              View Example
            </a>
          </div>
        </div>
      </section>

      {/* ================= PROBLEM SECTION ================= */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold">
            APIs Break Under Load
          </h2>

          <p className="mt-8 text-gray-400 text-lg">
            Traffic spikes, abuse, and bot activity can overwhelm services.
            Without distributed coordination, rate limiting fails at scale.
          </p>

          <p className="mt-6 text-gray-400">
            Arbiter ensures fair traffic control across microservices,
            containers, and cloud environments.
          </p>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section id="features" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-center">
            Core Capabilities
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <Feature
              title="Distributed Coordination"
              desc="Redis-backed synchronization across multiple nodes ensures consistency."
            />
            <Feature
              title="Token & Leaky Bucket"
              desc="Flexible algorithms for burst handling and steady traffic regulation."
            />
            <Feature
              title="High Performance"
              desc="Optimized for low latency and high throughput API protection."
            />
            <Feature
              title="Cloud Ready"
              desc="Designed for containerized and multi-cloud deployments."
            />
            <Feature
              title="Customizable Limits"
              desc="Configure per-user, per-IP, or per-route rate limits."
            />
            <Feature
              title="Production Grade"
              desc="Built with reliability and scalability as first-class concerns."
            />
          </div>
        </div>
      </section>

      {/* ================= CODE SECTION ================= */}
      <section id="code" className="py-24 px-6 bg-zinc-950">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-center">
            Simple Integration
          </h2>

          <div className="mt-16 bg-black border border-white/10 rounded-2xl p-8 overflow-x-auto">
            <pre className="text-sm text-green-400 leading-relaxed">
{`import { Arbiter } from "arbiter-sdk";

const limiter = new Arbiter({
  strategy: "tokenBucket",
  capacity: 20,
  refillRate: 5,
  redis: {
    host: "localhost",
    port: 6379
  }
});

await limiter.consume("user-id");`}
            </pre>
          </div>
        </div>
      </section>

      {/* ================= ARCHITECTURE ================= */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold">
            Designed for Distributed Systems
          </h2>

          <p className="mt-8 text-gray-400 text-lg">
            Built for microservices, Kubernetes clusters, and scalable cloud
            architectures. Arbiter coordinates rate limiting seamlessly across
            multiple service instances.
          </p>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="py-32 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold">
            Protect Your APIs Today
          </h2>

          <p className="mt-6 text-gray-400">
            Start enforcing intelligent rate limiting in minutes.
          </p>

          <a
            href="https://www.npmjs.com/package/arbiter-sdk"
            target="_blank"
            className="mt-10 inline-block bg-indigo-600 hover:bg-indigo-500 px-10 py-4 rounded-xl text-lg transition"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="border-t border-white/10 py-10 px-6 text-center text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} Arbiter SDK. Built for modern APIs.</p>
      </footer>

    </div>
  );
}

/* ================= FEATURE COMPONENT ================= */

function Feature({
  title,
  desc,
}: {
  title: string;
  desc: string;
}) {
  return (
    <div className="p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md hover:border-indigo-500/40 transition duration-300">
      <h3 className="text-xl font-medium">{title}</h3>
      <p className="mt-4 text-gray-400">{desc}</p>
    </div>
  );
}