import { createFileRoute } from "@tanstack/react-router";
import * as React from "react";
import { Reveal } from "../hooks/use-reveal";

export const Route = createFileRoute("/writing")({
  head: () => ({
    meta: [
      { title: "Writing — Goodness Taiwo" },
      { name: "description", content: "Brand voice, launch essays, product copy and technical writing by Goodness Taiwo — for Black Women App, Lorchain Labs, Whizzcard and others." },
      { property: "og:title", content: "Writing — Goodness Taiwo" },
      { property: "og:description", content: "What a brand & creative writer actually does — and the work to prove it." },
    ],
  }),
  component: Writing,
});

// ————————————————————————————————————————
// What a brand & creative writer does
// ————————————————————————————————————————
const services: { title: string; body: string }[] = [
  {
    title: "Brand voice & messaging",
    body: "Finding the sentence a company was already trying to say — then turning it into a tone of voice guide anyone on the team can write in.",
  },
  {
    title: "Launch & landing copy",
    body: "Homepages, product pages, launch essays. The kind of writing where every line has to earn the next scroll.",
  },
  {
    title: "Product & UX writing",
    body: "Empty states, onboarding, buttons, error messages — the small copy that decides whether a product feels human or hostile.",
  },
  {
    title: "Editorial & long-form",
    body: "Founder essays, changelogs written like a letter, and long-form pieces that give a brand a mind, not just a mouth.",
  },
  {
    title: "Technical & developer writing",
    body: "Docs, API references, and quickstarts written for a real person mid-task — not a spec sheet performing seriousness.",
  },
  {
    title: "Content systems",
    body: "Style guides, glossaries, and voice rules so the writing stays consistent long after I've handed the file over.",
  },
];

// ————————————————————————————————————————
// Selected work — with clear "what I did"
// ————————————————————————————————————————
type Piece = {
  client: string;
  year: string;
  kind: string;
  title: string;
  intro: string;
  pull: string;
  did: string[];
  body: string[];
  tone: { bg: string; ink: string; accent: string };
  serial: string;
};

const pieces: Piece[] = [
  {
    client: "Black Women App (BWA)",
    year: "2024",
    kind: "Brand launch · Creative lead",
    title: "Black Women App — brand voice and launch copy.",
    intro: "",
    pull: "",
    did: [
      "Developed the full brand narrative — mission statement, positioning, and the story used across launch, press and investor materials",
      "Wrote the tone-of-voice guide (principles, do/don't examples, vocabulary sheet) that the wider team writes in",
      "Wrote every line of homepage copy — hero, feature sections, social proof, footer CTA",
      "Wrote in-app microcopy: onboarding, empty states, notifications, transactional emails",
      "Named the core product surfaces so navigation and marketing use the same vocabulary",
      "Wrote the launch essay and supporting social captions for launch week",
    ],
    body: [],
    tone: { bg: "oklch(0.92 0.03 40)", ink: "oklch(0.22 0.02 40)", accent: "oklch(0.55 0.16 30)" },
    serial: "PW—01",
  },
  {
    client: "Lorchain Labs",
    year: "2024",
    kind: "Brand & technical writer",
    title: "Lorchain Labs — brand copy and developer documentation.",
    intro: "",
    pull: "",
    did: [
      "Rewrote the marketing site copy — homepage, product pages, pricing and about",
      "Restructured the developer documentation from a task-first perspective (what the developer is trying to do), rather than an API-reference dump",
      "Wrote quickstarts, tutorials and CLI reference pages, tested against the actual product before publishing",
      "Sharpened error messages and inline hints so failure states told the developer what to try next",
      "Defined a brand voice guide the engineering team could use for release notes and changelogs",
      "Ran editorial passes with engineers to translate correct-but-dense prose into plain, usable English",
    ],
    body: [],
    tone: { bg: "oklch(0.24 0.02 250)", ink: "oklch(0.96 0.01 85)", accent: "oklch(0.75 0.14 200)" },
    serial: "PW—02",
  },
  {
    client: "Whizzcard",
    year: "2023",
    kind: "Brand writer · Fintech",
    title: "Whizzcard — product voice and onboarding copy.",
    intro: "",
    pull: "",
    did: [
      "Rewrote homepage and product page copy for clarity and conversion",
      "Wrote the end-to-end onboarding flow — KYC prompts, verification screens, success states",
      "Wrote transactional copy: receipts, push notifications, statement descriptions and support responses",
      "Retired category clichés and delivered a short, defensible replacement vocabulary the team still uses",
      "Wrote lifecycle emails (welcome, activation, re-engagement) with a consistent tone across touchpoints",
      "Delivered a lightweight voice sheet with sample sentences for common product moments",
    ],
    body: [],
    tone: { bg: "oklch(0.94 0.04 140)", ink: "oklch(0.2 0.02 140)", accent: "oklch(0.55 0.14 150)" },
    serial: "PW—03",
  },
  {
    client: "Independent",
    year: "2025",
    kind: "Essay · Craft",
    title: "Writing for founders who want a better copy.",
    intro: "",
    pull: "",
    did: [
      "Ongoing essay series on brand voice, positioning and copy for early-stage founders",
      "Published as a repeatable method — extracting a founder's real voice from calls, decks and product conversations",
      "Used as a working reference on client engagements to align on tone before writing begins",
    ],
    body: [],
    tone: { bg: "oklch(0.18 0.01 60)", ink: "oklch(0.96 0.01 85)", accent: "oklch(0.72 0.16 60)" },
    serial: "PW—04",
  },
];

