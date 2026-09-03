"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "#menus", label: "🍓 Menus" },
  { href: "#meal-calendars", label: "📅 Meal Calendars" },
  { href: "#who-we-are", label: "👨‍🍳 Who We Are" },
  { href: "#payments", label: "💳 Payments" },
  { href: "#contact", label: "👋 Contact", highlight: true },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-20 bg-green-50/95 backdrop-blur shadow-sm border-t-4 border-green-400">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* logo */}
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <Image
            src="/images/3d-logo-image-removebg-preview.png"
            alt="Playground Pantry home"
            width={90}
            height={36}
            priority
            className="h-auto w-[60px] sm:w-[70px]"
          />
        </Link>

        {/* desktop nav */}
        <nav className="hidden md:flex items-center gap-1 text-sm font-semibold text-gray-700">
          {links.map((l) =>
            l.highlight ? (
              <Link
                key={l.href}
                href={l.href}
                className="rounded-full bg-green-400 px-4 py-2 text-white transition hover:bg-green-500 hover:scale-105"
              >
                {l.label}
              </Link>
            ) : (
              <Link
                key={l.href}
                href={l.href}
                className="rounded-full px-4 py-2 transition hover:bg-green-100 hover:text-green-700"
              >
                {l.label}
              </Link>
            )
          )}
        </nav>

        {/* hamburger button — mobile only */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex md:hidden flex-col items-center justify-center gap-1.5 rounded-xl p-2 transition hover:bg-green-100"
        >
          <span className={`block h-0.5 w-6 bg-gray-700 transition-all duration-300 ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block h-0.5 w-6 bg-gray-700 transition-all duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-6 bg-gray-700 transition-all duration-300 ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {/* mobile dropdown */}
      {open && (
        <nav className="flex flex-col gap-1 border-t border-green-200 bg-green-50 px-6 py-4 md:hidden">
          {links.map((l) =>
            l.highlight ? (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-xl bg-green-400 px-4 py-3 text-center text-sm font-bold text-white transition hover:bg-green-500"
              >
                {l.label}
              </Link>
            ) : (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-semibold text-gray-700 transition hover:bg-green-100 hover:text-green-700"
              >
                {l.label}
              </Link>
            )
          )}
        </nav>
      )}
    </header>
  );
}
