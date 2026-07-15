import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Newsletter } from "@/components/Newsletter";
import { AboutCard, TechnologiesCard, CreatingCard, FeaturedCard } from "@/components/Sidebar";
import { getAllSlugs, getPostBySlug, getAllPosts, getAllCategories, getFeaturedPosts} from "@/lib/strapi";
import { TECHNOLOGIES } from "@/lib/mock-data";
import { renderBlocks, blocksToPlainText } from "@/lib/render-blocks";
import { formatDate, estimateReadingTime, SITE_URL, SITE_NAME } from "@/lib/utils";
import BlogAnalytics from "@/components/BlogAnalytics";

export const revalidate = 60;

export async function generateStaticParams() {
  const slugs = await getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};

  const title = post.seoTitle || post.title;
  const description = post.seoDescription || post.excerpt;
  const url = `${SITE_URL}/blog/${post.slug}`;
  const ogImage = post.featuredImage?.url;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title,
      description,
      url,
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [post.author.name],
      images: ogImage ? [{ url: ogImage }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ogImage ? [ogImage] : undefined,
    },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const [post, allPosts, categories, featured] = await Promise.all([
    getPostBySlug(slug),
    getAllPosts(),
    getAllCategories(),
    getFeaturedPosts(),
  ]);

  if (!post) notFound();

  const plainText = blocksToPlainText(post.content);
  const readingTime = estimateReadingTime(plainText);
  const related = allPosts.filter((p) => p.slug !== post.slug).slice(0, 3);
  const url = `${SITE_URL}/blog/${post.slug}`;

  return (
    <>
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.excerpt,
            image: post.featuredImage?.url,
            datePublished: post.publishedAt,
            dateModified: post.updatedAt,
            author: { "@type": "Person", name: post.author.name },
            publisher: { "@type": "Organization", name: SITE_NAME },
            mainEntityOfPage: { "@type": "WebPage", "@id": url },
          }),
        }}
      />
      <BlogAnalytics slug={post.slug} />

      <main className="flex-1">
        <article className="mx-auto max-w-6xl px-4 pt-10 sm:px-6">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-muted">
            <Link href="/" className="hover:text-foreground">
              Home
            </Link>{" "}
            /{" "}
            <Link href="/#topics" className="hover:text-foreground">
              Blog
            </Link>{" "}
            / <span className="text-foreground">{post.title}</span>
          </nav>

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_340px]">
            <div>
              {post.category && (
                <div className="mb-4 flex flex-wrap gap-1.5">
                  <Link
                    href={`/category/${post.category.slug}`}
                    className="rounded-full bg-foreground px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-background"
                  >
                    {post.category.name}
                  </Link>
                </div>
              )}

              <h1 className="mb-4 text-3xl font-bold leading-tight sm:text-4xl">{post.title}</h1>

              <div className="mb-8 flex items-center gap-3 text-sm text-muted">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent/15 text-xs font-bold text-accent">
                  {post.author.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </span>
                <span>{post.author.name}</span>
                <span aria-hidden="true">•</span>
                <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
                <span aria-hidden="true">•</span>
                <span>{readingTime} min read</span>
              </div>

              {post.featuredImage ? (
                <div className="relative mb-10 aspect-video w-full overflow-hidden rounded-2xl">
                  <Image
                    src={post.featuredImage.url}
                    alt={post.featuredImage.alternativeText || post.title}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 66vw"
                    className="object-cover"
                  />
                </div>
              ) : (
                <div className="mb-10 aspect-video w-full rounded-2xl bg-linear-to-br from-violet-300 via-purple-300 to-fuchsia-300" />
              )}

              <div className="prose-blog">{renderBlocks(post.content)}</div>

              {post.tags?.length > 0 && (
                <div className="mt-8 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag.slug}
                      className="rounded-full border border-border px-3 py-1 text-xs text-muted"
                    >
                      #{tag.name}
                    </span>
                  ))}
                </div>
              )}

              {post.author.bio && (
                <div className="hidden md:block">
                <div className="mt-12 flex items-start gap-4 rounded-2xl border border-border bg-surface p-6">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent/15 text-sm font-bold text-accent">
                    {post.author.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                  <div>
                    <p className="font-semibold">{post.author.name}</p>
                    <p className="mt-1 text-sm leading-relaxed text-muted">{post.author.bio}</p>
                  </div>
                </div>
                </div>
              )}
            </div>

            <aside className="space-y-6">
              <AboutCard post={post} />
              <FeaturedCard posts={featured} />
              {/* <TechnologiesCard items={TECHNOLOGIES} /> */}
              {/* <CreatingCard posts={related} /> */}
            </aside>
          </div>
        </article>

        <Newsletter />
      </main>
      <Footer categories={categories} />
    </>
  );
}
