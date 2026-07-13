"use client";
import { useState } from "react";

export function ContactForm() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/contacts`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
  data: form,
}),
        },
      );

      if (!res.ok) {
        throw new Error();
      }

      setStatus("Message sent successfully!");

      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch {
      setStatus("Something went wrong.");
    }

    setLoading(false);
  };

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Your name"
        required
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm outline-none focus:border-accent"
      />
      <input
        type="email"
        placeholder="Your email"
        required
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm outline-none focus:border-accent"
      />
      <textarea
        placeholder="Message"
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
        rows={5}
        required
        className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm outline-none focus:border-accent"
      />
      <button
        type="submit"
        disabled={loading}
        className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
      >
        {loading ? "Sending..." : "Send message"}
      </button>
      {status && <p className="text-sm text-green-500">{status}</p>}
    </form>
  );
}
