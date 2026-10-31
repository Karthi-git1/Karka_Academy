// Course categories for the Mega-Menu and section-wise listings
export const courseCategories = [
  {
    id: "fullstack",
    name: "Fullstack Courses",
    icon: "</>",
    tagline: "Build enterprise full-stack web applications",
    courses: [
      {
        id: "mern-fullstack",
        slug: "mern-fullstack",
        title: "MERN Fullstack Development",
        desc: "Master Full-Stack web development using MongoDB, Express, React, and Node.js with real-world deployments.",
        duration: "6 Months",
        mode: "Online / In-Person Labs",
        batch: "Starts Soon",
        isInternship: true,
        audience: ["college-students", "graduates", "freshers"]
      },
      {
        id: "react-java-fullstack",
        slug: "react-java-fullstack",
        title: "React + Java Full Stack Development",
        desc: "Build enterprise-grade applications with React and Spring Boot. Learn engineering best practices.",
        duration: "6 Months",
        mode: "Online",
        batch: "Starts Soon",
        isInternship: true,
        audience: ["college-students", "graduates", "professionals"]
      },
      {
        id: "react-python-fullstack",
        slug: "react-python-fullstack",
        title: "React + Python Full Stack Development",
        desc: "Develop modern, high-performance web applications with React frontend and Python FastAPI/Django backend.",
        duration: "6 Months",
        mode: "Online",
        batch: "Starts Soon",
        isInternship: true,
        audience: ["college-students", "graduates", "school-students"]
      },
      {
        id: "full-stack-developer-internship",
        slug: "full-stack-developer-internship",
        title: "Full Stack Developer Internship",
        desc: "Commercial live-project internship. Work on real production features, Git branches, and client products.",
        duration: "6 Months",
        mode: "Online",
        batch: "Starts Soon",
        isInternship: true,
        audience: ["college-students", "graduates"]
      }
    ]
  },
  {
    id: "gen-ai",
    name: "Gen AI Courses",
    icon: "🧠",
    tagline: "Native Generative AI & Automation pipelines",
    courses: [
      {
        id: "generative-ai-orchestration",
        slug: "generative-ai",
        title: "Generative AI & LLM Orchestration",
        desc: "Master prompt engineering, Claude/OpenAI APIs, custom LangChain agents, and RAG pipelines.",
        duration: "4 Months",
        mode: "Online",
        batch: "Starts Soon",
        isInternship: false,
        audience: ["college-students", "graduates", "professionals"]
      },
      {
        id: "advanced-python-automation",
        slug: "advanced-python-automation",
        title: "Advanced Python for Automation",
        desc: "Automate repetitive workflows, scrape dynamic data, and build autonomous AI bot scripts.",
        duration: "2 Months",
        mode: "Online",
        batch: "Starts Soon",
        isInternship: false,
        audience: ["college-students", "school-students", "professionals"]
      }
    ]
  },
  {
    id: "data-ml",
    name: "Data & ML Courses",
    icon: "⛁",
    tagline: "Data analytics, machine learning & SQL architecture",
    courses: [
      {
        id: "data-science-foundations",
        slug: "data-science-foundations",
        title: "Data Science Foundations",
        desc: "Practical exploratory data analysis, Pandas, NumPy, statistical modeling, and ML fundamentals.",
        duration: "4 Months",
        mode: "Online",
        batch: "Starts Soon",
        isInternship: true,
        audience: ["college-students", "graduates"]
      },
      {
        id: "sql-database-mastery",
        slug: "sql-database-mastery",
        title: "SQL & Database Architecture Mastery",
        desc: "Master complex queries, indexing, schema normalization, PostgreSQL, and high-scale relational databases.",
        duration: "2 Months",
        mode: "Online",
        batch: "Starts Soon",
        isInternship: false,
        audience: ["college-students", "graduates", "professionals"]
      }
    ]
  },
  {
    id: "design",
    name: "Design Courses",
    icon: "🎨",
    tagline: "UI/UX design, Figma systems & web aesthetics",
    courses: [
      {
        id: "uiux-design-internship",
        slug: "uiux-design-internship",
        title: "UI/UX Design Internship",
        desc: "Figma masterclass, wireframing, UX research, component design systems, and client portfolio reviews.",
        duration: "3 Months",
        mode: "Online",
        batch: "Starts Soon",
        isInternship: true,
        audience: ["college-students", "graduates", "professionals", "school-students"]
      },
      {
        id: "web-designing-css",
        slug: "web-designing",
        title: "Web Designing with Modern CSS",
        desc: "Craft pixel-perfect responsive layouts, micro-animations, and modern glassmorphism web interfaces.",
        duration: "3 Months",
        mode: "Online",
        batch: "Starts Soon",
        isInternship: false,
        audience: ["school-students", "college-students"]
      }
    ]
  },
  {
    id: "digital-media",
    name: "Digital Media Courses",
    icon: "🎬",
    tagline: "Video editing, motion graphics & animation",
    courses: [
      {
        id: "video-editing-motion",
        slug: "video-editing",
        title: "Video Editing & Motion Graphics",
        desc: "Premiere Pro, After Effects, cinematic cuts, color grading, and dynamic reels production.",
        duration: "3 Months",
        mode: "Online",
        batch: "Starts Soon",
        isInternship: false,
        audience: ["school-students", "college-students"]
      }
    ]
  },
  {
    id: "content-marketing",
    name: "Content & Marketing",
    icon: "📈",
    tagline: "SEO growth strategies & AI-powered marketing",
    courses: [
      {
        id: "digital-marketing-ai",
        slug: "digital-marketing",
        title: "Digital Marketing with AI Tools",
        desc: "SEO growth strategies, performance marketing, Meta Ads, and AI-powered copy automation.",
        duration: "3 Months",
        mode: "Online",
        batch: "Starts Soon",
        isInternship: false,
        audience: ["graduates", "professionals", "college-students"]
      }
    ]
  },
  {
    id: "other-tech",
    name: "Other Tech Courses",
    icon: "💻",
    tagline: "Specialized enterprise & cloud stacks",
    courses: [
      {
        id: "java-backend-spring-boot",
        slug: "java-backend-spring-boot",
        title: "Java Backend with Spring Boot",
        desc: "Enterprise microservices, JPA/Hibernate, Spring Security, Docker, and RESTful API architecture.",
        duration: "2 Months",
        mode: "Online",
        batch: "Starts Soon",
        isInternship: false,
        audience: ["college-students", "graduates", "professionals"]
      },
      {
        id: "advanced-react-architecture",
        slug: "advanced-react-architecture",
        title: "Advanced React Architecture",
        desc: "State machines, custom hooks, performance profiling, SSR, Next.js, and scalable component libraries.",
        duration: "2 Months",
        mode: "Online",
        batch: "Starts Soon",
        isInternship: false,
        audience: ["college-students", "professionals", "graduates"]
      }
    ]
  },
  {
    id: "non-tech",
    name: "Non Tech Courses",
    icon: "👥",
    tagline: "Business analysis, leadership & operations",
    courses: [
      {
        id: "business-analyst-thinking",
        slug: "business-analyst",
        title: "Business Analyst & Agile Management",
        desc: "User stories, Jira, sprint planning, client communications, and functional specification design.",
        duration: "3 Months",
        mode: "Online",
        batch: "Starts Soon",
        isInternship: false,
        audience: ["graduates", "professionals"]
      }
    ]
  }
];

