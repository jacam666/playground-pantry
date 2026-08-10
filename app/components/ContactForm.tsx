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
    const formData = new FormData(form);

    // Web3Forms access key
    formData.append(
      "access_key",
      process.env.NEXT_PUBLIC_WEB3FORMS_KEY!
    );

    // Email details
    formData.append(
      "subject",
      "New Playground Pantry Website Enquiry"
    );

    formData.append(
      "from_name",
      "Playground Pantry Website"
    );

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (data.success) {
        form.reset();
        setSent(true);
      } else {
        setError(
          "Something went wrong. Please try again or email us directly."
        );
      }
    } catch (error) {
      console.error(error);

      setError(
        "Something went wrong. Please try again or email us directly."
      );
    } finally {
      setLoading(false);
    }
  }

  // SUCCESS MESSAGE
  if (sent) {
    return (
      <div className="flex flex-col items-center justify-center rounded-3xl border-4 border-green-300 bg-white p-8 text-center shadow-lg">

        <div className="mb-4 text-5xl">
          🎉
        </div>

        <h3 className="mb-3 text-2xl font-bold text-slate-900">
          Message Sent!
        </h3>

        <p className="mb-6 text-slate-600">
          Thanks for getting in touch. We&apos;ll get back to you as soon as
          we can!
        </p>

        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-2 rounded-2xl border-2 border-green-400 px-6 py-2 text-sm font-bold text-green-600 transition hover:bg-green-50"
        >
          Send another message
        </button>

      </div>
    );
  }

  // CONTACT FORM
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-5 rounded-3xl border-4 border-green-300 bg-white p-8 shadow-lg"
    >

      <h3 className="text-2xl font-bold text-slate-900">
        Send us a message
      </h3>

      {/* NAME */}
      <div>
        <label
          htmlFor="contact-name"
          className="mb-2 block text-sm font-bold text-slate-700"
        >
          Your Name
        </label>

        <input
          id="contact-name"
          name="name"
          type="text"
          required
          placeholder="Your name"
          className="w-full rounded-xl border-2 border-slate-200 px-4 py-3 text-slate-900 outline-none transition focus:border-green-400"
        />
      </div>

      {/* EMAIL */}
      <div>
        <label
          htmlFor="contact-email"
          className="mb-2 block text-sm font-bold text-slate-700"
        >
          Email Address
        </label>

        <input
          id="contact-email"
          name="email"
          type="email"
          required
          placeholder="you@example.com"
          className="w-full rounded-xl border-2 border-slate-200 px-4 py-3 text-slate-900 outline-none transition focus:border-green-400"
        />
      </div>

      {/* MESSAGE */}
      <div>
        <label
          htmlFor="contact-message"
          className="mb-2 block text-sm font-bold text-slate-700"
        >
          Message
        </label>

        <textarea
          id="contact-message"
          name="message"
          rows={5}
          required
          placeholder="How can we help?"
          className="w-full resize-none rounded-xl border-2 border-slate-200 px-4 py-3 text-slate-900 outline-none transition focus:border-green-400"
        />
      </div>

      {/* SUBMIT BUTTON */}
      <button
        type="submit"
        disabled={loading}
        className="rounded-2xl bg-green-400 px-6 py-3 font-bold text-white shadow-md transition hover:scale-[1.02] hover:bg-green-500 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? "Sending... ⏳" : "Send Message 🚀"}
      </button>

      {/* ERROR MESSAGE */}
      {error && (
        <p className="text-center text-sm font-semibold text-red-500">
          {error}
        </p>
      )}

    </form>
  );
}