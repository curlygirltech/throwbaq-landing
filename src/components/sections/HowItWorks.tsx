import { STEPS } from "@/lib/constants";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <span className="font-space-grotesk text-sm font-semibold uppercase tracking-widest text-tangelo">
            How It Works
          </span>
          <h2 className="mt-4 font-syne text-3xl font-extrabold leading-tight md:text-4xl">
            Three taps. Done.
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
          {STEPS.map((step) => (
            <div key={step.number} className="text-center md:text-left">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-tangelo font-syne text-xl font-bold text-white md:mx-0">
                {step.number}
              </div>
              <h3 className="mt-4 font-space-grotesk text-xl font-semibold">
                {step.title}
              </h3>
              <p className="mt-2 text-base text-chocolate/60">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
