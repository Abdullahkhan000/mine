export type Project = {
  title: string;
  description: string;
  category: string;
  technologies: string[];
  image: string | null;
  imagePlaceholder: string;
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
  x: "X_URL_HERE",
  cv: "CV_URL_HERE",
  cybercarnage: "CYBERCARNAGE_URL_HERE",
  cybercarnageGithub: "CYBERCARNAGE_GITHUB_URL_HERE",
  project02: "PROJECT_02_URL_HERE",
  project02Github: "PROJECT_02_GITHUB_URL_HERE",
  project03: "PROJECT_03_URL_HERE",
  project03Github: "PROJECT_03_GITHUB_URL_HERE",
} as const;

export const portfolioImages = {
  profile: null as string | null,
} as const;

export const navigation = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#work" },
  { label: "Contact", href: "#contact" },
] as const;

export const projects: Project[] = [
  {
    title: "CyberCarnage",
    description:
      "A gaming intelligence and AI database platform combining discovery, AI assistance, quizzes, reviews, comparisons, upcoming games, tier lists, and developer/API functionality.",
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
    imagePlaceholder: "CYBERCARNAGE IMAGE — INSERT HERE",
    liveUrl: portfolioLinks.cybercarnage,
    githubUrl: portfolioLinks.cybercarnageGithub,
    featured: true,
    year: "2026",
  },
  {
    title: "[PROJECT 02 TITLE]",
    description: "[PROJECT 02 DESCRIPTION]",
    category: "[PROJECT 02 CATEGORY]",
    technologies: ["[ADD TECHNOLOGIES]"],
    image: null,
    imagePlaceholder: "PROJECT 02 IMAGE — INSERT HERE",
    liveUrl: portfolioLinks.project02,
    githubUrl: portfolioLinks.project02Github,
    featured: false,
    year: "[YEAR]",
  },
  {
    title: "[PROJECT 03 TITLE]",
    description: "[PROJECT 03 DESCRIPTION]",
    category: "[PROJECT 03 CATEGORY]",
    technologies: ["[ADD TECHNOLOGIES]"],
    image: null,
    imagePlaceholder: "PROJECT 03 IMAGE — INSERT HERE",
    liveUrl: portfolioLinks.project03,
    githubUrl: portfolioLinks.project03Github,
    featured: false,
    year: "[YEAR]",
  },
];

export const services = [
  { title: "Backend Development", detail: "Production-minded server foundations for web applications and digital products.", code: "01" },
  { title: "Django / DRF", detail: "Structured Django applications, admin systems, and maintainable REST interfaces.", code: "02" },
  { title: "API Development", detail: "Clear API contracts built for reliable integration, security, and long-term use.", code: "03" },
  { title: "AI Integration", detail: "Useful AI capabilities integrated into real product and operational workflows.", code: "04" },
  { title: "Automation", detail: "Repeatable systems that reduce manual work and operational friction.", code: "05" },
  { title: "Media Processing", detail: "Dependable FFmpeg and video-encoding pipelines for digital media products.", code: "06" },
] as const;

export const technologies = [
  { name: "Python", detail: "Backend systems, automation, and data workflows" },
  { name: "Django", detail: "Web applications and dependable server architecture" },
  { name: "Django REST Framework", detail: "Structured, scalable API delivery" },
  { name: "PostgreSQL", detail: "Relational data modeling and persistence" },
  { name: "AI API Integration", detail: "Practical intelligence inside product flows" },
  { name: "FFmpeg", detail: "Media transformation and encoding pipelines" },
  { name: "JavaScript", detail: "Responsive product interfaces" },
  { name: "Tailwind CSS", detail: "Consistent, maintainable interface systems" },
] as const;

export const isPlaceholderLink = (value: string) => /(_HERE|EMAIL_HERE)/.test(value);
