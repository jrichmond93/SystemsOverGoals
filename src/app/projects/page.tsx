import type { Metadata } from "next";
import { getAllProjects } from "@/lib/projects";
import ProjectCard from "@/components/ProjectCard";

export const metadata: Metadata = {
  title: "AI-Powered Projects & Tools",
  description:
    "Browse 20 AI-powered tools and platforms built around the systems-over-goals philosophy — from personal development and fintech to EdTech and wellness.",
  keywords: [
    "AI tools",
    "AI apps",
    "systems thinking tools",
    "productivity AI",
    "AI portfolio",
    "EdTech AI",
    "fintech AI",
    "wellness AI",
  ],
  openGraph: {
    title: "AI-Powered Projects & Tools | Systems Over Goals",
    description: "Browse 20 AI-powered tools built for lasting results through systems thinking.",
    url: "https://systemsovergoals.com/projects",
    images: [
      {
        url: "/goalstosystems.jpg",
        width: 1200,
        height: 630,
        alt: "AI-Powered Projects – Systems Over Goals",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/goalstosystems.jpg"],
  },
  alternates: {
    canonical: "https://systemsovergoals.com/projects",
  },
};

export default function ProjectsPage() {
  const projects = getAllProjects();
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Page header */}
        <div className="text-center mb-14">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-4">Our Projects</h1>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            {projects.length} AI-powered tools and platforms, each built to help people
            achieve more through consistent systems rather than fleeting goals.
          </p>
        </div>

        {/* Featured */}
        {featured.length > 0 && (
          <section className="mb-16">
            <h2 className="text-sm font-bold uppercase tracking-widest text-blue-700 mb-6">
              Featured Projects
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {featured.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </section>
        )}

        {/* All others */}
        {rest.length > 0 && (
          <section>
            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-6">
              More Projects
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {rest.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
