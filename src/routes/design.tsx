import { createFileRoute } from "@tanstack/react-router";
import flowdriveShot from "../assets/flowdrive.png";
import markdropShot from "../assets/markdrop.png";

export const Route = createFileRoute("/design")({
  head: () => ({
    meta: [
      { title: "Design — Goodness Taiwo" },
      { name: "description", content: "Selected web and product design work by Goodness Taiwo, including Flowdrive and Markdrop." },
      { property: "og:title", content: "Design — Goodness Taiwo" },
      { property: "og:description", content: "Marketing sites and product pages shaped around voice, type and space." },
    ],
  }),
  component: Design,
});

type Project = {
  client: string;
  title: string;
  year: string;
  href: string;
  role: string;
  summary: string;
  shot: string;
  moves: string[];
};

const projects: Project[] = [
  {
    client: "Flowdrive",
    title: "Media hosting, dressed like a book cover.",
    year: "2024",
    href: "https://tryflowdrive.com/",
    role: "Web design · Brand type · Motion direction",
    summary:
      "Flowdrive is media hosting built for Webflow teams. The category is loud; the product is quiet and dependable. The site had to feel like the second thing — considered, editorial, calm — while still moving with the confidence of a tool you can hand to a team on a Monday.",
    shot: flowdriveShot,
    moves: [
      "A serif display headline doing the emotional work, sans-serif carrying the specifics.",
      "Warm off-white paper as the canvas, a single accent orange for anything you're meant to touch.",
      "Product footage held inside a rounded frame — the app appearing more like an artefact than a screenshot.",
      "Logos row treated as a quiet run of names rather than a wall of trust badges.",
    ],
  },
  {
    client: "Markdrop",
    title: "Client feedback, given a spine.",
    year: "2025",
    href: "https://markdrop.app/",
    role: "Web design · Landing · Onboarding UX",
    summary:
      "Markdrop pulls messy client feedback out of Slack, WhatsApp and Figma and into one place, pinned to the live site. The design had to make that promise legible in the first scroll — no diagrams, no jargon, just a screenshot that told the whole story.",
    shot: markdropShot,
    moves: [
      "A single, oversized headline that names the pain directly — no cleverness before the value has landed.",
      "Product screenshot placed as the hero image, angled slightly, so the tool is the argument.",
      "Integration marks shown as a small, familiar row — the visual equivalent of 'it plugs in where you already work'.",
      "Purple used sparingly, as punctuation, not as background — the palette carries authority instead of noise.",
    ],
  },
];

function Design() {
  return (
    <>
      <section className="mx-auto max-w-[1400px] px-6 md:px-10 pt-16 md:pt-24 pb-16">
        <p className="rise text-[11px] uppercase tracking-[0.28em] text-muted-foreground">Section III — Design</p>
        <h1 className="rise rise-delay-1 mt-6 font-display text-6xl md:text-[10vw] leading-[0.9] text-balance">
          Sites, in the wild.
        </h1>
        <p className="rise rise-delay-2 mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed">
          Two shipped marketing sites, both live. I designed the pages, shaped
          the type and — because I'm a writer too — sat inside the copy while
          the layout was being drawn.
        </p>
      </section>

      {projects.map((p, i) => (
        <section key={p.client} className={`border-t border-border ${i % 2 ? "bg-secondary/40" : ""}`}>
          <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-20 md:py-28">
            <div className="grid grid-cols-12 gap-8 items-end mb-10">
              <div className="col-span-12 md:col-span-8">
                <p className="text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
                  Project 0{i + 1} · {p.year}
                </p>
                <h2 className="mt-4 font-display text-5xl md:text-7xl leading-[0.95] text-balance">
                  {p.title}
                </h2>
              </div>
              <div className="col-span-12 md:col-span-4 md:text-right">
                <p className="text-xs text-muted-foreground">{p.role}</p>
                <a
                  href={p.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 mt-3 border-b border-foreground pb-1"
                >
                  Visit {p.client} <span className="text-accent">↗</span>
                </a>
              </div>
            </div>

            <a href={p.href} target="_blank" rel="noreferrer" className="group block hover-lift">
              <div className="aspect-[16/10] overflow-hidden bg-background border border-border shadow-[0_40px_100px_-60px_rgba(0,0,0,0.4)]">
                <img
                  src={p.shot}
                  alt={`${p.client} website`}
                  loading="lazy"
                  className="w-full h-full object-cover object-top transition-transform duration-[1200ms] group-hover:scale-[1.015]"
                />
              </div>
            </a>

            <div className="mt-14 grid grid-cols-12 gap-8">
              <div className="col-span-12 md:col-span-5">
                <p className="text-[11px] uppercase tracking-[0.24em] text-muted-foreground">Brief</p>
                <p className="mt-4 text-lg leading-relaxed">{p.summary}</p>
              </div>
              <div className="col-span-12 md:col-span-7">
                <p className="text-[11px] uppercase tracking-[0.24em] text-muted-foreground">Moves</p>
                <ol className="mt-4 divide-y divide-border">
                  {p.moves.map((m, idx) => (
                    <li key={idx} className="py-4 grid grid-cols-12 gap-4">
                      <span className="col-span-1 font-mono text-xs text-muted-foreground pt-1">0{idx + 1}</span>
                      <span className="col-span-11 leading-relaxed">{m}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="mx-auto max-w-[1400px] px-6 md:px-10 py-24 md:py-32 text-center">
        <p className="text-[11px] uppercase tracking-[0.28em] text-muted-foreground">More on request</p>
        <h2 className="mt-6 font-display text-5xl md:text-7xl leading-[0.95] text-balance">
          Case studies for private product work available on ask.
        </h2>
        <a
          href="mailto:goodypearls@gmail.com"
          className="inline-flex items-center gap-3 mt-10 bg-foreground text-background pl-6 pr-4 py-3 text-sm group"
        >
          Request the extended portfolio
          <span className="w-8 h-8 rounded-full bg-accent grid place-items-center text-background transition-transform group-hover:translate-x-1">→</span>
        </a>
      </section>
    </>
  );
}
