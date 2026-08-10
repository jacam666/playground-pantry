"use client";

import { useState } from "react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("contact-name") as HTMLInputElement).value,
      email: (form.elements.namedItem("contact-email") as HTMLInputElement).value,
      message: (form.elements.namedItem("contact-message") as HTMLTextAreaElement).value,
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    setLoading(false);

    if (res.ok) {
      setSent(true);
    } else {
      setError("Something went wrong. Please try again or email us directly.");
    }
  }

  if (sent) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 rounded-3xl border-4 border-green-300 bg-white p-8 shadow-lg text-center">
        <span className="text-6xl">🎉</span>
        <h3 className="text-2xl font-bold text-slate-900">Message Sent!</h3>
        <p className="text-slate-600">Thanks for getting in touch. We&apos;ll get back to you as soon as we can!</p>
        <button
          onClick={() => setSent(false)}
          className="mt-2 rounded-2xl border-2 border-green-400 px-6 py-2 text-sm font-bold text-green-600 transition hover:bg-green-50"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center rounded-3xl border-4 border-pink-300 bg-white p-8 shadow-lg">
      <h3 className="mb-6 text-2xl font-bold text-slate-900">Send us a message</h3>
      <form onSubmit={handleSubmit} noValidate={false} className="flex flex-col gap-4">
        <div>
          <label htmlFor="contact-name" className="mb-1 block text-sm font-bold text-slate-600">
            Your Name
          </label>
          <input
            id="contact-name"
            type="text"
            placeholder="e.g. Mrs Smith"
            required
            className="w-full rounded-2xl border-2 border-slate-200 px-4 py-3 text-slate-800 outline-none transition focus:border-green-400 invalid:[&:not(:placeholder-shown)]:border-red-400"
          />
        </div>
        <div>
          <label htmlFor="contact-email" className="mb-1 block text-sm font-bold text-slate-600">
            Email Address
          </label>
          <input
            id="contact-email"
            type="email"
            placeholder="you@example.com"
            required
            className="w-full rounded-2xl border-2 border-slate-200 px-4 py-3 text-slate-800 outline-none transition focus:border-green-400 invalid:[&:not(:placeholder-shown)]:border-red-400"
          />
        </div>
        <div>
          <label htmlFor="contact-message" className="mb-1 block text-sm font-bold text-slate-600">
            Message
          </label>
          <textarea
            id="contact-message"
            rows={4}
            placeholder="What would you like to know?"
            required
            className="w-full resize-none rounded-2xl border-2 border-slate-200 px-4 py-3 text-slate-800 outline-none transition focus:border-green-400 invalid:[&:not(:placeholder-shown)]:border-red-400"
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="mt-2 rounded-2xl bg-green-400 px-6 py-3 text-lg font-bold text-white shadow transition hover:scale-105 hover:bg-green-500 active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {loading ? "Sending... ⏳" : "Send Message 🚀"}
        </button>
        {error && <p className="text-sm font-semibold text-red-500">{error}</p>}
      </form>
    </div>
  );
}
