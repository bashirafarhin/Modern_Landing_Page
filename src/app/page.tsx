import React from "react";
import Marquee from "@/components/Marquee";
import { companyLogos, marqueeItems } from "../../data/marqueeData";
import HeroSection from "@/components/HeroSection";
import Faq from "@/components/Faq";
import FadeInText from "@/components/Animation/FadeInText";
import OurProjects from "@/components/OurProjects";
import PricingPlan from "@/components/PricingPlan";
import SlideInText from "@/components/Animation/SlideInText";

const Page = () => {
  return (
    <>
      <HeroSection />
      <SlideInText
        lines={["Create Campaigns", "Grow your influence"]}
        className="text-xl sm:text-4xl lg:text-6xl font-bold mt-[20vw] ml-[5vw] uppercase"
      />

      <div className="my-25 w-full">
        <h1 className="text-gray-600 text-sm text-center">
          Whom we have worked with
        </h1>
        <Marquee items={companyLogos} />
      </div>
      <div className="pl-3 py-7">
        <FadeInText text="Create campaigns" />
        <FadeInText text="Collaborate with brands" />
        <FadeInText text="Grow your influence" />
      </div>
      <Marquee items={marqueeItems} className="my-20" direction="reverse" />
      <OurProjects />
      <Faq />
      <PricingPlan />
    </>
  );
};

export default Page;
