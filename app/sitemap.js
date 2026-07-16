import { getAllPosts, getAllCategories } from "@/lib/strapi";
import { SITE_URL } from "@/lib/utils";
export const dynamic = "force-dynamic";
export default async function sitemap() {
  const [posts, categories] = await Promise.all([getAllPosts(), getAllCategories()]);

  const postEntries = posts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: post.updatedAt,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const categoryEntries = categories.map((cat) => ({
    url: `${SITE_URL}/category/${cat.slug}`,
    changeFrequency: "weekly",
    priority: 0.6,
  }));

  return [
    { url: SITE_URL, changeFrequency: "daily", priority: 1 },
    { url: `${SITE_URL}/about`, changeFrequency: "monthly", priority: 0.5 },
    { url: `${SITE_URL}/contact`, changeFrequency: "monthly", priority: 0.3 },
    ...postEntries,
    ...categoryEntries,
  ];
}
