"use client";

import { useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
};

const faqItems: FAQItem[] = [
  {
    question: "I do not have tech background.",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
  },
  {
    question: "I cannot afford it.",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
  },
  {
    question: "I do not have time.",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
  },
  {
    question: "Is the certificate worth anything?",
    answer:
      "Every certificate is signed personally byIseunife Ajayi, founder of The AI Colony. It has a verifiable URL you put on your LinkedIn.",
  },
  {
    question: "What happens if I miss a live session?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(3);

  function toggleItem(index: number) {
    setOpenIndex((current) => (current === index ? null : index));
  }

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="w-full bg-[#F9FAFB] px-6 py-20 lg:px-8 lg:py-24"
    >
      <div className="mx-auto grid w-full max-w-[1260px] grid-cols-1 gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
        <h2
          id="faq-heading"
          className="text-4xl font-bold leading-tight tracking-[-1.2px] text-[#002B1F] lg:text-[46px]"
        >
          Frequently<br/> <span className="text-[#00B98A]">Asked</span> <br/>questions
        </h2>

        <div className="space-y-4">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <article
                key={item.question}
                className="overflow-hidden rounded-2xl bg-white shadow-[0_4px_24px_rgba(0,0,0,0.06)]"
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => toggleItem(index)}
                  className={`flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-base font-semibold transition-colors ${
                    isOpen
                      ? "bg-[#00B98A] text-white"
                      : "bg-white text-[#002B1F] hover:bg-black/[0.02]"
                  }`}
                >
                  <span className= "">{item.question}</span>
                  <span
                    aria-hidden="true"
                    className="shrink-0 text-xl leading-none"
                  >
                    {isOpen ? "×" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div className="border-t border-black/5 px-6 py-5">
                    <p className="text-sm leading-relaxed text-black/60">
                      {item.answer}
                    </p>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
