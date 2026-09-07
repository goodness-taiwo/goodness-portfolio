import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/mercy/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Mercy Kehinde Olukolujo" },
      {
        name: "description",
        content:
          "Get in touch with Mercy Kehinde Olukolujo about web design, UX writing and product content projects.",
      },
      { property: "og:title", content: "Contact — Mercy Kehinde Olukolujo" },
      {
        property: "og:description",
        content: "Email mercyolukolujo66@gmail.com to start a project.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contact,
});

const fits = [
  "Marketing sites and landing pages",
  "SaaS interface design and clean-up",
  "UX writing and product copy",
  "Technical documentation",
  "Design + writing as one engagement",
];

function Contact() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 grid-lines opacity-30" aria-hidden />
      <div className="glow-orb top-10 right-0 w-[420px] h-[420px]" aria-hidden />
      <div className="relative mx-auto max-w-[1160px] px-6 py-24 md:py-32">
        <p className="text-[12px] uppercase tracking-[0.18em] text-accent font-semibold">Contact</p>
        <h1 className="mt-4 text-5xl md:text-7xl font-semibold leading-[1.02] max-w-3xl">
          Let's build something worth using.
        </h1>

        <div className="mt-16 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-7">
            <p className="text-[17px] leading-relaxed text-muted-foreground max-w-xl">
              Tell me what you're building, who it's for, and where it's
              currently getting stuck. A short paragraph is plenty — I'll reply
              within two working days.
            </p>

            <a
              href="mailto:mercyolukolujo66@gmail.com?subject=Project%20enquiry"
              className="group mt-10 block rounded-2xl border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:border-accent/60"
            >
              <p className="text-[12px] uppercase tracking-[0.16em] text-muted-foreground">Email</p>
              <p className="mt-3 text-2xl md:text-4xl font-semibold break-all">
                mercyolukolujo66@gmail.com
              </p>
              <span className="mt-5 inline-flex items-center gap-2 text-accent text-sm">
                Open your mail client
                <span className="transition-transform group-hover:translate-x-1" aria-hidden>→</span>
              </span>
            </a>
          </div>

          <aside className="md:col-span-5 rounded-2xl border border-border bg-card/60 p-8">
            <p className="text-[12px] uppercase tracking-[0.16em] text-muted-foreground">Good fits</p>
            <ul className="mt-5 space-y-3 text-[15px] text-muted-foreground">
              {fits.map((f) => (
                <li key={f} className="flex gap-3">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent shrink-0" aria-hidden />
                  {f}
                </li>
              ))}
            </ul>

            <p className="mt-10 text-[12px] uppercase tracking-[0.16em] text-muted-foreground">Availability</p>
            <p className="mt-2 inline-flex items-center gap-2.5 text-foreground">
              <span className="w-2 h-2 rounded-full bg-accent pulse-dot" />
              Open to freelance and remote roles
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}
