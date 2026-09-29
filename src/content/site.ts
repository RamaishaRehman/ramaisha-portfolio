// ─────────────────────────────────────────────────────────────
// All page copy lives here. Edit values freely; the layout adapts.
// Sourced from Ramaisha's CV and Upwork profile draft.
// ─────────────────────────────────────────────────────────────

export type Accent = "lime" | "magenta" | "cyan" | "violet";

export const site = {
  name: "Ramaisha Rehman",
  firstName: "Ramaisha",
  role: "AI Agent & Automation Developer",
  tagline:
    "I specialize in AI orchestration — designing systems where multiple LLM agents (Claude, Gemini) coordinate, hand off work, and recover from failure on their own, connected to the tools businesses already run on: CRMs, spreadsheets, GitHub, Discord, LinkedIn, Google Calendar. Built with n8n, FastAPI, and the Claude Agent SDK. Not single bots wired to one task — orchestrated pipelines with routing logic, state passed cleanly between agents, duplicate-handling, and real error recovery, because that’s what lets a system run unattended in production without someone babysitting it.",
  location: "Karachi, Pakistan",
  availability: "Open to automation projects",
  email: "ramaishar.24@gmail.com",
  socials: [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/ramaisha-rehman-37b355201",
      accent: "cyan" as Accent,
    },
    { label: "GitHub", href: "https://github.com/RamaishaRehman", accent: "lime" as Accent },
    { label: "Upwork", href: "https://www.upwork.com/freelancers/~01d13b8aa1905ce561", accent: "magenta" as Accent },
  ],
  nav: [
    { label: "Work", href: "#work" },
    { label: "About", href: "#about" },
    { label: "Stack", href: "#stack" },
    { label: "Journey", href: "#journey" },
    { label: "Contact", href: "#contact" },
  ],
};

export const marqueeWords = [
  "AI Agents",
  "Multi-Agent Orchestration",
  "n8n",
  "LangGraph",
  "Claude & Gemini",
  "FastAPI",
  "Workflow Automation",
  "QA Automation",
  "CRM Automation",
  "Product Roadmaps",
];

export const about = {
  heading: "Automation that runs unattended, in production.",
  paragraphs: [
    "I design and ship automation pipelines that connect LLMs like Claude and Gemini to the tools businesses already use: CRMs, spreadsheets, GitHub, Discord, LinkedIn and Google Calendar, using n8n, FastAPI and the Claude Agent SDK.",
    "I am not wiring no-code blocks together. I build agentic systems with multiple coordinated AI passes, duplicate handling and real error handling, because that is what makes an automation trustworthy enough to run without supervision.",
    "I come from a QA and product management background, so I map the real workflow first, automate it the way a PM thinks about a process, and test it the way a QA engineer does, so it does not quietly break later.",
  ],
  facts: [
    { label: "Based in", value: "Karachi, PK" },
    { label: "Currently", value: "MOD.Ventures" },
    { label: "Studying", value: "BSCS, Iqra University" },
  ],
};

export const stats = [
  { value: 6, suffix: "", label: "Automation systems in production" },
  { value: 5, suffix: "", label: "AI agents in one content pipeline" },
  { value: 4, suffix: "+", label: "Years automating workflows" },
  { value: 12, suffix: "+", label: "APIs and platforms integrated" },
];

export type Project = {
  title: string;
  description: string;
  tags: string[];
  accent: Accent;
  href?: string;
  year: string;
};

export const projects: Project[] = [
  {
    title: "Multi-Agent LinkedIn Content Engine",
    description:
      "A LinkedIn profile becomes a brand voice and visual baseline. Posts come from AI-suggested trends, documents, voice notes or video, pass through five agents (Strategy, Core Content, LinkedIn Adaptation, QA Critic, Visual Generation) and land in a campaign manager to approve, schedule and publish.",
    tags: ["LangGraph", "Gemini", "FastAPI", "pgvector", "LinkedIn API"],
    accent: "lime",
    href: "https://content-engine-automation.vercel.app",
    year: "2026",
  },
  {
    title: "GitHub-Triggered QA Agent",
    description:
      "Fires on every push or pull request, reads the diff, has an LLM write targeted Playwright and pytest tests for just the changed code, runs them and posts pass/fail to Discord. Test coverage tracks the codebase instead of going stale.",
    tags: ["Claude", "Playwright", "pytest", "n8n", "Discord"],
    accent: "magenta",
    year: "2026",
  },
  {
    title: "AI Applicant Tracking System",
    description:
      "Takes a candidate from Google Form submission to shortlist with zero manual review: Gemini scores each resume against the job description, auto-shortlists above a threshold and sends calendar-invite emails, duplicate-safe by candidate ID.",
    tags: ["n8n", "Gemini", "Google Forms", "Calendar API"],
    accent: "cyan",
    year: "2025",
  },
  {
    title: "Affiliate CRM Pipeline",
    description:
      "A staged pipeline in Bigin by Zoho for a performance-marketing team: form submissions move buyers through acquisition, onboarding and engagement stages via triggers, with repeat submissions created as new records instead of corrupting old ones.",
    tags: ["Bigin by Zoho", "CRM", "Workflow triggers", "KPI tracking"],
    accent: "violet",
    year: "2025",
  },
  {
    title: "Discord Meeting Scheduler",
    description:
      "One slash command in Discord. A FastAPI service has Gemini extract attendees, date, time, timezone and title from plain language, creates the Google Calendar event, sends invites and confirms back in the channel.",
    tags: ["FastAPI", "Gemini", "Discord API", "Google Calendar"],
    accent: "lime",
    year: "2025",
  },
];

export const skillGroups = [
  {
    title: "AI & Agents",
    accent: "lime" as Accent,
    items: [
      "LangGraph",
      "Claude API & Agent SDK",
      "Gemini AI",
      "Multi-agent orchestration",
      "Prompt engineering",
      "RAG",
    ],
  },
  {
    title: "Workflow & Platforms",
    accent: "cyan" as Accent,
    items: ["n8n", "Make.com", "LinkedIn API", "Google Calendar & Sheets", "Slack & Discord APIs", "Zoho / Bigin CRM"],
  },
  {
    title: "Backend, Data & QA",
    accent: "magenta" as Accent,
    items: ["Python", "FastAPI", "PostgreSQL & pgvector", "MongoDB", "AWS S3", "Playwright & pytest", "CI/CD"],
  },
  {
    title: "Product & Strategy",
    accent: "violet" as Accent,
    items: ["Product roadmapping", "Requirements analysis", "Agile delivery", "Cross-functional collaboration", "Data-driven decisions"],
  },
];

export const experience = [
  {
    period: "Aug 2023 — Now",
    role: "Product Management & Automation",
    org: "MOD.Ventures · Management team · Remote",
    summary:
      "Architected the LinkedIn Content Engine, built the Discord meeting agent and the social media automation pipeline, and drove roadmaps for the Colaraz Admissions support agent and the Colaraz Impact platform.",
    accent: "lime" as Accent,
  },
  {
    period: "Jan 2022 — Now",
    role: "Automation Specialist",
    org: "Upwork · Freelance · Remote",
    summary:
      "AI agent systems for business process automation: ARIA, an autonomous regression agent on pytest, Playwright, MongoDB, Discord and ClickUp; n8n + GitHub webhook pipelines with Claude; a voice AI receptionist for a salon.",
    accent: "cyan" as Accent,
  },
  {
    period: "In progress",
    role: "BSc Computer Science",
    org: "Iqra University · Karachi",
    summary: "Data structures, database systems, web development, probability and statistics.",
    accent: "magenta" as Accent,
  },
];