function Writing() {
  return (
    <>
      {/* HERO */}
      <section className="mx-auto max-w-[1400px] px-6 md:px-10 pt-16 md:pt-28 pb-20">
        <Reveal>
          <p className="text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
            Section II — Writing
          </p>
        </Reveal>
        <Reveal delay={120}>
          <h1 className="mt-6 font-display text-6xl md:text-[10vw] leading-[0.9] text-balance">
            Writing, <em className="italic text-accent">on the page.</em>
          </h1>
        </Reveal>
        <div className="mt-10 grid grid-cols-12 gap-8">
          <Reveal delay={240} className="col-span-12 md:col-span-6 md:col-start-7">
            <p className="text-lg leading-relaxed text-muted-foreground">
              A plain list of what I do as a brand and creative writer,
              followed by selected pieces from shipped work — each with the
              exact part I owned.
            </p>
          </Reveal>
        </div>
      </section>

      {/* WHAT I DO — big animated list, boridesigns-style */}
      <ServicesList />

      {/* SELECTED PIECES */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 pt-24 pb-6 flex items-end justify-between">
          <div>
            <p className="text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
              Selected pieces
            </p>
            <h2 className="mt-4 font-display text-5xl md:text-7xl leading-[0.95]">
              Publication excerpts.
            </h2>
          </div>
          <p className="hidden md:block text-xs uppercase tracking-[0.24em] text-muted-foreground">
            {pieces.length.toString().padStart(2, "0")} pieces
          </p>
        </div>

        {pieces.map((p, i) => (
          <PieceBlock key={p.title} piece={p} index={i} />
        ))}
      </section>

      {/* CLOSING */}
      <section className="mx-auto max-w-[1400px] px-6 md:px-10 py-24 md:py-32 text-center">
        <Reveal>
          <p className="text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
            Also on request
          </p>
        </Reveal>
        <Reveal delay={120}>
          <h2 className="mt-6 font-display text-5xl md:text-7xl leading-[0.95] text-balance">
            NDA'd voice work, product copy and internal writing systems.
          </h2>
        </Reveal>
        <Reveal delay={240}>
          <a
            href="mailto:goodness.a.olu@gmail.com"
            className="inline-flex items-center gap-3 mt-10 bg-foreground text-background pl-6 pr-4 py-3 text-sm group"
          >
            Ask for the extended reel
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
// Hoverable services list
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
              A brand &amp; creative writer, in six roles.
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-6 text-sm text-muted-foreground max-w-xs leading-relaxed">
              Hover a role. Most engagements are a mix of two or three.
            </p>
          </Reveal>
        </div>

        <ol
          className="col-span-12 md:col-span-8"
          onMouseLeave={() => setActive(null)}
        >
          {services.map((s, i) => {
            const isActive = active === i;
            const dimmed = active !== null && !isActive;
            return (
              <Reveal key={s.title} delay={i * 60}>
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
                        transform: isActive ? "translateX(0) rotate(0deg)" : "translateX(-8px) rotate(-45deg)",
                        opacity: isActive ? 1 : 0,
                      }}
                    >
                      →
                    </span>
                  </div>
                  <div
                    className="grid transition-all duration-500 ease-out"
                    style={{
                      gridTemplateRows: "0fr",
                      opacity: 0,
                    }}
                  >
                    <div className="overflow-hidden" />
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
// Single piece — no image, editorial "cover card" instead
// ————————————————————————————————————————
function PieceBlock({ piece, index }: { piece: Piece; index: number }) {
  return (
    <article className="border-t border-border">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-20 md:py-28 grid grid-cols-12 gap-8">
        {/* Cover card — pure typography */}
        <div className="col-span-12 md:col-span-5">
          <div className="sticky top-24">
            <Reveal>
              <div
                className="relative aspect-[4/5] grain overflow-hidden flex flex-col justify-between p-8 md:p-10 hover-lift"
                style={{
                  background: piece.tone.bg,
                  color: piece.tone.ink,
                }}
              >
                <div className="flex items-start justify-between text-[10px] uppercase tracking-[0.28em] opacity-70">
                  <span>{piece.serial}</span>
                  <span>{piece.year}</span>
                </div>
                <div>
                  <p
                    className="font-mono text-[10px] uppercase tracking-[0.24em] mb-4"
                    style={{ color: piece.tone.accent }}
                  >
                    ✦ {piece.kind}
                  </p>
                  <p
                    className="font-display italic text-2xl md:text-3xl leading-[1.15] text-balance"
                    style={{ color: piece.tone.ink }}
                  >
                    “{piece.pull}”
                  </p>
                  <div
                    className="mt-6 h-px w-16"
                    style={{ background: piece.tone.accent }}
                  />
                  <p className="mt-4 font-display text-lg" style={{ color: piece.tone.ink }}>
                    {piece.client}
                  </p>
                </div>
                {/* corner marks */}
                <span className="absolute top-3 left-3 w-3 h-3 border-t border-l" style={{ borderColor: piece.tone.ink, opacity: 0.4 }} />
                <span className="absolute top-3 right-3 w-3 h-3 border-t border-r" style={{ borderColor: piece.tone.ink, opacity: 0.4 }} />
                <span className="absolute bottom-3 left-3 w-3 h-3 border-b border-l" style={{ borderColor: piece.tone.ink, opacity: 0.4 }} />
                <span className="absolute bottom-3 right-3 w-3 h-3 border-b border-r" style={{ borderColor: piece.tone.ink, opacity: 0.4 }} />
              </div>
            </Reveal>
          </div>
        </div>

        {/* Body */}
        <div className="col-span-12 md:col-span-7">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
              Piece {String(index + 1).padStart(2, "0")} · {piece.kind}
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-4 font-display text-5xl md:text-6xl leading-[0.98] text-balance">
              {piece.title}
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground max-w-xl">
              {piece.intro}
            </p>
          </Reveal>

          {/* What I did */}
          <Reveal delay={220}>
            <div className="mt-12">
              <p className="text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
                What I did
              </p>
              <ul className="mt-4 divide-y divide-border max-w-xl">
                {piece.did.map((d, idx) => (
                  <li key={idx} className="py-3 grid grid-cols-[auto_1fr] gap-4 items-start group">
                    <span className="font-mono text-[10px] text-muted-foreground pt-1.5 transition-colors group-hover:text-accent">
                      ✦
                    </span>
                    <span className="leading-relaxed">{d}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Excerpt body */}
          <Reveal delay={260}>
            <div className="mt-12">
              <p className="text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
                From the piece
              </p>
              <div className="mt-4 space-y-6 max-w-xl text-[15px] leading-relaxed">
                {piece.body.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </article>
  );
}
