import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { getAllCategories } from "@/lib/strapi";
import Link from "next/link";

export const metadata = {
  title: "Cookie Policy | ByteBit",
  description:
    "Learn about ByteBit, our mission, editorial standards, and commitment to delivering high-quality technology content.",
};

export default async function CookiePolicyPage() {
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
              Cookie Policy
            </h1>

            <p className="mt-4 text-muted">Last Updated: July 2026</p>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-muted">
              This Cookie Policy explains how ByteBit uses cookies and similar
              technologies to improve your browsing experience, analyze website
              traffic, and provide relevant content and advertisements.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-6 py-16">
          <div className="space-y-14">
            <section>
              <h2 className="mb-4 text-3xl font-bold">What Are Cookies?</h2>

              <p className="leading-8 text-muted">
                Cookies are small text files stored on your device when you
                visit a website. They help websites remember your preferences,
                improve performance, and provide a more personalized browsing
                experience.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-3xl font-bold">Why We Use Cookies</h2>

              <div className="space-y-5 leading-8 text-muted">
                <p>ByteBit uses cookies to:</p>

                <ul className="list-disc space-y-2 pl-6">
                  <li>Improve website performance.</li>
                  <li>Remember user preferences.</li>
                  <li>Analyze visitor behavior.</li>
                  <li>Measure website traffic.</li>
                  <li>Support advertising services.</li>
                  <li>Maintain website security.</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="mb-4 text-3xl font-bold">
                Types of Cookies We Use
              </h2>

              <div className="space-y-8">
                <div>
                  <h3 className="mb-2 text-xl font-semibold">
                    Essential Cookies
                  </h3>

                  <p className="leading-8 text-muted">
                    These cookies are required for the website to function
                    correctly. They enable basic features such as page
                    navigation, security, and form submissions.
                  </p>
                </div>

                <div>
                  <h3 className="mb-2 text-xl font-semibold">
                    Analytics Cookies
                  </h3>

                  <p className="leading-8 text-muted">
                    Analytics cookies help us understand how visitors interact
                    with ByteBit by collecting anonymous information such as
                    page views, session duration, and traffic sources.
                  </p>
                </div>

                <div>
                  <h3 className="mb-2 text-xl font-semibold">
                    Functional Cookies
                  </h3>

                  <p className="leading-8 text-muted">
                    These cookies remember user preferences such as theme
                    settings, language preferences, and other personalized
                    website options.
                  </p>
                </div>

                <div>
                  <h3 className="mb-2 text-xl font-semibold">
                    Advertising Cookies
                  </h3>

                  <p className="leading-8 text-muted">
                    Advertising cookies may be used by Google AdSense and other
                    advertising partners to display more relevant advertisements
                    and measure campaign performance.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="mb-4 text-3xl font-bold">Third-Party Cookies</h2>

              <div className="space-y-5 leading-8 text-muted">
                <p>
                  Some third-party services integrated with ByteBit may place
                  cookies on your device.
                </p>

                <ul className="list-disc space-y-2 pl-6">
                  <li>Google Analytics</li>
                  <li>Google AdSense</li>
                  <li>Cloudinary</li>
                  <li>Vercel</li>
                  <li>Render / Railway</li>
                </ul>

                <p>
                  These services operate under their own privacy and cookie
                  policies.
                </p>
              </div>
            </section>

            <section>
              <h2 className="mb-4 text-3xl font-bold">Managing Cookies</h2>

              <div className="space-y-5 leading-8 text-muted">
                <p>
                  Most web browsers allow you to control or disable cookies
                  through browser settings.
                </p>

                <p>You can:</p>

                <ul className="list-disc space-y-2 pl-6">
                  <li>Delete existing cookies.</li>
                  <li>Block all cookies.</li>
                  <li>Allow cookies only from selected websites.</li>
                  <li>Receive notifications before cookies are stored.</li>
                </ul>

                <p>
                  Please note that disabling cookies may affect some website
                  functionality.
                </p>
              </div>
            </section>

            <section>
              <h2 className="mb-4 text-3xl font-bold">
                Changes to This Policy
              </h2>

              <p className="leading-8 text-muted">
                We may update this Cookie Policy from time to time to reflect
                changes in technology, legal requirements, or website
                functionality. Updated versions will be published on this page.
              </p>
            </section>

            <section className="rounded-3xl border border-border bg-surface p-8">
              <h2 className="mb-4 text-3xl font-bold">Contact Us</h2>

              <p className="leading-8 text-muted">
                If you have any questions about our use of cookies, please
                contact the ByteBit Team using the Contact Form available on
                <strong><Link href="/contact">{" "}Contact Us</Link></strong>.
              </p>
            </section>
          </div>
        </section>
      </main>

      <Footer categories={categories} />
    </>
  );
}