// College Student Specific Course Sections (Direct from real website)
export const collegeInternships = [
  {
    id: "full-stack-developer-internship",
    slug: "full-stack-developer-internship",
    title: "Full Stack Developer Internship",
    academy: "Karka Academy",
    duration: "6 Months",
    mode: "Online",
    batch: "Batch Starts on Starts Soon",
    badge: "Internship",
    description: "Hands-on, AI-powered internship platform where you work on real client projects, graduating with a live deployable portfolio and official certificate.",
    cta: "Explore Full Stack Developer Internship",
    icon: "💻",
    color: "from-blue-600 to-indigo-800"
  },
  {
    id: "data-science-foundations",
    slug: "data-science-foundations",
    title: "Data Science Foundations",
    academy: "Karka Academy",
    duration: "4 Months",
    mode: "Online",
    batch: "Batch Starts on Starts Soon",
    badge: "Internship",
    description: "Work with real data pipelines, statistical modeling, exploratory analytics, and predictive machine learning models under senior data scientists.",
    cta: "Explore Data Science Foundations",
    icon: "📊",
    color: "from-violet-600 to-purple-800"
  }
];

export const collegeCourses = [
  {
    id: "uiux-design-internship",
    slug: "uiux-design-internship",
    title: "UI/UX Design Internship",
    academy: "Karka Academy",
    duration: "3 Months",
    mode: "Online",
    batch: "Batch Starts on Starts Soon",
    badge: "Certification",
    description: "Design modern, user-centered digital interfaces using Figma, user research, wireframing, and interactive AI design tools.",
    cta: "Explore UI/UX Design Internship",
    icon: "🎨",
    color: "from-pink-600 to-rose-800"
  },
  {
    id: "advanced-python-automation",
    slug: "advanced-python-automation",
    title: "Advanced Python for Automation",
    academy: "Karka Academy",
    duration: "2 Months",
    mode: "Online",
    batch: "Batch Starts on Starts Soon",
    badge: "Skill Booster",
    description: "Automate repetitive workflows, scrape dynamic data, and build autonomous AI bot scripts to boost your engineering velocity.",
    cta: "Explore Advanced Python for Automation",
    icon: "🐍",
    color: "from-emerald-600 to-teal-800"
  },
  {
    id: "java-backend-spring-boot",
    slug: "java-backend-spring-boot",
    title: "Java Backend with Spring Boot",
    academy: "Karka Academy",
    duration: "2 Months",
    mode: "Online",
    batch: "Batch Starts on Starts Soon",
    badge: "Enterprise Backend",
    description: "Build scalable REST APIs, microservices, database transactions with Hibernate, and cloud deployment pipelines.",
    cta: "Explore Java Backend with Spring Boot",
    icon: "☕",
    color: "from-amber-600 to-orange-800"
  },
  {
    id: "advanced-react-architecture",
    slug: "advanced-react-architecture",
    title: "Advanced React Architecture",
    academy: "Karka Academy",
    duration: "2 Months",
    mode: "Online",
    batch: "Batch Starts on Starts Soon",
    badge: "Frontend Mastery",
    description: "Deep dive into state management, performance optimization, custom hooks, component libraries, and modern Next.js patterns.",
    cta: "Explore Advanced React Architecture",
    icon: "⚛️",
    color: "from-cyan-600 to-blue-800"
  },
  {
    id: "sql-database-mastery",
    slug: "sql-database-mastery",
    title: "SQL & Database Architecture Mastery",
    academy: "Karka Academy",
    duration: "2 Months",
    mode: "Online",
    batch: "Batch Starts on Starts Soon",
    badge: "Database Core",
    description: "Master complex queries, indexing strategies, normalization, database performance tuning, and scalable PostgreSQL schemas.",
    cta: "Explore SQL & Database Architecture Mastery",
    icon: "🗄️",
    color: "from-purple-600 to-indigo-800"
  }
];

