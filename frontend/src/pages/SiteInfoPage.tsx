import { ArrowLeft, ExternalLink, Mail } from "lucide-react";
import { Link } from "react-router-dom";

type SiteInfoPageProps = {
  page: "about" | "contact" | "privacy" | "terms";
};

const pageContent = {
  about: {
    eyebrow: "About Arbiter",
    title: "API protection for teams that build.",
    description:
      "Arbiter is an independent developer project maintained by Guna Sai.",
  },
  contact: {
    eyebrow: "Contact",
    title: "Let’s talk about your API.",
    description:
      "For support, product questions, or partnership requests, contact the Arbiter team through one of the channels below.",
  },
  privacy: {
    eyebrow: "Privacy policy",
    title: "Your data should stay understandable.",
    description:
      "This page explains how Arbiter handles information when you use the website and service.",
  },
  terms: {
    eyebrow: "Terms of service",
    title: "The rules for using Arbiter.",
    description:
      "By using Arbiter, you agree to use the service responsibly and in accordance with applicable law.",
  },
} as const;

export default function SiteInfoPage({ page }: SiteInfoPageProps) {
  const content = pageContent[page];

  return (
    <div className="min-h-screen bg-[#030303] font-sans text-zinc-100">
      <header className="border-b border-zinc-800/50">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
          <Link
            to="/"
            className="bg-linear-to-br from-zinc-100 to-zinc-500 bg-clip-text text-xl font-bold tracking-tight text-transparent"
          >
            Arbiter
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 py-20">
        <Link
          to="/"
          className="mb-8 inline-flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-zinc-100"
        >
          <ArrowLeft size={16} />
          Back to home
        </Link>
        <p className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-blue-400">
          {content.eyebrow}
        </p>
        <h1 className="mb-6 text-4xl font-semibold tracking-tight text-zinc-100 md:text-6xl">
          {content.title}
        </h1>
        <p className="max-w-2xl text-lg leading-relaxed text-zinc-400">
          {content.description}
        </p>

        {page === "about" && (
          <section className="mt-12 space-y-6 border-t border-zinc-800 pt-10 text-zinc-400">
            <h2 className="text-2xl font-semibold text-zinc-100">What Arbiter does</h2>
            <p>
              Arbiter helps developers define rate limits and security rules in
              code. It evaluates requests and returns structured decisions that
              your backend can enforce.
            </p>
            <p>
              Arbiter runs inside your application as a decision layer. It does
              not act as a proxy or gateway in front of your API.
            </p>
            <p>
              The project is maintained by{" "}
              <a
                href="https://github.com/Guna1301"
                target="_blank"
                rel="noreferrer"
                className="text-zinc-100 underline underline-offset-4 hover:text-blue-400"
              >
                Guna Sai
              </a>
              .
            </p>
          </section>
        )}

        {page === "contact" && (
          <section className="mt-12 grid gap-4 border-t border-zinc-800 pt-10 sm:grid-cols-2">
            <a
              href="https://github.com/Guna1301/arbiter/issues"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6 transition-colors hover:border-zinc-600"
            >
              <ExternalLink className="mb-5 text-zinc-400" size={20} />
              <h2 className="mb-2 font-semibold text-zinc-100">GitHub issues</h2>
              <p className="text-sm leading-relaxed text-zinc-500">
                Report bugs and request help with the SDK.
              </p>
            </a>
            <a
              href="https://x.com/gsxvoid"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6 transition-colors hover:border-zinc-600"
            >
              <Mail className="mb-5 text-zinc-400" size={20} />
              <h2 className="mb-2 font-semibold text-zinc-100">Contact the maintainer</h2>
              <p className="text-sm leading-relaxed text-zinc-500">
                Reach Guna Sai on X for general questions and partnerships.
              </p>
            </a>
          </section>
        )}

        {page === "privacy" && (
          <section className="mt-12 space-y-6 border-t border-zinc-800 pt-10 text-zinc-400">
            <h2 className="text-2xl font-semibold text-zinc-100">Information we handle</h2>
            <p>
              Arbiter may process account details needed to authenticate you,
              project configuration you create, and request data required to
              provide the service.
            </p>
            <p>
              We do not sell personal information. Service providers may
              process information only as needed to operate authentication,
              hosting, analytics, and the Arbiter service.
            </p>
            <p>
              Contact the maintainer if you have a privacy question or want to
              request information about your account.
            </p>
          </section>
        )}

        {page === "terms" && (
          <section className="mt-12 space-y-6 border-t border-zinc-800 pt-10 text-zinc-400">
            <h2 className="text-2xl font-semibold text-zinc-100">Using the service</h2>
            <p>
              You are responsible for the applications, API keys, rules, and
              traffic that you configure with Arbiter.
            </p>
            <p>
              Do not use Arbiter to break the law, attack systems, abuse other
              users, or bypass security and rate limits.
            </p>
            <p>
              The service is provided as-is. We may update, suspend, or
              discontinue features as the project evolves.
            </p>
          </section>
        )}
      </main>
    </div>
  );
}
