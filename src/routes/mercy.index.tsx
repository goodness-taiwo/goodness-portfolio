import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "../hooks/use-reveal";

export const Route = createFileRoute("/mercy/")({
  head: () => ({
    meta: [
      { title: "Mercy Kehinde Olukolujo — Web Designer & UX Writer" },
      {
        name: "description",
        content:
          "Web designer and UX writer with four years building websites and product experiences for startups and growing businesses.",
      },
      { property: "og:title", content: "Mercy Kehinde Olukolujo — Web Designer & UX Writer" },
      {
        property: "og:description",
        content:
          "Interfaces people understand immediately, and copy that sounds like a person. Selected work: GenRev, GrubTrek, Zeus Labs, OnChain.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: MercyHome,
});

const stats = [
  { n: "4+", l: "Years of experience" },
  { n: "4", l: "Companies worked with" },
  { n: "20+", l: "Projects delivered" },
  { n: "100%", l: "Responsive by default" },
];

const process = [
  { n: "01", t: "Discover", d: "Understand the users, the business goal, and what \u201cdone well\u201d actually looks like." },
  { n: "02", t: "Strategy", d: "Map structure — content, flows and priorities — before any visual design starts." },
  { n: "03", t: "Design", d: "Build interfaces and write the copy alongside each other, not as separate passes." },
  { n: "04", t: "Refine", d: "Test, tighten and ship, then check it actually works on a real phone." },
];

function MercyHome() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 grid-lines opacity-40" aria-hidden />
        <div className="glow-orb -top-40 -right-32 w-[420px] h-[420px]" aria-hidden />
        <div className="relative mx-auto max-w-[1160px] px-6 pt-24 pb-24 md:pt-32 md:pb-28">
          <Reveal>
            <span className="inline-flex items-center gap-2.5 rounded-full border border-border bg-card px-3.5 py-1.5 text-[12px] text-muted-foreground">
              <span className="w-2 h-2 rounded-full bg-accent pulse-dot" />
              Available for freelance &amp; remote work
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-8 max-w-4xl text-[10vw] md:text-[64px] font-semibold leading-[1.02]">
              Design isn't decoration. It's how people{" "}
              <span className="text-accent">experience</span> your business.
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 text-[13px] uppercase tracking-[0.18em] text-accent font-medium">
              Web Designer · UX Writer
            </p>
          </Reveal>

          <Reveal delay={220}>
            <p className="mt-5 max-w-2xl text-[17px] leading-relaxed text-muted-foreground">
              I build websites and product experiences for startups and growing
              businesses — the kind that get used, not just looked at. Four
              years in, I still write every line of copy myself.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/mercy/work"
                className="rounded-full bg-accent text-accent-foreground px-6 py-3 text-sm font-medium transition-transform hover:-translate-y-0.5"
              >
                View my work
              </Link>
              <Link
                to="/mercy/contact"
                className="rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
              >
                Let's work together
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* STATS */}
      <section className="border-b border-border bg-card/40">
        <div className="mx-auto max-w-[1160px] px-6 grid grid-cols-2 md:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal
              key={s.l}
              delay={i * 70}
              className="py-10 px-2 border-border [&:nth-child(odd)]:border-r md:[&:nth-child(odd)]:border-r md:border-r last:border-r-0 [&:nth-child(-n+2)]:border-b md:[&:nth-child(-n+2)]:border-b-0"
            >
              <p className="text-4xl md:text-5xl font-semibold text-accent">{s.n}</p>
              <p className="mt-2 text-[13px] text-muted-foreground">{s.l}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ABOUT TEASER */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-[1160px] px-6 py-24 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <p className="text-[12px] uppercase tracking-[0.18em] text-accent font-semibold">About</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold leading-tight">
              Hi, I'm Mercy.<br />I make websites.
            </h2>
          </div>
          <div className="md:col-span-8 space-y-5 text-[16px] leading-relaxed text-muted-foreground">
            <p className="text-foreground text-xl leading-snug">
              Good design isn't only about beautiful interfaces — it's about
              helping people reach their goal with as little friction as
              possible.
            </p>
            <p>
              Over the last four years I've worked across web design and UX
              writing, building websites and digital products for startups and
              growing businesses. My process combines strategy, visual design
              and user-focused content, so what ships is both usable and worth
              looking at.
            </p>
            <p>
              Whether I'm designing a landing page, writing interface copy or
              repairing a user journey, the goal stays the same: build things
              people understand immediately, and remember after they leave.
            </p>
            <Link to="/mercy/about" className="inline-flex items-center gap-2 text-accent text-sm">
              More about how I work <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="border-b border-border bg-card/40">
        <div className="mx-auto max-w-[1160px] px-6 py-24">
          <Reveal>
            <p className="text-[12px] uppercase tracking-[0.18em] text-accent font-semibold">My process</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold">
              How a project moves from brief to launch
            </h2>
          </Reveal>
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((p, i) => (
              <Reveal key={p.n} delay={i * 90}>
                <div className="h-full rounded-xl border border-border bg-background p-6 transition-colors hover:border-accent/60">
                  <p className="font-mono text-sm text-accent">{p.n}</p>
                  <h3 className="mt-3 text-lg font-semibold">{p.t}</h3>
                  <p className="mt-2 text-[14.5px] leading-relaxed text-muted-foreground">{p.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WORK TEASER */}
      <section>
        <div className="mx-auto max-w-[1160px] px-6 py-24">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-[12px] uppercase tracking-[0.18em] text-accent font-semibold">Featured projects</p>
              <h2 className="mt-3 text-3xl md:text-4xl font-semibold">Selected work</h2>
            </div>
            <Link to="/mercy/work" className="text-sm text-accent">All projects →</Link>
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-6">
            {[
              { c: "GenRev", t: "Modern SaaS platform", r: "Web Designer", href: "https://genrev.app/" },
              { c: "GrubTrek", t: "Restaurant management SaaS", r: "Lead Web Designer", href: "https://grubtrek.com/" },
            ].map((p, i) => (
              <Reveal key={p.c} delay={i * 100}>
                <Link
                  to="/mercy/work"
                  className="group block h-full rounded-xl border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:border-accent/60"
                >
                  <p className="text-[12px] uppercase tracking-[0.16em] text-accent">{p.r}</p>
                  <h3 className="mt-3 text-2xl font-semibold">{p.c}</h3>
                  <p className="mt-2 text-muted-foreground">{p.t}</p>
                  <span className="mt-8 inline-flex items-center gap-2 text-sm text-accent">
                    Read the case study
                    <span className="transition-transform group-hover:translate-x-1" aria-hidden>→</span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
