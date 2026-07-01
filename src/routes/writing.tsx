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
    kind: "Brand launch · Creative writer",
    title: "A room, and then a network.",
    intro:
      "The brief was to launch an app. The real work was to write down what we already were before there was software — a room a Black woman could walk into and set her whole self down.",
    pull:
      "We didn't want to build a platform. We wanted to build the feeling of a friend saving you a seat.",
    did: [
      "Wrote the brand narrative, tagline and homepage from scratch",
      "Built a tone-of-voice guide the wider team could write in",
      "Named product surfaces and shaped the launch essay",
      "Sat with founders on messaging until the whole company sounded like one person",
    ],
    body: [
      "Before Black Women App was an app, it was a room. A group chat, a series of voice notes at midnight, a shared document where somebody had begun a sentence and three other women had finished it. The product had to prove it could hold that.",
      "For the launch, we wrote in the second person and stayed there. No 'users'. No 'community members'. You. Because the woman on the other side of the screen didn't need another platform to sign up for; she needed to feel recognised in the first eight seconds.",
      "The homepage was three moves: a promise, a proof, and an open door. Everything else — the features, the roadmap, the polite tour — waited politely on the second page. It converted better than any version we tested against.",
    ],
    tone: { bg: "oklch(0.92 0.03 40)", ink: "oklch(0.22 0.02 40)", accent: "oklch(0.55 0.16 30)" },
    serial: "PW—01",
  },
  {
    client: "Lorchain Labs",
    year: "2024",
    kind: "Brand & technical writer",
    title: "Documentation, written like it wants to be read.",
    intro:
      "Most developer documentation forgets there is a human on the other side of the screen, half a coffee in, trying to ship before standup. I rewrote Lorchain's developer surface with that person in mind.",
    pull:
      "A good doc doesn't just answer the question. It quietly reassures you that you're not stupid for asking it.",
    did: [
      "Rewrote the developer documentation from the reader's task down, not the API up",
      "Tightened brand voice: retired 'seamless', 'leverage', 'reimagined' — on paper",
      "Wrote quickstarts, error messages and CLI copy",
      "Sat with engineers to translate correct-but-unreadable prose into plain English",
    ],
    body: [
      "The original documentation was correct and unreadable — a common combination. Every page assumed you already understood the thing you'd come to the page to understand. We reversed the order: start with what the developer is actually trying to do, then hand them the smallest possible amount of API to do it.",
      "In parallel, we tightened the brand voice: warm, exact, allergic to jargon. What replaced the tired words were verbs that describe what the product actually does — the kind of language a senior engineer uses when they've stopped trying to impress anybody.",
      "Support tickets on the affected surfaces dropped noticeably in the following weeks. That, for a technical writer, is the only review that counts.",
    ],
    tone: { bg: "oklch(0.24 0.02 250)", ink: "oklch(0.96 0.01 85)", accent: "oklch(0.75 0.14 200)" },
    serial: "PW—02",
  },
  {
    client: "Whizzcard",
    year: "2023",
    kind: "Brand writer · Fintech",
    title: "Money, without the theatre.",
    intro:
      "Fintech has a tendency to shout. Whizzcard is a card, not a rocket ship, and the audience knows the difference. The job was to sound like a company that respects your intelligence and your inbox.",
    pull:
      "One card. Three sentences. A promise the product could actually keep.",
    did: [
      "Rewrote homepage, product pages and onboarding copy",
      "Retired the tired fintech lexicon and wrote a short, defensible replacement",
      "Sharpened push notifications, receipts and transactional emails",
      "Delivered a lightweight tone-of-voice sheet the team still uses",
    ],
    body: [
      "We started by writing down every phrase the category had exhausted — 'the future of', 'reimagined', 'seamless', 'financial freedom' — and agreed, on paper, never to use them. That single constraint did most of the work.",
      "The homepage became almost embarrassingly short. A hero of one line and a subhead. A single card, angled just so. Three benefits, one per sentence, each phrased the way a friend would say it if you asked, over dinner, why you'd want the thing. No fireworks.",
      "For the onboarding, we wrote every screen as if the user was already mid-task and mildly annoyed at being interrupted — which, on a phone, they usually are. The copy shrank. The completion rate didn't.",
    ],
    tone: { bg: "oklch(0.94 0.04 140)", ink: "oklch(0.2 0.02 140)", accent: "oklch(0.55 0.14 150)" },
    serial: "PW—03",
  },
  {
    client: "Independent",
    year: "2025",
    kind: "Essay · Craft",
    title: "On writing for founders who don't like writing.",
    intro:
      "A short essay on how I pull a company's voice out of Slack messages, half-finished decks and one very good voice note — and turn it into something a stranger could love.",
    pull:
      "Voice isn't invented in a workshop. It's overheard, then written down carefully.",
    did: [
      "Ongoing personal essay series on brand voice and craft",
      "Written to double as a working method for founder clients",
    ],
    body: [
      "Founders who dislike writing tend to be excellent talkers. That's the material. I ask for a thirty-minute call, no slides, and I record it. What I'm listening for isn't the pitch — I've read the pitch — it's the aside. The place where the founder forgets they're being watched and describes the product the way they'd describe it to a friend at a dinner they didn't want to attend.",
      "Then I go home and I write down that voice. I don't invent, I don't sprinkle. I just remove the ums and put a paragraph break where the pause was. Nine times out of ten, that's the copy.",
      "The tenth time is a rewrite, because sometimes the founder is trying, in real time, to convince themselves. That's a different job — a slower one — and it's the one I like most.",
    ],
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
            The written <em className="italic text-accent">work.</em>
          </h1>
        </Reveal>
        <div className="mt-10 grid grid-cols-12 gap-8">
          <Reveal delay={240} className="col-span-12 md:col-span-6 md:col-start-7">
            <p className="text-lg leading-relaxed text-muted-foreground">
              Writing is a service before it's an artefact. Below is a plain
              list of what I actually do for founders and product teams —
              followed by four pieces from shipped work, each with the exact
              part I owned.
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
            href="mailto:goodypearls@gmail.com"
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
              Hover a role to read it. Most engagements are a mix of two or
              three — never all six at once.
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