// Consolidate and export all courses with unique slugs for CourseDetail & routing
const allCourseSlugs = new Set();
const consolidatedCourses = [];

// Helper to push course without duplicate slug
function addCourseIfUnique(courseObj) {
  if (!allCourseSlugs.has(courseObj.slug)) {
    allCourseSlugs.add(courseObj.slug);
    consolidatedCourses.push(courseObj);
  }
}

// 1. Add specific fullstack courses
addCourseIfUnique({
  id: "mern-fullstack",
  slug: "mern-fullstack",
  title: "MERN Fullstack Development",
  track: "Fullstack Courses",
  audience: ["college-students", "graduates", "freshers"],
  duration: "6 Months",
  mode: "Online / In-Person Labs",
  batch: "Starts Soon",
  badge: "🔥 Most Popular",
  description: "Master full-stack web development using MongoDB, Express, React, and Node.js with real-world deployments, Git collaboration, and automated testing.",
  highlights: ["MongoDB & Mongoose", "Express.js REST APIs", "React 19 & Redux Toolkit", "Node.js Microservices", "CI/CD & Cloud Deployment", "GenAI Code Velocity"],
  icon: "💻",
  color: "from-blue-600 to-indigo-800"
});

addCourseIfUnique({
  id: "react-java-fullstack",
  slug: "react-java-fullstack",
  title: "React + Java Full Stack Development",
  track: "Fullstack Courses",
  audience: ["college-students", "graduates", "professionals"],
  duration: "6 Months",
  mode: "Online",
  batch: "Starts Soon",
  badge: "Enterprise Ready",
  description: "Build enterprise-grade applications with React frontend and Spring Boot microservices backend. Master JPA/Hibernate, security, and scalable systems.",
  highlights: ["React Architecture", "Java 21 & Spring Boot", "Hibernate & JPA", "Spring Security & JWT", "PostgreSQL & Docker", "System Design"],
  icon: "☕",
  color: "from-amber-600 to-orange-800"
});

