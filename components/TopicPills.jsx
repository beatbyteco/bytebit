import Link from "next/link";

export function TopicPills({ categories }) {
  return (
    <div id="topics" className="mx-auto max-w-3xl px-4 py-10 text-center sm:px-6">
      <p className="mb-5 text-xs font-semibold uppercase tracking-widest text-muted">
        Explore trending topics
      </p>
      <div className="flex flex-wrap items-center justify-center gap-2.5">
        {categories.map((cat) => (
          <Link
            key={cat.slug}
            href={`/category/${cat.slug}`}
            className="flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium text-foreground shadow-sm transition-transform hover:-translate-y-0.5 hover:shadow-md"
          >
            <span aria-hidden="true">{cat.icon}</span>
            {cat.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
