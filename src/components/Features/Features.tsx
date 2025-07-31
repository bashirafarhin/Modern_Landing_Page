import React from "react";
import FeatureCard from "./FeatureCard";
import { featuresData } from "../../../data/featuresData";
import SlideInText from "../Animation/SlideInText";

const Features = () => {
  return (
    <section className="space-y-30 overflow-x-hidden">
      <SlideInText
        lines={["Features"]}
        direction="right"
        className="text-center"
      />
      <div className="overflow-hidden max-w-7xl mx-auto space-y-24">
        {featuresData.map((feature, idx) => (
          <FeatureCard key={idx} {...feature} />
        ))}
      </div>
    </section>
  );
};

export default Features;
