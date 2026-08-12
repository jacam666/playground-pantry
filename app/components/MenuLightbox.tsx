"use client";

import Image from "next/image";
import { useState } from "react";

const menus = [
  { week: "WEEK 1", src: "/images/menu-week-1-v6.png", bg: "bg-pink-50" },
  { week: "WEEK 2", src: "/images/menu-week-2-v3.png", bg: "bg-green-50" },
  { week: "WEEK 3", src: "/images/menu-week-3-v2.png", bg: "bg-yellow-50" },
];

export default function MenuLightbox() {
  const [active, setActive] = useState<null | (typeof menus)[0]>(null);

  return (
    <>
      {menus.map((menu) => (
        <button
          key={menu.week}
          onClick={() => setActive(menu)}
          className={`group flex flex-col items-center ${menu.bg} rounded-xl p-4 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl cursor-zoom-in text-left`}
        >
          <p className="mt-5 text-2xl font-bold text-slate-900">{menu.week}</p>
          <div className="overflow-hidden rounded-2xl mt-8">
            <Image
              src={menu.src}
              alt={`${menu.week} menu`}
              width={500}
              height={500}
              className="h-auto"
            />
          </div>
          <p className="mt-3 text-sm font-semibold text-slate-400">Tap to enlarge</p>
        </button>
      ))}

      {/* lightbox overlay */}
      {active && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={() => setActive(null)}
        >
          <div
            className="relative max-h-screen w-full max-w-2xl overflow-auto rounded-2xl bg-white p-4 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-3 flex items-center justify-between">
              <p className="text-2xl font-bold text-slate-900">{active.week}</p>
              <button
                onClick={() => setActive(null)}
                className="rounded-full bg-slate-100 px-3 py-1 text-sm font-bold text-slate-600 hover:bg-slate-200"
              >
                ✕ Close
              </button>
            </div>
            <Image
              src={active.src}
              alt={`${active.week} menu`}
              width={1000}
              height={1000}
              className="h-auto w-full rounded-xl"
            />
          </div>
        </div>
      )}
    </>
  );
}
