"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./meal-gallery.module.css";

type Meal = { title: string; description: string; image?: string; accent: string; ingredients: string[] };

// Add Claire's photos to public/images/meals, then add each image path here.
const meals: Meal[] = [
  { title: "Cosy Tomato Pasta", description: "A warm, colourful lunchtime favourite.", accent: "#ff6b35", ingredients: ["Pasta", "Tomatoes", "Carrots", "Onion", "Garlic", "Mixed herbs", "Cheddar cheese"] },
  { title: "Rainbow Veggie Curry", description: "Mild, creamy and packed with vegetables.", accent: "#ffb703", ingredients: ["Sweet potato", "Chickpeas", "Peppers", "Peas", "Coconut milk", "Tomatoes", "Mild curry spices"] },
  { title: "Claire's Cottage Pie", description: "A hearty classic with a fluffy potato top.", accent: "#6fbd44", ingredients: ["Lean minced beef", "Potatoes", "Carrots", "Peas", "Onion", "Tomato purée", "Vegetable stock"] },
  { title: "Sunshine Mac & Cheese", description: "Creamy, comforting and made for happy lunchtimes.", accent: "#e83e8c", ingredients: ["Macaroni", "Cheddar cheese", "Milk", "Cauliflower", "Butternut squash", "Flour", "Butter"] },
];

