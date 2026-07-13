import Link from "next/link";
import { Search } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import Image from "next/image";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/#topics", label: "Topics" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Link
          href="/"
          className="flex items-center gap-2 font-bold tracking-tight"
        >
          {/* <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-foreground text-background"> */}
            <Image
              src="/bytebitlogo.png"
              alt="Byte Bit Logo"
              width={62}
              height={46}
            />
          {/* </span>
          <span className="text-lg">Byte Bit</span> */}
        </Link>

        <nav className="hidden items-center gap-1 rounded-full border border-border bg-surface px-2 py-1.5 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-1.5 text-sm font-medium text-muted transition-colors hover:bg-border/60 hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {/* <button
            aria-label="Search articles"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-border/60"
          >
            <Search size={16} />
          </button> */}
          <ThemeToggle />
          <Link
            href="/#newsletter"
            className="hidden rounded-full bg-accent px-5 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90 sm:inline-block"
          >
            Subscribe
          </Link>
        </div>
      </div>
    </header>
  );
}
