import { defineSiteConfig } from "./src/config/site";

export const siteConfig = defineSiteConfig({
  author: "Qingquan Zhang",
  title: "Qingquan Zhang",
  siteUrl: "https://qingquan63.github.io/",
  ogImage: "/favicon.svg",
  hero: {
    headline: "Fair and trustworthy AI",
    subheadline:
      "I use multi-objective optimization to study how learning systems can balance predictive performance with different definitions of group fairness. I also investigate how gender bias emerges in interactions with large language models, including in game-playing settings. My work in game AI explores how to generate diverse game levels and use interactive tools to make optimization easier to understand.",
    profileImage: "",
  },
  description:
    "Qingquan Zhang studies fairness in machine learning, bias in large language models, and procedural content generation for games.",
  affiliations: [
    {
      role: "Ph.D. Student",
      institution: "Southern University of Science and Technology",
    },
  ],
  advisors: [
    { label: "Bo Yuan", href: "https://www.sustech.edu.cn/en/faculties/yuanbo.html" },
    { label: "Jialin Liu", href: "https://cse.sustech.edu.cn/faculty/~liujl/research.html" },
    { label: "Xin Yao", href: "https://cse.sustech.edu.cn/faculty/~xiny/" },
  ],
  researchInterests: [
    "Fair Machine Learning",
    "Responsible AI",
    "Multi-objective Optimization",
    "AI in Games",
  ],
  navLinks: [
    { href: "/about", label: "About" },
    { href: "/researches", label: "Publications" },
    { href: "/projects", label: "Projects" },
  ],
  socialLinks: [
    { label: "Google Scholar", href: "https://scholar.google.com/citations?user=hXBSOkAAAAAJ", icon: "i-academicons:google-scholar" },
    { label: "GitHub", href: "https://github.com/qingquan63", icon: "i-mdi:github" },
  ],
  pageTitles: {
    about: { description: "Research appointments, education, and academic service." },
    researches: { description: "Research on machine learning fairness, multi-objective optimization, and AI in games." },
    projects: { description: "Research tools for fairness-aware learning and procedural game content generation." },
  },
  homeBlocks: {
    showcase: { enabled: false },
    publications: { description: "" },
    posts: { enabled: false },
  },
});

export default siteConfig;
