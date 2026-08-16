import Image from "next/image";
import Link from "next/link";
import MenuLightbox from "./components/MenuLightbox";
import ContactForm from "./components/ContactForm";
import ImageCarousel from "./components/ImageCarousel";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    // removed text-white — it was overriding all text colours globally
    <main className="min-h-screen bg-blue-50 text-slate-900">

      <Navbar />


      {/* ── Hero ── */}
      <section className="bg-blue-50 px-6 py-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center text-center">
          <Image
            src="/images/Playground-Pantry-logo.png"
            alt="Playground Pantry"
            width={500}
            height={500}
            className="mb-8 h-auto w-48 rounded-full shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl sm:w-64"
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

          {/* fruit CTA buttons */}
          <div className="mt-10 flex flex-row items-center justify-center gap-8 sm:gap-16">
            <Link href="#menus" className="group flex flex-col items-center gap-3">
              <div className="rounded-3xl bg-pink-100 p-5 shadow-lg transition duration-300 group-hover:-rotate-6 group-hover:scale-110 group-hover:shadow-2xl">
                <Image
                  src="/images/strawberry.png"
                  alt="See our menus"
                  width={96}
                  height={96}
                  className="h-24 w-24 object-contain"
                />
              </div>
              <span className="text-base font-black text-slate-700 tracking-wide">SEE OUR MENUS 🍽️</span>
            </Link>

            {/* <Image
              src="/images/mascot-carrot-waving.png"
              alt="mascot-3"
              width={200}
              height={200}
              className="hidden h-auto w-36 object-contain my-auto mx-auto md:block"
            /> */}
            
            <video
              src="/videos/Video-Project-7.mp4"
              autoPlay
              loop
              muted
              playsInline
              aria-hidden="true"
              className="hidden h-auto w-28 object-contain my-auto mx-auto sm:w-32 md:block md:w-60 lg:w-92"
            />

            <Link href="#contact" className="group flex flex-col items-center gap-3">
              <div className="rounded-3xl bg-orange-100 p-5 shadow-lg transition duration-300 group-hover:-rotate-6 group-hover:scale-110 group-hover:shadow-2xl">
                <Image
                  src="/images/carrot.png"
                  alt="Get in touch"
                  width={96}
                  height={96}
                  className="h-24 w-24 object-contain"
                />
              </div>
              <span className="text-base font-black text-slate-700 tracking-wide">GET IN TOUCH 👋</span>
            </Link>
          </div>
        </div>
      </section>

      {/* wavy divider hero → menus */}
      <div className="overflow-hidden bg-slate-50">
        <svg viewBox="0 0 1440 60" className="block w-full translate-y-px" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0,30 C360,0 1080,60 1440,30 L1440,0 L0,0 Z" fill="#fc5204" />
        </svg>
      </div>

      {/* ── Our Menus ── */}
      <section id="menus" className="scroll-mt-24 bg-gray-50 px-6 py-12">
        <div className="mx-auto mb-12 max-w-7xl text-center">
          <h2 className="mb-4 text-4xl font-bold text-slate-900 sm:text-5xl">Our Menus</h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-600">
            Take a look at our delicious three-week menu rotation, crafted with care to provide balanced and
            delicious meals for children.
          </p>
        </div>

        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 md:grid-cols-5">

          {/* mascot 1  */}
          {/* <Image
            src="/images/broccoli-mascot-running.png"
            alt=""
            aria-hidden="true"
            width={200}
            height={200}
            className=" h-auto w-42 object-contain my-auto mx-auto md:block"
          /> */}

          
          <video
            src="/videos/can-you-ma-Video-Anthro-Broccoli-Joyful-Running-Loop-v2.webm"
            autoPlay
            loop
            muted
            playsInline
            aria-hidden="true"
            className=" h-auto w-48 object-contain my-auto mx-auto md:block"
          />

          <MenuLightbox />

          {/* mascot 2  */}
          <video
            src="/videos/apple-dancing-video-v6.mp4"
            autoPlay
            loop
            muted
            playsInline
            aria-hidden="true"
            className=" h-auto w-60 object-contain my-auto mx-auto md:block"
          />
            {/* <Image
              src="/images/mascot-apple-jumping.png"
              alt=""
              aria-hidden="true"
              width={200}
              height={200}
              className=" h-auto w-64 object-contain my-auto mx-auto md:block"
            /> */}
        </div>
      </section>

      {/* meal rotation images */}
      <section id="meal-calendars" className="bg-slate-50 px-6 sm:pt-16 pb-16">
        <div className="mx-auto mb-10 max-w-7xl text-center">
          <h2 className="mb-3 text-4xl font-bold text-slate-900 sm:text-5xl">Meal Calendars</h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-600">
            Browse our monthly meal calendars so you always know what&apos;s on the menu.
          </p>
        </div>
        <ImageCarousel />
      </section>

      {/* wavy divider menus → who we are */}
      <div className="overflow-hidden bg-yellow-50">
        <svg viewBox="0 0 1440 60" className="block w-full translate-y-px" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0,30 C360,0 1080,60 1440,30 L1440,0 L0,0 Z" fill="#fd0395" />
        </svg>
      </div>

      {/* ── Who We Are ── */}
      <section id="who-we-are" className="scroll-mt-24 bg-yellow-50 px-6 py-12">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="mb-4 text-4xl font-bold text-slate-900 sm:text-5xl">Who We Are</h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-600">
            Playground Pantry is dedicated to providing healthy and delicious meals for children. We believe
            that healthy eating habits start at a young age, and we are committed to making nutritious meals
            accessible and enjoyable for all.
          </p>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">

            {/* member 1 */}
            <div className="group flex flex-col bg-pink-50 rounded-xl p-6 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div className="flex flex-row items-center gap-4">
                <Image
                  src="/images/claire-headshot-pro.png"
                  alt="Claire"
                  width={96}
                  height={96}
                  className="h-24 w-24 rounded-full object-cover"
                />
                <h3 className="text-xl font-bold text-slate-900">Claire</ h3>
              </div>
              <p className="mt-4 text-left text-lg text-slate-600">
                Claire is the proud owner of Playground Pantry, bringing over 15 years of experience in school catering and a real passion for providing children with fresh, nutritious and delicious food. She believes healthy meals should be something children look forward to, creating balanced menus that keep young diners happy, fuelled and ready for the day ahead.
              </p>
            </div>

            {/* member 2 */}
            <div className="group flex flex-col bg-pink-50 rounded-xl p-6 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div className="flex flex-row items-center gap-4">
                <Image
                  src="/images/rachel-headshot-pro.png"
                  alt="Rachel"
                  width={96}
                  height={96}
                  className="h-24 w-24 object-cover rounded-full"
                />
                <h3 className="text-xl font-bold text-slate-900">Rachel</h3>
              </div>
              <p className="mt-4 text-left text-lg text-slate-600">
                Rachel is a valued part of the Playground Pantry team, bringing energy, care and a helping hand to the kitchen every day. As our Kitchen Assistant, she helps keep everything running smoothly and plays an important role in making sure our fresh, tasty meals are ready for hungry young diners.
              </p>
            </div>

            {/* member 3 — uses mascot-3 as placeholder until photo is ready */}
            <div className="group flex flex-col bg-pink-50 rounded-xl p-6 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div className="flex flex-row items-center gap-4">
                <Image
                  src="/images/mascot-3.png"
                  alt="Coming soon"
                  width={96}
                  height={96}
                  className="h-24 w-24 object-cover rounded-full"
                />
                <h3 className="text-xl font-bold text-slate-900">Coming Soon</h3>
              </div>
              <p className="mt-4 text-left text-lg text-slate-500 italic">
                We&apos;re growing our team! Watch this space.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* wavy divider who we are → contact */}
      <div className="overflow-hidden bg-yellow-50">
        <svg viewBox="0 0 1440 60" className="block w-full" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="#7d03ff" />
        </svg>
      </div>


      {/* ── Payments ── */}
      <section id="payments" className="scroll-mt-24 bg-purple-50 px-6 py-16"
        style={{
          backgroundImage: "radial-gradient(circle, #d8b4fe 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      >
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-2 text-4xl font-bold text-slate-900 sm:text-5xl">💳 Payments</h2>
          <p className="mb-10 text-lg text-slate-600">Simple and flexible — pay in the way that suits you best!</p>

          {/* price banner */}
          <div className="mb-10 rounded-3xl border-4 border-purple-300 bg-white px-8 py-6 shadow-lg">
            <p className="text-xl font-bold text-slate-700">Years 3 &amp; 4 — from September</p>
            <p className="mt-2 text-5xl font-black text-purple-500">£2.70 <span className="text-2xl font-bold text-slate-500">/ day</span></p>
            <p className="mt-1 text-lg font-semibold text-slate-500">£13.50 per week</p>
          </div>

          {/* frequency options */}
          <div className="mb-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {["Daily", "Weekly", "Half Termly", "Termly"].map((opt) => (
              <div key={opt} className="rounded-2xl border-2 border-purple-200 bg-white py-4 px-2 text-center shadow-sm">
                <span className="block text-2xl mb-1">✅</span>
                <span className="text-sm font-bold text-slate-700">{opt}</span>
              </div>
            ))}
          </div>

          {/* payment methods */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">

            {/* cash */}
            <div className="flex flex-col items-start gap-3 rounded-3xl border-4 border-yellow-300 bg-white p-6 shadow-lg text-left">
              <div className="flex items-center gap-3">
                <span className="text-4xl">💵</span>
                <h3 className="text-xl font-bold text-slate-900">Cash</h3>
              </div>
              <p className="text-slate-600">
                Place cash in an envelope marked with your child&apos;s <strong>name and class</strong>, then pop it in the post box outside the office.
              </p>
            </div>

            {/* bank transfer */}
            <div className="flex flex-col items-start gap-3 rounded-3xl border-4 border-green-300 bg-white p-6 shadow-lg text-left">
              <div className="flex items-center gap-3">
                <span className="text-4xl">🏦</span>
                <h3 className="text-xl font-bold text-slate-900">Bank Transfer</h3>
              </div>
              <p className="mb-2 text-slate-600">Use your child&apos;s <strong>surname and class</strong> as the reference.</p>
              <div className="w-full rounded-2xl bg-slate-50 p-4 text-sm font-mono text-slate-700 space-y-1">
                <p><span className="font-bold text-slate-500">Name:</span> Playground Pantry Ltd</p>
                <p><span className="font-bold text-slate-500">Account:</span> 11321536</p>
                <p><span className="font-bold text-slate-500">Sort Code:</span> 09-01-29</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      

      {/* ── Contact ── */}
      <section
        id="contact"
        className="scroll-mt-24 px-6 py-12"
        style={{
          backgroundColor: "#f0fdf4",
          backgroundImage: "radial-gradient(circle, #86efac 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      >
        <h2 className="mb-2 text-center text-4xl font-bold text-slate-900 sm:text-5xl">Contact Us</h2>
        <p className="mx-auto max-w-2xl text-center text-lg text-slate-600">
          Have questions or want to learn more? We&apos;d love to hear from you!
        </p>

        <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-10 md:grid-cols-2">

          {/* contact details card */}
          <div className="flex flex-col justify-center gap-5 rounded-3xl border-4 border-yellow-300 bg-white p-8 shadow-lg">
            <div className="flex items-center gap-4">
              <span className="text-3xl">📧</span>
              <div>
                <p className="text-sm font-bold uppercase tracking-wide text-slate-400">Email</p>
                <a
                  href="mailto:playgroundpantryltd@gmail.com"
                  className="break-all text-lg font-semibold text-green-600 transition hover:scale-105 hover:text-green-800"
                >
                  playgroundpantryltd@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-3xl">📞</span>
              <div>
                <p className="text-sm font-bold uppercase tracking-wide text-slate-400">Phone</p>
                <a
                  href="tel:+441525374713"
                  className="text-lg font-semibold text-green-600 transition hover:scale-105 hover:text-green-800"
                >
                  01525 374713 <span className="text-slate-500">(option 3)</span>
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="text-3xl">📍</span>
              <div>
                <p className="text-sm font-bold uppercase tracking-wide text-slate-400">Address</p>
                <p className="text-lg font-semibold text-slate-700 leading-relaxed">
                  Playground Pantry<br />
                  Leedon Lower School<br />
                  Highfield Road<br />
                  LU7 3LZ
                </p>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>

        <div className="mx-auto mt-12 flex items-center justify-center gap-4">
          <Image src="/images/banana-mascot-1.png" alt="mascot-4" aria-hidden="true" width={80} height={80} className="h-32 w-32 object-contain" />
          <p className="text-center text-lg font-semibold text-slate-600">
            We look forward to hearing from you! 🌟
          </p>
          <Image src="/images/redpepper-mascot-1.png" alt="mascot-5" aria-hidden="true" width={80} height={80} className="h-32 w-32 object-contain" />
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-green-400 px-6 py-10 text-center text-white">
        <Image
          src="/images/Playground-Pantry-logo.png"
          alt="Playground Pantry"
          width={80}
          height={80}
          className="mx-auto mb-4 h-auto w-16 object-contain rounded-full"
        />
        <div className="mb-3 flex justify-center gap-3 text-2xl">
          <span>🍓</span><span>🥕</span><span>🥦</span><span>🍎</span><span>🌽</span>
        </div>
        <p className="text-sm font-semibold">
          &copy; {new Date().getFullYear()} Playground Pantry Ltd. All rights reserved.
        </p>
        <p className="mt-1 text-xs text-green-100">
          Leedon Lower School, Highfield Road, LU7 3LZ
        </p>
      </footer>

    </main>
  );
}
