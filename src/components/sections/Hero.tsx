import Button from "@/components/ui/Button";
import PhoneMockup from "@/components/ui/PhoneMockup";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-16">
          {/* Text side */}
          <div className="flex-1 text-center lg:text-left">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-tangelo-glow px-4 py-1.5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-tangelo opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-tangelo" />
              </span>
              <span className="font-space-grotesk text-sm font-medium text-tangelo">
                Coming Soon
              </span>
            </div>

            <h1 className="font-syne text-4xl font-extrabold leading-tight tracking-tight md:text-5xl lg:text-6xl">
              Never deal with a{" "}
              <span className="text-tangelo">return</span> again.
            </h1>

            <p className="mt-6 max-w-lg text-lg text-chocolate/70 md:text-xl">
              Throwbaq connects you with local runners who pick up, pack, and
              return your online purchases &mdash; so you never visit the post
              office again.
            </p>

            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
              <Button href="#waitlist">Join the Waitlist &rarr;</Button>
              <Button variant="outline" href="#how-it-works">
                See How It Works
              </Button>
            </div>
          </div>

          {/* Phone mockup */}
          <div className="flex-shrink-0">
            <PhoneMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
