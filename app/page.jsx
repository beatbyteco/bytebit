import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TopicPills } from "@/components/TopicPills";
import { PostCard } from "@/components/PostCard";
import { PostSlider } from "@/components/PostSlider";
import { Newsletter } from "@/components/Newsletter";
import {
  AboutCard,
  FeaturedCard,
  WorkExperienceCard,
  TechnologiesCard,
  CreatingCard,
} from "@/components/Sidebar";
import { getAllPosts, getFeaturedPosts, getAllCategories, getLatestPosts } from "@/lib/strapi";
import { WORK_EXPERIENCE, TECHNOLOGIES } from "@/lib/mock-data";
import { SITE_NAME, SITE_TAGLINE, SITE_DESCRIPTION } from "@/lib/utils";

const POSTS_PER_PAGE = 10;

export default async function HomePage({ searchParams }) {
  const { page: pageParam } = await searchParams;
  const currentPage = Math.max(1, Number(pageParam) || 1);

  const [posts, featured, categories, latest] = await Promise.all([
    getAllPosts(),
    getFeaturedPosts(),
    getAllCategories(),
    getLatestPosts(5),
  ]);

  const totalPages = Math.max(1, Math.ceil(posts.length / POSTS_PER_PAGE));
  const start = (currentPage - 1) * POSTS_PER_PAGE;
  const pagePosts = posts.slice(start, start + POSTS_PER_PAGE);

  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero */}
        {/* <section className="mx-auto max-w-3xl px-4 pb-8 pt-16 text-center sm:px-6 sm:pt-20">
          <h1 className="mb-5 text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            <span className="text-accent">Byte</span>Bit
          </h1>
          <p className="mx-auto max-w-2xl text-3xl leading-relaxed text-muted">
            {SITE_TAGLINE}
          </p>
        </section> */}

        {/* Latest posts slider */}
        <PostSlider posts={latest} />

        <TopicPills categories={categories} />

        {/* Main content */}
        <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_340px]">
            <div>
              <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2">
                {pagePosts.map((post, i) => (
                  <PostCard key={post.slug} post={post} index={i} />
                ))}
              </div>

              {totalPages > 1 && (
                <nav
                  aria-label="Pagination"
                  className="mt-14 flex items-center justify-center gap-2"
                >
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                    <a
                      key={p}
                      href={p === 1 ? "/" : `/?page=${p}`}
                      aria-current={p === currentPage ? "page" : undefined}
                      className={`flex h-9 w-9 items-center justify-center rounded-full border text-sm font-medium transition-colors ${
                        p === currentPage
                          ? "border-accent bg-accent text-white"
                          : "border-border text-muted hover:bg-border/60"
                      }`}
                    >
                      {p}
                    </a>
                  ))}
                </nav>
              )}
            </div>

            <aside className="space-y-6">
              {/* {posts[0] && <AboutCard post={posts[0]} />} */}
              <FeaturedCard posts={featured} />
              {/* <WorkExperienceCard items={WORK_EXPERIENCE} /> */}
              {/* <TechnologiesCard items={TECHNOLOGIES} /> */}
              {/* <CreatingCard posts={posts.slice(1, 4)} /> */}
            </aside>
          </div>
        </section>

        <Newsletter />
      </main>
      <Footer categories={categories} />
    </>
  );
}
