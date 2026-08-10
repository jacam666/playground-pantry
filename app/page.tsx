import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-white">
      <header className="sticky top-0 z-20  bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/Playground-Pantry-logo.png"
              alt="pantry logo"
              width={90}
              height={36}
              priority
              className="h-auto w-[60px] sm:w-[70px]"
            />
          </Link>

          <nav className="flex items-center gap-5 text-sm font-medium text-gray-900">
            <Link
              href="#menus"
              className="transition hover:text-gray-900"
            >
              Menus
            </Link>
            <Link
              href="#who-we-are"
              className="transition hover:text-gray-900"
            >
              Who We Are
            </Link>
            <Link
              href="#contact"
              className="transition hover:text-gray-900"
            >
              Contact
            </Link>

          </nav>
        </div>
      </header>
      <section className="mx-auto flex max-w-7xl flex-col items-center justify-center px-6 py-24 text-center">
        <Image
          src="/images/Playground-Pantry-logo.png"
          alt="Playground Pantry"
          width={500}
          height={500}
          className="mb-8 h-auto"
        />

        <h1 className="mb-6 text-5xl font-bold text-slate-900">
          Healthy School Meals,
          <br />
          Happy Children.
        </h1>

        <p className="max-w-2xl text-lg text-slate-600">
          Freshly prepared nutritious lunches made with quality ingredients,
          helping children enjoy healthy food every day.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-8">
          <Link
            href="/menus"
            className="group flex flex-col items-center"
          >
            <div className="relative flex h-48 w-48 items-center justify-center transition duration-300 group-hover:-rotate-6 group-hover:scale-110">

              <Image
                src="/images/strawberry.png"
                alt="Strawberry"
                width={128}
                height={128}
                className="h-36 w-36 object-contain"
              />

              {/* Text on top of image */}
              <span className="absolute left-1/2 top-[60%] -translate-x-1/4 -translate-y-1/2 text-sm font-black text-white">
                MENUS
              </span>

            </div>
          </Link>
          <Link
            href="#contact"
            className="group flex flex-col items-center"
          >
            <div className="relative flex h-48 w-48 items-center justify-center transition duration-300 group-hover:-rotate-6 group-hover:scale-110">

              <Image
                src="/images/carrot.png"
                alt="Carrot"
                width={128}
                height={128}
                className="h-36 w-36 object-contain"
              />

              {/* Text on top of image */}
              <span className="absolute left-1/3 top-[58%] -translate-x-1/4 -translate-y-1/2 text-sm font-black text-white">
                CONTACT
              </span>

            </div>
          </Link>
        </div>
      </section>
      <section>
        <h1 className="mb-6 text-5xl font-bold text-slate-900">Our Menus</h1>
      </section>

    </main>
  );
}