export default function MealGalleryPage() {
  const [page, setPage] = useState(0);
  const [cardFlipped, setCardFlipped] = useState(false);
  const [direction, setDirection] = useState<"next" | "previous">("next");
  const totalPages = meals.length + 2;

  const goToPage = (nextPage: number) => {
    if (nextPage < 0 || nextPage >= totalPages || nextPage === page) return;
    setDirection(nextPage > page ? "next" : "previous");
    setCardFlipped(false);
    setPage(nextPage);
  };

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight" && page < totalPages - 1) {
        setDirection("next");
        setCardFlipped(false);
        setPage((value) => value + 1);
      }
      if (event.key === "ArrowLeft" && page > 0) {
        setDirection("previous");
        setCardFlipped(false);
        setPage((value) => value - 1);
      }
      if ((event.key === "Enter" || event.key === " ") && page > 0 && page < totalPages - 1) {
        event.preventDefault();
        setCardFlipped((value) => !value);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [page, totalPages]);

  const meal = page > 0 && page < totalPages - 1 ? meals[page - 1] : null;

  return (
    <main className={`${styles.galleryShell} min-h-screen overflow-hidden text-[#26352d]`}>
      <header className="mx-auto max-w-[1180px] px-6 pt-5">
        <Link href="/" className="inline-flex items-center gap-2.5 font-extrabold text-[#27633d] transition hover:-translate-x-1" aria-label="Back to Playground Pantry home">
          <Image
            src="/images/3d-logo-image-removebg-preview.png"
            alt=""
            width={54}
            height={54}
            priority
            className="w-[54px] h-[54px] object-contain"
          />
          <span className="text-sm sm:text-base">Back to Playground Pantry</span>
        </Link>
      </header>

      <section className="relative z-10 mx-auto mb-7 mt-3 max-w-[760px] px-6 text-center">
        <p className="mb-2 text-[.8rem] font-black uppercase tracking-[.2em] text-[#ef5b2a]">Fresh from Claire&apos;s kitchen</p>
        <h1 className="font-serif text-[clamp(2.1rem,5vw,4.5rem)] font-extrabold leading-[.98] text-[#203c2b]">Our little book of lovely lunches</h1>
        <p className="mx-auto mt-4 max-w-[590px] text-[clamp(1rem,2vw,1.15rem)] leading-[1.7] text-[#52635a]">Turn the pages to see what we&apos;ve been cooking. Tap a meal to discover what&apos;s inside.</p>
      </section>

      <section className={`${styles.bookArea} relative mx-auto max-w-[840px] px-4 pb-16 sm:px-6`} aria-label="Claire's meal book">
        <div className={styles.bookShadow} aria-hidden="true" />
        <article className={`${styles.book} ${direction === "next" ? styles.turnNext : styles.turnPrevious}`} key={page}>
          <div className={styles.pageEdges} aria-hidden="true" />
          {page === 0 && (
            <div className={`${styles.cover}  absolute inset-0 flex flex-col items-center overflow-hidden border-[6px] border-l-[12px] border-[#174e35] p-[clamp(26px,6vw,54px)] text-center text-white sm:border-l-[18px]`}>
              <span className="text-[clamp(.62rem,1.6vw,.82rem)] font-black uppercase tracking-[.18em]">Playground Pantry presents</span>
              <div className="mt-[5%] flex flex-col font-serif leading-[.92]"><span className="text-[clamp(1.7rem,5vw,3rem)] italic">Claire&apos;s</span><strong className="text-[clamp(3.2rem,10vw,6.4rem)] text-[#ffe66d]">Recipe Book</strong></div>
              <div className="my-3 h-1 w-[70px] rounded-full bg-[#ff8a4c] mt-5" />
              <p className="font-bold">Freshly prepared • colourful • made with care</p>
              <Image
                src="/images/claire-mascots.png"
                alt="Playground Pantry fruit and vegetable characters"
                width={650}
                height={340}
                className="mt-auto h-auto w-[min(74%,460px)] object-contain max-sm:-mb-[3%] rounded-lg" priority
              />
              <button type="button" className={styles.openBook} onClick={() => goToPage(1)}>Open the book <span aria-hidden="true">→</span></button>
            </div>
          )}

          {meal && (
            <div className={`${styles.paperPage} absolute inset-0 overflow-hidden border border-[#ded5bd] p-[clamp(20px,5vw,45px)]`}>
              <div className={styles.binding} aria-hidden="true" />
              <button type="button" className={`${styles.mealCard} ${cardFlipped ? styles.cardFlipped : ""} h-[calc(100%-24px)] w-full cursor-pointer rounded-[18px] border-0 bg-transparent text-left`} onClick={() => setCardFlipped((value) => !value)} aria-label={`${cardFlipped ? "Show photo for" : "Show ingredients for"} ${meal.title}`} aria-pressed={cardFlipped}>
                <span className={styles.cardInner}>
                  <span className={`${styles.cardFace} absolute inset-0 flex flex-col overflow-hidden rounded-[18px] bg-white p-[clamp(12px,3vw,24px)]`}>
                    <span className="relative grid min-h-0 flex-1 place-items-center overflow-hidden rounded-xl" style={{ backgroundColor: meal.accent }}>
                      {meal.image ? <Image src={meal.image} alt={meal.title} fill sizes="(max-width: 700px) 82vw, 560px" className={styles.mealPhoto} /> : (
                        <span className={`${styles.photoPlaceholder} flex flex-col items-center gap-2.5 p-5 text-center font-black text-white`}><span className="text-[clamp(3rem,12vw,6rem)]" aria-hidden="true">🍽️</span>Claire&apos;s photo coming soon</span>
                      )}
                    </span>
                    <span className="mt-[15px] font-serif text-[clamp(1.45rem,4vw,2.35rem)] font-extrabold text-[#203c2b]">{meal.title}</span>
                    <span className="mt-1 text-[clamp(.8rem,2vw,1rem)] text-[#68766e]">{meal.description}</span>
                    <span className="mt-2.5 text-xs font-black uppercase tracking-[.06em] text-[#2f754b]">Tap to see ingredients <span aria-hidden="true">↻</span></span>
                  </span>
                  <span className={`${styles.cardFace} ${styles.cardBack} absolute inset-0 flex flex-col items-center overflow-hidden rounded-[18px] border-[5px] bg-[#fffdf4] p-[clamp(24px,7vw,58px)] text-center`} style={{ borderColor: meal.accent }}>
                    <span className="text-[.72rem] font-black uppercase tracking-[.17em] text-[#e6522d]">What&apos;s inside?</span>
                    <strong className="mt-2 font-serif text-[clamp(1.5rem,4.5vw,2.65rem)] leading-[1.05] text-[#203c2b]">{meal.title}</strong>
                    <span className="my-[18px] h-1 w-16 rounded-full" style={{ backgroundColor: meal.accent }} />
                    <ul className="grid w-[min(100%,390px)] grid-cols-2 gap-2.5 text-left text-[#52635a]">{meal.ingredients.map((ingredient) => <li className="relative pl-[17px] text-[clamp(.82rem,2.2vw,1rem)] font-bold before:absolute before:left-0 before:text-[#68a34d] before:content-['●']" key={ingredient}>{ingredient}</li>)}</ul>
                    <span className="mt-auto text-xs font-black uppercase tracking-[.06em] text-[#2f754b]">Tap to see the meal <span aria-hidden="true">↻</span></span>
                  </span>
                </span>
              </button>
              <span className="absolute bottom-3 right-6 font-serif text-[.8rem] text-[#8a806b]">{page}</span>
            </div>
          )}

          {page === totalPages - 1 && (
            <div className={`${styles.cover} absolute inset-0 flex flex-col items-center justify-center gap-3 overflow-hidden border-[6px] border-l-[12px] border-[#96365a] bg-[#ef5e93] p-[clamp(26px,6vw,54px)] text-center text-white sm:border-l-[18px]`}>
              <Image src="/images/mascot-carrot-waving.png" alt="A waving carrot character" width={210} height={240} className="h-auto w-[min(42%,210px)] object-contain" />
              <h2 className="font-serif text-[clamp(2rem,7vw,4rem)] font-extrabold">That&apos;s all for now!</h2>
              <p className="max-w-[380px] font-bold">Come back soon to see what Claire has been cooking.</p>
              <button type="button" className={styles.openBook} onClick={() => goToPage(0)}>Back to the cover</button>
            </div>
          )}
        </article>

        <div className="relative z-10 mx-auto mt-[38px] grid grid-cols-[1fr_auto_1fr] items-center gap-2 sm:gap-[18px]">
          <button type="button" className="justify-self-start rounded-full border-2 border-[#2d6d47] bg-white px-3 py-2.5 text-xs font-black text-[#285b3e] shadow-[0_4px_0_#b8cfbd] transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-35 sm:px-[17px] sm:text-base" onClick={() => goToPage(page - 1)} disabled={page === 0}><span aria-hidden="true">←</span> Previous</button>
          <div className="flex gap-[5px] sm:gap-2" aria-live="polite">
            {Array.from({ length: totalPages }, (_, index) => (
              <button type="button" key={index} onClick={() => goToPage(index)} className={`h-[7px] rounded-full transition-all sm:h-2.5 ${index === page ? "w-[18px] bg-[#ef5b2a] sm:w-[27px]" : "w-[7px] bg-[#b9c8bd] sm:w-2.5"}`} aria-label={`Go to ${index === 0 ? "cover" : index === totalPages - 1 ? "back cover" : `meal ${index}`}`} aria-current={index === page ? "page" : undefined} />
            ))}
          </div>
          <button type="button" className="justify-self-end rounded-full border-2 border-[#2d6d47] bg-white px-3 py-2.5 text-xs font-black text-[#285b3e] shadow-[0_4px_0_#b8cfbd] transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-35 sm:px-[17px] sm:text-base" onClick={() => goToPage(page + 1)} disabled={page === totalPages - 1}>Next <span aria-hidden="true">→</span></button>
        </div>
        <p className="relative mt-3.5 hidden text-center text-[.78rem] font-bold text-[#728078] sm:block">Tip: use the arrow keys to turn pages</p>
      </section>
    </main>
  );
}