addCourseIfUnique({
  id: "react-python-fullstack",
  slug: "react-python-fullstack",
  title: "React + Python Full Stack Development",
  track: "Fullstack Courses",
  audience: ["college-students", "graduates", "school-students"],
  duration: "6 Months",
  mode: "Online",
  batch: "Starts Soon",
  badge: "High Growth",
  description: "Develop modern, high-performance web applications with React on the frontend and Python FastAPI/Django backend with native AI integrations.",
  highlights: ["React 19 Frontend", "FastAPI & Django", "PostgreSQL & Redis", "AI API Integrations", "Async Background Tasks", "Docker Deployment"],
  icon: "🐍",
  color: "from-emerald-600 to-teal-800"
});

addCourseIfUnique({
  id: "full-stack-developer-internship",
  slug: "full-stack-developer-internship",
  title: "Full Stack Developer Internship",
  track: "Fullstack Courses",
  audience: ["college-students", "graduates"],
  duration: "6 Months",
  mode: "Online / In-Person Labs",
  batch: "Starts Soon",
  badge: "Live Internship",
  description: "Commercial live-project internship. Work on real production features, Git branches, code reviews, and live client products to graduate with a deployable portfolio.",
  highlights: ["Live Client Products", "Agile Team Sprints", "Code Reviews & Testing", "Verified Certificate", "Deployable Portfolio", "Direct Placement Prep"],
  icon: "🚀",
  color: "from-blue-600 to-indigo-800"
});

// 2. Add Gen AI Courses
addCourseIfUnique({
  id: "generative-ai",
  slug: "generative-ai",
  title: "Generative AI & LLM Orchestration",
  track: "Gen AI Courses",
  audience: ["freshers", "career-switchers", "college-students", "professionals"],
  duration: "4 Months",
  mode: "Online",
  batch: "Starts Soon",
  badge: "🔥 AI-First",
  description: "Master prompt engineering, Claude/OpenAI APIs, custom LangChain agents, vector databases, and enterprise RAG pipelines.",
  highlights: ["Prompt Engineering", "LangChain & LlamaIndex", "Vector DBs & Embeddings", "RAG Architecture", "Autonomous AI Agents", "Full-Stack AI Apps"],
  icon: "🧠",
  color: "from-violet-600 to-purple-800"
});

