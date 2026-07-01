import { createFileRoute } from "@tanstack/react-router";
import * as React from "react";
import flowdriveShot from "../assets/flowdrive.png";
import markdropShot from "../assets/markdrop.png";
import { Reveal } from "../hooks/use-reveal";

export const Route = createFileRoute("/design")({
  head: () => ({
    meta: [
      { title: "Design — Goodness Taiwo" },
      { name: "description", content: "Selected web and product design work by Goodness Taiwo — Flowdrive, Markdrop, and the services in between." },
      { property: "og:title", content: "Design — Goodness Taiwo" },
      { property: "og:description", content: "Marketing sites and product pages shaped around voice, type and space." },
    ],
  }),
  component: Design,
});

// ————————————————————————————————————————
// What I do — design services
// ————————————————————————————————————————
const services: { title: string; body: string }[] = [
  {
    title: "Marketing sites",
    body: "End-to-end design for landing pages and marketing sites — from wireframe to production-ready file, with the copy sitting inside the layout as it's drawn.",
  },
  {
    title: "Brand & identity systems",
    body: "Type, colour, motion and spacing rules delivered as a working system — not a PDF that dies in a folder.",
  },
  {
    title: "Product & UI design",
    body: "Onboarding flows, dashboards and product surfaces designed for the person mid-task, not for the screenshot.",
  },
  {
    title: "Design in the browser",
    body: "I design in Figma but I stay close to the code. I hand off files that a real front-end team can actually build without a translator.",
  },
];

// ————————————————————————————————————————
// Projects
// ————————————————————————————————————————
type Project = {
  client: string;
  year: string;
  role: string;
  href: string;
  hrefLabel: string;
  headline: string;
  product: string;
  did: string[];
  moves: { label: string; body: string }[];
  shot: string;
  serial: string;
  accent: string;
};

const projects: Project[] = [
  {
    client: "Flowdrive",
    year: "2024",
    role: "Web design · Brand type · Motion direction",
    href: "https://tryflowdrive.com/",
    hrefLabel: "tryflowdrive.com",
    headline: "Media hosting, dressed like a book cover.",
    product:
      "Flowdrive is a media hosting service built for Webflow teams. It stores videos, images and files, streams them fast, and hands designers back the parts of their day they usually lose to file management. The category is loud and technical; the product is quiet and dependable. The website had to feel like the second thing.",
    did: [
      "Designed the full marketing site — hero, features, pricing, footer",
      "Set the type system: display serif for feeling, sans for the specifics",
      "Directed motion — quiet product footage held inside rounded frames",
      "Sat inside the copy while the layout was being drawn, so voice and design didn't disagree",
    ],
    moves: [
      { label: "Type", body: "A serif display headline doing the emotional work, sans-serif carrying the specifics." },
      { label: "Palette", body: "Warm off-white paper as the canvas, a single accent orange for anything you're meant to touch." },
      { label: "Product frame", body: "The app appears more like an artefact than a screenshot — rounded, held, considered." },
      { label: "Social proof", body: "Logos treated as a quiet run of names rather than a wall of trust badges." },
    ],
    shot: flowdriveShot,
    serial: "PD—01",
    accent: "oklch(0.68 0.18 55)",
  },
  {
    client: "Markdrop",
    year: "2025",
    role: "Web design · Landing · Onboarding UX",
    href: "https://markdrop.app/",
    hrefLabel: "markdrop.app",
    headline: "Client feedback, given a spine.",
    product:
      "Markdrop pulls messy client feedback out of Slack, WhatsApp and Figma comments and pins it directly onto the live site. Instead of a founder chasing five threads to find one piece of feedback, everything lives in one place — attached to the exact button or block it was about.",
    did: [
      "Designed the landing page top-to-bottom — hero, product story, pricing",
      "Rewrote the value proposition to fit in a single scroll",
      "Shaped the onboarding UX so first-run success is under a minute",
      "Placed integration marks as a familiar row — not a wall of logos",
    ],
    moves: [
      { label: "One promise", body: "A single, oversized headline that names the pain directly — no cleverness before the value has landed." },
      { label: "Product-as-argument", body: "The screenshot is the hero image, angled slightly, so the tool does the pitching." },
      { label: "Integrations", body: "A small, familiar row — the visual equivalent of 'it plugs in where you already work'." },
      { label: "Palette", body: "Purple used sparingly, as punctuation, not as background — the palette carries authority instead of noise." },
    ],
    shot: markdropShot,
    serial: "PD—02",
    accent: "oklch(0.6 0.22 300)",
  },
];

