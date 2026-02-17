import { FAQS } from "@/lib/constants";
import AccordionItem from "@/components/ui/AccordionItem";

export default function FAQ() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <span className="font-space-grotesk text-sm font-semibold uppercase tracking-widest text-tangelo">
            Questions?
          </span>
          <h2 className="mt-4 font-syne text-3xl font-extrabold leading-tight md:text-4xl">
            We got you.
          </h2>
        </div>

        <div className="mt-12">
          {FAQS.map((faq, i) => (
            <AccordionItem
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
              defaultOpen={i === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
