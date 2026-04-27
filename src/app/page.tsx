import type { Metadata } from "next";
import Link from "next/link";
import { getAllProjects } from "@/lib/projects";
import ProjectCard from "@/components/ProjectCard";

export const metadata: Metadata = {
  title: {
    absolute: "Systems Over Goals – AI-Powered Tools for Sustainable Success",
  },
  description:
    "Most goals fail because they focus on the destination, not the journey. Discover AI-powered tools designed around systems thinking — the habits, routines, and processes that make success inevitable.",
  keywords: [
    "systems over goals",
    "systems thinking",
    "AI tools",
    "habits",
    "productivity",
    "goal setting",
    "personal development",
    "AI-powered apps",
  ],
  openGraph: {
    title: "Systems Over Goals – AI-Powered Tools for Sustainable Success",
    description:
      "Discover AI tools built around systems thinking. Replace fleeting goals with consistent processes that compound over time.",
    url: "https://systemsovergoals.com",
    images: [
      {
        url: "/goalstosystems.jpg",
        width: 1200,
        height: 630,
        alt: "Systems Over Goals – AI-Powered Tools for Sustainable Success",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Systems Over Goals – AI-Powered Tools for Sustainable Success",
    description: "Discover AI tools built around systems thinking.",
    images: ["/goalstosystems.jpg"],
  },
  alternates: {
    canonical: "https://systemsovergoals.com",
  },
};

const comparisonRows = [
  { goals: "Focus on outcomes", systems: "Focus on processes" },
  { goals: "Short-term mindset", systems: "Long-term mindset" },
  { goals: "Motivation-driven", systems: "Habit-driven" },
  { goals: "One-time achievement", systems: "Continuous improvement" },
];

const articleSections = [
  {
    heading: "1. Goals Are Momentary — Systems Are Continuous",
    body: "Reaching a goal is a single event. Systems are what you live with every day. If you only focus on the finish line, you risk falling back once you get there. Systems keep you moving forward long after the goal is achieved.",
  },
  {
    heading: "2. Goals Create Pressure — Systems Create Progress",
    body: "Goals can feel overwhelming: 'I need to succeed,' 'I can't fail.' Systems shift the focus to small, repeatable actions, reducing stress and increasing consistency.",
  },
  {
    heading: "3. Goals Depend on Motivation — Systems Build Discipline",
    body: "Motivation comes and goes. Systems don't rely on how you feel — they rely on what you do. When your system is in place, progress happens even on low-energy days.",
  },
  {
    heading: "4. Systems Compound Over Time",
    body: "Small actions, repeated daily, lead to massive results. 1% improvement per day. Tiny habits stacking over weeks and months. Momentum that builds naturally. This is how real, sustainable success happens.",
  },
];

const articleExamples = [
  { label: "Goal", text: "\"Run a marathon this year\"" },
  { label: "System", text: "Running 3 times a week, consistently, rain or shine" },
  { label: "Goal", text: "\"Earn $100,000 in revenue\"" },
  { label: "System", text: "Writing 500 words every morning and shipping one project per month" },
  { label: "Goal", text: "\"Read 25 books\"" },
  { label: "System", text: "Reviewing finances every Friday and reading 20 pages before bed" },
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Systems Over Goals",
    url: "https://systemsovergoals.com",
    description:
      "A collection of AI-powered tools built on the belief that consistent systems create more lasting results than one-time goals.",
  },
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Systems Over Goals",
    url: "https://systemsovergoals.com",
    logo: "https://systemsovergoals.com/goalstosystems.jpg",
    sameAs: ["https://goalstosystems.com"],
  },
];