addCourseIfUnique({
  id: "advanced-python-automation",
  slug: "advanced-python-automation",
  title: "Advanced Python for Automation",
  track: "Gen AI Courses",
  audience: ["college-students", "school-students", "professionals"],
  duration: "2 Months",
  mode: "Online",
  batch: "Starts Soon",
  badge: "Skill Booster",
  description: "Automate repetitive workflows, scrape dynamic data, build autonomous AI bot scripts, and boost engineering velocity by 10x.",
  highlights: ["Python Automation", "BeautifulSoup & Playwright", "API Integration", "Bot Development", "Task Scheduling", "AI Scripting"],
  icon: "⚡",
  color: "from-emerald-600 to-teal-800"
});

// 3. Add Data & ML Courses
addCourseIfUnique({
  id: "data-science-foundations",
  slug: "data-science-foundations",
  title: "Data Science Foundations",
  track: "Data & ML Courses",
  audience: ["college-students", "graduates"],
  duration: "4 Months",
  mode: "Online",
  batch: "Starts Soon",
  badge: "Practical Internship",
  description: "Practical exploratory data analysis, Pandas, NumPy, statistical modeling, machine learning fundamentals, and end-to-end data pipelines.",
  highlights: ["Data Wrangling & EDA", "Pandas & NumPy", "Statistical Modeling", "Scikit-Learn ML", "Data Visualization", "Capstone Case Study"],
  icon: "📊",
  color: "from-violet-600 to-purple-800"
});

addCourseIfUnique({
  id: "sql-database-mastery",
  slug: "sql-database-mastery",
  title: "SQL & Database Architecture Mastery",
  track: "Data & ML Courses",
  audience: ["college-students", "graduates", "professionals"],
  duration: "2 Months",
  mode: "Online",
  batch: "Starts Soon",
  badge: "Database Core",
  description: "Master complex queries, indexing strategies, normalization, database performance tuning, and scalable PostgreSQL schemas.",
  highlights: ["Advanced SQL Queries", "Query Plan Optimization", "Indexing & Index Types", "Schema Normalization", "Transactions & ACID", "PostgreSQL Admin"],
  icon: "🗄️",
  color: "from-purple-600 to-indigo-800"
});

// 4. Add Design Courses
addCourseIfUnique({
  id: "uiux-design-internship",
  slug: "uiux-design-internship",
  title: "UI/UX Design Internship",
  track: "Design Courses",
  audience: ["college-students", "graduates", "professionals", "school-students"],
  duration: "3 Months",
  mode: "Online",
  batch: "Starts Soon",
  badge: "Design Track",
  description: "Figma masterclass, wireframing, UX research, component design systems, prototyping, and client portfolio reviews.",
  highlights: ["Figma Component Systems", "User Research & Personas", "Wireframing & Lo-Fi", "Interactive Prototyping", "Design System Tokens", "Client Portfolio Reviews"],
  icon: "🎨",
  color: "from-pink-600 to-rose-800"
});

addCourseIfUnique({
  id: "web-designing",
  slug: "web-designing",
  title: "Web Designing with Modern CSS",
  track: "Design Courses",
  audience: ["school-students", "college-students"],
  duration: "3 Months",
  mode: "Online",
  batch: "Starts Soon",
  badge: "Creative Tech",
  description: "Craft pixel-perfect responsive layouts, micro-animations, modern glassmorphism web interfaces, and CSS architecture.",
  highlights: ["HTML5 & Modern CSS", "Flexbox & CSS Grid", "Micro-Animations & Keyframes", "Responsive Mobile-First", "Modern UI Layouts", "Hosted Portfolio Site"],
  icon: "✨",
  color: "from-cyan-600 to-blue-800"
});

// 5. Digital Media
addCourseIfUnique({
  id: "video-editing",
  slug: "video-editing",
  title: "Video Editing & Motion Graphics",
  track: "Digital Media Courses",
  audience: ["school-students", "college-students"],
  duration: "3 Months",
  mode: "Online",
  batch: "Starts Soon",
  badge: "Creative Media",
  description: "Premiere Pro, After Effects, cinematic cuts, color grading, dynamic reels production, and AI video workflow acceleration.",
  highlights: ["Adobe Premiere Pro", "After Effects Motion", "Cinematic Color Grading", "Sound Design & Mixing", "Viral Short-Form Reels", "Showreel Production"],
  icon: "🎬",
  color: "from-slate-600 to-gray-800"
});

