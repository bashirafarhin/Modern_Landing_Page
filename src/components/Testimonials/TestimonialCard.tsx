import React from "react";
import Image from "next/image";
import { Quote } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  review: string;
  image: string;
  className?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  review,
  image,
  className,
}) => {
  return (
    <div className={`min-w-[300px] max-w-[320px] ${className}`}>
      <Quote className="text-white scale-x-[-1] w-6 h-6" />

      <div className="rounded-lg bg-zinc-800 p-4">
        <p className="font-extralight italic mb-4">{review}</p>

        <div className="flex justify-end w-full">
          <div className="flex items-center gap-4">
            <Image
              src={image}
              alt={name}
              width={40}
              height={40}
              className="rounded-full object-cover"
            />
            <h4 className="text-md font-semibold">{name}</h4>
          </div>
        </div>
      </div>

      <Quote className="text-white w-6 h-6 ml-auto" />
    </div>
  );
};

export default TestimonialCard;
