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
        Legal
      </span>

      <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
        Terms & Conditions
      </h1>

      <p className="mt-4 text-muted">
        Effective Date: July 2026
      </p>

      <p className="mt-6 max-w-3xl text-lg leading-8 text-muted">
        Welcome to ByteBit. These Terms & Conditions govern your access to and
        use of <strong>bytebit.online</strong>. By using this website, you agree
        to comply with these terms. If you do not agree with any part of these
        Terms, please discontinue using the website.
      </p>
    </div>
  </section>

  <section className="mx-auto max-w-5xl px-6 py-16">
    <div className="space-y-14">

      <section>
        <h2 className="mb-4 text-3xl font-bold">
          Acceptance of Terms
        </h2>

        <div className="space-y-5 leading-8 text-muted">
          <p>
            By accessing ByteBit, you confirm that you have read, understood,
            and agreed to these Terms & Conditions.
          </p>

          <p>
            You also agree to use this website only for lawful purposes and in
            accordance with applicable laws and regulations.
          </p>
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-3xl font-bold">
          About ByteBit
        </h2>

        <div className="space-y-5 leading-8 text-muted">
          <p>
            ByteBit is an independent technology publication that provides
            educational content related to Artificial Intelligence,
            Programming, Web Development, Cybersecurity, Cloud Computing,
            Software Reviews, Developer Resources, and Technology News.
          </p>

          <p>
            All content is intended for educational and informational purposes
            only.
          </p>
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-3xl font-bold">
          Intellectual Property
        </h2>

        <div className="space-y-5 leading-8 text-muted">
          <p>
            Unless otherwise stated, all content published on ByteBit,
            including articles, tutorials, graphics, branding, logos, design,
            and original source code examples, is the intellectual property of
            ByteBit and is protected by applicable copyright and intellectual
            property laws.
          </p>

          <p>You may:</p>

          <ul className="list-disc space-y-2 pl-6">
            <li>Read our articles.</li>
            <li>Share links to our content.</li>
            <li>Quote limited portions with proper attribution.</li>
          </ul>

          <p>You may not:</p>

          <ul className="list-disc space-y-2 pl-6">
            <li>Republish complete articles.</li>
            <li>Copy substantial portions of our content.</li>
            <li>Sell or redistribute our content.</li>
            <li>Use our branding without permission.</li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-3xl font-bold">
          Acceptable Use
        </h2>

        <div className="space-y-5 leading-8 text-muted">
          <p>
            While using ByteBit, you agree not to:
          </p>

          <ul className="list-disc space-y-2 pl-6">
            <li>Attempt unauthorized access to our systems.</li>
            <li>Distribute malware or malicious code.</li>
            <li>Perform automated scraping without permission.</li>
            <li>Interfere with website functionality.</li>
            <li>Use the website for unlawful purposes.</li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-3xl font-bold">
          Newsletter
        </h2>

        <div className="space-y-5 leading-8 text-muted">
          <p>
            Users who subscribe to the ByteBit newsletter agree to receive
            emails related to technology news, tutorials, educational
            resources, product updates, and announcements.
          </p>

          <p>
            Subscribers may unsubscribe at any time using the unsubscribe link
            included in every newsletter email.
          </p>
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-3xl font-bold">
          Affiliate Links
        </h2>

        <div className="space-y-5 leading-8 text-muted">
          <p>
            ByteBit may participate in affiliate marketing programs.
          </p>

          <p>
            If you purchase products or services through affiliate links,
            ByteBit may receive a commission at no additional cost to you.
          </p>

          <p>
            Affiliate partnerships never influence our editorial opinions or
            recommendations.
          </p>
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-3xl font-bold">
          Advertising
        </h2>

        <div className="space-y-5 leading-8 text-muted">
          <p>
            ByteBit may display advertisements provided by third-party
            advertising networks such as Google AdSense.
          </p>

          <p>
            Advertisements do not constitute endorsements, and ByteBit is not
            responsible for the products, services, or claims made by
            advertisers.
          </p>
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-3xl font-bold">
          Third-Party Services
        </h2>

        <div className="space-y-5 leading-8 text-muted">
          <p>
            ByteBit may integrate with third-party platforms and services such
            as Cloudinary, Vercel, Render, Railway, Neon PostgreSQL, Google
            Analytics, Google AdSense, and email delivery providers.
          </p>

          <p>
            We are not responsible for the privacy practices, availability, or
            functionality of third-party services.
          </p>
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-3xl font-bold">
          Disclaimer of Warranties
        </h2>

        <div className="space-y-5 leading-8 text-muted">
          <p>
            ByteBit is provided on an "as is" and "as available" basis without
            warranties of any kind, either express or implied.
          </p>

          <p>
            We do not guarantee uninterrupted availability, error-free
            operation, or complete accuracy of all published content.
          </p>
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-3xl font-bold">
          Limitation of Liability
        </h2>

        <div className="space-y-5 leading-8 text-muted">
          <p>
            To the fullest extent permitted by law, ByteBit and the ByteBit
            Team shall not be liable for any direct, indirect, incidental,
            consequential, or special damages arising from the use of this
            website or reliance on its content.
          </p>
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-3xl font-bold">
          Changes to These Terms
        </h2>

        <div className="space-y-5 leading-8 text-muted">
          <p>
            We reserve the right to update or modify these Terms & Conditions
            at any time without prior notice.
          </p>

          <p>
            Continued use of ByteBit after updates constitutes acceptance of
            the revised Terms.
          </p>
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-3xl font-bold">
          Governing Law
        </h2>

        <p className="leading-8 text-muted">
          These Terms & Conditions shall be governed by and interpreted in
          accordance with the laws of India. Any disputes arising from the use
          of ByteBit shall be subject to the exclusive jurisdiction of the
          competent courts in India.
        </p>
      </section>

      <section className="rounded-3xl border border-border bg-surface p-8">
        <h2 className="mb-4 text-3xl font-bold">
          Contact Us
        </h2>

        <p className="leading-8 text-muted">
          If you have any questions regarding these Terms & Conditions, please
          contact the ByteBit Team through the Contact Form available on
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