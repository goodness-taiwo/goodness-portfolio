import { createFileRoute, Link } from "@tanstack/react-router";
import heroArt from "../assets/hero-art.jpg";
import bwaCover from "../assets/bwa-cover.jpg";
import lorchainCover from "../assets/lorchain-cover.jpg";
import whizzCover from "../assets/whizzcard-cover.jpg";
import flowdriveShot from "../assets/flowdrive.png";
import markdropShot from "../assets/markdrop.png";

export const Route = createFileRoute("/")({
  component: Index,
});

const clients = [
  "Black Women App",
  "Lorchain Labs",
  "Whizzcard",
  "Flowdrive",
  "Markdrop",
  "Independent",
];

function Index() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 pt-16 md:pt-24 pb-24 md:pb-32 grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-7 relative z-10">
            <p className="rise text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
              Portfolio — 2022 / 2026
            </p>
            <h1 className="rise rise-delay-1 mt-6 font-display text-[11vw] md:text-[6.5vw] leading-[0.9] tracking-[-0.03em] text-balance">
              Words that <em className="italic text-accent">last</em>,
              <br />
              interfaces that <em className="italic">stay.</em>
            </h1>
            <p className="rise rise-delay-2 mt-8 max-w-xl text-lg text-muted-foreground leading-relaxed">
              I'm Goodness Taiwo — a brand &amp; creative writer and a web designer.
              For three years I've helped founders find the sentence their
              company was already trying to say, and given it a place to live
              on the web.
            </p>
            <div className="rise rise-delay-3 mt-10 flex flex-wrap items-center gap-6">
              <Link
                to="/writing"
                className="group inline-flex items-center gap-3 bg-foreground text-background pl-6 pr-4 py-3 text-sm"
              >
                See selected writing
                <span className="w-8 h-8 rounded-full bg-accent grid place-items-center text-background transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Link>
              <Link to="/design" className="text-sm underline-grow">
                Or browse design work
              </Link>
            </div>
          </div>
          <div className="col-span-12 md:col-span-5 relative">
            <div className="relative aspect-[4/5] overflow-hidden bg-muted grain">
              <img
                src={heroArt}
                alt="Editorial artwork with ink brushstrokes and warm accents"
                width={1600}
                height={1200}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 md:-left-10 bg-background border border-border px-5 py-4 max-w-[240px] shadow-[0_20px_60px_-30px_rgba(0,0,0,0.35)]">
              <p className="text-[10px] uppercase tracking-[0.24em] text-muted-foreground">Now</p>
              <p className="text-sm mt-1 leading-snug">
                Taking on brand voice &amp; site design projects for Q1.
              </p>
            </div>
          </div>
        </div>

        {/* marquee */}
        <div className="border-y border-border overflow-hidden py-5">
          <div className="marquee flex whitespace-nowrap gap-16 text-2xl md:text-3xl font-display text-muted-foreground">
            {[...clients, ...clients].map((c, i) => (
              <span key={i} className="flex items-center gap-16">
                {c}
                <span className="text-accent">✦</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* INTRO / BIO */}
      <section className="mx-auto max-w-[1400px] px-6 md:px-10 py-24 md:py-32 grid grid-cols-12 gap-8">
        <div className="col-span-12 md:col-span-4">
          <p className="text-[11px] uppercase tracking-[0.28em] text-muted-foreground">01 — Bio</p>
        </div>
        <div className="col-span-12 md:col-span-8">
          <p className="font-display text-3xl md:text-5xl leading-[1.1] text-balance">
            Goodness Taiwo is a brand and creative writer, and a web
            designer with three years of experience helping startups,
            founders and growing businesses build brands that connect
            with people.
          </p>
          <div className="mt-10 grid md:grid-cols-2 gap-8 text-[15px] leading-relaxed text-muted-foreground">
            <p>
              She combines strategy, storytelling and design to build
              websites and brand experiences that are clear, engaging
              and easy to remember. As Creative Lead at{" "}
              <span className="text-foreground">Black Women App</span>,
              she developed the brand story, launch campaigns and
              in-app content. At{" "}
              <span className="text-foreground">Lorchain Labs</span>,
              she moved between brand copy and technical documentation.
              At <span className="text-foreground">Whizzcard</span>,
              she shaped the voice of a fintech product.
            </p>
            <p>
              Alongside writing, she designs modern,
              conversion-focused websites — partnering with product
              teams like{" "}
              <a href="https://tryflowdrive.com/" target="_blank" rel="noreferrer" className="text-foreground underline-grow">Flowdrive</a>{" "}
              and{" "}
              <a href="https://markdrop.app/" target="_blank" rel="noreferrer" className="text-foreground underline-grow">Markdrop</a>{" "}
              to create marketing sites where content and design work
              together seamlessly. Rather than treating writing and
              design as separate disciplines, she approaches them as
              one process.
            </p>
          </div>
        </div>
      </section>

      {/* SELECTED WRITING */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-24">
          <div className="flex items-end justify-between mb-14">
            <div>
              <p className="text-[11px] uppercase tracking-[0.28em] text-muted-foreground">02 — Selected writing</p>
              <h2 className="font-display text-5xl md:text-7xl mt-3 leading-[0.95]">Recent pieces.</h2>
            </div>
            <Link to="/writing" className="hidden md:inline underline-grow text-sm">All writing →</Link>
          </div>

          <div className="grid md:grid-cols-2 gap-10 md:gap-14">
            <WritingCard image={bwaCover} client="Black Women App" />
            <WritingCard image={lorchainCover} client="Lorchain Labs" />
            <WritingCard image={whizzCover} client="Whizzcard" />
            <WritingCard image={heroArt} client="Independent" />
          </div>
        </div>
      </section>

      {/* SELECTED DESIGN */}
      <section className="border-t border-border bg-secondary/40">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-24">
          <div className="flex items-end justify-between mb-14">
            <div>
              <p className="text-[11px] uppercase tracking-[0.28em] text-muted-foreground">03 — Selected design</p>
              <h2 className="font-display text-5xl md:text-7xl mt-3 leading-[0.95]">In the browser.</h2>
            </div>
            <Link to="/design" className="hidden md:inline underline-grow text-sm">All design →</Link>
          </div>

          <div className="grid md:grid-cols-12 gap-8">
            <DesignCard
              className="md:col-span-7"
              image={flowdriveShot}
              client="Flowdrive"
              title="Media hosting site."
              href="https://tryflowdrive.com/"
              meta="Marketing site · Brand type · Motion"
            />
            <DesignCard
              className="md:col-span-5"
              image={markdropShot}
              client="Markdrop"
              title="Markdrop.app"
              href="https://markdrop.app/"
              meta="Product site · Landing · Onboarding"
            />
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="mx-auto max-w-[1400px] px-6 md:px-10 py-24 md:py-32 grid grid-cols-12 gap-8">
        <div className="col-span-12 md:col-span-4">
          <p className="text-[11px] uppercase tracking-[0.28em] text-muted-foreground">04 — How I work</p>
          <h2 className="font-display text-5xl md:text-6xl mt-3 leading-[0.95]">How I work.</h2>
        </div>
        <ol className="col-span-12 md:col-span-8 divide-y divide-border">
          {[
            "Understand product / brand",
            "Shape",
            "Write / design",
            "Handover",
          ].map((h, i) => (
            <li key={h} className="py-8 grid grid-cols-12 gap-4 items-center">
              <span className="col-span-2 text-sm text-muted-foreground font-mono">0{i + 1}</span>
              <h3 className="col-span-10 font-display text-2xl md:text-3xl">{h}</h3>
            </li>
          ))}
        </ol>
      </section>
    </>
  );
}

function WritingCard({
  image, client,
}: { image: string; client: string }) {
  return (
    <Link to="/writing" className="group block">
      <div className="aspect-[4/3] overflow-hidden bg-muted mb-6 grain">
        <img src={image} alt="" loading="lazy" className="w-full h-full object-cover transition-transform duration-[900ms] group-hover:scale-[1.03]" />
      </div>
      <div className="flex items-baseline justify-between gap-6">
        <h3 className="font-display text-3xl md:text-4xl leading-tight">{client}</h3>
        <span className="text-sm underline-grow shrink-0">Check it out →</span>
      </div>
    </Link>
  );
}

function DesignCard({
  image, client, title, href, meta, className = "",
}: { image: string; client: string; title: string; href: string; meta: string; className?: string }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className={`group block hover-lift ${className}`}>
      <div className="aspect-[16/10] overflow-hidden bg-background border border-border">
        <img src={image} alt={`${client} website`} loading="lazy"
          className="w-full h-full object-cover object-top transition-transform duration-[1200ms] group-hover:scale-[1.02]" />
      </div>
      <div className="mt-5 flex items-baseline justify-between gap-6">
        <div>
          <p className="text-[11px] uppercase tracking-[0.24em] text-muted-foreground">{client}</p>
          <h3 className="mt-1 font-display text-2xl md:text-3xl">{title}</h3>
          <p className="text-xs text-muted-foreground mt-2">{meta}</p>
        </div>
        <span className="text-accent text-xl transition-transform group-hover:translate-x-1">↗</span>
      </div>
    </a>
  );
}
