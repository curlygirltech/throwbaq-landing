import { PAIN_POINTS } from "@/lib/constants";

export default function Problem() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <span className="font-space-grotesk text-sm font-semibold uppercase tracking-widest text-tangelo">
            The Problem
          </span>
          <h2 className="mt-4 font-syne text-3xl font-extrabold leading-tight md:text-4xl">
            Returning stuff shouldn&rsquo;t be harder
            <br className="hidden sm:block" /> than buying it.
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PAIN_POINTS.map((point) => (
            <div
              key={point.title}
              className="rounded-2xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <span className="text-3xl">{point.emoji}</span>
              <h3 className="mt-3 font-space-grotesk text-lg font-semibold">
                {point.title}
              </h3>
              <p className="mt-2 text-sm text-chocolate/60">
                {point.description}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center">
          <a
            href="#how-it-works"
            className="font-medium text-tangelo transition-colors hover:text-tangelo-hover"
          >
            What if someone else handled all of that? &rarr;
          </a>
        </p>
      </div>
    </section>
  );
}
