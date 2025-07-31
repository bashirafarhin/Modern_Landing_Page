"use client";
import React from "react";
import Button from "../ui/Button";

type ProjectCardProps = {
  title: string;
  imgUrl: string;
  link: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ title, imgUrl, link }) => {
  return (
    <div className="group relative w-[30vw] aspect-square shrink-0 rounded-sm overflow-hidden transition-all duration-300 hover:p-2">
      {/* Image */}
      <img
        src={imgUrl}
        alt={title}
        width={300}
        height={300}
        className="w-full h-full object-cover rounded-md"
      />

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center">
        {/* Title Centered */}
        <div className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light mb-4 text-center">
          {title}
        </div>

        {/* Button at Bottom-Left */}
        <div className="absolute bottom-4 left-4">
          <Button onClick={() => {}} className="px-3">
            Visit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
