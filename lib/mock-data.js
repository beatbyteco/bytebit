// export const MOCK_CATEGORIES = [
//   { name: "Web Dev", slug: "web-dev", icon: "💻" },
//   { name: "AI/ML", slug: "ai-ml", icon: "🤖" },
//   { name: "DevOps", slug: "devops", icon: "🛠️" },
//   { name: "Career", slug: "career", icon: "📈" },
//   { name: "Tools", slug: "tools", icon: "🧰" },
//   { name: "News", slug: "news", icon: "📰" },
// ];

// const author = {
//   name: "Mohammad Ayaz",
//   bio: "Full-stack developer writing about MERN, Next.js and AI-powered tools.",
// };

// // Small helper to build Strapi Blocks JSON without repeating boilerplate.
// const h = (text, level = 2) => ({
//   type: "heading",
//   level,
//   children: [{ type: "text", text }],
// });
// const p = (text) => ({ type: "paragraph", children: [{ type: "text", text }] });

// export const MOCK_POSTS = [
//   {
//     id: 1,
//     slug: "why-nextjs-app-router-changed-how-i-ship",
//     title: "Why the Next.js App Router Changed How I Ship Projects",
//     excerpt:
//       "Server components, nested layouts and built-in SEO primitives — here's what actually changed in my workflow after switching from Pages Router.",
//     content: [
//       h("The old workflow"),
//       p("Before the App Router, every project meant wiring up getStaticProps, a custom _document, and a separate SEO component per page. It worked, but it was repetitive."),
//       h("What changed"),
//       p("Server Components let me fetch data directly in the component tree without client-side waterfalls. Combined with generateMetadata, SEO stopped being an afterthought."),
//       h("Takeaway"),
//       p("If you're still on Pages Router for a new project, there's little reason to be. The App Router's mental model maps closer to how the browser and server actually cooperate."),
//     ],
//     featuredImage: undefined,
//     publishedAt: "2026-06-28T10:00:00.000Z",
//     updatedAt: "2026-06-28T10:00:00.000Z",
//     author,
//     category: MOCK_CATEGORIES[0],
//     tags: [{ name: "Next.js", slug: "nextjs" }],
//     isFeatured: true,
//     seoTitle: "Why the Next.js App Router Changed How I Ship Projects",
//     seoDescription:
//       "Server components, nested layouts and built-in SEO primitives — a practical look at switching from Pages Router to App Router.",
//   },
//   {
//     id: 2,
//     slug: "building-a-strapi-headless-cms-blog",
//     title: "Building a Headless Blog with Strapi and Next.js",
//     excerpt:
//       "A practical walkthrough of wiring Strapi as a CMS backend for a fast, statically generated Next.js blog with ISR.",
//     content: [
//       h("Why headless"),
//       p("Strapi gives non-technical editors a familiar admin panel, while the frontend stays completely decoupled — meaning it can be as fast as static HTML."),
//       h("The data flow"),
//       p("Posts are fetched at build time via generateStaticParams, then revalidated on a timer using Incremental Static Regeneration so new posts show up without a full redeploy."),
//       h("Result"),
//       p("Pages load from the CDN edge, crawlers get fully rendered HTML, and editors never touch code."),
//     ],
//     featuredImage: undefined,
//     publishedAt: "2026-06-20T10:00:00.000Z",
//     updatedAt: "2026-06-22T10:00:00.000Z",
//     author,
//     category: MOCK_CATEGORIES[0],
//     tags: [{ name: "Strapi", slug: "strapi" }, { name: "CMS", slug: "cms" }],
//     isFeatured: true,
//     seoTitle: "Building a Headless Blog with Strapi and Next.js",
//     seoDescription:
//       "A practical walkthrough of wiring Strapi as a CMS backend for a fast, statically generated Next.js blog with ISR.",
//   },
//   {
//     id: 3,
//     slug: "ai-api-integrations-for-side-projects",
//     title: "AI API Integrations Worth Adding to Your Side Projects",
//     excerpt:
//       "From Gemini Flash for structured extraction to Groq for near-instant inference — a survey of what's actually useful in production.",
//     content: [
//       h("Structured extraction"),
//       p("For scraping and parsing tasks, Gemini Flash with a strict JSON schema prompt beats regex every time."),
//       h("Speed-sensitive UX"),
//       p("Groq's LPU inference is fast enough to feel synchronous in a chat UI, which matters more than raw model quality for some use cases."),
//       h("Cost control"),
//       p("Cache aggressively and cap max tokens. Most side projects don't need the largest model available."),
//     ],
//     featuredImage: undefined,
//     publishedAt: "2026-06-10T10:00:00.000Z",
//     updatedAt: "2026-06-10T10:00:00.000Z",
//     author,
//     category: MOCK_CATEGORIES[1],
//     tags: [{ name: "AI", slug: "ai" }],
//     isFeatured: true,
//     seoTitle: "AI API Integrations Worth Adding to Your Side Projects",
//     seoDescription:
//       "A survey of AI APIs worth using in production side projects, from structured extraction to fast inference.",
//   },
//   {
//     id: 4,
//     slug: "fresher-resume-mistakes-ncr-hiring",
//     title: "Resume Mistakes I Fixed Before Applying in the NCR Job Market",
//     excerpt:
//       "What recruiters in Noida and Gurugram actually scan for on a fresher full-stack resume — and what to cut.",
//     content: [
//       h("Lead with stack, not objective"),
//       p("A generic career objective wastes prime resume real estate. Lead with your tech stack instead."),
//       h("Quantify project impact"),
//       p("\"Built a job tracker\" says less than \"Built a job tracker that scraped and deduplicated 200+ listings weekly.\""),
//       h("Keep it to one page"),
//       p("Recruiters spend seconds, not minutes, on a fresher resume."),
//     ],
//     featuredImage: undefined,
//     publishedAt: "2026-05-30T10:00:00.000Z",
//     updatedAt: "2026-05-30T10:00:00.000Z",
//     author,
//     category: MOCK_CATEGORIES[3],
//     tags: [{ name: "Career", slug: "career" }],
//     isFeatured: false,
//     seoTitle: "Resume Mistakes I Fixed Before Applying in the NCR Job Market",
//     seoDescription:
//       "What recruiters in Noida and Gurugram scan for on a fresher full-stack resume, and what to cut.",
//   },
//   {
//     id: 5,
//     slug: "vercel-vs-self-hosting-side-projects",
//     title: "Vercel vs Self-Hosting: What I Use for Different Side Projects",
//     excerpt:
//       "Not every project needs the same hosting. Here's how I decide between Vercel, a VPS, and Cloudflare Pages.",
//     content: [
//       h("Vercel for anything Next.js"),
//       p("Zero-config deploys, edge caching, and preview URLs per PR make Vercel the default for client-facing Next.js apps."),
//       h("VPS for background workers"),
//       p("Scraping jobs and cron-based scrapers run cheaper and more reliably on a small VPS than serverless functions with execution time limits."),
//       h("Cloudflare Pages for static tools"),
//       p("For single-file HTML tools with no backend, Cloudflare Pages is free and fast enough that there's no reason to reach for anything heavier."),
//     ],
//     featuredImage: undefined,
//     publishedAt: "2026-05-15T10:00:00.000Z",
//     updatedAt: "2026-05-15T10:00:00.000Z",
//     author,
//     category: MOCK_CATEGORIES[2],
//     tags: [{ name: "Hosting", slug: "hosting" }],
//     isFeatured: false,
//     seoTitle: "Vercel vs Self-Hosting: What I Use for Different Side Projects",
//     seoDescription:
//       "How to decide between Vercel, a VPS, and Cloudflare Pages depending on the project.",
//   },
//   {
//     id: 6,
//     slug: "matter-js-physics-games-html5",
//     title: "Building Physics-Based HTML5 Games with Matter.js",
//     excerpt:
//       "Lessons from shipping a blob-merging game — collision handling, performance tuning, and what CrazyGames reviewers look for.",
//     content: [
//       h("Collision groups matter"),
//       p("Getting merge logic right means carefully managing Matter.js collision categories so blobs don't merge with the wrong bodies mid-animation."),
//       h("Performance on low-end devices"),
//       p("Reduce the physics engine's iteration count and cap active bodies on screen — most casual game platforms test on mid-range Android devices."),
//       h("Differentiation matters for approval"),
//       p("Platforms like CrazyGames reject clones. A power-up system or versus mode is often the difference between acceptance and rejection."),
//     ],
//     featuredImage: undefined,
//     publishedAt: "2026-04-28T10:00:00.000Z",
//     updatedAt: "2026-04-28T10:00:00.000Z",
//     author,
//     category: MOCK_CATEGORIES[4],
//     tags: [{ name: "Game Dev", slug: "game-dev" }],
//     isFeatured: false,
//     seoTitle: "Building Physics-Based HTML5 Games with Matter.js",
//     seoDescription:
//       "Collision handling and performance lessons from shipping a browser-based physics game.",
//   },
// ];

// export const WORK_EXPERIENCE = [
//   { role: "Full Stack Developer Intern", company: "Edupply", period: "2025 — 2026", current: false },
//   { role: "B.Tech CSE Graduate", company: "ITM GIDA Gorakhpur (AKTU)", period: "2022 — 2026" },
// ];

// export const TECHNOLOGIES = [
//   { name: "Next.js", description: "React framework for production apps.", icon: "▲" },
//   { name: "MongoDB", description: "Document database for MERN apps.", icon: "🍃" },
//   { name: "Strapi", description: "Headless CMS for structured content.", icon: "📦" },
//   { name: "Tailwind CSS", description: "Utility-first styling framework.", icon: "🎨" },
// ];
