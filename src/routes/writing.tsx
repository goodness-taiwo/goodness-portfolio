import { createFileRoute } from "@tanstack/react-router";
import bwaCover from "../assets/bwa-cover.jpg";
import lorchainCover from "../assets/lorchain-cover.jpg";
import whizzCover from "../assets/whizzcard-cover.jpg";
import heroArt from "../assets/hero-art.jpg";

export const Route = createFileRoute("/writing")({
  head: () => ({
    meta: [
      { title: "Writing — Goodness Taiwo" },
      { name: "description", content: "Selected brand, editorial and product writing by Goodness Taiwo for Black Women App, Lorchain Labs, Whizzcard and others." },
      { property: "og:title", content: "Writing — Goodness Taiwo" },
      { property: "og:description", content: "Brand voice, launch essays, product copy and technical writing." },
    ],
  }),
  component: Writing,
});

type Piece = {
  cover: string;
  client: string;
  year: string;
  kind: string;
  title: string;
  intro: string;
  pull: string;
  body: string[];
};

const pieces: Piece[] = [
  {
    cover: bwaCover,
    client: "Black Women App (BWA)",
    year: "2024",
    kind: "Brand launch · Creative writer",
    title: "A room, and then a network.",
    intro:
      "The brief was to launch an app. The real work was to write down what we already were before there was software — a room a Black woman could walk into and set her whole self down.",
    pull:
      "We didn't want to build a platform. We wanted to build the feeling of a friend saving you a seat.",
    body: [
      "Before Black Women App was an app, it was a room. A group chat, a series of voice notes at midnight, a shared document where somebody had begun a sentence and three other women had finished it. The product had to prove it could hold that.",
      "For the launch, we wrote in the second person and stayed there. No 'users'. No 'community members'. You. Because the woman on the other side of the screen didn't need another platform to sign up for; she needed to feel recognised in the first eight seconds.",
      "The homepage was three moves: a promise, a proof, and an open door. Everything else — the features, the roadmap, the polite tour — waited politely on the second page. It converted better than any version we tested against.",
    ],
  },
  {
    cover: lorchainCover,
    client: "Lorchain Labs",
    year: "2024",
    kind: "Brand & technical writer",
    title: "Documentation, written like it wants to be read.",
    intro:
      "Most developer documentation forgets there is a human on the other side of the screen, half a coffee in, trying to ship before standup. I rewrote Lorchain's developer surface with that person in mind.",
    pull:
      "A good doc doesn't just answer the question. It quietly reassures you that you're not stupid for asking it.",
    body: [
      "The original documentation was correct and unreadable — a common combination. Every page assumed you already understood the thing you'd come to the page to understand. We reversed the order: start with what the developer is actually trying to do, then hand them the smallest possible amount of API to do it.",
      "In parallel, we tightened the brand voice: warm, exact, allergic to jargon. The word 'seamless' was retired. So was 'leverage'. What replaced them were verbs that describe what the product actually does — the kind of language a senior engineer uses when they've stopped trying to impress anybody.",
      "Support tickets on the affected surfaces dropped noticeably in the following weeks. That, for a technical writer, is the only review that counts.",
    ],
  },
  {
    cover: whizzCover,
    client: "Whizzcard",
    year: "2023",
    kind: "Brand writer",
    title: "Money, without the theatre.",
    intro:
      "Fintech has a tendency to shout. Whizzcard is a card, not a rocket ship, and the audience knows the difference. The job was to sound like a company that respects your intelligence and your inbox.",
    pull:
      "One card. Three sentences. A promise the product could actually keep.",
    body: [
      "We started by writing down every phrase the category had exhausted — 'the future of', 'reimagined', 'seamless', 'financial freedom' — and agreed, on paper, never to use them. That single constraint did most of the work.",
      "The homepage became almost embarrassingly short. A hero of one line and a subhead. A single card, angled just so. Three benefits, one per sentence, each phrased the way a friend would say it if you asked, over dinner, why you'd want the thing. No fireworks.",
      "For the onboarding, we wrote every screen as if the user was already mid-task and mildly annoyed at being interrupted — which, on a phone, they usually are. The copy shrank. The completion rate didn't.",
    ],
  },
  {
    cover: heroArt,
    client: "Independent",
    year: "2025",
    kind: "Essay",
    title: "On writing for founders who don't like writing.",
    intro:
      "A short essay on how I pull a company's voice out of Slack messages, half-finished decks and one very good voice note — and turn it into something a stranger could love.",
    pull:
      "Voice isn't invented in a workshop. It's overheard, then written down carefully.",
    body: [
      "Founders who dislike writing tend to be excellent talkers. That's the material. I ask for a thirty-minute call, no slides, and I record it. What I'm listening for isn't the pitch — I've read the pitch — it's the aside. The place where the founder forgets they're being watched and describes the product the way they'd describe it to a friend at a dinner they didn't want to attend.",
      "Then I go home and I write down that voice. I don't invent, I don't sprinkle. I just remove the ums and put a paragraph break where the pause was. Nine times out of ten, that's the copy.",
      "The tenth time is a rewrite, because sometimes the founder is trying, in real time, to convince themselves. That's a different job — a slower one — and it's the one I like most.",
    ],
  },
];

function Writing() {
  return (
    <>
      <section className="mx-auto max-w-[1400px] px-6 md:px-10 pt-16 md:pt-24 pb-16">
        <p className="rise text-[11px] uppercase tracking-[0.28em] text-muted-foreground">Section II — Writing</p>
        <h1 className="rise rise-delay-1 mt-6 font-display text-6xl md:text-[10vw] leading-[0.9] text-balance">
          The written work.
        </h1>
        <p className="rise rise-delay-2 mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed">
          Four pieces, chosen because they show the range: a launch, a technical
          rewrite, a piece of product voice, and an essay about the craft
          itself. Excerpts below are from the shipped work.
        </p>
      </section>

      <div className="border-t border-border">
        {pieces.map((p, i) => (
          <article key={p.title} className="border-b border-border">
            <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-20 md:py-28 grid grid-cols-12 gap-8">
              <div className="col-span-12 md:col-span-5">
                <div className="sticky top-24">
                  <div className="aspect-[4/5] overflow-hidden bg-muted grain">
                    <img src={p.cover} alt="" loading="lazy" className="w-full h-full object-cover" />
                  </div>
                  <div className="mt-4 flex items-center justify-between text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
                    <span>{p.client}</span>
                    <span>{p.year}</span>
                  </div>
                </div>
              </div>
              <div className="col-span-12 md:col-span-7">
                <p className="text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
                  Piece 0{i + 1} · {p.kind}
                </p>
                <h2 className="mt-4 font-display text-5xl md:text-6xl leading-[0.98] text-balance">{p.title}</h2>
                <p className="mt-6 text-lg leading-relaxed text-muted-foreground max-w-xl">{p.intro}</p>

                <blockquote className="mt-10 border-l-2 border-accent pl-6 font-display text-2xl md:text-3xl italic leading-snug text-foreground text-balance">
                  “{p.pull}”
                </blockquote>

                <div className="mt-10 space-y-6 max-w-xl text-[15px] leading-relaxed">
                  {p.body.map((para, idx) => (
                    <p key={idx}>{para}</p>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
