import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Goodness Taiwo" },
      { name: "description", content: "Goodness Taiwo is a brand and creative writer, and a web designer with three years of experience shaping voice and interface for modern brands." },
      { property: "og:title", content: "About — Goodness Taiwo" },
      { property: "og:description", content: "A short bio, a longer one, and the working principles behind the practice." },
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
          <p className="text-[11px] uppercase tracking-[0.28em] text-muted-foreground">Short bio</p>
          <p className="mt-4 text-lg leading-relaxed">
            Goodness Taiwo is a brand &amp; creative writer and a web designer
            with three years of practice. He works with founders and small
            product teams to shape voice, story and interface — the kind of
            work that lives on a marketing page long after the launch has gone
            quiet.
          </p>
          <dl className="mt-10 grid grid-cols-2 gap-y-4 text-sm">
            <dt className="text-muted-foreground">Based</dt><dd>Lagos / Remote</dd>
            <dt className="text-muted-foreground">Since</dt><dd>2022</dd>
            <dt className="text-muted-foreground">Working in</dt><dd>English</dd>
            <dt className="text-muted-foreground">Availability</dt><dd>Q1 open</dd>
          </dl>
        </aside>

        <div className="col-span-12 md:col-span-8">
          <p className="text-[11px] uppercase tracking-[0.28em] text-muted-foreground">The longer one</p>
          <div className="mt-4 space-y-6 text-lg leading-relaxed max-w-2xl">
            <p>
              I came to writing the same way most writers do — by being the
              person in the group who kept getting asked to <em>have a look at
              this before it goes out</em>. Three years on, that instinct has
              turned into a practice, and the practice sits in two rooms: the
              document, where I work on voice, and the browser, where I work on
              the page that voice will live on.
            </p>
            <p>
              At <span className="text-foreground">Black Women App</span> I
              wrote as the creative lead — brand story, launch copy, the
              in-app moments that had to feel like a friend, not a feature.
              At <span className="text-foreground">Lorchain Labs</span> I sat
              between brand and engineering, moving between homepage headlines
              and developer documentation, learning that both surfaces reward
              the same virtue: say the true thing, briefly, and get out of the
              way. At <span className="text-foreground">Whizzcard</span> I gave
              a fintech product a plainspoken voice in a category that mostly
              shouts.
            </p>
            <p>
              On the design side, I've partnered with product teams like{" "}
              <a href="https://tryflowdrive.com/" target="_blank" rel="noreferrer" className="underline-grow">Flowdrive</a>{" "}
              and{" "}
              <a href="https://markdrop.app/" target="_blank" rel="noreferrer" className="underline-grow">Markdrop</a>{" "}
              on marketing sites where the type does most of the talking. I
              tend to design and write at the same time — I don't really know
              how to do them separately — which is usually the difference
              between a page that looks nice and a page that <em>reads</em>.
            </p>
            <p>
              Outside of client work I write essays about the craft, keep an
              alarming number of notebooks, and defend the em dash in public.
            </p>
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-8">
            {[
              ["Voice", "Warm, exact, allergic to jargon."],
              ["Layout", "Editorial pacing over dense sections."],
              ["Process", "Slow enough to be right."],
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
