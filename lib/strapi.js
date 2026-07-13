// import { MOCK_POSTS, MOCK_CATEGORIES } from "./mock-data";

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL;
const STRAPI_TOKEN = process.env.STRAPI_API_TOKEN;

// Revalidate every 60s (ISR) - tune based on how often you publish
const REVALIDATE_SECONDS = 60;

const strapiConfigured = Boolean(STRAPI_URL);

async function strapiFetch(path) {
  if (!strapiConfigured) return null;
  try {
    const res = await fetch(`${STRAPI_URL}/api${path}`, {
      headers: STRAPI_TOKEN ? { Authorization: `Bearer ${STRAPI_TOKEN}` } : {},
      next: { revalidate: REVALIDATE_SECONDS },
    });
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  }
}

// Strapi v5 REST returns media fields flat (no `.data.attributes` wrapper).
function mapStrapiImage(img) {
  if (!img?.url) return undefined;
  return {
    url: img.url.startsWith("http") ? img.url : `${STRAPI_URL}${img.url}`,
    alternativeText: img.alternativeText,
    width: img.width,
    height: img.height,
  };
}

function mapStrapiPost(entry) {
  return {
    id: entry.id,
    documentId: entry.documentId,
    slug: entry.slug,
    title: entry.title,
    excerpt: entry.excerpt,
    content: entry.content, // Strapi Blocks JSON — render with renderBlocks()
    featuredImage: mapStrapiImage(entry.featuredImage),
    publishedAt: entry.publishedAt,
    createdAt: entry.createdAt,
    updatedAt: entry.updatedAt,
    author: entry.author
      ? {
          name: entry.author.name,
          bio: entry.author.bio,
        }
      : MOCK_POSTS[0].author,
    category: entry.category
      ? { name: entry.category.name, slug: entry.category.slug }
      : null,
    tags: entry.tags?.map((t) => ({ name: t.name, slug: t.slug })) ?? [],
    isFeatured: Boolean(entry.isFeatured),
    seoTitle: entry.seoTitle,
    seoDescription: entry.seoDescription,
  };
}

export async function getAllPosts() {
  const data = await strapiFetch(
    "/blogs?populate=featuredImage,author,category,tags&sort=publishedAt:desc"
  );
  if (!data) return MOCK_POSTS;
  return data.data.map(mapStrapiPost);
}

export async function getPostBySlug(slug) {
  const data = await strapiFetch(
    `/blogs?filters[slug][$eq]=${encodeURIComponent(
      slug
    )}&populate=featuredImage,author,category,tags`
  );
  if (!data) return MOCK_POSTS.find((p) => p.slug === slug) ?? null;
  if (!data.data.length) return null;
  return mapStrapiPost(data.data[0]);
}

export async function getFeaturedPosts() {
  const all = await getAllPosts();
  const featured = all.filter((p) => p.isFeatured);
  return featured.length ? featured : all.slice(0, 3);
}

export async function getLatestPosts(limit = 5) {
  const all = await getAllPosts();
  return all.slice(0, limit);
}

export async function getPostsByCategory(categorySlug) {
  const all = await getAllPosts();
  return all.filter((p) => p.category?.slug === categorySlug);
}

export async function getAllCategories() {
  const data = await strapiFetch("/categories");
  if (data?.data?.length) {
    return data.data.map((c) => ({ name: c.name, slug: c.slug, icon: c.icon }));
  }
  // Fall back to deriving unique categories from posts if no /categories
  // endpoint is populated yet.
  const posts = await getAllPosts();
  const seen = new Map();
  posts.forEach((p) => {
    if (p.category && !seen.has(p.category.slug)) seen.set(p.category.slug, p.category);
  });
  return seen.size ? Array.from(seen.values()) : MOCK_CATEGORIES;
}

export async function getAllSlugs() {
  const posts = await getAllPosts();
  return posts.map((p) => p.slug);
}
