import React from "react";
import TestimonialCard from "./TestimonialCard";
import { testimonials } from "../../../data/testimonialsData";
import Stats from "./Stats";

const Testimonials: React.FC = () => {
  return (
    <section className="my-16 px-4">
      <div className="flex gap-6 overflow-x-auto hide-scrollbar cursor-grab">
        {testimonials.map((t, idx) => (
          <TestimonialCard key={idx} {...t} />
        ))}
      </div>
      <p className="text-center font-extralight mt-2 text-gray-500">
        Swipe to see reviews →
      </p>
      <Stats />
    </section>
  );
};

export default Testimonials;
