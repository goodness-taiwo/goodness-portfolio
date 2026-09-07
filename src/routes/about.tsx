import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Goodness Taiwo" },
      { name: "description", content: "Goodness Taiwo is a brand and creative writer, and a web designer with three years of experience helping startups and founders build brands that connect." },
      { property: "og:title", content: "About — Goodness Taiwo" },
      { property: "og:description", content: "A bio, and the working principles behind the practice." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <section className="mx-auto max-w-[1400px] px-6 md:px-10 pt-16 md:pt-24 pb-16">
        <p className="rise text-[11px] uppercase tracking-[0.28em] text-muted-foreground">Section IV — About</p>
        <h1 className="rise rise-delay-1 mt-6 font-display text-6xl md:text-[10vw] leading-[0.9] text-balance">
          Hello. I'm Goodness.
        </h1>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 md:px-10 pb-24 grid grid-cols-12 gap-8">
        <aside className="col-span-12 md:col-span-4">
          <p className="text-[11px] uppercase tracking-[0.28em] text-muted-foreground">At a glance</p>
          <dl className="mt-6 grid grid-cols-2 gap-y-4 text-sm">
            <dt className="text-muted-foreground">Since</dt><dd>2022</dd>
            <dt className="text-muted-foreground">Working in</dt><dd>English</dd>
            <dt className="text-muted-foreground">Availability</dt><dd>Q1 open</dd>
          </dl>
        </aside>

        <div className="col-span-12 md:col-span-8">
          <p className="text-[11px] uppercase tracking-[0.28em] text-muted-foreground">Bio</p>
          <div className="mt-4 space-y-6 text-lg leading-relaxed max-w-2xl">
            <p>
              Goodness Taiwo is a brand and creative writer, as well as a web
              designer, with three years of experience helping startups,
              founders, and growing businesses create brands that connect with
              people. She combines strategy, storytelling, and design to build
              websites and brand experiences that are clear, engaging, and easy
              to remember.
            </p>
            <p>
              Her journey into writing started naturally. She was always the
              person friends and teammates asked to review emails,
              presentations, or social posts before they were published. Over
              time, that habit became a career. Today, she works across two
              worlds: writing the words that shape a brand's voice and
              designing the digital experiences where those words come to life.
            </p>
            <p>
              As the Creative Lead at{" "}
              <span className="text-foreground">Black Women App</span>,
              Goodness developed the brand story, launch campaigns, website
              copy, and in-app content that made the product feel approachable.
              Rather than writing for features alone, she focused on creating
              experiences that felt like conversations with the user.
            </p>
            <p>
              At <span className="text-foreground">Lorchain Labs</span>, she
              worked closely with both branding and engineering teams, writing
              everything from website copy to technical documentation. That
              experience reinforced an important lesson: whether you're writing
              for customers or developers, the best communication is simple,
              clear, and purposeful.
            </p>
            <p>
              While working with{" "}
              <span className="text-foreground">Whizzcard</span>, she helped
              shape the voice of a fintech product, making complex financial
              services easier to understand through straightforward,
              user-friendly copy.
            </p>
            <p>
              Alongside writing, Goodness designs modern, conversion-focused
              websites. She has collaborated with product teams such as{" "}
              <a href="https://tryflowdrive.com/" target="_blank" rel="noreferrer" className="underline-grow">Flowdrive</a>{" "}
              and{" "}
              <a href="https://markdrop.app/" target="_blank" rel="noreferrer" className="underline-grow">Markdrop</a>{" "}
              to create marketing websites where content and design work
              together seamlessly. Rather than treating writing and design as
              separate disciplines, she approaches them as one process —
              because a great website isn't just beautiful; it communicates
              clearly and guides people to take action.
            </p>
            <p>
              Outside of client work, Goodness enjoys writing about branding,
              web design, and the creative process while continuously exploring
              new ideas, improving her craft, and building projects that
              challenge her creativity.
            </p>
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-8">
            {[
              ["Voice", "Warm, exact, allergic to jargon."],
              ["Layout", "Editorial pacing over dense sections."],
              ["Process", "Considered. Every decision earns its place."],
            ].map(([h, b]) => (
              <div key={h} className="border-t border-border pt-4">
                <p className="text-[11px] uppercase tracking-[0.24em] text-muted-foreground">Principle</p>
                <h3 className="font-display text-3xl mt-2">{h}</h3>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-20">
          <p className="text-[11px] uppercase tracking-[0.28em] text-muted-foreground">Selected clients</p>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-y-6 gap-x-10 font-display text-2xl md:text-4xl">
            {["Black Women App", "Lorchain Labs", "Whizzcard", "Flowdrive", "Markdrop", "Independent essays"].map((c) => (
              <span key={c} className="border-b border-border pb-4">{c}</span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
