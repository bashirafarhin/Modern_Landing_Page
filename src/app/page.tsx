import React from "react";
import Marquee from "@/components/Marquee";
import { companyLogos, marqueeItems } from "../../data/marqueeData";
import HeroSection from "@/components/HeroSection";
import Faq from "@/components/Faq";
import FadeInText from "@/components/Animation/FadeInText";
import OurProjects from "@/components/OurProjects";
import PricingPlan from "@/components/PricingPlan";

const Page = () => {
  return (
    <>
      <HeroSection />
      <div className="my-25">
        <h1 className="text-6xl text-center">Our CLients</h1>
        <Marquee items={companyLogos} />
      </div>
      <div className="pl-3 py-7">
        <FadeInText text="Create campaigns" />
        <FadeInText text="Collaborate with brands" />
        <FadeInText text="Grow your influence" />
      </div>
      <Marquee items={marqueeItems} className="my-20" dir="right" />
      <OurProjects />
      <Faq />
      <PricingPlan />
    </>
  );
};

export default Page;
