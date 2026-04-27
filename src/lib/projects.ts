import type { Project } from "@/types/project";
import projectsData from "@/data/projects.json";

const projects = projectsData as Project[];

export function getAllProjects(): Project[] {
  return projects
    .filter((p) => p.published)
    .sort((a, b) => a.sort_order - b.sort_order || a.title.localeCompare(b.title));
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug && p.published);
}

export function getFeaturedProjects(): Project[] {
  return getAllProjects().filter((p) => p.featured);
}