function Design() {
  return (
    <>
      {/* HERO */}
      <section className="mx-auto max-w-[1400px] px-6 md:px-10 pt-16 md:pt-28 pb-20">
        <Reveal>
          <p className="text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
            Section III — Design
          </p>
        </Reveal>
        <Reveal delay={120}>
          <h1 className="mt-6 font-display text-6xl md:text-[10vw] leading-[0.9] text-balance">
            Sites, <em className="italic text-accent">in the wild.</em>
          </h1>
        </Reveal>
        <div className="mt-10 grid grid-cols-12 gap-8">
          <Reveal delay={240} className="col-span-12 md:col-span-6 md:col-start-7">
            <p className="text-lg leading-relaxed text-muted-foreground">
              Two shipped marketing sites, both live. Below: a plain list of
              what I do as a designer, then each project explained the way I'd
              explain it to a founder — what the product is, what I did, and
              the specific moves that shaped the page.
            </p>
          </Reveal>
        </div>
      </section>

      {/* WHAT I DO */}
      <ServicesList />

      {/* PROJECTS */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 pt-24 pb-6 flex items-end justify-between">
          <div>
            <p className="text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
              Selected projects
            </p>
            <h2 className="mt-4 font-display text-5xl md:text-7xl leading-[0.95]">
              Shipped work.
            </h2>
          </div>
          <p className="hidden md:block text-xs uppercase tracking-[0.24em] text-muted-foreground">
            {projects.length.toString().padStart(2, "0")} live sites
          </p>
        </div>

        {projects.map((p, i) => (
          <ProjectBlock key={p.client} project={p} index={i} />
        ))}
      </section>

      {/* CLOSING */}
      <section className="mx-auto max-w-[1400px] px-6 md:px-10 py-24 md:py-32 text-center">
        <Reveal>
          <p className="text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
            More on request
          </p>
        </Reveal>
        <Reveal delay={120}>
          <h2 className="mt-6 font-display text-5xl md:text-7xl leading-[0.95] text-balance">
            Case studies for private product work available on ask.
          </h2>
        </Reveal>
        <Reveal delay={240}>
          <a
            href="mailto:goodypearls@gmail.com"
            className="inline-flex items-center gap-3 mt-10 bg-foreground text-background pl-6 pr-4 py-3 text-sm group"
          >
            Request the extended portfolio
            <span className="w-8 h-8 rounded-full bg-accent grid place-items-center text-background transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>
        </Reveal>
      </section>
    </>
  );
}

// ————————————————————————————————————————
// Services — animated list
// ————————————————————————————————————————
function ServicesList() {
  const [active, setActive] = React.useState<number | null>(null);
  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-20 md:py-28 grid grid-cols-12 gap-8">
        <div className="col-span-12 md:col-span-4">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
              What I do
            </p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-4 font-display text-4xl md:text-5xl leading-[1] text-balance">
              A web designer, in four modes.
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-6 text-sm text-muted-foreground max-w-xs leading-relaxed">
              Hover any line to see how it plays out in practice.
            </p>
          </Reveal>
        </div>

        <ol className="col-span-12 md:col-span-8" onMouseLeave={() => setActive(null)}>
          {services.map((s, i) => {
            const isActive = active === i;
            const dimmed = active !== null && !isActive;
            return (
              <Reveal key={s.title} delay={i * 70}>
                <li
                  onMouseEnter={() => setActive(i)}
                  className="group border-t border-border last:border-b py-6 md:py-8 cursor-pointer transition-all duration-500"
                  style={{
                    opacity: dimmed ? 0.25 : 1,
                    paddingLeft: isActive ? "1.5rem" : "0",
                  }}
                >
                  <div className="flex items-baseline gap-6">
                    <span className="font-mono text-xs text-muted-foreground w-10 shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3
                      className="font-display text-3xl md:text-5xl leading-[1] flex-1 text-balance transition-colors"
                      style={{ color: isActive ? "var(--accent)" : undefined }}
                    >
                      {s.title}
                    </h3>
                    <span
                      className="hidden md:inline text-accent text-2xl transition-transform"
                      style={{
                        transform: isActive ? "translateX(0)" : "translateX(-8px)",
                        opacity: isActive ? 1 : 0,
                      }}
                    >
                      →
                    </span>
                  </div>
                  <div
                    className="grid transition-all duration-500 ease-out"
                    style={{
                      gridTemplateRows: isActive ? "1fr" : "0fr",
                      opacity: isActive ? 1 : 0,
                    }}
                  >
                    <div className="overflow-hidden">
                      <p className="pt-5 pl-16 max-w-xl text-muted-foreground leading-relaxed">
                        {s.body}
                      </p>
                    </div>
                  </div>
                </li>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

// ————————————————————————————————————————
// Project block — with parallax preview
// ————————————————————————————————————————
function ProjectBlock({ project, index }: { project: Project; index: number }) {
  const wrapRef = React.useRef<HTMLDivElement | null>(null);
  const shotRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    const wrap = wrapRef.current;
    const shot = shotRef.current;
    if (!wrap || !shot) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const rect = wrap.getBoundingClientRect();
        const winH = window.innerHeight;
        const progress = 1 - (rect.top + rect.height / 2) / (winH + rect.height / 2);
        const clamped = Math.max(-0.5, Math.min(1.5, progress));
        shot.style.transform = `translate3d(0, ${(clamped - 0.5) * -40}px, 0)`;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section
      ref={wrapRef}
      className={`border-t border-border ${index % 2 ? "bg-secondary/40" : ""}`}
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-20 md:py-28">
        {/* Header */}
        <div className="grid grid-cols-12 gap-8 items-end mb-10">
          <div className="col-span-12 md:col-span-8">
            <Reveal>
              <p className="text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
                Project {String(index + 1).padStart(2, "0")} · {project.year} · {project.serial}
              </p>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="mt-4 font-display text-5xl md:text-7xl leading-[0.95] text-balance">
                {project.headline}
              </h2>
            </Reveal>
          </div>
          <div className="col-span-12 md:col-span-4 md:text-right">
            <Reveal delay={160}>
              <p className="text-xs text-muted-foreground">{project.role}</p>
              <a
                href={project.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 mt-3 border-b border-foreground pb-1 group"
              >
                {project.hrefLabel}
                <span
                  className="transition-transform group-hover:translate-x-1"
                  style={{ color: project.accent }}
                >
                  ↗
                </span>
              </a>
            </Reveal>
          </div>
        </div>

        {/* Live preview */}
        <Reveal delay={100}>
          <a
            href={project.href}
            target="_blank"
            rel="noreferrer"
            className="group block relative overflow-hidden bg-background border border-border shadow-[0_40px_100px_-60px_rgba(0,0,0,0.4)]"
          >
            {/* Browser chrome */}
            <div className="flex items-center gap-2 px-4 h-9 border-b border-border bg-secondary/50">
              <span className="w-2.5 h-2.5 rounded-full bg-muted-foreground/30" />
              <span className="w-2.5 h-2.5 rounded-full bg-muted-foreground/30" />
              <span className="w-2.5 h-2.5 rounded-full bg-muted-foreground/30" />
              <span className="ml-4 text-[11px] font-mono text-muted-foreground">
                {project.hrefLabel}
              </span>
              <span className="ml-auto text-[10px] uppercase tracking-[0.2em] text-muted-foreground group-hover:text-foreground transition-colors">
                Visit live ↗
              </span>
            </div>
            <div className="aspect-[16/10] overflow-hidden bg-muted">
              <div ref={shotRef} className="w-full h-[120%] will-change-transform">
                <img
                  src={project.shot}
                  alt={`${project.client} website`}
                  loading="lazy"
                  className="w-full h-full object-cover object-top transition-transform duration-[1200ms] group-hover:scale-[1.015]"
                />
              </div>
            </div>
            {/* accent bar */}
            <div
              className="absolute left-0 bottom-0 h-1 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700"
              style={{ background: project.accent, width: "100%" }}
            />
          </a>
        </Reveal>

        {/* Product + What I did + Moves */}
        <div className="mt-16 grid grid-cols-12 gap-8">
          <Reveal delay={100} className="col-span-12 md:col-span-4">
            <p className="text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
              The product
            </p>
            <p className="mt-4 text-[15px] leading-relaxed">{project.product}</p>
          </Reveal>

          <Reveal delay={200} className="col-span-12 md:col-span-4">
            <p className="text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
              What I did
            </p>
            <ul className="mt-4 space-y-3">
              {project.did.map((d, i) => (
                <li key={i} className="flex gap-3 group">
                  <span
                    className="font-mono text-[10px] pt-1.5 transition-colors"
                    style={{ color: project.accent }}
                  >
                    ✦
                  </span>
                  <span className="text-[15px] leading-relaxed">{d}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={300} className="col-span-12 md:col-span-4">
            <p className="text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
              Design moves
            </p>
            <ol className="mt-4 divide-y divide-border">
              {project.moves.map((m, i) => (
                <li key={i} className="py-3">
                  <p
                    className="text-[10px] font-mono uppercase tracking-[0.24em]"
                    style={{ color: project.accent }}
                  >
                    {String(i + 1).padStart(2, "0")} — {m.label}
                  </p>
                  <p className="mt-1 text-[14px] leading-relaxed text-muted-foreground">
                    {m.body}
                  </p>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
