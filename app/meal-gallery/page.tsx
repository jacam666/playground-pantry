"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./meal-gallery.module.css";

type Meal = { title: string; description: string; image?: string; accent: string; ingredients: string[] };
type BookPage =
  | { kind: "section"; title: string; subtitle: string; icon: string; accent: string }
  | { kind: "meal"; meal: Meal };

// Add Claire's photos to public/images/meals, then add each image path here.
const meals: Meal[] = [
  { title: "Salmon En Croute with New Potatoes", description: "Week 1 • Monday", accent: "#65a30d", ingredients: [] },
  { title: "Jerk Chicken with Rice", description: "Week 1 • Tuesday", accent: "#0891b2", ingredients: [] },
  { title: "Sausage, Mash, Gravy and Yorkshire Pudding", description: "Week 1 • Wednesday", accent: "#ef4444", ingredients: [] },
  { title: "Spaghetti Bolognese", description: "Week 1 • Thursday", accent: "#f59e0b", ingredients: [] },
  { title: "Breaded Fish with Potato Waffles", description: "Week 1 • Friday", accent: "#9333ea", ingredients: [] },
  { title: "Southern Baked Chicken with Sweet Potato Wedges", description: "Week 2 • Monday", accent: "#65a30d", ingredients: [] },
  { title: "Salmon Fish Cake with Cous Cous Salad", description: "Week 2 • Tuesday", accent: "#0891b2", ingredients: [] },
  { title: "Individual Chicken and Leek Pie with Roast Potatoes", description: "Week 2 • Wednesday", accent: "#ef4444", ingredients: [] },
  { title: "Beef Burrito", description: "Week 2 • Thursday", accent: "#f59e0b", ingredients: [] },
  { title: "Breaded Fish and Potato Waffle", description: "Week 2 • Friday", accent: "#9333ea", ingredients: [] },
  { title: "Chicken Pasta Salad", description: "Week 3 • Monday", accent: "#65a30d", ingredients: [] },
  { title: "Pepperoni Roll-Ups with Smashed Potatoes", description: "Week 3 • Tuesday", accent: "#0891b2", ingredients: [] },
  { title: "BBQ Chicken Drumstick with Baked Potato Skins", description: "Week 3 • Wednesday", accent: "#ef4444", ingredients: [] },
  { title: "Lasagne and Garlic Bread", description: "Week 3 • Thursday", accent: "#f59e0b", ingredients: [] },
  { title: "Breaded Fish and Potato Waffle", description: "Week 3 • Friday", accent: "#9333ea", ingredients: [] },
];

const vegetarianMeals: Meal[] = [
  { title: "Creamy Vegetable Pie", description: "Week 1 • Monday", accent: "#65a30d", ingredients: [] },
  { title: "Sweet Potato Curry", description: "Week 1 • Tuesday", accent: "#0891b2", ingredients: [] },
  { title: "Roasted Veg and Tomato Pasta Bake", description: "Week 1 • Wednesday", accent: "#ef4444", ingredients: [] },
  { title: "Sweetcorn Fritter", description: "Week 1 • Thursday", accent: "#f59e0b", ingredients: [] },
  { title: "Margherita Pizza", description: "Week 1 • Friday", accent: "#9333ea", ingredients: [] },
  { title: "Cheesy Vegetable Bake", description: "Week 2 • Monday", accent: "#65a30d", ingredients: [] },
  { title: "Mini Crustless Quiche", description: "Week 2 • Tuesday", accent: "#0891b2", ingredients: [] },
  { title: "Cheese and Bean Pasty", description: "Week 2 • Wednesday", accent: "#ef4444", ingredients: [] },
  { title: "Thai Green Curry with Brown Rice", description: "Week 2 • Thursday", accent: "#f59e0b", ingredients: [] },
  { title: "Margherita Pizza", description: "Week 2 • Friday", accent: "#9333ea", ingredients: [] },
  { title: "Pizza Bagels with Oven Baked Wedges", description: "Week 3 • Monday", accent: "#65a30d", ingredients: [] },
  { title: "Cheese and Onion Slice", description: "Week 3 • Tuesday", accent: "#0891b2", ingredients: [] },
  { title: "Veggie Burgers", description: "Week 3 • Wednesday", accent: "#ef4444", ingredients: [] },
  { title: "3 Bean Chilli with Rainbow Rice", description: "Week 3 • Thursday", accent: "#f59e0b", ingredients: [] },
  { title: "Margherita Pizza", description: "Week 3 • Friday", accent: "#9333ea", ingredients: [] },
];

