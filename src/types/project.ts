export interface Project {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  short_description: string;
  screenshot_url: string;
  alt_text: string;
  live_url: string;
  industry: string;
  tags: string[];
  tech_stack: string[];
  features: string[];
  case_study: string;
  sort_order: number;
  published: boolean;
  featured: boolean;
  seo_title: string;
  seo_description: string;
  og_image_url: string;
  created_at: string;
  updated_at: string;
}
