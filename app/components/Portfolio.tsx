"use client";

import { useEffect, useState } from "react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Blog", href: "#blog" },
  { name: "Contact", href: "#contact" },
];

const projects = [
  {
    title: "Portfolio Platform",
    category: "Web App",
    description:
      "A polished, responsive portfolio platform built to showcase case studies, services, and contact information in a premium presentation.",
    tags: ["Next.js", "Tailwind", "UI/UX"],
    link: "#",
  },
  {
    title: "Analytics Dashboard",
    category: "Product Design",
    description:
      "A business insights dashboard focused on data storytelling, performance tracking, and clear executive reporting for product teams.",
    tags: ["React", "Charts", "Insights"],
    link: "#",
  },
  {
    title: "E-commerce Flow",
    category: "Frontend Experience",
    description:
      "A conversion-focused storefront experience designed to simplify product discovery, improve checkout clarity, and strengthen brand trust.",
    tags: ["Shopify", "UX", "Conversion"],
    link: "#",
  },
];

const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Tailwind CSS",
  "UI/UX Design",
  "REST APIs",
  "Database Design",
  "SEO",
  "Figma",
  "GitHub",
];

const experiences = [
  {
    period: "2023 — Present",
    role: "Senior Product Designer",
    company: "Northstar Studio",
    details: "Leading end-to-end product design for SaaS and digital experiences, partnering closely with engineering and stakeholders.",
  },
  {
    period: "2020 — 2023",
    role: "Frontend Developer",
    company: "Brightlane Labs",
    details: "Built performant web interfaces, component systems, and marketing experiences used across product, growth, and brand initiatives.",
  },
  {
    period: "2018 — 2020",
    role: "Web Designer",
    company: "Independent",
    details: "Crafted responsive landing pages, brand systems, and digital assets for founders and startups across multiple industries.",
  },
];

const blogPosts = [
  {
    title: "Designing websites that feel premium and effortless",
    summary: "A practical look at spacing, contrast, and motion patterns that elevate digital experiences.",
    link: "#",
  },
  {
    title: "Why product thinking matters in frontend development",
    summary: "How engineering decisions become stronger when they are grounded in user needs and measurable outcomes.",
    link: "#",
  },
  {
    title: "The beginner’s guide to building a portfolio that stands out",
    summary: "A checklist to help you present your work with clarity, confidence, and narrative structure.",
    link: "#",
  },
];

const socials = [
  { label: "GitHub", href: "https://github.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Email", href: "mailto:hello@yourdomain.com" },
  { label: "Resume", href: "#" },
];

