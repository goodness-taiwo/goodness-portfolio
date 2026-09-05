import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "../hooks/use-reveal";
import { OluwoleFrame } from "../components/OluwoleFrame";
import genrevHome from "../assets/oluwole-genrev-home.jpg.asset.json";
import genrevProduct from "../assets/oluwole-genrev-product.jpg.asset.json";
import mangoHome from "../assets/oluwole-mango-home.jpg.asset.json";
import mangoAccount from "../assets/oluwole-mango-account.jpg.asset.json";
import taxHome from "../assets/oluwole-tax-home.jpg.asset.json";
import taxCalculator from "../assets/oluwole-tax-calculator.jpg.asset.json";

const SITE_URL = "https://oluwole-heritage-portfolio.lovable.app";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Selected Work — Oluwole Heritage" },
      { name: "description", content: "Selected case studies across AI, entertainment, and professional services by Oluwole Heritage." },
      { property: "og:title", content: "Selected Work — Oluwole Heritage" },
      { property: "og:description", content: "Digital experiences designed to make complex products easier to understand." },
      { property: "og:type", content: "article" },
      { property: "og:url", content: `${SITE_URL}/work` },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/work` }],
  }),
  component: Work,
});

const projects = [
  {
    id: "genrev", number: "01", name: "GenRev", type: "AI-powered social media automation", role: "Web Designer & Writer", dates: "2025—2026", image: genrevHome, detail: genrevProduct,
    intro: "GenRev is an AI-powered social media automation product. The brief was to make a fairly complex product feel approachable from the first screen, without losing the energy that makes it feel modern.",
    challenge: "When a product combines AI, automation and social media, the challenge is not just presenting features. It is helping people understand what the product does and what to do next, fast.",
    approach: ["Built the information architecture around what the audience needed to understand first.", "Developed wireframes, visual direction and copy together so the interface never had to compensate for weak content.", "Prototyped and tested the flow before handing off responsive layouts and supporting the launch."],
  },
  {
    id: "mango", number: "02", name: "Mango Entertainment", type: "Entertainment, video and live interaction", role: "Web Designer", dates: "2024—2025", image: mangoHome, detail: mangoAccount,
    intro: "Mango Entertainment is a consumer platform built around video, creators and live interaction. The experience needed enough energy to keep people engaged while staying easy to navigate.",
    challenge: "High-volume, fast-moving content can overwhelm a visitor just as easily as it can excite them. Mango needed structure without losing momentum.",
    approach: ["Worked as the primary designer alongside developers and product stakeholders.", "Focused on visual hierarchy first, giving high-volume content room to breathe without losing structure.", "Refined the experience through testing and iteration before and after launch."],
  },
  {
    id: "tax-compliance", number: "03", name: "Tax & Compliance", type: "Professional services and practical tools", role: "Web Designer & Writer", dates: "2023—2024", image: taxHome, detail: taxCalculator,
    intro: "A professional services site built to make complex tax and compliance information feel manageable rather than intimidating. I worked directly with the founder across design, content and ongoing improvements.",
    challenge: "The site needed to establish credibility quickly while helping visitors find what applied to them, without requiring a legal or financial background.",
    approach: ["Created a clear information hierarchy and straightforward navigation for dense subject matter.", "Built practical tools, including an on-site VAT calculator, into the content itself.", "Maintained and improved the website after launch across structure, content and performance."],
  },
];

function Work() {
  return <>
    <section className="relative overflow-hidden border-b border-border"><div className="absolute inset-0 ow-grid opacity-30" aria-hidden="true" /><div className="relative mx-auto max-w-[1240px] px-6 py-24 md:px-10 md:py-32"><p className="rise font-mono text-[11px] uppercase tracking-[0.22em] text-primary">Selected work / 2023—2026</p><h1 className="rise rise-delay-1 mt-5 max-w-3xl text-5xl font-semibold leading-[0.98] md:text-7xl">Work that makes the complex feel <span className="text-primary">clear.</span></h1><p className="rise rise-delay-2 mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground">A selection of projects across technology, entertainment and professional services.</p></div></section>
    <div className="mx-auto max-w-[1240px] px-6 md:px-10">{projects.map((project, i) => <Reveal key={project.id}><article id={project.id} className="scroll-mt-24 border-b border-border py-24 md:py-32"><div className="flex flex-wrap items-end justify-between gap-5"><div><p className="font-mono text-xs text-primary">{project.number}</p><h2 className="mt-3 text-4xl font-semibold md:text-6xl">{project.name}</h2><p className="mt-2 text-sm text-muted-foreground">{project.type}</p></div><p className="font-mono text-xs text-muted-foreground">{project.dates}</p></div><div className="mt-10 grid gap-6 md:grid-cols-2"><OluwoleFrame src={project.image.url} alt={`${project.name} website homepage`} label={`${project.name} / homepage`} /><OluwoleFrame src={project.detail.url} alt={`${project.name} project detail`} label={`${project.name} / detail`} /></div><div className="mt-12 grid gap-10 md:grid-cols-12"><div className="md:col-span-5"><p className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary">The brief</p><p className="mt-4 text-base leading-relaxed text-muted-foreground">{project.intro}</p><div className="mt-8 border-t border-border pt-5"><p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Role</p><p className="mt-2 text-sm">{project.role}</p></div></div><div className="md:col-span-7"><p className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary">The challenge</p><p className="mt-4 text-base leading-relaxed text-muted-foreground">{project.challenge}</p><p className="mt-9 font-mono text-[11px] uppercase tracking-[0.2em] text-primary">My approach</p><ul className="mt-4 divide-y divide-border border-y border-border">{project.approach.map((point) => <li key={point} className="flex gap-4 py-4 text-sm leading-relaxed text-muted-foreground"><span className="text-primary">→</span><span>{point}</span></li>)}</ul></div></div>{i === 0 && <p className="mt-12 border-l-2 border-primary py-1 pl-5 font-tech text-xl leading-relaxed text-foreground md:text-2xl">The goal was never to make GenRev look complicated enough to seem impressive. It was to make it simple enough to actually use.</p>}</article></Reveal>)}</div>
    <section className="mx-auto max-w-[1240px] px-6 py-20 md:px-10"><Link to="/contact" className="group inline-flex items-center gap-3 text-2xl font-semibold md:text-4xl">Have a complex idea? Let&apos;s make it clear. <ArrowUpRight className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" /></Link></section>
  </>;
}
