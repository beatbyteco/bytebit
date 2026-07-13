"use client";
import { useState } from "react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e)=> {
  e.preventDefault();

  setLoading(true);

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/newsletters`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: {
            email,
            // active: true,
            subscribedAt: new Date(),
          },
        }),
      }
    );

    if (!res.ok) throw new Error();

    setMessage("🎉 Subscribed Successfully");

    setEmail("");
  } catch {
    setMessage("Subscription Failed");
  }

  setLoading(false);
};

  return (
    <section
      id="newsletter"
      className="mx-auto mt-16 max-w-3xl rounded-3xl border border-border bg-surface px-6 py-14 text-center sm:px-12"
    >
      <h2 className="mb-2 text-2xl font-bold sm:text-3xl">
        Subscribe to our Newsletter
      </h2>
      <p className="mx-auto mb-7 max-w-md text-sm text-muted">
        Stay ahead with the latest tech news, AI updates, tutorials, honest reviews, and expert insights delivered straight to your inbox.
      </p>
      <form
        className="mx-auto flex max-w-md flex-col gap-2.5 sm:flex-row"
        onSubmit={handleSubmit}
      >
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          required
          placeholder="Enter your email"
          className="w-full rounded-full border border-border bg-background px-5 py-3 text-sm outline-none focus:border-accent"
        />
        <button
          type="submit"
          className="shrink-0 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
        disabled={loading}
        >
           {loading ? "Subscribing..." : "Subscribe"}
        </button>
      </form>
      <p className="mt-3 text-xs text-muted">No spam. Unsubscribe anytime.</p>
      {message && (
        <p className="mt-3 text-sm font-semibold text-accent">{message}</p>
      )}
    </section>
  );
}
