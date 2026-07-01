import { Link } from "@tanstack/react-router";

const links: { to: "/" | "/writing" | "/design" | "/about" | "/contact"; label: string; exact?: boolean }[] = [
  { to: "/", label: "Index", exact: true },
  { to: "/writing", label: "Writing" },
  { to: "/design", label: "Design" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/75 border-b border-border/60">
      <nav className="mx-auto max-w-[1400px] px-6 md:px-10 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-baseline gap-2 group">
          <span className="font-display text-xl tracking-tight">Goodness&nbsp;Taiwo</span>
          <span className="hidden sm:inline text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
            — Writer / Designer
          </span>
        </Link>
        <ul className="flex items-center gap-6 md:gap-8 text-sm">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                activeOptions={{ exact: l.exact }}
                activeProps={{ className: "text-foreground" }}
                inactiveProps={{ className: "text-muted-foreground hover:text-foreground" }}
                className="underline-grow transition-colors"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
