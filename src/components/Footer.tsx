import { Link } from "@tanstack/react-router";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border mt-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-16 grid gap-12 md:grid-cols-12">
        <div className="md:col-span-6">
          <p className="text-[11px] uppercase tracking-[0.24em] text-muted-foreground mb-4">
            Currently open to
          </p>
          <h2 className="font-display text-4xl md:text-6xl leading-[0.95] text-balance">
            Brand voice work, editorial writing, and site design collaborations.
          </h2>
          <a
            href="mailto:goodness.a.olu@gmail.com"
            className="inline-flex items-center gap-3 mt-8 text-lg group"
          >
            <span className="underline-grow">goodness.a.olu@gmail.com</span>
            <span className="text-accent transition-transform group-hover:translate-x-1">→</span>
          </a>
        </div>
        <div className="md:col-span-6 grid grid-cols-2 gap-8 text-sm">
          <div>
            <p className="text-[11px] uppercase tracking-[0.24em] text-muted-foreground mb-3">Pages</p>
            <ul className="space-y-2">
              <li><Link to="/writing" className="underline-grow">Writing</Link></li>
              <li><Link to="/design" className="underline-grow">Design</Link></li>
              <li><Link to="/about" className="underline-grow">About</Link></li>
              <li><Link to="/contact" className="underline-grow">Contact</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-[0.24em] text-muted-foreground mb-3">Elsewhere</p>
            <ul className="space-y-2">
              <li><a href="mailto:goodness.a.olu@gmail.com" className="underline-grow">Email</a></li>
              <li><a href="https://tryflowdrive.com/" target="_blank" rel="noreferrer" className="underline-grow">Flowdrive ↗</a></li>
              <li><a href="https://markdrop.app/" target="_blank" rel="noreferrer" className="underline-grow">Markdrop ↗</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-6 flex items-center justify-between text-xs text-muted-foreground">
          <span>© {year} Goodness Taiwo. Set in Fraunces & Inter.</span>
        </div>
      </div>
    </footer>
  );
}
