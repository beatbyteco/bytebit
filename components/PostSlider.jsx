"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { formatDate } from "@/lib/utils";

const GRADIENTS = [
  "from-indigo-600 via-purple-600 to-fuchsia-600",
  "from-orange-500 via-rose-500 to-red-600",
  "from-emerald-600 via-teal-600 to-cyan-700",
  "from-slate-800 via-slate-900 to-black",
  "from-amber-500 via-orange-500 to-rose-600",
];

const AUTOPLAY_MS = 5000;

export function PostSlider({ posts }) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef(null);

  const goTo = useCallback(
    (i) => setActive(((i % posts.length) + posts.length) % posts.length),
    [posts.length]
  );

  useEffect(() => {
    if (paused || posts.length <= 1) return;
    timerRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % posts.length);
    }, AUTOPLAY_MS);
    return () => clearInterval(timerRef.current);
  }, [paused, posts.length]);

  if (!posts.length) return null;

  return (
    <section
      className="mx-auto max-w-6xl px-4 pt-6 sm:px-6"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="Latest posts"
    >
      <div className="relative overflow-hidden rounded-3xl">
        {posts.map((post, i) => {
          const gradient = GRADIENTS[i % GRADIENTS.length];
          return (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className={` block aspect-[4/5] w-full overflow-hidden bg-gradient-to-br transition-opacity duration-700 sm:aspect-[21/8] ${gradient} ${
                i === active ? "relative opacity-100" : "pointer-events-none absolute inset-0 opacity-0"
              }`}
              aria-hidden={i !== active}
              tabIndex={i === active ? 0 : -1}
            >
              {post.featuredImage ? (
                <Image
                  src={post.featuredImage.url}
                  alt={post.featuredImage.alternativeText || post.title}
                  fill
                  priority={i === 0}
                  sizes="100vw"
                  className="object-cover"
                />
              ) : null}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10">
                {post.category && (
                  <span className="mb-3 inline-block rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-black">
                    {post.category.name}
                  </span>
                )}
                <h2 className="max-w-2xl text-xl font-bold leading-snug text-white sm:text-3xl">
                  {post.title}
                </h2>
                <p className="mt-2 text-xs text-white/80 sm:text-sm">
                  {post.author.name} · {formatDate(post.publishedAt)}
                </p>
              </div>
            </Link>
          );
        })}

        {posts.length > 1 && (
          <>
            <button
              onClick={() => goTo(active - 1)}
              aria-label="Previous post"
              className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-black shadow-md transition-transform hover:scale-105"
            >
              ‹
            </button>
            <button
              onClick={() => goTo(active + 1)}
              aria-label="Next post"
              className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-black shadow-md transition-transform hover:scale-105"
            >
              ›
            </button>

            <div className="absolute bottom-4 right-4 flex gap-1.5 sm:right-6">
              {posts.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  aria-current={i === active}
                  className={`h-1.5 rounded-full transition-all ${
                    i === active ? "w-6 bg-white" : "w-1.5 bg-white/50"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
