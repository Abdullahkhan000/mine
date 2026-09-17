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
  heroDetail: null as string | null,
  processDiscover: null as string | null,
  processArchitect: null as string | null,
  processBuild: null as string | null,
  processRefine: null as string | null,
  contactVisual: null as string | null,
} as const;

export const navigation = [
  { label: "Home", href: "#top" },
  { label: "Works", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
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

export const processSteps = [
  {
    number: "01",
    title: "Discover",
    text: "Clarify the product goal, the people using it, the constraints, and the critical path before choosing implementation details.",
    imageKey: "processDiscover",
    placeholder: "DISCOVERY VISUAL — INSERT HERE",
  },
  {
    number: "02",
    title: "Architect",
    text: "Shape the data model, system boundaries, API contracts, and operational flow around the real requirements.",
    imageKey: "processArchitect",
    placeholder: "ARCHITECTURE VISUAL — INSERT HERE",
  },
  {
    number: "03",
    title: "Build",
    text: "Implement the central experience with clear code, dependable behavior, and room for the product to evolve.",
    imageKey: "processBuild",
    placeholder: "BUILD VISUAL — INSERT HERE",
  },
  {
    number: "04",
    title: "Refine",
    text: "Test edge cases, tighten performance and interaction details, then prepare a maintainable release.",
    imageKey: "processRefine",
    placeholder: "REFINEMENT VISUAL — INSERT HERE",
  },
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

export const capabilities = [
  { title: "API Architecture", text: "Clear interfaces for products, integrations, and future clients.", code: "01", tone: "red" },
  { title: "AI Workflows", text: "Intelligence placed where it improves a real user or business task.", code: "02", tone: "blue" },
  { title: "Automation", text: "Repeatable tools that remove manual operational steps.", code: "03", tone: "silver" },
  { title: "Media Pipelines", text: "Reliable processing across formats, encodes, and destinations.", code: "04", tone: "orange" },
] as const;

export const systemRisks = [
  ["Disconnected systems", "create avoidable friction"],
  ["Vague API contracts", "slow every integration"],
  ["Manual workflows", "waste time at scale"],
  ["Unstructured data", "limits product decisions"],
  ["Generic AI features", "add noise without utility"],
  ["Fragile media pipelines", "break under real workloads"],
] as const;

export const isPlaceholderLink = (value: string) => /(_HERE|EMAIL_HERE)/.test(value);