// 6. Marketing
addCourseIfUnique({
  id: "digital-marketing",
  slug: "digital-marketing",
  title: "Digital Marketing with AI Tools",
  track: "Content & Marketing",
  audience: ["graduates", "professionals", "college-students"],
  duration: "3 Months",
  mode: "Online",
  batch: "Starts Soon",
  badge: "Growth Marketing",
  description: "SEO growth strategies, performance marketing, Meta Ads, and AI-powered copy and campaign automation.",
  highlights: ["SEO Keyword Strategy", "Google & Meta Ads", "AI Copywriting & Prompts", "Conversion Optimization", "Analytics & Attribution", "Live Campaign Budgets"],
  icon: "📈",
  color: "from-emerald-600 to-green-800"
});

// 7. Other Tech
addCourseIfUnique({
  id: "java-backend-spring-boot",
  slug: "java-backend-spring-boot",
  title: "Java Backend with Spring Boot",
  track: "Other Tech Courses",
  audience: ["college-students", "graduates", "professionals"],
  duration: "2 Months",
  mode: "Online",
  batch: "Starts Soon",
  badge: "Enterprise Backend",
  description: "Enterprise microservices, JPA/Hibernate, Spring Security, Docker, and RESTful API architecture.",
  highlights: ["Spring Boot Framework", "Hibernate & JPA", "Spring Security & OAuth2", "Microservice Patterns", "Docker & Kubernetes", "Unit & Integration Tests"],
  icon: "⚙️",
  color: "from-amber-600 to-orange-800"
});

addCourseIfUnique({
  id: "advanced-react-architecture",
  slug: "advanced-react-architecture",
  title: "Advanced React Architecture",
  track: "Other Tech Courses",
  audience: ["college-students", "professionals", "graduates"],
  duration: "2 Months",
  mode: "Online",
  batch: "Starts Soon",
  badge: "Frontend Mastery",
  description: "State machines, custom hooks, performance profiling, SSR, Next.js, and scalable component libraries.",
  highlights: ["React 19 Features", "Next.js App Router", "Advanced State Machines", "Custom Hooks Architecture", "Performance Profiling", "Design System Packages"],
  icon: "⚛️",
  color: "from-cyan-600 to-blue-800"
});

// 8. Non Tech
addCourseIfUnique({
  id: "business-analyst",
  slug: "business-analyst",
  title: "Business Analyst & Agile Management",
  track: "Non Tech Courses",
  audience: ["graduates", "professionals"],
  duration: "3 Months",
  mode: "Online",
  batch: "Starts Soon",
  badge: "Agile Leadership",
  description: "Bridge the gap between business and tech. Requirements elicitation, user stories, Jira, sprint planning, and functional specifications.",
  highlights: ["Requirements Gathering", "User Stories & Acceptance", "Jira & Agile Sprints", "SQL for Business Analysts", "Stakeholder Communication", "Real Case Studies"],
  icon: "📋",
  color: "from-amber-600 to-yellow-800"
});

// 9. Cloud & DevOps
addCourseIfUnique({
  id: "cloud-devops",
  slug: "cloud-devops",
  title: "Cloud DevOps & CI/CD Pipelines",
  track: "Other Tech Courses",
  audience: ["college-students", "graduates", "professionals"],
  duration: "3 Months",
  mode: "Online",
  batch: "Starts Soon",
  badge: "Cloud Architecture",
  description: "Master Docker, Kubernetes, AWS/GCP infrastructure, GitHub Actions CI/CD automation, and Terraform Infrastructure-as-Code.",
  highlights: ["Docker Containers", "Kubernetes Orchestration", "AWS & GCP Cloud", "GitHub Actions CI/CD", "Terraform IaC", "Monitoring & Logging"],
  icon: "☁️",
  color: "from-sky-600 to-indigo-800"
});

