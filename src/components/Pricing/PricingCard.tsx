"use client";
import React from "react";
import Button from "../ui/Button";

type Feature = {
  label: string;
  highlight?: string;
};

type PricingCardProps = {
  title: string;
  description: string;
  price: string;
  duration: string;
  features: Feature[];
  buttonLabel: string;
};

const PricingCard = ({
  title,
  description,
  price,
  duration,
  features,
  buttonLabel,
}: PricingCardProps) => {
  return (
    <div className="flex flex-col p-6 mx-auto max-w-lg text-center rounded-lg border border-zinc-700 shadow bg-zinc-800">
      <h3 className="mb-4 text-2xl font-semibold">{title}</h3>
      <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
        {description}
      </p>
      <div className="flex justify-center items-baseline my-8">
        <span className="mr-2 text-5xl font-extrabold">{price}</span>
        <span className="text-gray-500 dark:text-gray-400">{duration}</span>
      </div>
      <ul role="list" className="mb-8 space-y-4 text-left">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-center space-x-3">
            <svg
              className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 
                  12.586l7.293-7.293a1 1 0 011.414 0z"
              />
            </svg>
            <span>
              {feature.label}
              {feature.highlight && (
                <span className="font-semibold"> {feature.highlight}</span>
              )}
            </span>
          </li>
        ))}
      </ul>
      <Button onClick={() => {}}>{buttonLabel}</Button>
    </div>
  );
};

export default PricingCard;
