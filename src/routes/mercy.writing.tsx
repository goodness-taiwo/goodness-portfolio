import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "../hooks/use-reveal";
import zeusCover from "../assets/mercy-zeus.jpg";
import onchainCover from "../assets/mercy-onchain.jpg";
import heroArt from "../assets/mercy-hero.jpg";

export const Route = createFileRoute("/mercy/writing")({
  head: () => ({
    meta: [
      { title: "Writing — Mercy Kehinde Olukolujo" },
      {
        name: "description",
        content:
          "UX writing, technical documentation and Web3 content: work from Zeus Labs, OnChain Corporation and product interface copy.",
      },
      { property: "og:title", content: "Writing — Mercy Kehinde Olukolujo" },
      {
        property: "og:description",
        content: "Documentation, interface copy and brand voice for technical products.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Writing,
});

const services = [
  "UX & interface copy",
  "Technical documentation",
  "Content strategy",
  "Brand voice",
  "Onboarding flows",
  "Editing & rewrites",
];

const pieces = [
  {
    client: "Zeus Labs",
    role: "Technical Writer",
    period: "2023 — 2024",
    img: zeusCover,
    did: [
      "Owned the developer documentation set: getting started, API references, integration guides and troubleshooting.",
      "Interviewed engineers, read the code paths, and turned implementation detail into steps a developer could follow on the first read.",
      "Built templates and a structure standard so every new page shipped with the same anatomy — purpose, prerequisites, steps, expected result, failure cases.",
      "Set up a review loop with engineering so docs were updated in the same cycle as the feature, not weeks after.",
      "Rewrote legacy pages for scannability: shorter sentences, real code samples, headings that match what people actually search for.",
    ],
  },
  {
    client: "OnChain Corporation",
    role: "Content & UX Writer",
    period: "2022 — 2023",
    img: onchainCover,
    did: [
      "Wrote blockchain and Web3 explainers for a non-specialist audience without flattening the technical substance.",
      "Produced in-product copy: onboarding, wallet connection flows, transaction states, confirmations and error messages.",
      "Defined the brand voice — terms to use, terms to avoid, tone in success versus failure — and applied it across marketing and product.",
      "Built an editorial pipeline with briefs, outlines and review stages so publishing stayed consistent week to week.",
      "Edited contributor drafts to a single standard before publication.",
    ],
  },
  {
    client: "Product work",
    role: "UX Writing — GenRev & GrubTrek",
    period: "2024 — now",
    img: heroArt,
    did: [
      "Wrote interface copy inside the design file, so labels, empty states and helper text were sized to the layout they ship in.",
      "Named features and navigation items to match how users describe them, not how the team builds them.",
      "Rewrote error and empty states to say what happened and what to do next, in that order.",
      "Wrote the landing page headlines, section copy and CTA labels for both marketing sites.",
    ],
  },
];

function Writing() {
  return (
    <>
      <section className="relative border-b border-border overflow-hidden">
        <div className="absolute inset-0 grid-lines opacity-25" aria-hidden />
        <div className="glow-orb -bottom-40 right-10 w-[380px] h-[380px]" aria-hidden />
        <div className="relative mx-auto max-w-[1240px] px-6 py-24">
          <p className="rise text-[12px] uppercase tracking-[0.18em] text-accent font-semibold">Writing</p>
          <h1 className="rise rise-delay-1 mt-4 text-5xl md:text-6xl font-semibold leading-[1.05] tracking-[-0.03em]">
            Words that ship with the interface.
          </h1>
          <p className="rise rise-delay-2 mt-5 max-w-2xl text-muted-foreground text-[17px] leading-relaxed">
            Documentation, product copy and brand voice for technical products —
            written close to the engineers building them.
          </p>

          <ul className="rise rise-delay-3 mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
            {services.map((s) => (
              <li
                key={s}
                className="bg-background px-6 py-7 text-lg font-medium transition-colors hover:bg-card hover:text-accent"
              >
                {s}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="mx-auto max-w-[1240px] px-6 py-20 space-y-24">
        {pieces.map((p, i) => (
          <Reveal key={p.client}>
            <article className="grid md:grid-cols-12 gap-10 items-start">
              <div className={`md:col-span-5 ${i % 2 ? "md:order-2" : ""}`}>
                <div className="rounded-xl overflow-hidden border border-border">
                  <img
                    src={p.img}
                    alt=""
                    loading="lazy"
                    className="w-full aspect-[4/3] object-cover transition-transform duration-[1200ms] hover:scale-[1.04]"
                  />
                </div>
                <p className="mt-5 font-mono text-xs text-muted-foreground">{p.period}</p>
                <h2 className="mt-2 text-3xl md:text-4xl font-semibold tracking-[-0.02em]">{p.client}</h2>
                <p className="mt-1 text-accent text-[13px] uppercase tracking-[0.16em]">{p.role}</p>
              </div>
              <div className={`md:col-span-7 ${i % 2 ? "md:order-1" : ""}`}>
                <h3 className="text-[12px] uppercase tracking-[0.18em] text-accent font-semibold">What I did</h3>
                <ul className="mt-4 divide-y divide-border border-y border-border">
                  {p.did.map((d) => (
                    <li key={d} className="py-4 flex gap-4 text-[15.5px] leading-relaxed text-muted-foreground">
                      <span className="text-accent shrink-0" aria-hidden>—</span>
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <section className="border-t border-border">
        <div className="mx-auto max-w-[1240px] px-6 py-20 flex flex-wrap items-center justify-between gap-6">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.02em]">
            Need writing and design from one person?
          </h2>
          <Link
            to="/mercy/contact"
            className="rounded-full bg-accent text-accent-foreground px-6 py-3 text-sm font-medium transition-transform hover:-translate-y-0.5"
          >
            Get in touch
          </Link>
        </div>
      </section>
    </>
  );
}
