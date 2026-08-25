import { createFileRoute, Link, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/mercy")({
  component: MercyLayout,
});

const links = [
  { to: "/mercy", label: "Home" },
  { to: "/mercy/work", label: "Work" },
  { to: "/mercy/about", label: "About" },
  { to: "/mercy/writing", label: "Writing" },
  { to: "/mercy/contact", label: "Contact" },
] as const;

function MercyLayout() {
  return (
    <div className="mercy min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md">
        <nav className="mx-auto max-w-[1160px] px-6 h-16 flex items-center justify-between">
          <Link to="/mercy" className="text-[15px] font-semibold tracking-tight">
            Mercy Kehinde<span className="text-accent">.</span>
          </Link>
          <ul className="hidden md:flex items-center gap-8 text-[13px] text-muted-foreground">
            {links.slice(1).map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="transition-colors hover:text-accent"
                  activeProps={{ className: "text-foreground" }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            to="/mercy/contact"
            className="text-[13px] font-medium rounded-full border border-accent/60 text-accent px-4 py-2 transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            Let's talk
          </Link>
        </nav>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto max-w-[1160px] px-6 py-10 flex flex-col md:flex-row gap-4 md:items-center md:justify-between text-[13px] text-muted-foreground">
          <p>
            Designed and written by Mercy Kehinde Olukolujo
            <span className="text-accent"> ·</span> built with intention.
          </p>
          <div className="flex flex-wrap gap-5">
            {links.map((l) => (
              <Link key={l.to} to={l.to} className="hover:text-accent transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
