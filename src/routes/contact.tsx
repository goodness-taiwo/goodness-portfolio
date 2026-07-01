import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Goodness Taiwo" },
      { name: "description", content: "Get in touch with Goodness Taiwo about brand writing, editorial and web design projects." },
      { property: "og:title", content: "Contact — Goodness Taiwo" },
      { property: "og:description", content: "Email goodypearls@gmail.com to start a conversation." },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <section className="mx-auto max-w-[1400px] px-6 md:px-10 pt-16 md:pt-24 pb-32">
      <p className="rise text-[11px] uppercase tracking-[0.28em] text-muted-foreground">Section V — Contact</p>
      <h1 className="rise rise-delay-1 mt-6 font-display text-6xl md:text-[10vw] leading-[0.9] text-balance">
        Let's put something on the page.
      </h1>

      <div className="mt-16 grid grid-cols-12 gap-8">
        <div className="col-span-12 md:col-span-7">
          <p className="text-lg leading-relaxed max-w-xl text-muted-foreground">
            The best projects usually start with a short email — a paragraph
            about what you're making, who it's for, and what's already been
            tried. Send me that, and I'll write back within two working days.
          </p>

          <a
            href="mailto:goodypearls@gmail.com?subject=New%20project%20—"
            className="group mt-12 block border-y border-border py-10"
          >
            <p className="text-[11px] uppercase tracking-[0.24em] text-muted-foreground">Write to</p>
            <p className="mt-3 font-display text-4xl md:text-6xl underline-grow inline-block">
              goodypearls@gmail.com
            </p>
            <p className="mt-4 inline-flex items-center gap-2 text-accent">
              Open your mail client <span className="transition-transform group-hover:translate-x-1">→</span>
            </p>
          </a>
        </div>

        <aside className="col-span-12 md:col-span-5 md:pl-10 md:border-l md:border-border">
          <p className="text-[11px] uppercase tracking-[0.24em] text-muted-foreground">Good fits</p>
          <ul className="mt-4 space-y-3 text-[15px] leading-relaxed">
            <li>— Brand voice for a launch or repositioning</li>
            <li>— Homepage and marketing site writing</li>
            <li>— Editorial pieces, essays and long-form</li>
            <li>— Product copy, in-app strings, onboarding</li>
            <li>— Marketing site design (or writing + design together)</li>
          </ul>

          <p className="text-[11px] uppercase tracking-[0.24em] text-muted-foreground mt-12">Not a fit</p>
          <ul className="mt-4 space-y-3 text-[15px] leading-relaxed text-muted-foreground">
            <li>— SEO farms and volume content</li>
            <li>— Work that requires me to sound like anyone but myself</li>
          </ul>

          <p className="text-[11px] uppercase tracking-[0.24em] text-muted-foreground mt-12">Response time</p>
          <p className="mt-3">Within two working days. Written by me.</p>
        </aside>
      </div>
    </section>
  );
}
