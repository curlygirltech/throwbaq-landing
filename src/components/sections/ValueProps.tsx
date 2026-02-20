import { VALUE_PROPS } from "@/lib/constants";

export default function ValueProps() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <span className="font-space-grotesk text-sm font-semibold uppercase tracking-widest text-tangelo">
            Two Sides, One Platform
          </span>
          <h2 className="mt-4 font-syne text-3xl font-extrabold leading-tight md:text-4xl">
            Built for everyone.
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2">
          {VALUE_PROPS.map((card) => {
            const isDark = card.variant === "dark";
            return (
              <div
                key={card.tag}
                className={`rounded-2xl p-8 ${
                  isDark
                    ? "bg-chocolate text-linen"
                    : "bg-white text-chocolate shadow-sm"
                }`}
              >
                <span
                  className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${
                    isDark
                      ? "bg-tangelo/20 text-tangelo"
                      : "bg-tangelo-glow text-tangelo"
                  }`}
                >
                  {card.tag}
                </span>
                <h3 className="mt-4 font-syne text-2xl font-bold">
                  {card.heading}
                </h3>
                <ul className="mt-6 space-y-3">
                  {card.features.map((feature) => (
                    <li key={feature.text} className="flex items-start gap-3">
                      <span className="mt-0.5 text-tangelo">&#10003;</span>
                      <span
                        className={`text-base ${
                          isDark ? "text-linen/80" : "text-chocolate/70"
                        }`}
                      >
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#waitlist"
                  className="mt-6 inline-block font-semibold transition-colors text-tangelo hover:text-tangelo-hover"
                >
                  {card.cta}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
