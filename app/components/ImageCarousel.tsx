"use client";

import Image from "next/image";
import { useState } from "react";

const slides = [
    { src: "/images/calendar-images/rotation-image.png", label: "Menu Rotation" },
    { src: "/images/calendar-images/sept-2026.png", label: "September 2026" },
    { src: "/images/calendar-images/oct-2026.png", label: "October 2026" },
    { src: "/images/calendar-images/november-2026.png", label: "November 2026" },
    { src: "/images/calendar-images/december-2026.png", label: "December 2026" },
    { src: "/images/calendar-images/jan-2027.png", label: "January 2027" },
    { src: "/images/calendar-images/february-2026.png", label: "February 2027" },
    { src: "/images/calendar-images/mar-2027.png", label: "March 2027" },
    { src: "/images/calendar-images/apr-2027.png", label: "April 2027" },
    { src: "/images/calendar-images/may-2027-2.png", label: "May 2027" },
    { src: "/images/calendar-images/june-2027-1.png", label: "June 2027" },
    { src: "/images/calendar-images/july-2027-1.png", label: "July 2027" },
];

export default function ImageCarousel() {
    const [current, setCurrent] = useState(0);

    function prev() {
        setCurrent((i) => (i === 0 ? slides.length - 1 : i - 1));
    }

    function next() {
        setCurrent((i) => (i === slides.length - 1 ? 0 : i + 1));
    }

    return (
        <div className="relative mx-auto w-full px-4 md:max-w-sm lg:max-w-md">
            {/* slide */}
            <div className="overflow-hidden rounded-2xl shadow-xl">
                <Image
                    key={current}
                    src={slides[current].src}
                    alt={slides[current].label}
                    width={300}
                    height={300}
                    className="h-auto w-full object-cover"
                    priority
                />
            </div>

            {/* label */}
            <p className="mt-3 text-center text-lg font-bold text-slate-700">
                {slides[current].label}
            </p>

            {/* prev / next buttons */}
            <button
                onClick={prev}
                aria-label="Previous image"
                className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-3 shadow-lg transition hover:bg-green-100 hover:scale-110"
            >
                ◀
            </button>
            <button
                onClick={next}
                aria-label="Next image"
                className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-3 shadow-lg transition hover:bg-green-100 hover:scale-110"
            >
                ▶
            </button>

            {/* dot indicators */}
            <div className="mt-4 flex justify-center gap-2">
                {slides.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrent(i)}
                        aria-label={`Go to slide ${i + 1}`}
                        className={`h-2.5 w-2.5 rounded-full transition ${i === current ? "bg-green-500 scale-125" : "bg-slate-300 hover:bg-slate-400"
                            }`}
                    />
                ))}
            </div>
        </div>
    );
}
