import WaitlistForm from "@/components/ui/WaitlistForm";

export default function WaitlistCTA() {
  return (
    <section id="waitlist" className="bg-chocolate py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h2 className="font-syne text-3xl font-extrabold text-linen md:text-4xl">
            Be first in line.
          </h2>
          <p className="mt-4 text-lg text-linen/70">
            Join the waitlist and get early access when we launch in your area.
          </p>
        </div>

        <div className="mt-12">
          <WaitlistForm />
        </div>
      </div>
    </section>
  );
}
