import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";
import { getAllCategories } from "@/lib/strapi";

export const metadata = {
  title: "Contact",
  description: "Get in touch with Byte Bit.",
};

export default async function ContactPage() {
  const categories = await getAllCategories();

  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="mx-auto max-w-2xl px-4 pb-20 pt-16 sm:px-6">
          <h1 className="mb-6 text-3xl font-bold sm:text-4xl">Get in touch</h1>
          <p className="mb-8 leading-relaxed text-muted">
            Questions, collab ideas, or feedback on a post — reach out any time.
          </p>
          <ContactForm />
        </section>
      </main>
      <Footer categories={categories} />
    </>
  );
}