export default function Portfolio() {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const preferDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme = storedTheme === "light" || storedTheme === "dark" ? storedTheme : preferDark ? "dark" : "light";
    setTheme(initialTheme);
    document.documentElement.classList.toggle("dark", initialTheme === "dark");
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme, mounted]);

  const toggleTheme = () => setTheme((prev) => (prev === "dark" ? "light" : "dark"));

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100">
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-slate-100/80 backdrop-blur-lg dark:border-slate-800 dark:bg-slate-950/75">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#home" className="text-lg font-bold tracking-tight">
            Your Name
          </a>

          <nav className="hidden items-center gap-6 text-sm md:flex">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-slate-600 transition hover:text-slate-900 dark:text-slate-300 dark:hover:text-white">
                {link.name}
              </a>
            ))}
          </nav>

          <button
            type="button"
            aria-label="Toggle dark mode"
            onClick={toggleTheme}
            className="rounded-full border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:border-slate-400 hover:text-slate-900 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-slate-500"
          >
            {theme === "dark" ? "Light" : "Dark"} mode
          </button>
        </div>
      </header>

      <main id="home">
        <section className="mx-auto grid max-w-6xl gap-10 px-6 pb-20 pt-16 md:grid-cols-[1.5fr_1fr] md:pt-24">
          <div className="space-y-8">
            <span className="inline-flex rounded-full border border-accent-200 bg-accent-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-accent-700 dark:border-accent-500/30 dark:bg-accent-500/10 dark:text-accent-300">
              Available for work
            </span>

            <div className="space-y-5">
              <p className="text-sm uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">Product Designer • Frontend Developer</p>
              <h1 className="text-5xl font-black tracking-tight md:text-6xl">
                I build digital experiences that feel effortless.
              </h1>
            </div>

            <p className="max-w-xl text-lg leading-relaxed text-slate-600 dark:text-slate-300">
              Hi, I’m Your Name — a multidisciplinary designer and developer helping brands turn ideas into clear, engaging, and high-converting experiences.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-slate-400 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:border-slate-500"
              >
                Let’s Connect
              </a>
            </div>

            <div className="flex flex-wrap gap-6 pt-4 text-sm text-slate-500 dark:text-slate-400">
              <span>8+ years experience</span>
              <span>20+ launches</span>
              <span>Remote available</span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 -z-10 rounded-[2rem] bg-gradient-to-br from-accent-500/20 via-transparent to-cyan-500/20 blur-2xl dark:from-accent-500/25 dark:to-cyan-500/20" />
            <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-4 shadow-glow dark:border-slate-800 dark:bg-slate-900">
              <div className="rounded-[1.5rem] bg-slate-900 p-5 text-white dark:bg-slate-800">
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex gap-2">
                    <span className="h-3 w-3 rounded-full bg-red-400" />
                    <span className="h-3 w-3 rounded-full bg-yellow-400" />
                    <span className="h-3 w-3 rounded-full bg-emerald-400" />
                  </div>
                  <span className="text-xs text-slate-300">Portfolio v2</span>
                </div>

                <div className="space-y-4">
                  <div className="rounded-2xl bg-slate-800 p-4">
                    <div className="mb-3 flex items-center justify-between text-xs text-slate-400">
                      <span>Growth Overview</span>
                      <span>+28.4%</span>
                    </div>
                    <div className="flex h-28 items-end gap-2">
                      {[40, 58, 48, 72, 68, 88, 96].map((bar) => (
                        <span key={bar} className="flex-1 rounded-t-xl bg-gradient-to-t from-accent-500 to-cyan-400" style={{ height: `${bar}%` }} />
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-2xl bg-slate-800 p-4">
                      <p className="text-xs text-slate-400">Projects</p>
                      <p className="mt-2 text-3xl font-bold">24</p>
                    </div>
                    <div className="rounded-2xl bg-slate-800 p-4">
                      <p className="text-xs text-slate-400">Clients</p>
                      <p className="mt-2 text-3xl font-bold">12</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-6xl px-6 py-20">
          <div className="mb-10 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-600 dark:text-accent-400">About</p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">Designing thoughtful digital experiences from concept to launch.</h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-white p-8 dark:border-slate-800 dark:bg-slate-900">
              <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300">
                I work at the intersection of strategy, design, and engineering. My process blends product thinking with polished execution so every interaction feels not only beautiful, but intentional and effective.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-900 p-8 text-slate-100 dark:border-slate-700 dark:bg-slate-800">
              <p className="text-sm uppercase tracking-[0.2em] text-slate-300">What I bring</p>
              <ul className="mt-6 space-y-3 text-slate-200">
                <li>• Product strategy and UX direction</li>
                <li>• High-fidelity interfaces and systems</li>
                <li>• Frontend implementation and optimization</li>
                <li>• Clear communication across teams</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-6xl px-6 py-20">
          <div className="mb-10 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-600 dark:text-accent-400">Projects</p>
              <h2 className="mt-3 text-3xl font-bold md:text-4xl">Selected work</h2>
            </div>
            <a href="#contact" className="text-sm font-semibold text-slate-600 transition hover:text-slate-900 dark:text-slate-300 dark:hover:text-white">
              Let’s build something →
            </a>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {projects.map((project) => (
              <article key={project.title} className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900">
                <div className="mb-5 h-44 rounded-2xl bg-gradient-to-br from-slate-200 via-slate-100 to-accent-100 dark:from-slate-800 dark:via-slate-700 dark:to-accent-900/40" />
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent-600 dark:text-accent-400">{project.category}</p>
                <h3 className="mt-4 text-2xl font-bold">{project.title}</h3>
                <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-300">{project.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-slate-200 bg-slate-50 px-2 py-1 text-xs font-medium text-slate-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300">
                      {tag}
                    </span>
                  ))}
                </div>
                <a href={project.link} className="mt-6 inline-block text-sm font-semibold text-slate-900 dark:text-slate-100">
                  View project →
                </a>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="mx-auto max-w-6xl px-6 py-20">
          <div className="mb-10 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-600 dark:text-accent-400">Skills</p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">A toolkit built for product work and modern interfaces.</h2>
          </div>

          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span key={skill} className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200">
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section id="experience" className="mx-auto max-w-6xl px-6 py-20">
          <div className="mb-10 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-600 dark:text-accent-400">Experience</p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">Career journey</h2>
          </div>

          <div className="space-y-6">
            {experiences.map((exp) => (
              <div key={exp.role} className="rounded-3xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
                <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-xl font-bold">{exp.role}</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{exp.company}</p>
                  </div>
                  <span className="text-sm font-medium text-accent-600 dark:text-accent-400">{exp.period}</span>
                </div>
                <p className="mt-4 text-slate-600 dark:text-slate-300">{exp.details}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="blog" className="mx-auto max-w-6xl px-6 py-20">
          <div className="mb-10 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-600 dark:text-accent-400">Blog</p>
              <h2 className="mt-3 text-3xl font-bold md:text-4xl">Thoughts and notes</h2>
            </div>
            <a href="#" className="text-sm font-semibold text-slate-600 transition hover:text-slate-900 dark:text-slate-300 dark:hover:text-white">
              Read all articles →
            </a>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {blogPosts.map((post) => (
              <article key={post.title} className="rounded-3xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">Article</p>
                <h3 className="mt-4 text-xl font-bold leading-snug">{post.title}</h3>
                <p className="mt-4 text-slate-600 dark:text-slate-300">{post.summary}</p>
                <a href={post.link} className="mt-6 inline-block text-sm font-semibold text-accent-600 dark:text-accent-400">
                  Read more →
                </a>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-6xl px-6 pb-24 pt-20">
          <div className="rounded-[2rem] border border-slate-200 bg-slate-900 p-8 text-white dark:border-slate-700 dark:bg-slate-800 md:p-12">
            <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-end">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-400">Contact</p>
                <h2 className="mt-3 text-3xl font-bold md:text-4xl">Let’s create something meaningful together.</h2>
                <p className="mt-4 max-w-xl text-slate-300">
                  I’m open to product design, frontend development, and strategy collaborations for brands and founders who care about clarity, quality, and thoughtful outcomes.
                </p>
              </div>

              <div className="space-y-4">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="block rounded-full border border-slate-700 bg-slate-800 px-4 py-3 text-center text-sm font-medium text-slate-100 transition hover:border-slate-500 hover:bg-slate-700"
                  >
                    {social.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white/80 py-6 dark:border-slate-800 dark:bg-slate-950/60">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-slate-600 md:flex-row dark:text-slate-400">
          <p>© 2026 Your Name. All rights reserved.</p>
          <p>Built with Next.js + Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
}