const bookPages: BookPage[] = [
  { kind: "section", title: "Main Meals", subtitle: "Three weeks of hearty lunchtime favourites", icon: "🍽️", accent: "#ef5b2a" },
  ...meals.map((meal): BookPage => ({ kind: "meal", meal })),
  { kind: "section", title: "Vegetarian Meals", subtitle: "Colourful, tasty meat-free choices", icon: "🌱", accent: "#65a30d" },
  ...vegetarianMeals.map((meal): BookPage => ({ kind: "meal", meal })),
];

export default function MealGalleryPage() {
  const [page, setPage] = useState(0);
  const [cardFlipped, setCardFlipped] = useState(false);
  const [direction, setDirection] = useState<"next" | "previous">("next");
  const totalPages = bookPages.length + 2;
  const currentBookPage = page > 0 && page < totalPages - 1 ? bookPages[page - 1] : null;
  const meal = currentBookPage?.kind === "meal" ? currentBookPage.meal : null;

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
      if ((event.key === "Enter" || event.key === " ") && currentBookPage?.kind === "meal") {
        event.preventDefault();
        setCardFlipped((value) => !value);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [currentBookPage, page, totalPages]);

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
            <div className={`${styles.cover} ${styles.ancientCover} ${styles.frontCover} absolute inset-0 flex flex-col items-center overflow-hidden p-[clamp(28px,7vw,64px)] text-center`}>
              <span className={styles.dust} aria-hidden="true" />
              <span className="relative z-10 text-[clamp(.58rem,1.5vw,.78rem)] font-bold uppercase tracking-[.28em] text-[#c8a85c]">Playground Pantry</span>
              <div className={`${styles.ancientOrnament} relative z-10 mt-[7%]`} aria-hidden="true">✦</div>
              <div className="relative z-10 mt-[6%] flex flex-col font-serif leading-[.88] text-[#d8b866] drop-shadow-[0_3px_1px_#241507]">
                <span className="text-[clamp(1.6rem,4vw,2.6rem)] italic">Claire&apos;s</span>
                {/* <strong className="mt-3 text-[clamp(2.8rem,8vw,5.4rem)] uppercase tracking-[-.04em]">Legendary</strong> */}
                <strong className="mt-2 text-[clamp(2.3rem,7vw,4.6rem)] uppercase tracking-[.04em]">Recipe Book</strong>
              </div>
              <div className={`${styles.ancientRule} relative z-10 my-7`} aria-hidden="true"><span>◆</span></div>
              <p className="relative z-10 max-w-sm font-serif text-[clamp(.9rem,2.3vw,1.15rem)] italic tracking-wide text-[#c8b889]">A treasured collection of nourishing feasts, gathered from Claire&apos;s kitchen</p>
              <div className={`${styles.ancientSeal} relative z-10 mt-auto`} aria-hidden="true"><span>PP</span></div>
              <button type="button" className={`${styles.openBook} relative z-20 mt-auto`} onClick={() => goToPage(1)}>Open the ancient book <span aria-hidden="true">→</span></button>
            </div>
          )}

          {currentBookPage?.kind === "section" && (
            <div className={`${styles.paperPage} absolute inset-0 flex flex-col items-center justify-center overflow-hidden border border-[#ded5bd] p-[clamp(28px,7vw,70px)] text-center`}>
              <div className={styles.binding} aria-hidden="true" />
              <span className="text-[clamp(4rem,15vw,8rem)] drop-shadow-md" aria-hidden="true">{currentBookPage.icon}</span>
              <p className="mt-6 text-xs font-black uppercase tracking-[.22em]" style={{ color: currentBookPage.accent }}>Claire&apos;s recipe book</p>
              <h2 className="mt-3 font-serif text-[clamp(2.8rem,9vw,6rem)] font-extrabold leading-[.95] text-[#203c2b]">{currentBookPage.title}</h2>
              <span className="my-6 h-1.5 w-20 rounded-full" style={{ backgroundColor: currentBookPage.accent }} />
              <p className="max-w-md text-[clamp(1rem,2.6vw,1.3rem)] font-semibold leading-relaxed text-[#65736b]">{currentBookPage.subtitle}</p>
              <p className="mt-8 text-sm font-black uppercase tracking-wider text-[#2f754b]">Turn the page to begin <span aria-hidden="true">→</span></p>
              <span className="absolute bottom-3 right-6 font-serif text-[.8rem] text-[#8a806b]">{page}</span>
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
                    {meal.ingredients.length > 0 ? (
                      <ul className="grid w-[min(100%,390px)] grid-cols-2 gap-2.5 text-left text-[#52635a]">{meal.ingredients.map((ingredient) => <li className="relative pl-[17px] text-[clamp(.82rem,2.2vw,1rem)] font-bold before:absolute before:left-0 before:text-[#68a34d] before:content-['●']" key={ingredient}>{ingredient}</li>)}</ul>
                    ) : (
                      <span className="rounded-2xl bg-green-50 px-6 py-5 font-bold text-[#52635a]">Claire&apos;s ingredient list is coming soon.</span>
                    )}
                    <span className="mt-auto text-xs font-black uppercase tracking-[.06em] text-[#2f754b]">Tap to see the meal <span aria-hidden="true">↻</span></span>
                  </span>
                </span>
              </button>
              <span className="absolute bottom-3 right-6 font-serif text-[.8rem] text-[#8a806b]">{page}</span>
            </div>
          )}

          {page === totalPages - 1 && (
            <div className={`${styles.cover} ${styles.ancientCover} ${styles.ancientBackCover} absolute inset-0 flex flex-col items-center justify-center overflow-hidden p-[clamp(28px,7vw,64px)] text-center`}>
              <span className={styles.dust} aria-hidden="true" />
              <div className={`${styles.ancientOrnament} relative z-10 mb-10`} aria-hidden="true">✦</div>
              <div className="relative z-10 flex flex-col items-center">
                <p className="text-[clamp(.58rem,1.5vw,.78rem)] font-bold uppercase tracking-[.28em] text-[#c8a85c]">The end</p>
                <h2 className="mt-5 font-serif text-[clamp(2.5rem,8vw,5rem)] font-extrabold leading-none text-[#d8b866] drop-shadow-[0_3px_1px_#241507]">That&apos;s all<br />for now!</h2>
                <div className={`${styles.ancientRule} my-10`} aria-hidden="true"><span>◆</span></div>
                <p className="max-w-[380px] font-serif text-[clamp(.95rem,2.3vw,1.15rem)] italic leading-relaxed text-[#c8b889]">Come back soon to see what Claire has been cooking.</p>
              </div>
              <button type="button" className={styles.openBook} onClick={() => goToPage(0)}>Back to the cover</button>
            </div>
          )}
        </article>

        <div className="relative z-10 mx-auto mt-[38px] grid grid-cols-[1fr_auto_1fr] items-center gap-2 sm:gap-[18px]">
          <button type="button" className="justify-self-start rounded-full border-2 border-[#2d6d47] bg-white px-3 py-2.5 text-xs font-black text-[#285b3e] shadow-[0_4px_0_#b8cfbd] transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-35 sm:px-[17px] sm:text-base" onClick={() => goToPage(page - 1)} disabled={page === 0}><span aria-hidden="true">←</span> Previous</button>
          <div className="min-w-[78px] text-center text-xs font-black text-[#52635a] sm:text-sm" aria-live="polite">
            {page === 0 ? "Cover" : page === totalPages - 1 ? "Back cover" : `Page ${page} of ${totalPages - 2}`}
          </div>
          <button type="button" className="justify-self-end rounded-full border-2 border-[#2d6d47] bg-white px-3 py-2.5 text-xs font-black text-[#285b3e] shadow-[0_4px_0_#b8cfbd] transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-35 sm:px-[17px] sm:text-base" onClick={() => goToPage(page + 1)} disabled={page === totalPages - 1}>Next <span aria-hidden="true">→</span></button>
        </div>
        <p className="relative mt-3.5 hidden text-center text-[.78rem] font-bold text-[#728078] sm:block">Tip: use the arrow keys to turn pages</p>
      </section>
    </main>
  );
}
