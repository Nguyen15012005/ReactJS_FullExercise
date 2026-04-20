import { useState } from "react";

const pink = {
  brand: "text-pink-500",
  brandBg: "bg-pink-500",
};

const slides = [
  {
    description:
      "Explore thousands of chef-tested recipes, save your favorites, and cook with confidence—whether you are a beginner or a kitchen pro.",
    image: "https://via.placeholder.com/400x240/e8e8e8/666666?text=Chefify+Food+1",
  },
  {
    description:
      "Build meal plans, generate shopping lists, and keep every dinner on track without the last-minute stress.",
    image: "https://via.placeholder.com/400x240/e8e8e8/666666?text=Chefify+Food+2",
  },
  {
    description:
      "Share recipes with friends, rate dishes you love, and get inspired by a community that lives for great food.",
    image: "https://via.placeholder.com/400x240/e8e8e8/666666?text=Chefify+Food+3",
  },
];

export default function WelcomeModalPage() {
  const [index, setIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(true);
  const slide = slides[index];

  const goNext = () => {
    setIndex((i) => (i + 1) % slides.length);
  };

  return (
    <div className="relative min-h-screen bg-neutral-100 font-sans text-neutral-800">
      {/* —— Header (background layer) —— */}
      <header className="sticky top-0 z-0 border-b border-neutral-200/80 bg-white/95 shadow-sm backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6 lg:px-6">
          <div className="flex shrink-0 items-center justify-between gap-4 sm:justify-start">
            <a href="#/" className={`text-2xl font-bold tracking-tight ${pink.brand}`}>
              Chefify
            </a>
            <div className="flex items-center gap-2 sm:hidden">
              <button
                type="button"
                className={`text-sm font-semibold ${pink.brand} hover:opacity-80`}
              >
                Login
              </button>
              <button
                type="button"
                className={`rounded-full px-4 py-2 text-sm font-semibold text-white shadow ${pink.brandBg} hover:bg-pink-600`}
              >
                Subscribe
              </button>
            </div>
          </div>

          <div className="relative min-w-0 flex-1">
            <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </span>
            <input
              type="search"
              placeholder="Search recipes, chefs, ingredients..."
              className="w-full rounded-full border border-neutral-200 bg-neutral-50 py-2.5 pl-10 pr-4 text-sm outline-none ring-0 transition focus:border-pink-300 focus:bg-white focus:ring-2 focus:ring-pink-200"
              aria-label="Search"
            />
          </div>

          <nav
            className="hidden flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-medium text-neutral-600 md:flex"
            aria-label="Main"
          >
            <a href="#/" className="hover:text-pink-500">
              Home
            </a>
            <a href="#/" className="hover:text-pink-500">
              Recipes
            </a>
            <a href="#/" className="hover:text-pink-500">
              Chefs
            </a>
            <a href="#/" className="hover:text-pink-500">
              Community
            </a>
          </nav>

          <div className="hidden shrink-0 items-center gap-3 sm:flex">
            <button
              type="button"
              className={`text-sm font-semibold ${pink.brand} hover:opacity-80`}
            >
              Login
            </button>
            <button
              type="button"
              className={`rounded-full px-5 py-2 text-sm font-semibold text-white shadow-md transition hover:bg-pink-600 ${pink.brandBg}`}
            >
              Subscribe
            </button>
          </div>
        </div>
      </header>

      <main className="relative z-0 mx-auto max-w-6xl px-4 py-10 lg:px-6">
        <p className="text-center text-sm text-neutral-500">
          Page content behind the modal (dimmed by overlay).
        </p>
      </main>

      {/* —— Overlay + Modal (foreground) —— */}
      {modalOpen && (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/45 p-4 backdrop-blur-sm"
        role="presentation"
      >
        <div
          className="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl ring-1 ring-black/5 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-labelledby="welcome-title"
        >
          <h2
            id="welcome-title"
            className={`text-center text-2xl font-bold tracking-tight sm:text-[1.65rem] ${pink.brand}`}
          >
            Discover Chefify
          </h2>
          <p className="mt-3 text-center text-sm leading-relaxed text-neutral-600 sm:text-[15px]">
            {slide.description}
          </p>

          <div className="mt-6 overflow-hidden rounded-xl bg-neutral-100 ring-1 ring-neutral-200/80">
            <img
              src={slide.image}
              alt=""
              className="h-auto w-full object-cover"
              width={400}
              height={240}
            />
          </div>

          <div className="mt-5 flex justify-center gap-2" role="tablist" aria-label="Carousel progress">
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                role="tab"
                aria-selected={i === index}
                className={`h-2.5 w-2.5 rounded-full transition ${
                  i === index ? `scale-110 ${pink.brandBg}` : "bg-neutral-300 hover:bg-neutral-400"
                }`}
                onClick={() => setIndex(i)}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>

          <div className="mt-6 flex flex-col-reverse items-stretch gap-3 sm:flex-row sm:items-center sm:justify-between">
            <button
              type="button"
              className={`text-center text-sm font-semibold ${pink.brand} hover:underline sm:text-left`}
              onClick={() => setModalOpen(false)}
            >
              Skip
            </button>
            <button
              type="button"
              onClick={goNext}
              className={`rounded-full px-8 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-pink-600 sm:min-w-[8rem] ${pink.brandBg}`}
            >
              Next
            </button>
          </div>
        </div>
      </div>
      )}
    </div>
  );
}
