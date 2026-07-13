import Link from "next/link";
import { GithubIcon, TwitterIcon, LinkedinIcon } from "./SocialIcons";
import Image from "next/image";

export function Footer({ categories }) {
  return (
    <footer className="mt-20 border-t border-border">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <Link href="/" className="mb-3 flex items-center gap-2 font-bold">
              {/* <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-foreground text-background">
                <Image src="/ByteBit.png" alt="Byte Bit Logo" width={32} height={32} />
              </span>
              Byte Bit */}
              <Image
                src="/bytebitlogo.png"
                alt="Byte Bit Logo"
                width={62}
                height={46}
              />
            </Link>
            <p className="mb-4 max-w-xs text-sm text-muted">
              A ByteBit is your trusted source for tech news, AI, programming,
              cybersecurity, gadget reviews, and practical tutorials all in one
              place.
            </p>
            {/* <div className="flex gap-2">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border hover:bg-border/60"
              >
                <GithubIcon size={15} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border hover:bg-border/60"
              >
                <TwitterIcon size={15} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border hover:bg-border/60"
              >
                <LinkedinIcon size={15} />
              </a>
            </div> */}
          </div>

          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted">
              Categories
            </p>
            <ul className="space-y-2">
              {categories.slice(0, 5).map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/category/${c.slug}`}
                    className="text-sm text-muted transition-colors hover:text-foreground"
                  >
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted">
              Pages
            </p>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-muted hover:text-foreground"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-muted hover:text-foreground"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/sitemap.xml"
                  className="text-sm text-muted hover:text-foreground"
                >
                  Sitemap
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <p className="mt-10 border-t border-border pt-6 text-center text-xs text-muted">
          © {new Date().getFullYear()} Byte Bit. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
