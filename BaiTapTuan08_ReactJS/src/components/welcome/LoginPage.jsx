import { useState } from "react";

const pink = {
  brand: "text-pink-500",
  brandBg: "bg-pink-500",
};

function ChefifyHeader() {
  return (
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
  );
}

function GoogleIcon() {
  return (
    <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" aria-hidden>
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" aria-hidden>
      <path
        fill="#1877F2"
        d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
      />
    </svg>
  );
}

function AppleIcon() {
  return (
    <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
    </svg>
  );
}

export default function LoginPage() {
  const [email, setEmail] = useState("");

  return (
    <div className="relative min-h-screen bg-neutral-100 font-sans text-neutral-800">
      <ChefifyHeader />

      <main className="relative z-0 mx-auto max-w-6xl px-4 py-10 lg:px-6">
        <p className="text-center text-sm text-neutral-500">
          Page content behind the login modal (dimmed by overlay).
        </p>
      </main>

      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/45 p-4 backdrop-blur-sm"
        role="presentation"
      >
        <div
          className="flex w-full max-w-3xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-black/5 lg:max-w-4xl lg:flex-row"
          role="dialog"
          aria-modal="true"
          aria-labelledby="login-title"
        >
            {/* Cột trái: nền xanh, ảnh món ăn, quote */}
            <div className="relative flex min-h-[200px] flex-1 flex-col justify-between bg-gradient-to-br from-emerald-700 via-teal-700 to-cyan-800 px-8 py-10 text-white lg:min-h-[480px] lg:max-w-md lg:py-12">
              <div className="relative mx-auto w-full max-w-[280px] flex-1 lg:mx-0 lg:max-w-none lg:flex-none">
                <div className="overflow-hidden rounded-2xl shadow-lg ring-2 ring-white/20">
                  <img
                    src="https://via.placeholder.com/480x320/0d9488/f0fdfa?text=Chefify+Dish"
                    alt=""
                    className="h-44 w-full object-cover sm:h-52 lg:h-auto lg:min-h-[220px]"
                    width={480}
                    height={320}
                  />
                </div>
              </div>
              <blockquote className="mt-6 text-center lg:mt-10 lg:text-left">
                <p className="text-lg font-medium italic leading-relaxed text-emerald-50 sm:text-xl">
                  &ldquo;Embrace the art of cooking, where flavors come alive!&rdquo;
                </p>
              </blockquote>
            </div>

            {/* Cột phải: form đăng nhập */}
            <div className="flex flex-1 flex-col justify-center px-6 py-8 sm:px-10 sm:py-10 lg:px-12 lg:py-12">
              <h2 id="login-title" className="text-2xl font-bold text-neutral-900">
                Login
              </h2>

              <label className="mt-6 block text-sm font-medium text-neutral-700" htmlFor="login-email">
                Email
              </label>
              <input
                id="login-email"
                type="email"
                name="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="mt-2 w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm outline-none transition focus:border-pink-300 focus:bg-white focus:ring-2 focus:ring-pink-200"
              />

              <button
                type="button"
                className={`mt-5 w-full rounded-full py-3 text-sm font-semibold text-white shadow-md transition hover:bg-pink-600 ${pink.brandBg}`}
              >
                Continue
              </button>

              <div className="my-6 flex items-center gap-3">
                <span className="h-px flex-1 bg-neutral-200" />
                <span className="text-xs font-semibold uppercase tracking-wide text-neutral-400">
                  OR
                </span>
                <span className="h-px flex-1 bg-neutral-200" />
              </div>

              <div className="flex flex-col gap-3">
                <button
                  type="button"
                  className="flex w-full items-center justify-center gap-3 rounded-xl border border-neutral-200 bg-white py-3 text-sm font-medium text-neutral-800 shadow-sm transition hover:bg-neutral-50"
                >
                  <GoogleIcon />
                  Continue with Google
                </button>
                <button
                  type="button"
                  className="flex w-full items-center justify-center gap-3 rounded-xl border border-neutral-200 bg-white py-3 text-sm font-medium text-neutral-800 shadow-sm transition hover:bg-neutral-50"
                >
                  <FacebookIcon />
                  Continue with Facebook
                </button>
                <button
                  type="button"
                  className="flex w-full items-center justify-center gap-3 rounded-xl border border-neutral-200 bg-white py-3 text-sm font-medium text-neutral-800 shadow-sm transition hover:bg-neutral-50"
                >
                  <span className="text-neutral-900">
                    <AppleIcon />
                  </span>
                  Continue with Apple
                </button>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}
