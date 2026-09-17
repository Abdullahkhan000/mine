export type Project = {
  title: string;
  description: string;
  category: string;
  technologies: string[];
  image: string | null;
  imagePlaceholder: string;
  secondaryImage: string | null;
  secondaryImagePlaceholder: string;
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
  year: string;
};

export const portfolioLinks = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  email: "EMAIL_HERE",
  github: "GITHUB_URL_HERE",
  linkedin: "LINKEDIN_URL_HERE",
  cv: "CV_URL_HERE",
  cybercarnage: "CYBERCARNAGE_LIVE_URL",
  cybercarnageGithub: "CYBERCARNAGE_GITHUB_URL",
  project02: "PROJECT_02_URL_HERE",
  project02Github: "PROJECT_02_GITHUB_HERE",
  project03: "PROJECT_03_URL_HERE",
  project03Github: "PROJECT_03_GITHUB_HERE",
} as const;

export const portfolioImages = {
  profile: null as string | null,
} as const;

export const navigation = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
] as const;

export const projects: Project[] = [
  {
    title: "CyberCarnage",
    description:
      "A gaming intelligence and AI database platform unifying discovery, AI assistance, quizzes, reviews, comparisons, upcoming releases, tier lists, and developer-facing API functionality.",
    category: "Gaming intelligence • AI • API • SaaS",
    technologies: [
      "Django",
      "Django REST Framework",
      "PostgreSQL",
      "JavaScript",
      "Tailwind CSS",
      "AI Integration",
      "APIs",
    ],
    image: null,
    imagePlaceholder: "CYBERCARNAGE SCREENSHOT — INSERT HERE",
    secondaryImage: null,
    secondaryImagePlaceholder: "CYBERCARNAGE DETAIL — OPTIONAL",
    liveUrl: portfolioLinks.cybercarnage,
    githubUrl: portfolioLinks.cybercarnageGithub,
    featured: true,
    year: "CURRENT",
  },
  {
    title: "[ADD PROJECT 02 TITLE]",
    description: "[ADD PROJECT 02 DESCRIPTION]",
    category: "[ADD PROJECT 02 CATEGORY]",
    technologies: ["[ADD TECHNOLOGIES]"],
    image: null,
    imagePlaceholder: "PROJECT 02 SCREENSHOT — INSERT HERE",
    secondaryImage: null,
    secondaryImagePlaceholder: "PROJECT 02 DETAIL — OPTIONAL",
    liveUrl: portfolioLinks.project02,
    githubUrl: portfolioLinks.project02Github,
    featured: false,
    year: "[YEAR]",
  },
  {
    title: "[ADD PROJECT 03 TITLE]",
    description: "[ADD PROJECT 03 DESCRIPTION]",
    category: "[ADD PROJECT 03 CATEGORY]",
    technologies: ["[ADD TECHNOLOGIES]"],
    image: null,
    imagePlaceholder: "PROJECT 03 SCREENSHOT — INSERT HERE",
    secondaryImage: null,
    secondaryImagePlaceholder: "PROJECT 03 DETAIL — OPTIONAL",
    liveUrl: portfolioLinks.project03,
    githubUrl: portfolioLinks.project03Github,
    featured: false,
    year: "[YEAR]",
  },
];

export const technologies = [
  { name: "Python", detail: "Backend systems, automation, and data workflows", group: "Core" },
  { name: "Django", detail: "Production web applications and admin systems", group: "Core" },
  { name: "Django REST Framework", detail: "Structured, scalable API development", group: "Core" },
  { name: "REST APIs", detail: "Clear contracts and dependable integrations", group: "Core" },
  { name: "PostgreSQL", detail: "Relational data modeling and persistence", group: "Data" },
  { name: "AI API Integration", detail: "Useful intelligence inside real product flows", group: "Intelligence" },
  { name: "FFmpeg", detail: "Media transformation and processing pipelines", group: "Media" },
  { name: "Video Encoding", detail: "Reliable output across formats and destinations", group: "Media" },
  { name: "JavaScript", detail: "Responsive product interfaces and interactions", group: "Interface" },
  { name: "HTML", detail: "Semantic, accessible document structure", group: "Interface" },
  { name: "CSS", detail: "Responsive systems and interaction design", group: "Interface" },
  { name: "Tailwind CSS", detail: "Fast, consistent interface implementation", group: "Interface" },
  { name: "Git", detail: "Disciplined version control and delivery", group: "Workflow" },
  { name: "GitHub", detail: "Collaborative code and release workflows", group: "Workflow" },
] as const;

export const services = [
  { title: "Backend Development", code: "01", detail: "Robust server-side foundations built for real product requirements." },
  { title: "Django / DRF", code: "02", detail: "Clean Django applications and well-structured REST interfaces." },
  { title: "API Development", code: "03", detail: "Purposeful APIs with dependable contracts, security, and documentation." },
  { title: "AI Integration", code: "04", detail: "Practical AI capabilities embedded into useful, maintainable workflows." },
  { title: "Automation", code: "05", detail: "Repeatable systems that remove manual work and operational friction." },
  { title: "Database Applications", code: "06", detail: "Data-led products with considered models, queries, and admin tooling." },
  { title: "Media / Video Processing", code: "07", detail: "Automated media workflows using FFmpeg and reliable encoding pipelines." },
] as const;

export const approach = [
  { number: "01", title: "Define the useful thing", text: "Start with the product objective, the people using it, and the constraints that matter." },
  { number: "02", title: "Architect for reality", text: "Shape the data, API boundaries, and operational flow before adding surface complexity." },
  { number: "03", title: "Build the critical path", text: "Deliver the central experience with clarity, observability, and room to extend." },
  { number: "04", title: "Refine and release", text: "Test the edge cases, polish the interaction, and leave a system that can keep moving." },
] as const;

export const resume = {
  profile:
    "Backend-focused developer building web applications, APIs, AI-enabled products, automation systems, and digital media workflows.",
  education: "[EDUCATION DETAILS — ADD HERE]",
  selectedProject: "CyberCarnage — Gaming intelligence, AI assistance, discovery, reviews, comparisons, and developer APIs.",
};

export const isPlaceholderLink = (value: string) =>
  /(_HERE|_URL|EMAIL_HERE|GITHUB_URL_HERE|LINKEDIN_URL_HERE)/.test(value);
