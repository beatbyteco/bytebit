import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { getAllCategories } from "@/lib/strapi";
import Link from "next/link";

export const metadata = {
  title: "Editorial Policy | ByteBit",
  description:
    "Learn about ByteBit, our mission, editorial standards, and commitment to delivering high-quality technology content.",
};

export default async function EditorialPolicyPage() {
  const categories = await getAllCategories();

  return (
    <>
      <Header />

      <main className="min-h-screen bg-background">
  <section className="border-b border-border bg-surface">
    <div className="mx-auto max-w-5xl px-6 py-20">
      <span className="rounded-full border border-border px-4 py-1 text-sm text-muted">
        Editorial
      </span>

      <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
        Editorial Policy
      </h1>

      <p className="mt-4 text-muted">
        Last Updated: July 2026
      </p>

      <p className="mt-6 max-w-3xl text-lg leading-8 text-muted">
        At ByteBit, our mission is to publish accurate, practical, and
        trustworthy technology content that helps developers, students, and
        technology enthusiasts learn, build, and stay informed. This Editorial
        Policy explains how we research, create, review, and maintain the
        content published on ByteBit.
      </p>
    </div>
  </section>

  <section className="mx-auto max-w-5xl px-6 py-16">
    <div className="space-y-14">

      <section>
        <h2 className="mb-4 text-3xl font-bold">
          Our Editorial Mission
        </h2>

        <div className="space-y-5 leading-8 text-muted">
          <p>
            ByteBit exists to simplify technology and make quality technical
            education accessible to everyone.
          </p>

          <p>
            Every article aims to provide practical knowledge, clear
            explanations, and real-world examples that readers can confidently
            apply in their learning journey.
          </p>
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-3xl font-bold">
          Content We Publish
        </h2>

        <div className="space-y-5 leading-8 text-muted">
          <p>Our editorial team publishes content across multiple areas including:</p>

          <ul className="list-disc space-y-2 pl-6">
            <li>Artificial Intelligence</li>
            <li>Programming</li>
            <li>Web Development</li>
            <li>Cybersecurity</li>
            <li>Cloud Computing</li>
            <li>Developer Tools</li>
            <li>Technology News</li>
            <li>Software Reviews</li>
            <li>Career & Learning Resources</li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-3xl font-bold">
          Editorial Standards
        </h2>

        <div className="space-y-5 leading-8 text-muted">
          <p>
            Every article published on ByteBit is guided by the following
            principles:
          </p>

          <ul className="list-disc space-y-2 pl-6">
            <li>Accuracy over speed.</li>
            <li>Original and valuable content.</li>
            <li>Clear, beginner-friendly explanations.</li>
            <li>Practical examples whenever possible.</li>
            <li>Transparent editorial practices.</li>
            <li>Respect for intellectual property.</li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-3xl font-bold">
          Research Process
        </h2>

        <div className="space-y-5 leading-8 text-muted">
          <p>
            Before publishing an article, we aim to verify information through
            reliable sources such as:
          </p>

          <ul className="list-disc space-y-2 pl-6">
            <li>Official documentation</li>
            <li>Product documentation</li>
            <li>Developer resources</li>
            <li>Technical specifications</li>
            <li>Industry announcements</li>
            <li>Hands-on testing whenever practical</li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-3xl font-bold">
          Corrections & Updates
        </h2>

        <div className="space-y-5 leading-8 text-muted">
          <p>
            Technology evolves quickly. If significant changes occur after an
            article has been published, we may update the content to keep it
            accurate and relevant.
          </p>

          <p>
            If readers identify factual errors, outdated information, or broken
            examples, we encourage them to contact us using the Contact Form.
          </p>
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-3xl font-bold">
          Independence
        </h2>

        <div className="space-y-5 leading-8 text-muted">
          <p>
            Editorial decisions are made independently by the ByteBit Team.
          </p>

          <p>
            Advertising, affiliate partnerships, or sponsorships do not
            influence our technical opinions, recommendations, or review
            conclusions.
          </p>
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-3xl font-bold">
          Product Reviews
        </h2>

        <div className="space-y-5 leading-8 text-muted">
          <p>When reviewing products or services, we may evaluate:</p>

          <ul className="list-disc space-y-2 pl-6">
            <li>Features</li>
            <li>Ease of use</li>
            <li>Performance</li>
            <li>Security</li>
            <li>Documentation quality</li>
            <li>Pricing</li>
            <li>Developer experience</li>
            <li>Overall value</li>
          </ul>

          <p>
            Reviews represent our editorial opinion at the time of publication
            and may change as products evolve.
          </p>
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-3xl font-bold">
          Sponsored Content
        </h2>

        <div className="space-y-5 leading-8 text-muted">
          <p>
            If ByteBit publishes sponsored content or enters into commercial
            partnerships, such content will be clearly identified to maintain
            transparency with our readers.
          </p>
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-3xl font-bold">
          Community Trust
        </h2>

        <div className="space-y-5 leading-8 text-muted">
          <p>
            Trust is one of ByteBit's most valuable assets.
          </p>

          <p>
            We are committed to publishing content that is educational,
            respectful, transparent, and helpful to developers and technology
            enthusiasts around the world.
          </p>
        </div>
      </section>

      <section className="rounded-3xl border border-border bg-surface p-8">
        <h2 className="mb-4 text-3xl font-bold">
          Contact Us
        </h2>

        <p className="leading-8 text-muted">
          Questions about our editorial process or requests for corrections can
          be submitted through the Contact Form available on
          <strong> <Link href="/contact">{" "}Contact Us</Link> </strong>.
        </p>
      </section>

    </div>
  </section>
</main>

      <Footer categories={categories} />
    </>
  );
}