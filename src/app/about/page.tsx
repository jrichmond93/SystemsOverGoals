import type { Metadata } from "next";
import Link from "next/link";
import { getFeaturedProjects } from "@/lib/projects";
import ProjectCard from "@/components/ProjectCard";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about the systems-over-goals philosophy and the AI-powered tools we build to help people create lasting habits and routines that compound over time.",
  openGraph: {
    title: "About | Systems Over Goals",
    description:
      "The story behind Systems Over Goals — building AI tools rooted in the belief that systems create more lasting success than one-time goals.",
    url: "https://systemsovergoals.com/about",
    images: [
      {
        url: "/goalstosystems.jpg",
        width: 1200,
        height: 630,
        alt: "About Systems Over Goals",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/goalstosystems.jpg"],
  },
  alternates: {
    canonical: "https://systemsovergoals.com/about",
  },
};

export default function AboutPage() {
  const featured = getFeaturedProjects().slice(0, 3);

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Hero */}
        <div className="text-center mb-14">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-4">About</h1>
          <p className="text-lg text-slate-500 max-w-xl mx-auto">
            The belief that small, repeated actions beat big, one-time efforts — every time.
          </p>
        </div>

        {/* Main content */}
        <div className="prose prose-slate prose-lg max-w-none">
          <h2>Why Systems Over Goals?</h2>
          <p>
            Most personal development advice teaches you to set <em>bigger goals</em>. But goals are
            endpoints — and once you reach them (or miss them), you&apos;re back to square one. The
            research, the philosophy, and the experience all point in the same direction: the people
            who achieve lasting results don&apos;t rely on motivation or willpower. They build
            systems.
          </p>

          <p>
            <strong>Systems Over Goals</strong> is a collection of AI-powered tools built around
            that idea. Every product in the portfolio is designed to help people stop chasing
            outcomes and start engineering the daily processes that make good outcomes inevitable.
          </p>

          <h2>The Philosophy</h2>
          <p>
            James Clear put it well in <em>Atomic Habits</em>: &quot;You do not rise to the level of
            your goals. You fall to the level of your systems.&quot; That sentence is the north star
            for everything we build.
          </p>
          <p>
            Rather than asking &quot;How do I achieve this goal?&quot; we ask:{" "}
            <strong>&quot;What system would make success inevitable?&quot;</strong> That shift — from
            outcome thinking to process thinking — is transformative.
          </p>

          <h2>What We Build</h2>
          <p>
            Each product in this portfolio applies systems thinking to a specific domain: personal
            habits, financial planning, language learning, mental wellness, market research, and more.
            The common thread is AI-powered personalization — because the best system for you is the
            one designed around your life, not a generic template.
          </p>

          <h2>Our Flagship: Goals To Systems</h2>
          <p>
            <Link href="https://goalstosystems.com" target="_blank" rel="noopener noreferrer">
              Goals To Systems
            </Link>{" "}
            is the product that started it all. You enter a goal, answer a few clarifying questions,
            and receive a concrete, AI-generated system — specific habits, triggers, and routines that
            give your ambition a daily home.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-10 bg-gradient-to-r from-blue-700 to-blue-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-2">Start with Goals To Systems</h3>
          <p className="text-blue-100 mb-6 text-base max-w-lg mx-auto">
            Free to start. No fluff — just a practical AI-generated system tailored to your specific
            goal and lifestyle.
          </p>
          <Link
            href="https://goalstosystems.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-blue-700 font-bold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors"
          >
            Visit GoalsToSystems.com ↗
          </Link>
        </div>

        {/* Featured projects */}
        {featured.length > 0 && (
          <section className="mt-16">
            <h2 className="text-2xl font-extrabold text-slate-900 mb-6">Featured Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {featured.map((p) => (
                <ProjectCard key={p.id} project={p} />
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link
                href="/projects"
                className="inline-block bg-slate-900 hover:bg-slate-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors text-sm"
              >
                View All Projects →
              </Link>
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
