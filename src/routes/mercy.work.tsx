import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "../hooks/use-reveal";

export const Route = createFileRoute("/mercy/work")({
  head: () => ({
    meta: [
      { title: "Selected Work — Mercy Kehinde Olukolujo" },
      {
        name: "description",
        content:
          "Case studies from GenRev and GrubTrek: SaaS interface design, information hierarchy and conversion-focused landing pages.",
      },
      { property: "og:title", content: "Selected Work — Mercy Kehinde Olukolujo" },
      {
        property: "og:description",
        content: "Two SaaS products, from challenge to shipped interface.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Work,
});

const projects = [
  {
    client: "GenRev",
    kicker: "Modern SaaS platform",
    role: "Web Designer",
    href: "https://genrev.app/",
    blocks: [
      {
        h: "The challenge",
        p: "GenRev's interface had to carry a genuinely complex product — an AI system running across multiple social platforms — without overwhelming the people using it.",
      },
      {
        h: "The approach",
        p: "I audited the existing layout and navigation, then rebuilt the visual hierarchy around the tasks people actually do most: connecting accounts, reviewing generated posts, checking performance — rather than around the feature list.",
      },
      {
        h: "The solution",
        p: "A refined layout system, clearer navigation and a consistent type scale, with accessibility and mobile behaviour treated as first-class rather than an afterthought.",
      },
      {
        h: "The outcome",
        p: "A responsive interface that reads clearly on any screen and holds its clarity as new features land.",
      },
    ],
  },
  {
    client: "GrubTrek",
    kicker: "Restaurant management SaaS",
    role: "Lead Web Designer",
    href: "https://grubtrek.com/",
    blocks: [
      {
        h: "The challenge",
        p: "GrubTrek needed a landing page that could explain a broad product — POS, reservations, inventory, staff scheduling and reporting — without turning into a feature dump.",
      },
      {
        h: "The approach",
        p: "I ordered the page around one narrative thread instead of a feature grid: lead with the outcome restaurant owners care about, then let each section earn its place before asking for the signup.",
      },
      {
        h: "The solution",
        p: "One scroll that moves from what the product is, to why it matters, to proof — dashboard and POS screens, real-time reporting, results — each section setting up the next.",
      },
      {
        h: "The outcome",
        p: "A multi-feature restaurant platform that feels simple and immediately usable, on desktop and mobile alike.",
      },
    ],
  },
];

function Work() {
  return (
    <>
      <section className="relative border-b border-border overflow-hidden">
        <div className="glow-orb -top-32 left-1/3 w-[380px] h-[380px]" aria-hidden />
        <div className="relative mx-auto max-w-[1160px] px-6 py-24">
          <p className="text-[12px] uppercase tracking-[0.18em] text-accent font-semibold">Featured projects</p>
          <h1 className="mt-4 text-5xl md:text-6xl font-semibold leading-[1.05]">Selected work</h1>
          <p className="mt-5 max-w-2xl text-muted-foreground text-[17px] leading-relaxed">
            Two products, both live. Each one below covers the problem, the
            thinking, what I designed, and what it changed.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-[1160px] px-6 py-20 space-y-20">
        {projects.map((p, idx) => (
          <Reveal key={p.client}>
            <article className="rounded-2xl border border-border bg-card overflow-hidden">
              <div className="grid md:grid-cols-12">
                <div className="md:col-span-4 p-8 md:p-10 border-b md:border-b-0 md:border-r border-border">
                  <p className="font-mono text-sm text-accent">0{idx + 1}</p>
                  <h2 className="mt-4 text-3xl font-semibold">{p.client}</h2>
                  <p className="mt-2 text-muted-foreground">{p.kicker}</p>
                  <p className="mt-6 text-[12px] uppercase tracking-[0.16em] text-muted-foreground">Role</p>
                  <p className="text-foreground">{p.role}</p>
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-8 inline-flex items-center gap-2 rounded-full border border-accent/60 text-accent px-5 py-2.5 text-sm transition-colors hover:bg-accent hover:text-accent-foreground"
                  >
                    Visit website <span aria-hidden>↗</span>
                  </a>
                </div>
                <div className="md:col-span-8 p-8 md:p-10 grid sm:grid-cols-2 gap-8">
                  {p.blocks.map((b) => (
                    <div key={b.h}>
                      <h3 className="text-sm font-semibold text-accent">{b.h}</h3>
                      <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">{b.p}</p>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </>
  );
}
