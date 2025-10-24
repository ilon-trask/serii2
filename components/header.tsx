import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

export function Header() {
  const navItems = [
    { href: "#features", label: "Features" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#download", label: "Download" },
  ];

  return (
    <header className=" backdrop-blur-sm">
      <div className="container mx-auto flex h-24 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          Logo
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-muted-foreground transition-colors hover:text-accent-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
