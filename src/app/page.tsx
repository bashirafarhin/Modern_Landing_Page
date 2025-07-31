import React from "react";
import Marquee from "@/components/ui/Marquee";
import { companyLogos, marqueeItems } from "../../data/marqueeData";
import HeroSection from "@/components/HeroSection";
import Faq from "@/components/Faq";
import OurProjects from "@/components/OurProjects/OurProjects";
import SlideInText from "@/components/Animation/SlideInText";
import Pricing from "@/components/Pricing/Pricing";
import Features from "@/components/Features/Features";
import Testimonials from "@/components/Testimonials/Testimonials";

const Page = () => {
  return (
    <>
      <HeroSection />

      <div className="mt-25 w-full">
        <h1 className="font-extralight text-gray-500 text-center">
          Whom we have worked with
        </h1>
        <Marquee items={companyLogos} />
      </div>

      <SlideInText
        lines={[
          "Simplify Your Workflow",
          "Supercharge Your Growth",
          "Delievery at lightspeed",
        ]}
        className="my-50 ml-[5vw] uppercase"
      />
      <Features />
      <Marquee items={marqueeItems} className="my-20" direction="reverse" />
      <OurProjects />
      <Faq />
      <Testimonials />
      <Pricing />
    </>
  );
};

export default Page;
