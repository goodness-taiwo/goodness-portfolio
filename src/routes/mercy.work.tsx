import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "../hooks/use-reveal";
import { MercyFrame } from "../components/MercyFrame";
import genrevShot from "../assets/genrev.png";
import grubtrekShot from "../assets/grubtrek.png";

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
    kicker: "AI content platform for social teams",
    role: "Web Designer",
    href: "https://genrev.app/",
    label: "genrev.app",
    img: genrevShot,
    product:
      "GenRev generates and schedules content across multiple social platforms from one workspace. The product is dense — accounts, generated drafts, approvals, analytics — so the interface has to keep a complex system legible.",
    did: [
      "Audited the existing layout, navigation and page inventory, then re-grouped screens around the three tasks people repeat daily instead of around the feature list.",
      "Rebuilt the type scale and spacing system on an 8px baseline so headings, labels and data rows stay consistent across every screen.",
      "Designed a component library in Figma — buttons, inputs, tables, empty states, loading and error states — with variants and auto-layout so nothing has to be redrawn per page.",
      "Set responsive rules at three breakpoints, including how the sidebar collapses and how data tables reflow on mobile.",
      "Checked colour pairs for contrast, defined visible focus states, and specified touch target sizes before handoff.",
      "Wrote the interface copy alongside the layouts: button labels, empty states and inline help, so the words fit the space they were designed for.",
      "Handed off named, layered files with redlines and a spec page the front-end team could build from without a translator.",
    ],
  },
  {
    client: "GrubTrek",
    kicker: "Restaurant management SaaS",
    role: "Lead Web Designer",
    href: "https://grubtrek.com/",
    label: "grubtrek.com",
    img: grubtrekShot,
    product:
      "GrubTrek runs the back of a restaurant — POS, reservations, inventory, staff scheduling and reporting — in one system. The marketing site had to sell all of that without turning into a feature dump.",
    did: [
      "Structured the page as a single argument: outcome first, then capability, then proof — each section written to set up the one after it.",
      "Built the page on a 12-column grid with a fixed vertical rhythm, so long feature sections read as one continuous scroll rather than stacked blocks.",
      "Designed the product-shot treatment — device framing, crop ratios and shadow depth — so dashboard and POS screens stay readable at every width.",
      "Set a two-weight type system with tight display tracking and generous body leading, tested at 320px before desktop.",
      "Designed the conversion path: one primary action repeated at fixed scroll depths, with secondary actions styled so they never compete.",
      "Specified hover, active and scroll-reveal states with timings, so motion is documented rather than improvised in build.",
      "Wrote the headlines, section copy and CTA labels directly in the layout, editing to fit the measure instead of shipping copy that overflows.",
    ],
  },
];

function Work() {
  return (
    <>
      <section className="relative border-b border-border overflow-hidden">
        <div className="absolute inset-0 grid-lines opacity-25" aria-hidden />
        <div className="glow-orb -top-32 left-1/3 w-[380px] h-[380px]" aria-hidden />
        <div className="relative mx-auto max-w-[1240px] px-6 py-24">
          <p className="rise text-[12px] uppercase tracking-[0.18em] text-accent font-semibold">Featured projects</p>
          <h1 className="rise rise-delay-1 mt-4 text-5xl md:text-6xl font-semibold leading-[1.05] tracking-[-0.03em]">
            Sites, live in the wild.
          </h1>
          <p className="rise rise-delay-2 mt-5 max-w-2xl text-muted-foreground text-[17px] leading-relaxed">
            Two products I&apos;ve designed and shipped. Each one below explains
            what the product is, what I handled, and the decisions that shaped
            how the page looks and behaves.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-[1240px] px-6 py-20 space-y-28">
        {projects.map((p, idx) => (
          <Reveal key={p.client}>
            <article>
              <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
                <div>
                  <p className="font-mono text-xs text-accent">0{idx + 1}</p>
                  <h2 className="mt-3 text-4xl md:text-5xl font-semibold tracking-[-0.02em]">{p.client}</h2>
                  <p className="mt-2 text-muted-foreground">{p.kicker}</p>
                </div>
                <a
                  href={p.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-accent/60 text-accent px-5 py-2.5 text-sm transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  Visit website <span aria-hidden>↗</span>
                </a>
              </div>

              <MercyFrame src={p.img} alt={`${p.client} website`} label={p.label} />

              <div className="mt-12 grid md:grid-cols-12 gap-10">
                <div className="md:col-span-5">
                  <h3 className="text-[12px] uppercase tracking-[0.18em] text-accent font-semibold">The product</h3>
                  <p className="mt-4 text-[16.5px] leading-relaxed text-muted-foreground">{p.product}</p>
                  <div className="mt-8 border-t border-border pt-5">
                    <p className="text-[12px] uppercase tracking-[0.16em] text-muted-foreground">Role</p>
                    <p className="mt-1">{p.role}</p>
                  </div>
                </div>
                <div className="md:col-span-7">
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
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </>
  );
}
