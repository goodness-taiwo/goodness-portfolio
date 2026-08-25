import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "../hooks/use-reveal";

export const Route = createFileRoute("/mercy/about")({
  head: () => ({
    meta: [
      { title: "About — Mercy Kehinde Olukolujo" },
      {
        name: "description",
        content:
          "Four years across web design and UX writing — experience at Zeus Labs and OnChain Corporation, plus the skills and tools behind the work.",
      },
      { property: "og:title", content: "About — Mercy Kehinde Olukolujo" },
      {
        property: "og:description",
        content: "How I work, where I've worked, and what I bring to a project.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

const experience = [
  {
    role: "Technical Writer",
    org: "Zeus Labs",
    period: "2023 — 2024",
    points: [
      "Wrote and maintained developer-facing documentation, turning engineering detail into instructions people could follow on the first read.",
      "Built content structures and templates that kept documentation consistent as the product changed.",
      "Worked directly with engineers to keep every published page accurate.",
    ],
  },
  {
    role: "Content & UX Writer",
    org: "OnChain Corporation",
    period: "2022 — 2023",
    points: [
      "Produced blockchain and Web3 content for a non-specialist audience without flattening the technical substance.",
      "Wrote interface copy, onboarding flows and educational material for product users.",
      "Set a consistent brand voice across marketing and in-product writing.",
    ],
  },
];

const skills = [
  { g: "Design", items: ["UI design", "Responsive layout", "Design systems", "Wireframing", "Prototyping", "Visual hierarchy"] },
  { g: "Writing", items: ["UX writing", "Technical documentation", "Web copy", "Content strategy", "Editing", "Brand voice"] },
  { g: "Tools", items: ["Figma", "Webflow", "Framer", "Notion", "HTML & CSS", "Design handoff"] },
];

function About() {
  return (
    <>
      <section className="relative border-b border-border overflow-hidden">
        <div className="absolute inset-0 grid-lines opacity-30" aria-hidden />
        <div className="glow-orb -bottom-40 -left-24 w-[400px] h-[400px]" aria-hidden />
        <div className="relative mx-auto max-w-[1160px] px-6 py-24 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <p className="text-[12px] uppercase tracking-[0.18em] text-accent font-semibold">About me</p>
            <h1 className="mt-4 text-5xl md:text-6xl font-semibold leading-[1.05]">
              Hi, I'm Mercy.
            </h1>
            <p className="mt-4 text-accent text-[15px]">Web Designer &amp; UX Writer</p>
          </div>
          <div className="md:col-span-7 space-y-5 text-[16.5px] leading-relaxed text-muted-foreground">
            <p className="text-foreground text-xl leading-snug">
              I believe good design isn't only about beautiful interfaces — it's
              about helping people get where they're going without friction.
            </p>
            <p>
              For four years I've worked across web design and UX writing,
              building websites and digital products for startups and growing
              businesses. That mix means I don't hand off a layout and hope
              someone fills in the words: structure, visual design and content
              get decided together.
            </p>
            <p>
              I've written developer documentation at Zeus Labs, shaped Web3
              content and product copy at OnChain Corporation, and designed
              SaaS interfaces and landing pages for GenRev and GrubTrek. The
              through-line is the same in each: make it clear first, then make
              it beautiful.
            </p>
            <p>
              I work remotely, I stay close to the front-end team, and I care
              about how a page behaves on a real phone as much as how it looks
              in a Figma frame.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-card/40">
        <div className="mx-auto max-w-[1160px] px-6 py-24">
          <p className="text-[12px] uppercase tracking-[0.18em] text-accent font-semibold">Experience</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold">Where I've worked</h2>

          <div className="mt-14 space-y-6">
            {experience.map((e, i) => (
              <Reveal key={e.org} delay={i * 90}>
                <div className="rounded-xl border border-border bg-background p-8 grid md:grid-cols-12 gap-6 transition-colors hover:border-accent/60">
                  <div className="md:col-span-4">
                    <h3 className="text-xl font-semibold">{e.role}</h3>
                    <p className="mt-1 text-accent text-[15px]">{e.org}</p>
                    <p className="mt-1 font-mono text-[13px] text-muted-foreground">{e.period}</p>
                  </div>
                  <ul className="md:col-span-8 space-y-3 text-[15px] leading-relaxed text-muted-foreground">
                    {e.points.map((p) => (
                      <li key={p} className="flex gap-3">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent shrink-0" aria-hidden />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-[1160px] px-6 py-24">
          <p className="text-[12px] uppercase tracking-[0.18em] text-accent font-semibold">Skills</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold">What I bring</h2>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {skills.map((s, i) => (
              <Reveal key={s.g} delay={i * 90}>
                <div className="h-full rounded-xl border border-border bg-card p-7">
                  <h3 className="text-lg font-semibold">{s.g}</h3>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {s.items.map((it) => (
                      <li
                        key={it}
                        className="rounded-full border border-border px-3 py-1.5 text-[13px] text-muted-foreground"
                      >
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-16">
            <Link
              to="/mercy/contact"
              className="inline-flex rounded-full bg-accent text-accent-foreground px-6 py-3 text-sm font-medium transition-transform hover:-translate-y-0.5"
            >
              Start a project
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
