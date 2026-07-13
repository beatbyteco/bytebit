import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PostCard } from "@/components/PostCard";
import { getAllCategories, getPostsByCategory } from "@/lib/strapi";
import { SITE_NAME } from "@/lib/utils";

export const revalidate = 60;

export async function generateStaticParams() {
  const categories = await getAllCategories();
  return categories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const categories = await getAllCategories();
  const category = categories.find((c) => c.slug === slug);
  if (!category) return {};
  return {
    title: `${category.name} Articles`,
    description: `Browse all ${category.name} posts on ${SITE_NAME}.`,
  };
}

export default async function CategoryPage({ params }) {
  const { slug } = await params;
  const [categories, posts] = await Promise.all([
    getAllCategories(),
    getPostsByCategory(slug),
  ]);
  const category = categories.find((c) => c.slug === slug);
  if (!category) notFound();

  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="mx-auto max-w-6xl px-4 pb-20 pt-14 sm:px-6">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-muted">
            Category
          </p>
          <h1 className="mb-10 text-3xl font-bold sm:text-4xl">
            {category.icon} {category.name}
          </h1>

          {posts.length ? (
            <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post, i) => (
                <PostCard key={post.slug} post={post} index={i} />
              ))}
            </div>
          ) : (
            <p className="text-muted">No posts in this category yet.</p>
          )}
        </section>
      </main>
      <Footer categories={categories} />
    </>
  );
}
