import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "../hooks/use-reveal";
import { MercyFrame } from "../components/MercyFrame";
import mercyHero from "../assets/mercy-hero.jpg";
import genrevShot from "../assets/genrev.png";
import grubtrekShot from "../assets/grubtrek.png";

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

const marquee = [
  "GenRev",
  "GrubTrek",
  "Zeus Labs",
  "OnChain",
  "UX Writing",
  "Web Design",
];

const stats = [
  { n: "4+", l: "Years of experience" },
  { n: "4", l: "Companies worked with" },
  { n: "20+", l: "Projects delivered" },
  { n: "100%", l: "Responsive by default" },
];

const services = [
  { t: "Interface design", d: "Layout systems, states, spacing and type scales that hold up as the product grows." },
  { t: "Landing pages", d: "One scroll with a single argument — structure, copy and visuals decided together." },
  { t: "UX writing", d: "Buttons, empty states, errors and onboarding written so nobody has to guess." },
  { t: "Design systems", d: "Reusable components and tokens, documented so a front-end team can build without asking." },
  { t: "Technical docs", d: "Developer-facing writing that stays accurate as the product changes." },
  { t: "Handover", d: "Clean Figma files, named layers, responsive rules and specs the build can follow." },
];

const steps = ["Discover", "Strategy", "Design", "Refine"];

