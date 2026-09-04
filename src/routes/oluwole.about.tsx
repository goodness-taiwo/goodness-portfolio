import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/oluwole/about")({
  head: () => ({ meta: [
    { title: "About — Oluwole Heritage" },
    { name: "description", content: "Meet Oluwole Heritage, a web designer and writer working across design, technology, and communication." },
    { property: "og:title", content: "About — Oluwole Heritage" },
    { property: "og:description", content: "A designer who thinks in systems and sentences." },
    { property: "og:type", content: "profile" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: About,
});

const groups: Array<[string, string[]]> = [
  ["Design", ["Web design", "UX design", "UI design", "Responsive design", "Wireframing", "Prototyping", "Information architecture", "Visual design"]],
  ["Experience", ["User research", "Usability testing", "Content hierarchy", "Conversion-focused design", "Accessibility"]],
  ["Writing", ["UX writing", "Content strategy", "Website copy", "Product messaging", "Technical writing"]],
  ["Technical", ["HTML / CSS", "JavaScript", "React", "Git / GitHub", "WordPress", "Webflow", "Framer"]],
];

function About() {
  return <>
    <section className="relative overflow-hidden border-b border-border"><div className="absolute right-0 top-0 h-full w-1/3 ow-grid opacity-25" aria-hidden="true" /><div className="relative mx-auto grid max-w-[1240px] grid-cols-12 gap-8 px-6 py-24 md:px-10 md:py-32"><div className="col-span-12 md:col-span-5"><p className="font-mono text-[11px] uppercase tracking-[0.22em] text-primary">About / Oluwole Heritage</p><h1 className="mt-6 text-5xl font-semibold leading-[0.98] md:text-7xl">A designer who thinks in systems and <span className="text-primary">sentences.</span></h1></div><div className="col-span-12 md:col-span-6 md:col-start-7"><p className="text-xl leading-relaxed">My work sits at the intersection of design, technology and communication.</p><div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground"><p>I like taking complicated ideas and turning them into experiences that feel clear and considered. That means research, structure, interface design, content and responsive implementation — not just the visual layer.</p><p>Writing matters just as much to me as design. Whether it&apos;s a digital product, a professional service or a technical concept, I care about making information easier to understand without losing what it actually means.</p><p>I pay attention to detail, but I care just as much about the bigger picture: what the experience needs to achieve, who it&apos;s for, and how the parts fit together.</p></div></div></div></section>
    <section className="border-b border-border bg-card/50"><div className="mx-auto max-w-[1240px] px-6 py-24 md:px-10"><p className="font-mono text-[11px] uppercase tracking-[0.22em] text-primary">Capabilities</p><h2 className="mt-4 max-w-xl text-4xl font-semibold md:text-6xl">Grouped by how I use them.</h2><div className="mt-14 grid gap-px border border-border bg-border md:grid-cols-2">{groups.map(([title, items]) => <div key={title} className="bg-background p-8 md:p-10"><h3 className="text-2xl font-semibold">{title}</h3><ul className="mt-6 grid grid-cols-2 gap-y-3 text-sm text-muted-foreground">{items.map((item) => <li key={item}>{item}</li>)}</ul></div>)}</div></div></section>
    <section><div className="mx-auto max-w-[1240px] px-6 py-24 md:px-10"><div className="flex flex-wrap items-end justify-between gap-6"><div><p className="font-mono text-[11px] uppercase tracking-[0.22em] text-primary">Experience</p><h2 className="mt-4 text-4xl font-semibold md:text-6xl">The work behind the work.</h2></div><Link to="/oluwole/contact" className="inline-flex items-center gap-2 text-sm text-primary">Work with me <ArrowUpRight size={16} /></Link></div><div className="mt-14 divide-y divide-border border-y border-border">{[["GenRev", "Web Designer", "2025—2026"], ["Mango Entertainment", "Web Designer", "2024—2025"], ["Tax & Compliance", "Web Designer & Writer", "2023—2024"], ["Lorchain", "Technical Writer", "2024—2025"]].map(([company, role, date]) => <div key={company} className="grid gap-2 py-6 md:grid-cols-12 md:items-center"><p className="font-tech text-xl font-semibold md:col-span-5">{company}</p><p className="text-sm text-muted-foreground md:col-span-4">{role}</p><p className="font-mono text-xs text-primary md:col-span-3 md:text-right">{date}</p></div>)}</div></div></section>
  </>;
}