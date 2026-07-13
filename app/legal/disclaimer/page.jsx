import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { getAllCategories } from "@/lib/strapi";
import Link from "next/link";

export const metadata = {
  title: "Disclaimer | ByteBit",
  description:
    "Learn about ByteBit, our mission, editorial standards, and commitment to delivering high-quality technology content.",
};

export default async function DisclaimerPage() {
  const categories = await getAllCategories();

  return (
    <>
      <Header />

      <main className="min-h-screen bg-background">
  <section className="border-b border-border bg-surface">
    <div className="mx-auto max-w-5xl px-6 py-20">
      <span className="rounded-full border border-border px-4 py-1 text-sm text-muted">
        Legal
      </span>

      <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
        Disclaimer
      </h1>

      <p className="mt-4 text-muted">
        Last Updated: July 2026
      </p>

      <p className="mt-6 max-w-3xl text-lg leading-8 text-muted">
        The information provided on ByteBit is published in good faith and is
        intended solely for educational and informational purposes. While we
        strive to keep our content accurate and up to date, we make no
        guarantees regarding the completeness, reliability, or accuracy of the
        information available on this website.
      </p>
    </div>
  </section>

  <section className="mx-auto max-w-5xl px-6 py-16">
    <div className="space-y-14">

      <section>
        <h2 className="mb-4 text-3xl font-bold">
          Educational Purpose
        </h2>

        <div className="space-y-5 leading-8 text-muted">
          <p>
            All articles, tutorials, programming guides, AI content, reviews,
            and educational resources published on ByteBit are intended for
            informational and learning purposes only.
          </p>

          <p>
            Technology evolves rapidly. APIs, frameworks, programming
            languages, libraries, cloud services, and software tools may change
            after an article has been published.
          </p>

          <p>
            Readers are encouraged to verify important technical information
            using official documentation before implementing it in production
            environments.
          </p>
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-3xl font-bold">
          No Professional Advice
        </h2>

        <div className="space-y-5 leading-8 text-muted">
          <p>
            Content published on ByteBit does not constitute professional,
            financial, legal, medical, cybersecurity, or business advice.
          </p>

          <p>
            Any decisions you make based on information available on this
            website are entirely your own responsibility.
          </p>
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-3xl font-bold">
          Code Examples
        </h2>

        <div className="space-y-5 leading-8 text-muted">
          <p>
            We regularly publish source code, configuration examples, deployment
            guides, and tutorials.
          </p>

          <p>
            Although every effort is made to ensure these examples are correct,
            we cannot guarantee that they will work in every environment,
            operating system, framework version, or cloud platform.
          </p>

          <ul className="list-disc space-y-2 pl-6">
            <li>Always test code before production deployment.</li>
            <li>Review security implications carefully.</li>
            <li>Create backups before making significant changes.</li>
            <li>Follow official documentation whenever possible.</li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-3xl font-bold">
          AI & Technology Content
        </h2>

        <div className="space-y-5 leading-8 text-muted">
          <p>
            Articles related to Artificial Intelligence, Machine Learning,
            cloud platforms, cybersecurity, and software development reflect
            information available at the time of publication.
          </p>

          <p>
            Features, APIs, pricing, licensing, and product capabilities may
            change over time.
          </p>
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-3xl font-bold">
          External Links
        </h2>

        <div className="space-y-5 leading-8 text-muted">
          <p>
            ByteBit may include links to third-party websites, documentation,
            repositories, or services for reference and educational purposes.
          </p>

          <p>
            We are not responsible for the content, privacy practices,
            availability, or accuracy of information on third-party websites.
          </p>
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-3xl font-bold">
          Affiliate Disclosure
        </h2>

        <div className="space-y-5 leading-8 text-muted">
          <p>
            Some pages may contain affiliate links to products or services that
            we believe provide value to our readers.
          </p>

          <p>
            If you purchase through one of these links, ByteBit may earn a
            small commission at no additional cost to you.
          </p>

          <p>
            Affiliate relationships never influence our editorial opinions,
            recommendations, or reviews.
          </p>
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-3xl font-bold">
          Advertising
        </h2>

        <div className="space-y-5 leading-8 text-muted">
          <p>
            ByteBit may display advertisements through Google AdSense and other
            advertising partners.
          </p>

          <p>
            Advertisements do not represent endorsements by ByteBit, and we are
            not responsible for products, services, or claims made by third-party
            advertisers.
          </p>
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-3xl font-bold">
          Limitation of Liability
        </h2>

        <div className="space-y-5 leading-8 text-muted">
          <p>
            ByteBit and the ByteBit Team shall not be held liable for any
            direct, indirect, incidental, consequential, or special damages
            arising from the use of this website or reliance on its content.
          </p>

          <p>
            This includes, but is not limited to:
          </p>

          <ul className="list-disc space-y-2 pl-6">
            <li>Data loss</li>
            <li>Software failures</li>
            <li>Deployment issues</li>
            <li>Business interruption</li>
            <li>Security incidents</li>
            <li>Programming errors</li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-3xl font-bold">
          Changes to This Disclaimer
        </h2>

        <p className="leading-8 text-muted">
          We reserve the right to update this Disclaimer at any time.
          Any changes will become effective immediately after publication on
          this page.
        </p>
      </section>

      <section className="rounded-3xl border border-border bg-surface p-8">
        <h2 className="mb-4 text-3xl font-bold">
          Contact Us
        </h2>

        <p className="leading-8 text-muted">
          If you have any questions regarding this Disclaimer, please contact
          the ByteBit Team through the Contact Form available at
          <strong> <Link href="/contact">{" "}Contact Us</Link></strong>.
        </p>
      </section>

    </div>
  </section>
</main>

      <Footer categories={categories} />
    </>
  );
}