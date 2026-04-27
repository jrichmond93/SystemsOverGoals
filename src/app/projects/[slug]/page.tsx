import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getAllProjects, getProjectBySlug } from "@/lib/projects";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllProjects().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  const ogImage = project.screenshot_url || undefined;

  return {
    title: { absolute: project.seo_title },
    description: project.seo_description,
    openGraph: {
      title: project.seo_title,
      description: project.seo_description,
      url: `https://systemsovergoals.com/projects/${project.slug}`,
      images: ogImage ? [{ url: ogImage, alt: project.alt_text }] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: project.seo_title,
      description: project.seo_description,
      images: ogImage ? [ogImage] : [],
    },
    alternates: {
      canonical: `https://systemsovergoals.com/projects/${project.slug}`,
    },
    keywords: project.tags,
  };
}

/** Parse the case_study string into labeled sections. */
function parseCaseStudy(raw: string) {
  const markers = ["Problem:", "Solution:", "Process:", "Outcome:", "Client quote:"];
  const sections: { label: string; content: string }[] = [];

  let remaining = raw.trim();
  for (let i = 0; i < markers.length; i++) {
    const marker = markers[i];
    const start = remaining.indexOf(marker);
    if (start === -1) continue;

    // Find next marker boundary
    let end = remaining.length;
    for (let j = i + 1; j < markers.length; j++) {
      const nextIdx = remaining.indexOf(markers[j], start + marker.length);
      if (nextIdx !== -1 && nextIdx < end) end = nextIdx;
    }

    const content = remaining.slice(start + marker.length, end).trim();
    if (content) sections.push({ label: marker.replace(":", ""), content });
  }

  return sections;
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const caseStudySections = parseCaseStudy(project.case_study);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: project.title,
    description: project.description,
    url: project.live_url,
    applicationCategory: project.industry,
    keywords: project.tags.join(", "),
    image: project.screenshot_url,
  };

  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumb */}
      <div className="bg-slate-50 border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-3 text-sm text-slate-500 flex items-center gap-2">
          <Link href="/" className="hover:text-blue-700 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/projects" className="hover:text-blue-700 transition-colors">Projects</Link>
          <span>/</span>
          <span className="text-slate-800 font-medium truncate">{project.title}</span>
        </div>
      </div>

      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <header className="mb-10">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
              {project.industry}
            </span>
            {project.featured && (
              <span className="bg-amber-100 text-amber-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                Featured
              </span>
            )}
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-3 leading-tight">
            {project.title}
          </h1>
          <p className="text-lg sm:text-xl text-slate-500 italic mb-6">{project.tagline}</p>

          <Link
            href={project.live_url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-bold px-6 py-3 rounded-xl transition-colors shadow-sm"
          >
            Visit {project.title}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>
          </Link>
        </header>

        {/* Screenshot */}
        <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden bg-slate-100 mb-12 shadow-md">
          <Image
            src={project.screenshot_url}
            alt={project.alt_text}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 896px"
            className="object-cover"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main column */}
          <div className="lg:col-span-2 space-y-10">
            {/* Overview */}
            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3 pb-2 border-b border-slate-100">
                Overview
              </h2>
              <p className="text-slate-600 leading-relaxed text-base">{project.description}</p>
            </section>

            {/* Features */}
            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3 pb-2 border-b border-slate-100">
                Key Features
              </h2>
              <ul className="space-y-2">
                {project.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-600">
                    <span className="mt-0.5 flex-shrink-0 w-5 h-5 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-xs font-bold">
                      ✓
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
            </section>

            {/* Case Study */}
            {caseStudySections.length > 0 && (
              <section>
                <h2 className="text-xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100">
                  Case Study
                </h2>
                <div className="space-y-6">
                  {caseStudySections.map(({ label, content }) => (
                    <div key={label}>
                      <h3 className="font-bold text-slate-800 text-base mb-1">{label}</h3>
                      {label === "Client quote" ? (
                        <blockquote className="border-l-4 border-blue-500 pl-4 text-slate-600 italic text-sm leading-relaxed">
                          {content}
                        </blockquote>
                      ) : (
                        <p className="text-slate-600 text-sm leading-relaxed">{content}</p>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <aside className="space-y-8">
            {/* Tech Stack */}
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100">
              <h3 className="font-bold text-slate-900 text-sm uppercase tracking-wider mb-3">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tech_stack.map((tech) => (
                  <span
                    key={tech}
                    className="bg-white border border-slate-200 text-slate-700 text-xs font-medium px-2.5 py-1 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Tags */}
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100">
              <h3 className="font-bold text-slate-900 text-sm uppercase tracking-wider mb-3">
                Topics
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-blue-50 text-blue-700 text-xs font-medium px-2.5 py-1 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-br from-blue-700 to-blue-600 rounded-xl p-5 text-white">
              <p className="font-bold text-base mb-2">Visit {project.title}</p>
              <p className="text-blue-100 text-sm mb-4 leading-relaxed">{project.tagline}</p>
              <Link
                href={project.live_url}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center bg-white text-blue-700 font-bold text-sm px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors"
              >
                Open Live Site ↗
              </Link>
            </div>
          </aside>
        </div>

        {/* Back link */}
        <div className="mt-16 pt-8 border-t border-slate-100">
          <Link href="/projects" className="text-sm font-semibold text-blue-700 hover:text-blue-900 transition-colors">
            ← Back to All Projects
          </Link>
        </div>
      </article>
    </>
  );
}
