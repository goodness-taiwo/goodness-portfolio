import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Mail, Phone } from "lucide-react";

const SITE_URL = "https://oluwole-heritage-portfolio.lovable.app";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Oluwole Heritage" },
      { name: "description", content: "Get in touch with Oluwole Heritage about web design, UX, digital products, and content." },
      { property: "og:title", content: "Contact — Oluwole Heritage" },
      { property: "og:description", content: "Open to opportunities in web design, UX, digital products, and content." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/contact` },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/contact` }],
  }),
  component: Contact,
});

function Contact() {
  return <section className="relative min-h-[70vh] overflow-hidden"><div className="absolute inset-0 ow-grid opacity-25" aria-hidden="true" /><div className="relative mx-auto grid max-w-[1240px] grid-cols-12 gap-10 px-6 py-24 md:px-10 md:py-36"><div className="col-span-12 md:col-span-7"><p className="font-mono text-[11px] uppercase tracking-[0.22em] text-primary">Contact / Start a conversation</p><h1 className="mt-6 max-w-3xl text-5xl font-semibold leading-[0.98] md:text-8xl">Let&apos;s work on something that needs to be <span className="text-primary">understood.</span></h1><p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">I&apos;m open to opportunities in web design, UX, digital products and content.</p></div><div className="col-span-12 md:col-span-4 md:col-start-9 md:pt-28"><div className="border-t border-primary pt-5"><p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Reach me directly</p><a href="mailto:Olukolujooluwole@gmail.com" className="group mt-5 flex items-center gap-3 break-all text-lg font-semibold transition-colors hover:text-primary"><Mail size={18} /> Olukolujooluwole@gmail.com <ArrowUpRight size={16} className="shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" /></a><a href="tel:08032843165" className="group mt-5 flex items-center gap-3 text-lg font-semibold transition-colors hover:text-primary"><Phone size={18} /> 0803 284 3165 <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" /></a></div><p className="mt-12 font-mono text-xs leading-relaxed text-muted-foreground">Available for thoughtful collaborations, product work and opportunities where design and communication need to move together.</p></div></div></section>;
}
