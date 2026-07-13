import Link from "next/link";
import Image from "next/image";
import { formatDate } from "@/lib/utils";

const GRADIENTS = [
  "from-orange-300 via-rose-300 to-red-400",
  "from-indigo-300 via-purple-300 to-violet-400",
  "from-pink-300 via-fuchsia-300 to-purple-400",
  "from-slate-700 via-slate-800 to-slate-900",
  "from-amber-200 via-orange-200 to-rose-300",
  "from-sky-200 via-blue-200 to-indigo-300",
  "from-emerald-300 via-green-300 to-teal-400",
  "from-purple-900 via-fuchsia-800 to-pink-700",
  "from-lime-200 via-green-200 to-emerald-300",
];

export function PostCard({ post, index = 0 }) {
  const gradient = GRADIENTS[index % GRADIENTS.length];

  return (
    <article className="group">
      <Link href={`/blog/${post.slug}`} className="block">
        <div
          className={`relative mb-4 aspect-[4/3] w-full overflow-hidden rounded-2xl bg-gradient-to-br ${gradient}`}
        >
          {post.featuredImage ? (
            <Image
              src={post.featuredImage.url}
              alt={post.featuredImage.alternativeText || post.title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : null}
          {post.category && (
            <div className="absolute left-3 top-3 flex gap-1.5">
              <span className="rounded-full bg-black/80 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-white backdrop-blur-sm">
                {post.category.name}
              </span>
            </div>
          )}
        </div>
      </Link>

      <p className="mb-1.5 text-xs text-muted">
        {post.author.name} on {formatDate(post.publishedAt)}
      </p>
      <h3 className="mb-1.5 text-lg font-bold leading-snug">
        <Link href={`/blog/${post.slug}`} className="transition-colors hover:text-accent">
          {post.title}
        </Link>
      </h3>
      <p className="line-clamp-2 text-sm text-muted">{post.excerpt}</p>
    </article>
  );
}
