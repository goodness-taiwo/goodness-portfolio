import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "../hooks/use-reveal";

export const Route = createFileRoute("/mercy/writing")({
  head: () => ({
    meta: [
      { title: "Writing — Mercy Kehinde Olukolujo" },
      {
        name: "description",
        content:
          "UX writing, technical documentation and product content — what I do as a writer and how it shows up in shipped work.",
      },
      { property: "og:title", content: "Writing — Mercy Kehinde Olukolujo" },
      {
        property: "og:description",
        content: "Interface copy, documentation and content strategy for technical products.",
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
  "Onboarding & empty states",
  "Website and landing page copy",
  "Content strategy & structure",
  "Brand voice guidelines",
];

const work = [
  {
    client: "Zeus Labs",
    kind: "Technical documentation",
    did: [
      "Wrote developer documentation from engineering notes and direct interviews with the team building the feature.",
      "Defined the documentation structure — page types, ordering, naming — so new entries slotted in without reorganising anything.",
      "Standardised terminology across the docs set and kept it aligned with what the interface actually said.",
      "Reviewed and updated published pages on every release so nothing drifted out of date.",
    ],
  },
  {
    client: "OnChain Corporation",
    kind: "Web3 content & product copy",
    did: [
      "Translated blockchain concepts into plain explanations for readers with no crypto background, without losing accuracy.",
      "Wrote onboarding copy, in-product microcopy and error states for the platform.",
      "Set the brand voice and wrote the guidelines other contributors worked from.",
      "Planned and produced an ongoing educational content series tied to product releases.",
    ],
  },
  {
    client: "GenRev",
    kind: "Product interface copy",
    did: [
      "Rewrote navigation labels and section headings so the product's structure was legible at a glance.",
      "Wrote copy for AI-generated content flows — prompts, states, confirmations — that set expectations before the user acted.",
      "Kept terminology consistent between the marketing site and the logged-in product.",
    ],
  },
  {
    client: "GrubTrek",
    kind: "Landing page & positioning",
    did: [
      "Wrote the full landing page narrative, from headline to final call to action.",
      "Reframed a long feature list into outcomes restaurant owners recognise.",
      "Wrote section copy that carried the reader forward instead of restating the product name.",
    ],
  },
];

function Writing() {
  return (
    <>
      <section className="relative border-b border-border overflow-hidden">
        <div className="glow-orb -top-28 right-1/4 w-[360px] h-[360px]" aria-hidden />
        <div className="relative mx-auto max-w-[1160px] px-6 py-24">
          <p className="text-[12px] uppercase tracking-[0.18em] text-accent font-semibold">Writing</p>
          <h1 className="mt-4 text-5xl md:text-6xl font-semibold leading-[1.05]">
            Words are part of the interface.
          </h1>
          <p className="mt-5 max-w-2xl text-[17px] leading-relaxed text-muted-foreground">
            A button label, an empty state, a docs page — they carry as much of
            the experience as the layout does. Here's what I do as a writer, and
            what I owned on shipped work.
          </p>
        </div>
      </section>

      <section className="border-b border-border bg-card/40">
        <div className="mx-auto max-w-[1160px] px-6 py-20">
          <p className="text-[12px] uppercase tracking-[0.18em] text-accent font-semibold">Services</p>
          <ul className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-xl overflow-hidden border border-border">
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

      <section>
        <div className="mx-auto max-w-[1160px] px-6 py-24 space-y-6">
          {work.map((w, i) => (
            <Reveal key={w.client} delay={i * 70}>
              <article className="rounded-xl border border-border bg-card p-8 grid md:grid-cols-12 gap-6 transition-colors hover:border-accent/60">
                <div className="md:col-span-4">
                  <h2 className="text-2xl font-semibold">{w.client}</h2>
                  <p className="mt-1 text-accent text-[14px]">{w.kind}</p>
                </div>
                <div className="md:col-span-8">
                  <p className="text-[12px] uppercase tracking-[0.16em] text-muted-foreground">What I did</p>
                  <ul className="mt-4 space-y-3 text-[15px] leading-relaxed text-muted-foreground">
                    {w.did.map((d) => (
                      <li key={d} className="flex gap-3">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent shrink-0" aria-hidden />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
