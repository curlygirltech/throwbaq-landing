import { STATS } from "@/lib/constants";

export default function StatsBar() {
  return (
    <section className="bg-chocolate py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-12">
          {STATS.map((stat) => (
            <div key={stat.value} className="text-center">
              <p className="font-syne text-4xl font-extrabold text-tangelo md:text-5xl">
                {stat.value}
              </p>
              <p className="mt-2 text-base text-linen/80">{stat.label}</p>
              <p className="mt-1 text-xs text-linen/40">{stat.source}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
