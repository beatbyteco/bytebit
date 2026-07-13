import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { getAllCategories } from "@/lib/strapi";
import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | ByteBit",
  description:
    "Learn about ByteBit, our mission, editorial standards, and commitment to delivering high-quality technology content.",
};

export default async function PrivacyPolicyPage() {
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
        Privacy Policy
      </h1>

      <p className="mt-4 text-muted">
        Last Updated: July 2026
      </p>

      <p className="mt-6 max-w-3xl text-lg leading-8 text-muted">
        At ByteBit, we value your privacy and are committed to protecting your
        personal information. This Privacy Policy explains what information we
        collect, how we use it, and the choices you have regarding your data
        when using bytebit.online.
      </p>
    </div>
  </section>

  <section className="mx-auto max-w-5xl px-6 py-16">
    <div className="space-y-14">

      <section>
        <h2 className="mb-4 text-3xl font-bold">
          Information We Collect
        </h2>

        <div className="space-y-5 leading-8 text-muted">
          <p>
            We may collect information that you voluntarily provide while
            interacting with our website.
          </p>

          <ul className="list-disc space-y-2 pl-6">
            <li>Name</li>
            <li>Email Address</li>
            <li>Newsletter Subscription</li>
            <li>Contact Form Messages</li>
            <li>Business or Partnership Inquiries</li>
          </ul>

          <p>
            We also automatically collect certain technical information such as
            browser type, operating system, pages visited, referring website,
            IP address, and device information for analytics and security
            purposes.
          </p>
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-3xl font-bold">
          How We Use Your Information
        </h2>

        <div className="space-y-5 leading-8 text-muted">
          <p>Your information may be used to:</p>

          <ul className="list-disc space-y-2 pl-6">
            <li>Respond to your inquiries.</li>
            <li>Deliver newsletter updates.</li>
            <li>Improve website performance.</li>
            <li>Analyze website traffic.</li>
            <li>Protect against spam and abuse.</li>
            <li>Maintain website security.</li>
            <li>Comply with legal obligations.</li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-3xl font-bold">
          Newsletter
        </h2>

        <div className="space-y-5 leading-8 text-muted">
          <p>
            If you subscribe to our newsletter, we will store your email
            securely and use it to send technology news, tutorials, AI updates,
            product announcements, and educational content.
          </p>

          <p>
            You may unsubscribe at any time using the unsubscribe link included
            in every newsletter email.
          </p>
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-3xl font-bold">
          Contact Form
        </h2>

        <p className="leading-8 text-muted">
          Information submitted through our Contact Form is used solely to
          respond to your inquiries, improve customer support, and maintain
          communication records. We do not sell or rent your personal
          information.
        </p>
      </section>

      <section>
        <h2 className="mb-4 text-3xl font-bold">
          Cookies
        </h2>

        <div className="space-y-5 leading-8 text-muted">
          <p>
            ByteBit uses cookies and similar technologies to improve user
            experience, remember preferences, analyze traffic, and support
            advertising services.
          </p>

          <p>
            You can manage or disable cookies through your browser settings,
            although some website features may not function correctly.
          </p>
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-3xl font-bold">
          Third-Party Services
        </h2>

        <p className="leading-8 text-muted">
          We may use trusted third-party services including Cloudinary, Neon
          PostgreSQL, Vercel, Render/Railway, Google Analytics, Google
          AdSense, and email delivery providers to operate and improve our
          services. These providers maintain their own privacy policies.
        </p>
      </section>

      <section>
        <h2 className="mb-4 text-3xl font-bold">
          Advertising & Affiliate Links
        </h2>

        <div className="space-y-5 leading-8 text-muted">
          <p>
            ByteBit may display advertisements through Google AdSense and may
            participate in affiliate marketing programs.
          </p>

          <p>
            Clicking affiliate links may result in ByteBit earning a commission
            at no additional cost to you. This never influences our editorial
            opinions.
          </p>
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-3xl font-bold">
          Data Security
        </h2>

        <p className="leading-8 text-muted">
          We implement reasonable administrative, technical, and organizational
          measures to protect your information from unauthorized access,
          alteration, disclosure, or misuse. However, no internet transmission
          or storage method can be guaranteed to be completely secure.
        </p>
      </section>

      <section>
        <h2 className="mb-4 text-3xl font-bold">
          Your Rights
        </h2>

        <div className="space-y-5 leading-8 text-muted">
          <p>Depending on applicable laws, you may have the right to:</p>

          <ul className="list-disc space-y-2 pl-6">
            <li>Access your personal data.</li>
            <li>Request corrections.</li>
            <li>Request deletion.</li>
            <li>Withdraw consent.</li>
            <li>Object to certain processing activities.</li>
          </ul>

          <p>
            To exercise these rights, please contact us using the Contact Form
            available on bytebit.online.
          </p>
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-3xl font-bold">
          Policy Updates
        </h2>

        <p className="leading-8 text-muted">
          We may update this Privacy Policy from time to time to reflect
          changes in technology, legal requirements, or our services.
          Continued use of ByteBit after updates constitutes acceptance of the
          revised policy.
        </p>
      </section>

      <section className="rounded-3xl border border-border bg-surface p-8">
        <h2 className="mb-4 text-3xl font-bold">
          Contact Us
        </h2>

        <p className="leading-8 text-muted">
          If you have any questions regarding this Privacy Policy or your
          personal information, please contact the ByteBit Team using the
          Contact Form available on <strong><Link href="/contact">{" "}Contact Us</Link></strong>.
        </p>
      </section>

    </div>
  </section>
</main>

      <Footer categories={categories} />
    </>
  );
}