export default function HomePage() {
  const projects = getAllProjects();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* ─── Hero ─── */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6">
            Systems Thinking × AI
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
            Systems Over Goals
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed">
            Most goals fail because they focus on the destination, not the journey. Discover
            how building consistent systems — not chasing outcomes — creates lasting success.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="https://goalstosystems.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-xl transition-colors text-base shadow-lg"
            >
              Try Goals To Systems AI
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
            </Link>
            <Link
              href="#projects"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold px-6 py-3 rounded-xl transition-colors text-base"
            >
              Explore Projects
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Article ─── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          {/* Article JSON-LD is added via generateMetadata; content below for SEO */}
          <div className="prose prose-slate prose-lg max-w-none">
            <p className="lead text-xl text-slate-600 font-normal">
              Most of us are taught to set goals. <em>Lose 20 pounds. Start a business. Learn a new
              skill.</em> Goals feel motivating. They give us direction. But there&apos;s a problem:{" "}
              <strong>goals are temporary, while the effort required to achieve them is ongoing.</strong>
            </p>
            <p>
              That&apos;s where the idea of <strong>systems over goals</strong> comes in — a powerful
              shift in thinking that can transform how you approach success.
            </p>

            <h2>What Are Goals?</h2>
            <p>
              A <strong>goal</strong> is a specific outcome you want to achieve. Clear and measurable,
              often time-bound, focused on a result. Goals answer the question:{" "}
              <em>What do I want?</em>
            </p>

            <h2>What Are Systems?</h2>
            <p>
              A <strong>system</strong> is the set of habits, processes, and routines you follow
              consistently. Ongoing and repeatable, focused on behavior — not just results — built
              into your daily life. Systems answer the question: <em>What do I do every day?</em>
            </p>

            <h2>Why Systems Beat Goals</h2>
          </div>

          {/* Sections */}
          <div className="mt-8 space-y-8">
            {articleSections.map((section) => (
              <div key={section.heading} className="bg-slate-50 rounded-xl p-6 border border-slate-100">
                <h3 className="font-bold text-slate-900 text-lg mb-2">{section.heading}</h3>
                <p className="text-slate-600 text-base leading-relaxed">{section.body}</p>
              </div>
            ))}
          </div>

          {/* Comparison table */}
          <div className="mt-12 overflow-hidden rounded-xl border border-slate-200">
            <div className="bg-slate-800 text-white px-6 py-3 text-center text-sm font-bold uppercase tracking-wider">
              Goals vs. Systems
            </div>
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="px-6 py-3 text-left font-semibold text-slate-700 w-1/2">Goals</th>
                  <th className="px-6 py-3 text-left font-semibold text-blue-700 w-1/2">Systems</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="px-6 py-3 text-slate-600">{row.goals}</td>
                    <td className="px-6 py-3 text-slate-800 font-medium">{row.systems}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Real-world example */}
          <div className="mt-12 prose prose-slate prose-lg max-w-none">
            <h2>A Real-World Example</h2>
            <p>
              <strong>Goal:</strong> &quot;Get in shape&quot;<br />
              <strong>System:</strong> Exercise 30 minutes, 4 days a week · Eat whole foods most of
              the time · Sleep 7–8 hours nightly.
            </p>
            <p>
              The goal might inspire you. But <strong>the system is what actually delivers results.</strong>
            </p>

            <h2>The Key Mindset Shift</h2>
            <p>Instead of asking:</p>
            <blockquote>
              <p className="text-slate-500 line-through">&quot;How do I achieve this goal?&quot;</p>
            </blockquote>
            <p>Start asking:</p>
            <blockquote>
              <p>&quot;What system would make success inevitable?&quot;</p>
            </blockquote>
            <p>
              This shift removes pressure and replaces it with clarity and control.
            </p>
          </div>

          {/* CTA banner */}
          <div className="mt-12 bg-gradient-to-r from-blue-700 to-blue-600 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-2">Ready to Build Your System?</h3>
            <p className="text-blue-100 mb-6 text-base">
              Goals To Systems AI helps you break down any ambition into practical daily habits,
              routines, and action plans — tailored to your lifestyle.
            </p>
            <Link
              href="https://goalstosystems.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-blue-700 font-bold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors"
            >
              Try Goals To Systems AI — Free ↗
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Projects grid ─── */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-3">
              Explore Our Projects
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              A growing collection of AI-powered tools — each one built with systems thinking
              at its core.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
