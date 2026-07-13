import Link from "next/link";
import { MapPin } from "lucide-react";
import { GithubIcon, TwitterIcon, LinkedinIcon } from "./SocialIcons";
import { formatDate } from "@/lib/utils";
import Image from "next/image";

const SOCIAL_ICONS = {
  github: GithubIcon,
  twitter: TwitterIcon,
  linkedin: LinkedinIcon,
};

function SidebarCard({ eyebrow, children }) {
  return (
    <div className="rounded-2xl border border-border bg-surface p-6">
      <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted">{eyebrow}</p>
      {children}
    </div>
  );
}

export function AboutCard({ post }) {
  const { author } = post;
  return (
    <SidebarCard eyebrow="About">
      <div className="mb-3 flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-accent/15 text-sm font-bold text-accent">
          {author.name
            .split(" ")
            .map((n) => n[0])
            .join("")}
        </div>
        <div>
          <p className="font-semibold leading-tight">{author.name}</p>
          <p className="text-xs text-muted">Full Stack Developer</p>
        </div>
      </div>
      <p className="mb-4 text-sm leading-relaxed text-muted">{author.bio}</p>
      {author.location && (
        <p className="mb-3 flex items-center gap-1.5 text-sm text-muted">
          <MapPin size={14} /> {author.location}
        </p>
      )}
      {author.socials && (
        <div className="flex gap-2">
          {author.socials.map((s) => {
            const Icon = SOCIAL_ICONS[s.platform];
            if (!Icon) return null;
            return (
              <a
                key={s.platform}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.platform}
                className="flex h-8 w-8 items-center justify-center rounded-full border border-border transition-colors hover:bg-border/60"
              >
                <Icon size={14} />
              </a>
            );
          })}
        </div>
      )}
    </SidebarCard>
  );
}

export function FeaturedCard({ posts }) {
  if (!posts.length) return null;
  const post = posts[0];
  return (
    <SidebarCard eyebrow="Featured Posts">
      <Link href={`/blog/${post.slug}`} className="group block">
        <div className="relative mb-0 aspect-4/3 overflow-hidden rounded-xl bg-linear-to-br from-violet-700 via-purple-600 to-fuchsia-600 p-5">
        {post.featuredImage ? (
                        // <div className="relative mb-10 aspect-video w-full overflow-hidden rounded-2xl">
                          <Image
                            src={post.featuredImage.url}
                            alt={post.featuredImage.alternativeText || post.title}
                            fill
                            priority
                            sizes="(max-width: 1024px) 100vw, 66vw"
                            className="object-cover"
                          />
                        // </div>
                      ) : (
                        <div className="mb-10 aspect-video w-full rounded-2xl bg-linear-to-br from-violet-300 via-purple-300 to-fuchsia-300" />
                      )}
          <span className="absolute left-4 top-4 rounded-full bg-black/40 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-white backdrop-blur-sm">
            {post.category?.name ?? "Featured"}
          </span>
          <div className="absolute inset-x-0 bottom-0 p-5 bg-linear-to-t from-black/80 to-transparent">
            <p className="mb-1 text-xs text-white/80">
              {post.author.name} on {formatDate(post.publishedAt)}
            </p>
            <h4 className="text-base font-bold leading-snug text-white transition-opacity group-hover:opacity-90">
              {post.title}
            </h4>
          </div>
        </div>
      </Link>
    </SidebarCard>
  );
}

export function WorkExperienceCard({ items }) {
  return (
    <SidebarCard eyebrow="Work Experience">
      <ul className="space-y-4">
        {items.map((item) => (
          <li key={item.role} className="flex items-start justify-between gap-3">
            <div>
              <p className="text-sm font-semibold">{item.role}</p>
              <p className="text-xs text-muted">{item.company}</p>
            </div>
            <span className="whitespace-nowrap text-xs text-muted">
              {item.period}
              {item.current ? " — Now" : ""}
            </span>
          </li>
        ))}
      </ul>
    </SidebarCard>
  );
}

export function TechnologiesCard({ items }) {
  return (
    <SidebarCard eyebrow="Technologies">
      <ul className="space-y-4">
        {items.map((tech) => (
          <li key={tech.name} className="flex items-start gap-3">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-border/60 text-base">
              {tech.icon}
            </span>
            <div>
              <p className="text-sm font-semibold">{tech.name}</p>
              <p className="text-xs leading-relaxed text-muted">{tech.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </SidebarCard>
  );
}

export function CreatingCard({ posts }) {
  return (
    <SidebarCard eyebrow="Creating">
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              className="text-sm font-semibold text-accent transition-opacity hover:opacity-80"
            >
              {post.title} ↗
            </Link>
            <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-muted">{post.excerpt}</p>
          </li>
        ))}
      </ul>
    </SidebarCard>
  );
}
