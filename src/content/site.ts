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
  { value: 7, suffix: "", label: "Automation systems in production" },
  { value: 5, suffix: "", label: "AI agents in one content pipeline" },
  { value: 4, suffix: "+", label: "Years automating workflows" },
  { value: 12, suffix: "+", label: "APIs and platforms integrated" },
];

export type ProjectImage = { src: string; width: number; height: number; alt: string };

export type Project = {
  title: string;
  description: string;
  tags: string[];
  accent: Accent;
  href?: string;
  /** Path (under /public) to a short demo recording shown at the top of the card. */
  video?: string;
  /** Poster frame for the demo video. */
  poster?: string;
  /** Screenshot (under /public) shown at the top of the card when there is no video. */
  image?: ProjectImage;
  /** Several screenshots: the card shows a horizontally scrollable gallery instead of a single image. */
  images?: ProjectImage[];
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
    video: "/videos/linkedin-content-engine-demo.mp4",
    poster: "/videos/linkedin-content-engine-poster.jpg",
    year: "2026",
  },
  {
    title: "ARIA: GitHub-Triggered QA Agent",
    description:
      "Fires on every push, pull request or Vercel deployment, reads the diff, has an LLM write targeted Playwright and pytest tests for just the changed code, runs them in CI and posts the result to Discord with a link to the run. A failed test holds the merge. Test coverage tracks the codebase instead of going stale.",
    tags: ["Claude", "Playwright", "pytest", "n8n", "GitHub Actions", "Discord"],
    accent: "magenta",
    images: [
      {
        src: "/images/aria-qa-agent-thumbnail-burgundy.jpg",
        width: 1536,
        height: 1024,
        alt: "ARIA QA Agent: a robot reads GitHub diffs, runs unit, UI, API and accessibility tests, and reports to Discord and ClickUp. Smart test selection, AI-powered analysis, clear bug reports, faster feedback, end-to-end automation",
      },
      {
        src: "/images/aria-qa-agent-discord.png",
        width: 898,
        height: 447,
        alt: "ARIA QA run reports in Discord: per-test results, trigger source (push or Vercel deployment), tests created, run, passed and failed, and a link to the GitHub Actions run; one failed run holds the merge",
      },
    ],
    year: "2026",
  },
  {
    title: "PM/QA Assistant Agent",
    description:
      "An assistant agent for product and QA work. Point it at a live URL and it audits the app, then posts a Live QA Report to Discord with findings ranked Critical to Low. It also runs the pytest and Playwright regression suites on a schedule, keeps run history in MongoDB, and opens or updates ClickUp tasks so nothing slips through untracked.",
    tags: ["pytest", "Playwright", "MongoDB", "Discord", "ClickUp"],
    accent: "cyan",
    image: {
      src: "/images/pm-qa-assistant-discord.png",
      width: 805,
      height: 428,
      alt: "PM/QA Assistant Agent posting a Live QA Report in Discord for a deployed app: an HTML report attachment and a summary of 44 findings by severity",
    },
    year: "2026",
  },
  {
    title: "Social Media Post Automation",
    description:
      "Google Sheets is the single source of truth: reference text, article links and an S3 image URL per row. On Create, ChatGPT writes a platform-ready post from the references, Gemini renders a matching social graphic from the reference image, and the assets are packaged together. One Publish click pushes caption and image straight to the LinkedIn API.",
    tags: ["n8n", "ChatGPT", "Gemini", "Google Sheets", "AWS S3", "LinkedIn API"],
    accent: "violet",
    image: {
      src: "/images/social-media-post-automation-n8n.jpg",
      width: 1890,
      height: 769,
      alt: "n8n canvas for the Social Media Post Automation workflow: Google Sheets trigger, OpenAI agent, Gemini image generation, S3 upload and LinkedIn post",
    },
    year: "2025",
  },
  {
    title: "AI Applicant Tracking System",
    description:
      "Takes a candidate from Google Form submission to shortlist with zero manual review: Gemini scores each resume against the job description, auto-shortlists above a threshold and sends calendar-invite emails, duplicate-safe by candidate ID.",
    tags: ["n8n", "Gemini", "Google Forms", "Calendar API"],
    accent: "cyan",
    image: {
      src: "/images/ai-applicant-tracking-system.jpg",
      width: 1024,
      height: 680,
      alt: "AI Applicant Tracking System case study cover: AI processing, resume screening and analytics icons",
    },
    year: "2025",
  },
  {
    title: "Affiliate CRM Pipeline",
    description:
      "A staged pipeline in Bigin by Zoho for a performance-marketing team: form submissions move buyers through acquisition, onboarding and engagement stages via triggers, with repeat submissions created as new records instead of corrupting old ones.",
    tags: ["Bigin by Zoho", "CRM", "Workflow triggers", "KPI tracking"],
    accent: "violet",
    image: {
      src: "/images/affiliate-crm-kpi-map.png",
      width: 1050,
      height: 515,
      alt: "Bigin Affiliates flow: acquisition, onboarding and engagement stages mapped to process owners and KPIs",
    },
    year: "2025",
  },
  {
    title: "Discord Meeting Scheduler",
    description:
      "One slash command in Discord. A FastAPI service has Gemini extract attendees, date, time, timezone and title from plain language, creates the Google Calendar event, sends invites and confirms back in the channel.",
    tags: ["FastAPI", "Gemini", "Discord API", "Google Calendar"],
    accent: "lime",
    image: {
      src: "/images/discord-meeting-scheduler.jpg",
      width: 945,
      height: 453,
      alt: "Discord meeting agent reply after a /schedule command: event title, date, duration, attendees, Google Meet link and calendar event, with invites sent via Gmail",
    },
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

export type ExperienceItem = {
  period: string;
  role: string;
  org: string;
  summary?: string;
  accent: Accent;
};

export const experience: ExperienceItem[] = [
  {
    period: "Aug 2023 — Now",
    role: "Product Management & Automation",
    org: "MOD.Ventures · Management team · Remote",
    accent: "lime" as Accent,
  },
  {
    period: "Jan 2022 — Now",
    role: "Automation Specialist",
    org: "Upwork · Freelance · Remote",
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
