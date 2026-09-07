import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, MoveRight } from "lucide-react";
import { Reveal } from "../hooks/use-reveal";
import { OluwoleFrame } from "../components/OluwoleFrame";
import genrevHome from "../assets/oluwole-genrev-home.jpg.asset.json";
import mangoHome from "../assets/oluwole-mango-home.jpg.asset.json";
import taxHome from "../assets/oluwole-tax-home.jpg.asset.json";

export const Route = createFileRoute("/oluwole/")({
  head: () => ({
    meta: [
      { title: "Oluwole Heritage — Web Designer & Writer" },
      { name: "description", content: "Oluwole Heritage designs clear digital experiences and writes the content that helps people understand them." },
      { property: "og:title", content: "Oluwole Heritage — Web Designer & Writer" },
      { property: "og:description", content: "Web design, UX, and writing for products that need to be understood." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const experience = [
  ["GenRev", "Web Designer · 2025—26"],
  ["Mango Entertainment", "Web Designer · 2024—25"],
  ["Tax & Compliance", "Designer & Writer · 2023—24"],
  ["Lorchain", "Technical Writer · 2024—25"],
];

const work = [
  { id: "genrev", number: "01", name: "GenRev", type: "AI-powered social media automation", image: genrevHome, tone: "The product was complex. The experience didn’t have to be." },
  { id: "mango", number: "02", name: "Mango Entertainment", type: "Entertainment, video and live interaction", image: mangoHome, tone: "A high-volume content experience with room to breathe." },
  { id: "tax-compliance", number: "03", name: "Tax & Compliance", type: "Professional services and practical tools", image: taxHome, tone: "Making dense information easier to navigate and trust." },
];

const capabilities = [
  { title: "Web design", copy: "UI, UX, responsive websites, landing pages, visual systems and digital interfaces." },
  { title: "UX & content", copy: "Information architecture, UX writing, content hierarchy, product messaging and conversion-focused content." },
  { title: "Technical writing", copy: "Complex ideas translated into language that is clearer, more useful and easier to act on." },
];

function Home() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 ow-grid opacity-40" aria-hidden="true" />
        <div className="absolute right-[12%] top-20 h-48 w-48 border border-primary/30 ow-drift" aria-hidden="true" />
        <div className="absolute right-[14%] top-28 h-48 w-48 border border-primary/15 rotate-45" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-[1240px] grid-cols-12 gap-8 px-6 pb-24 pt-24 md:px-10 md:pb-32 md:pt-36">
          <div className="col-span-12 md:col-span-8">
            <p className="rise font-mono text-[11px] uppercase tracking-[0.22em] text-primary">Web design / UX / writing</p>
            <h1 className="rise rise-delay-1 mt-7 max-w-4xl text-5xl font-semibold leading-[0.98] md:text-8xl">I turn complex ideas into <span className="text-primary">clear</span> digital experiences.</h1>
            <p className="rise rise-delay-2 mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">I design websites, shape user experiences and write the content that helps people understand what they&apos;re looking at.</p>
            <div className="rise rise-delay-3 mt-10 flex flex-wrap gap-5">
              <Link to="/oluwole/work" className="inline-flex items-center gap-3 bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-1">View selected work <MoveRight size={16} /></Link>
              <Link to="/oluwole/contact" className="inline-flex items-center gap-2 border border-border px-5 py-3 text-sm transition-colors hover:border-primary hover:text-primary">Get in touch <ArrowUpRight size={15} /></Link>
            </div>
          </div>
          <div className="col-span-12 flex items-end justify-end md:col-span-4">
            <div className="mt-10 w-full max-w-[270px] border-l-2 border-primary pl-5 md:mt-0">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">The through-line</p>
              <p className="mt-3 font-tech text-2xl leading-tight">Structure, interface and language working as one.</p>
            </div>
          </div>
        </div>
        <div className="relative border-t border-border bg-card/50">
          <div className="mx-auto grid max-w-[1240px] grid-cols-2 md:grid-cols-4">
            {experience.map(([company, role]) => <div key={company} className="border-r border-border px-6 py-7 last:border-r-0 md:px-10"><p className="font-tech text-sm font-semibold">{company}</p><p className="mt-1 text-xs text-muted-foreground">{role}</p></div>)}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1240px] grid-cols-12 gap-8 px-6 py-24 md:px-10 md:py-32">
        <p className="col-span-12 font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground md:col-span-3">01 / Selected work</p>
        <div className="col-span-12 md:col-span-9">
          <h2 className="max-w-3xl text-4xl font-semibold leading-tight md:text-6xl">Design gets attention. Words give it direction.</h2>
          <p className="mt-7 max-w-2xl text-base leading-relaxed text-muted-foreground">I work at the intersection of design, technology and communication — taking complicated ideas and turning them into experiences that feel clear and considered.</p>
          <div className="mt-16 space-y-16">
            {work.map((item, i) => <Reveal key={item.name} delay={i * 80}><Link to="/oluwole/work" hash={item.id} className="group block"><div className="grid gap-7 md:grid-cols-12 md:items-center"><div className="md:col-span-7"><OluwoleFrame src={item.image.url} alt={`${item.name} website homepage`} label={`${item.name} / live work`} /></div><div className="md:col-span-5"><p className="font-mono text-xs text-primary">{item.number}</p><h3 className="mt-3 text-3xl font-semibold transition-colors group-hover:text-primary md:text-4xl">{item.name}</h3><p className="mt-2 text-sm text-muted-foreground">{item.type}</p><p className="mt-6 border-l border-primary pl-4 text-sm leading-relaxed text-muted-foreground">{item.tone}</p><span className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-primary">View case study <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-1" /></span></div></div></Link></Reveal>)}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-card/50">
        <div className="mx-auto grid max-w-[1240px] grid-cols-12 gap-8 px-6 py-24 md:px-10 md:py-32">
          <p className="col-span-12 font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground md:col-span-3">02 / Capabilities</p>
          <div className="col-span-12 md:col-span-9"><div className="grid gap-px border border-border bg-border md:grid-cols-3">{capabilities.map((cap) => <div key={cap.title} className="bg-background p-7"><p className="font-mono text-xs text-primary">0{capabilities.indexOf(cap) + 1}</p><h3 className="mt-10 text-2xl font-semibold">{cap.title}</h3><p className="mt-4 text-sm leading-relaxed text-muted-foreground">{cap.copy}</p></div>)}</div></div>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1240px] grid-cols-12 gap-8 px-6 py-24 md:px-10 md:py-32">
        <div className="col-span-12 md:col-span-3"><p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">03 / Process</p><h2 className="mt-4 text-4xl font-semibold">How I work.</h2></div>
        <div className="col-span-12 md:col-span-9"><ol className="divide-y divide-border border-y border-border">{["Understand", "Research", "Structure", "Design", "Communicate", "Refine", "Deliver"].map((step, i) => <li key={step} className="group flex items-center justify-between py-5"><span className="font-mono text-xs text-muted-foreground">0{i + 1}</span><span className="font-tech text-xl font-medium transition-colors group-hover:text-primary md:text-2xl">{step}</span><ArrowUpRight size={17} className="text-muted-foreground transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary" /></li>)}</ol></div>
      </section>
    </>
  );
}