// 10. Mobile App Development
addCourseIfUnique({
  id: "mobile-app-development",
  slug: "mobile-app-development",
  title: "Mobile App Development (Flutter & React Native)",
  track: "Fullstack Courses",
  audience: ["college-students", "graduates", "freshers"],
  duration: "4 Months",
  mode: "Online / In-Person Labs",
  batch: "Starts Soon",
  badge: "Cross-Platform",
  description: "Build iOS and Android cross-platform mobile apps using Flutter and React Native with native device APIs, state management, and Play Store publishing.",
  highlights: ["Flutter & Dart", "React Native", "State Management (Bloc/Redux)", "Firebase & SQLite", "Native Device APIs", "App Store & Play Store Deploy"],
  icon: "📱",
  color: "from-blue-600 to-cyan-700"
});

// 11. Cybersecurity & Ethical Hacking
addCourseIfUnique({
  id: "cybersecurity",
  slug: "cybersecurity",
  title: "Cybersecurity & Ethical Hacking",
  track: "Other Tech Courses",
  audience: ["college-students", "graduates", "professionals"],
  duration: "3 Months",
  mode: "Online",
  batch: "Starts Soon",
  badge: "Security Core",
  description: "Master network penetration testing, OWASP Top 10 web vulnerabilities, Linux security, incident analysis, and ethical hacking fundamentals.",
  highlights: ["Network Security & Wireshark", "OWASP Top 10", "Burp Suite & Metasploit", "Linux Security & Bash", "Incident Response", "Ethical Hacking Lab"],
  icon: "🛡️",
  color: "from-red-600 to-rose-800"
});

export const courses = consolidatedCourses;

export const tracks = [
  {
    id: "fullstack",
    name: "Fullstack Courses",
    tagline: "Build enterprise fullstack web applications",
    icon: "</>",
    courses: ["MERN Fullstack Development", "React + Java Full Stack", "React + Python Full Stack", "Full Stack Developer Internship"],
    color: "from-blue-600 to-indigo-700",
  },
  {
    id: "gen-ai",
    name: "Gen AI Courses",
    tagline: "Build with Claude, ChatGPT & autonomous agents",
    icon: "🧠",
    courses: ["Generative AI & LLM Orchestration", "Advanced Python for Automation"],
    color: "from-violet-600 to-purple-700",
  },
  {
    id: "data-ml",
    name: "Data & ML Courses",
    tagline: "Data science, predictive models & SQL",
    icon: "⛁",
    courses: ["Data Science Foundations", "SQL & Database Architecture Mastery"],
    color: "from-sky-600 to-blue-700",
  },
  {
    id: "design",
    name: "Design Courses",
    tagline: "UI/UX design, Figma systems & web aesthetics",
    icon: "🎨",
    courses: ["UI/UX Design Internship", "Web Designing with Modern CSS"],
    color: "from-pink-600 to-rose-700",
  },
  {
    id: "digital-media",
    name: "Digital Media Courses",
    tagline: "Visual storytelling & animation",
    icon: "🎬",
    courses: ["Video Editing & Motion Graphics"],
    color: "from-slate-600 to-gray-700",
  },
  {
    id: "content-marketing",
    name: "Content & Marketing",
    tagline: "Drive growth with strategy",
    icon: "📈",
    courses: ["Digital Marketing with AI Tools"],
    color: "from-emerald-600 to-green-700",
  },
  {
    id: "other-tech",
    name: "Other Tech Courses",
    tagline: "Advanced enterprise backend and architecture",
    icon: "💻",
    courses: ["Java Backend with Spring Boot", "Advanced React Architecture"],
    color: "from-purple-600 to-indigo-700",
  },
  {
    id: "non-tech",
    name: "Non Tech Courses",
    tagline: "Essential business and agile skills",
    icon: "👥",
    courses: ["Business Analyst & Agile Management"],
    color: "from-amber-600 to-yellow-700",
  },
];
