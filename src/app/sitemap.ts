import type { MetadataRoute } from "next";
import { getAllProjects } from "@/lib/projects";

const BASE_URL = "https://systemsovergoals.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const projects = getAllProjects();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/projects`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  const projectRoutes: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${BASE_URL}/projects/${project.slug}`,
    lastModified: new Date(project.updated_at),
    changeFrequency: "monthly" as const,
    priority: project.featured ? 0.85 : 0.7,
  }));

  return [...staticRoutes, ...projectRoutes];
}
