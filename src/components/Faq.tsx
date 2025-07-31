"use client";

import React, { useState } from "react";
import { faq } from "../../data/faqData";

type FAQItem = {
  question: string;
  answer: string;
};

const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="flex flex-col items-center justify-center w-full px-4 py-8 my-24">
      <h2 className="text-[3rem] font-bold text-center">
        FAQ<span className="golden">s</span>
      </h2>
      <p className="text-gray-600 font-extralight mb-6 text-center">
        Got questions? — We&apos;ve Got You Covered.
      </p>

      <div className="w-full max-w-4xl space-y-4">
        {faq.map((item: FAQItem, index: number) => (
          <div
            key={index}
            className="border-t border-zinc-700 rounded-md shadow-sm"
          >
            <div
              onClick={() => toggle(index)}
              className="flex justify-between items-center px-4 py-3 cursor-pointer"
            >
              <span className="text-xl">{item.question}</span>
              <svg
                className={`w-5 h-5 transform transition-transform duration-500 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>

            {openIndex === index && (
              <div className="px-4 pb-4 text-sm">{item.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
