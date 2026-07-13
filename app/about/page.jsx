import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { getAllCategories } from "@/lib/strapi";

export const metadata = {
  title: "About | ByteBit",
  description:
    "Learn about ByteBit, our mission, editorial standards, and commitment to delivering high-quality technology content.",
};

export default async function AboutPage() {
  const categories = await getAllCategories();

  return (
    <>
      <Header />

      <main className="min-h-screen bg-background">
        <section className="border-b border-border bg-surface">
          <div className="mx-auto max-w-5xl px-6 py-20">
            <span className="rounded-full border border-border px-4 py-1 text-sm text-muted">
              About ByteBit
            </span>

            <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
              Powering the Next Byte
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-muted">
              ByteBit is a modern technology publication dedicated to helping
              developers, students, and technology enthusiasts learn, build, and
              stay updated with the latest innovations in software development,
              artificial intelligence, cybersecurity, and emerging technologies.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-6 py-16">
          <div className="space-y-16">

            <section>
              <h2 className="mb-4 text-3xl font-bold">Who We Are</h2>

              <div className="space-y-5 leading-8 text-muted">
                <p>
                  ByteBit is an independent technology platform built by the
                  ByteBit Team with one simple mission:
                  make modern technology understandable, practical, and useful.
                </p>

                <p>
                  We believe that learning should not feel complicated.
                  Whether you're writing your first line of code, building
                  production-ready applications, exploring Artificial
                  Intelligence, or improving your software engineering skills,
                  ByteBit is here to help.
                </p>

                <p>
                  Every article is created to deliver practical knowledge,
                  real-world insights, and clear explanations instead of
                  unnecessary complexity.
                </p>
              </div>
            </section>

            <section>
              <h2 className="mb-4 text-3xl font-bold">Our Mission</h2>

              <div className="space-y-5 leading-8 text-muted">
                <p>
                  Technology evolves every day, but quality educational content
                  often becomes outdated or overly complicated.
                </p>

                <p>
                  ByteBit exists to bridge that gap by publishing accurate,
                  beginner-friendly, and practical articles that help readers
                  build real skills.
                </p>

                <ul className="list-disc space-y-3 pl-6">
                  <li>Publish high-quality educational content.</li>
                  <li>Simplify complex technical topics.</li>
                  <li>Help developers build real-world projects.</li>
                  <li>Promote continuous learning.</li>
                  <li>Share trustworthy technology news and insights.</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="mb-4 text-3xl font-bold">What We Cover</h2>

              <div className="grid gap-6 md:grid-cols-2">

                <div className="rounded-2xl border border-border p-6">
                  <h3 className="mb-3 text-xl font-semibold">
                    Artificial Intelligence
                  </h3>

                  <ul className="space-y-2 text-muted">
                    <li>• LLMs</li>
                    <li>• AI Agents</li>
                    <li>• Prompt Engineering</li>
                    <li>• Machine Learning</li>
                    <li>• Automation</li>
                  </ul>
                </div>

                <div className="rounded-2xl border border-border p-6">
                  <h3 className="mb-3 text-xl font-semibold">
                    Programming
                  </h3>

                  <ul className="space-y-2 text-muted">
                    <li>• JavaScript</li>
                    <li>• TypeScript</li>
                    <li>• Python</li>
                    <li>• Java</li>
                    <li>• C++</li>
                  </ul>
                </div>

                <div className="rounded-2xl border border-border p-6">
                  <h3 className="mb-3 text-xl font-semibold">
                    Web Development
                  </h3>

                  <ul className="space-y-2 text-muted">
                    <li>• React</li>
                    <li>• Next.js</li>
                    <li>• Node.js</li>
                    <li>• Express.js</li>
                    <li>• APIs</li>
                  </ul>
                </div>

                <div className="rounded-2xl border border-border p-6">
                  <h3 className="mb-3 text-xl font-semibold">
                    Cybersecurity
                  </h3>

                  <ul className="space-y-2 text-muted">
                    <li>• Security Best Practices</li>
                    <li>• Authentication</li>
                    <li>• Authorization</li>
                    <li>• Cloud Security</li>
                    <li>• Ethical Hacking Basics</li>
                  </ul>
                </div>

              </div>
            </section>

            <section>
              <h2 className="mb-4 text-3xl font-bold">
                Editorial Standards
              </h2>

              <div className="space-y-5 leading-8 text-muted">
                <p>
                  Every article published on ByteBit follows clear editorial
                  principles.
                </p>

                <ul className="list-disc space-y-3 pl-6">
                  <li>Accuracy before speed.</li>
                  <li>Practical examples over unnecessary theory.</li>
                  <li>Clear and beginner-friendly explanations.</li>
                  <li>Independent editorial decisions.</li>
                  <li>Transparent affiliate disclosures.</li>
                  <li>Regular content updates whenever possible.</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="mb-4 text-3xl font-bold">
                AI-Assisted Content
              </h2>

              <div className="space-y-5 leading-8 text-muted">
                <p>
                  ByteBit responsibly uses Artificial Intelligence as a
                  productivity tool to assist with research, drafting, grammar,
                  and content organization.
                </p>

                <p>
                  Every article is reviewed by the ByteBit Team before
                  publication to improve clarity, accuracy, and overall quality.
                </p>
              </div>
            </section>

            <section>
              <h2 className="mb-4 text-3xl font-bold">
                Affiliate & Advertising Disclosure
              </h2>

              <div className="space-y-5 leading-8 text-muted">
                <p>
                  Some pages may include affiliate links or display advertising.
                  If you purchase through affiliate links, ByteBit may earn a
                  small commission at no additional cost to you.
                </p>

                <p>
                  These partnerships never influence our editorial opinions or
                  recommendations.
                </p>
              </div>
            </section>

            <section className="rounded-3xl border border-border bg-surface p-8">
              <h2 className="mb-4 text-3xl font-bold">
                Our Vision
              </h2>

              <p className="leading-8 text-muted">
                Our vision is to build ByteBit into a trusted global technology
                publication that empowers millions of learners through practical
                tutorials, programming guides, AI insights, cybersecurity
                awareness, and high-quality educational content.
              </p>
            </section>

          </div>
        </section>
      </main>

      <Footer categories={categories} />
    </>
  );
}