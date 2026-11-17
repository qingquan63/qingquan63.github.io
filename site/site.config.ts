import { defineSiteConfig } from "./src/config/site";
import { researchTopics } from "./src/data/research-topics";

export const siteConfig = defineSiteConfig({
  author: "Qingquan Zhang",
  title: "Qingquan Zhang",
  siteUrl: "https://qingquan63.github.io/",
  ogImage: "/favicon.svg",
  hero: {
    headline: "Fair and trustworthy AI",
    subheadline:
      "I am a third-year Ph.D. student in the Department of Computer Science and Engineering at Southern University of Science and Technology (SUSTech). My research focuses on fair machine learning and responsible AI, particularly group fairness and bias in large language models. I also use multi-objective optimization and learning to generate diverse game content. I earned my master's degree in Computer Science and Technology from SUSTech and my bachelor's degree in Intelligent Science and Technology from Xidian University.",
    profileImage: "/profile.jpg",
    profileImageWidth: 1073,
    profileImageHeight: 1509,
  },
  description:
    "Qingquan Zhang studies fairness in machine learning, bias in large language models, and procedural content generation for games.",
  affiliations: [
    {
      role: "Ph.D. Student",
      department: "Department of Computer Science and Engineering",
      institution: "Southern University of Science and Technology",
    },
  ],
  advisors: [
    { label: "Bo Yuan", href: "https://www.sustech.edu.cn/en/faculties/yuanbo.html" },
    { label: "Jialin Liu", href: "https://cse.sustech.edu.cn/faculty/~liujl/research.html" },
    { label: "Xin Yao", href: "https://cse.sustech.edu.cn/faculty/~xiny/" },
  ],
  researchInterests: researchTopics.map((topic) => topic.title),
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
    about: { description: "Education, research experience, and awards." },
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