function MercyHome() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 grid-lines opacity-30" aria-hidden />
        <div className="glow-orb -top-40 -right-32 w-[460px] h-[460px]" aria-hidden />
        <div className="relative mx-auto max-w-[1240px] px-6 pt-20 pb-20 md:pt-28 md:pb-24 grid grid-cols-12 gap-10 items-center">
          <div className="col-span-12 lg:col-span-7">
            <p className="rise inline-flex items-center gap-2.5 rounded-full border border-border bg-card px-3.5 py-1.5 text-[12px] text-muted-foreground">
              <span className="w-2 h-2 rounded-full bg-accent pulse-dot" />
              Available for freelance &amp; remote work
            </p>
            <h1 className="rise rise-delay-1 mt-7 text-[9vw] md:text-[54px] font-semibold leading-[1.03] tracking-[-0.03em]">
              Design isn&apos;t decoration.<br />
              It&apos;s how people{" "}
              <span className="text-accent">experience</span> your business.
            </h1>
            <p className="rise rise-delay-2 mt-6 max-w-xl text-[16.5px] leading-relaxed text-muted-foreground">
              I&apos;m Mercy Kehinde Olukolujo — a web designer and UX writer.
              Four years building websites and product experiences for startups
              and growing businesses, where the interface and the words that
              live inside it are designed at the same time.
            </p>
            <div className="rise rise-delay-3 mt-9 flex flex-wrap items-center gap-4">
              <Link
                to="/mercy/work"
                className="group inline-flex items-center gap-3 rounded-full bg-accent text-accent-foreground pl-6 pr-3 py-2.5 text-sm font-medium transition-transform hover:-translate-y-0.5"
              >
                View my work
                <span className="w-7 h-7 rounded-full bg-accent-foreground/15 grid place-items-center transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Link>
              <Link
                to="/mercy/contact"
                className="rounded-full border border-border px-6 py-3 text-sm transition-colors hover:border-accent hover:text-accent"
              >
                Let&apos;s work together
              </Link>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-5 relative">
            <div className="rise rise-delay-2 relative rounded-2xl overflow-hidden border border-border aspect-[4/5]">
              <img
                src={mercyHero}
                alt="Abstract layered interface panels over an emerald wireframe grid"
                width={1280}
                height={1600}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />
            </div>
            <div className="rise rise-delay-3 absolute -bottom-6 -left-4 md:-left-8 rounded-xl border border-border bg-card px-5 py-4 max-w-[230px]">
              <p className="text-[10px] uppercase tracking-[0.22em] text-accent">Currently</p>
              <p className="text-sm mt-1.5 leading-snug text-muted-foreground">
                Designing SaaS interfaces and writing the copy that ships with them.
              </p>
            </div>
          </div>
        </div>

        {/* marquee */}
        <div className="border-t border-border overflow-hidden py-4">
          <div className="marquee flex whitespace-nowrap gap-14 text-xl md:text-2xl font-semibold text-muted-foreground">
            {[...marquee, ...marquee].map((c, i) => (
              <span key={i} className="flex items-center gap-14">
                {c}
                <span className="text-accent">◆</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-b border-border bg-card/40">
        <div className="mx-auto max-w-[1240px] px-6 grid grid-cols-2 md:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal
              key={s.l}
              delay={i * 70}
              className="py-10 px-2 border-border [&:nth-child(odd)]:border-r md:border-r last:border-r-0 [&:nth-child(-n+2)]:border-b md:[&:nth-child(-n+2)]:border-b-0"
            >
              <p className="text-4xl md:text-5xl font-semibold text-accent">{s.n}</p>
              <p className="mt-2 text-[13px] text-muted-foreground">{s.l}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-[1240px] px-6 py-24 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <p className="text-[12px] uppercase tracking-[0.18em] text-accent font-semibold">01 — About</p>
          </div>
          <div className="md:col-span-8">
            <Reveal>
              <p className="text-2xl md:text-[34px] leading-[1.25] tracking-[-0.02em]">
                Good design isn&apos;t only about beautiful interfaces — it&apos;s
                about helping people reach their goal with as little friction as
                possible.
              </p>
            </Reveal>
            <div className="mt-8 grid md:grid-cols-2 gap-8 text-[15.5px] leading-relaxed text-muted-foreground">
              <p>
                Over four years I&apos;ve worked across web design and UX
                writing, building websites and digital products for startups and
                growing businesses. Structure, visual design and content get
                decided together, so what ships is usable as well as worth
                looking at.
              </p>
              <p>
                I&apos;ve written developer documentation at{" "}
                <span className="text-foreground">Zeus Labs</span>, shaped Web3
                content and product copy at{" "}
                <span className="text-foreground">OnChain Corporation</span>,
                and designed SaaS interfaces and landing pages for{" "}
                <span className="text-foreground">GenRev</span> and{" "}
                <span className="text-foreground">GrubTrek</span>.
              </p>
            </div>
            <Link to="/mercy/about" className="mt-8 inline-flex items-center gap-2 text-accent text-sm">
              More about how I work <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES — hover reveal */}
      <section className="border-b border-border bg-card/40">
        <div className="mx-auto max-w-[1240px] px-6 py-24 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <p className="text-[12px] uppercase tracking-[0.18em] text-accent font-semibold">02 — What I do</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-[-0.02em]">
              Hover any line to see how it plays out.
            </h2>
          </div>
          <ul className="md:col-span-8 divide-y divide-border border-y border-border">
            {services.map((s, i) => (
              <li key={s.t} className="group">
                <div className="py-6 grid grid-cols-12 gap-4 items-baseline transition-colors">
                  <span className="col-span-2 font-mono text-xs text-muted-foreground">
                    0{i + 1}
                  </span>
                  <h3 className="col-span-10 text-xl md:text-2xl font-medium transition-colors group-hover:text-accent">
                    {s.t}
                  </h3>
                  <p className="col-span-12 md:col-start-3 md:col-span-10 max-h-0 overflow-hidden opacity-0 text-[15px] leading-relaxed text-muted-foreground transition-all duration-500 group-hover:max-h-40 group-hover:opacity-100 group-hover:mt-3">
                    {s.d}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* WORK */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-[1240px] px-6 py-24">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-12">
            <div>
              <p className="text-[12px] uppercase tracking-[0.18em] text-accent font-semibold">03 — Selected work</p>
              <h2 className="mt-3 text-4xl md:text-5xl font-semibold tracking-[-0.02em]">Live in the browser.</h2>
            </div>
            <Link to="/mercy/work" className="text-sm text-accent">All projects →</Link>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {[
              { c: "GenRev", t: "Modern SaaS platform", r: "Web Designer", href: "https://genrev.app/", img: genrevShot, label: "genrev.app" },
              { c: "GrubTrek", t: "Restaurant management SaaS", r: "Lead Web Designer", href: "https://grubtrek.com/", img: grubtrekShot, label: "grubtrek.com" },
            ].map((p, i) => (
              <Reveal key={p.c} delay={i * 100}>
                <MercyFrame src={p.img} alt={`${p.c} website`} label={p.label} />
                <div className="mt-5 flex items-start justify-between gap-6">
                  <div>
                    <h3 className="text-2xl font-semibold">{p.c}</h3>
                    <p className="mt-1 text-muted-foreground text-[15px]">{p.t}</p>
                    <p className="mt-1 text-[12px] uppercase tracking-[0.16em] text-accent">{p.r}</p>
                  </div>
                  <Link to="/mercy/work" className="shrink-0 text-sm text-accent whitespace-nowrap">
                    Case study →
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section>
        <div className="mx-auto max-w-[1240px] px-6 py-24 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <p className="text-[12px] uppercase tracking-[0.18em] text-accent font-semibold">04 — How I work</p>
            <h2 className="mt-3 text-4xl md:text-5xl font-semibold tracking-[-0.02em]">How I work.</h2>
          </div>
          <ol className="md:col-span-8 divide-y divide-border border-y border-border">
            {steps.map((h, i) => (
              <li key={h} className="py-7 grid grid-cols-12 gap-4 items-center">
                <span className="col-span-2 font-mono text-xs text-muted-foreground">0{i + 1}</span>
                <h3 className="col-span-10 text-2xl md:text-3xl font-medium">{h}</h3>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
