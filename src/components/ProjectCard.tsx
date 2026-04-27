import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/types/project";

interface ProjectCardProps {
  project: Project;
}

const industryColors: Record<string, string> = {
  "AI Applications": "bg-violet-100 text-violet-800",
  "AI SaaS / Personal Development": "bg-blue-100 text-blue-800",
  HealthTech: "bg-green-100 text-green-800",
  EdTech: "bg-amber-100 text-amber-800",
  "Media & Entertainment": "bg-pink-100 text-pink-800",
  CivicTech: "bg-teal-100 text-teal-800",
  Fintech: "bg-emerald-100 text-emerald-800",
  Entertainment: "bg-orange-100 text-orange-800",
  FoodTech: "bg-red-100 text-red-800",
  "Productivity & Tools": "bg-indigo-100 text-indigo-800",
  "EdTech / Space & Science": "bg-cyan-100 text-cyan-800",
};

function getIndustryColor(industry: string): string {
  return industryColors[industry] ?? "bg-slate-100 text-slate-700";
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col">
      {/* Screenshot */}
      <Link href={`/projects/${project.slug}`} className="block relative aspect-[16/9] overflow-hidden bg-slate-100">
        <Image
          src={project.screenshot_url}
          alt={project.alt_text}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover group-hover:scale-[1.02] transition-transform duration-300"
        />
        {project.featured && (
          <span className="absolute top-3 right-3 bg-blue-700 text-white text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full">
            Featured
          </span>
        )}
      </Link>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        <div className="flex items-start justify-between gap-2 mb-2">
          <span className={`text-xs font-semibold px-2 py-0.5 rounded-full whitespace-nowrap ${getIndustryColor(project.industry)}`}>
            {project.industry}
          </span>
        </div>

        <h3 className="font-bold text-slate-900 text-lg leading-snug mb-1">
          <Link href={`/projects/${project.slug}`} className="hover:text-blue-700 transition-colors">
            {project.title}
          </Link>
        </h3>

        <p className="text-sm text-slate-500 italic mb-3">{project.tagline}</p>

        <p className="text-sm text-slate-600 leading-relaxed line-clamp-3 flex-1">
          {project.short_description}
        </p>

        <div className="mt-4 flex items-center gap-3">
          <Link
            href={`/projects/${project.slug}`}
            className="text-sm font-semibold text-blue-700 hover:text-blue-900 transition-colors"
          >
            View Details →
          </Link>
          <Link
            href={project.live_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-slate-500 hover:text-slate-800 transition-colors"
          >
            Live Site ↗
          </Link>
        </div>
      </div>
    </article>
  );
}
