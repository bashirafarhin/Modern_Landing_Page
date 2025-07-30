import React from "react";

type CardProps = {
  title: string;
  imgUrl: string;
  link: string;
};

const Card: React.FC<CardProps> = ({ title, imgUrl, link }) => {
  return (
    <div className="group relative w-[30vw] aspect-square shrink-0 rounded-sm transition-all duration-300 hover:p-2 overflow-hidden">
      {/* Image */}
      <img
        src={imgUrl}
        alt={title}
        width={300}
        height={300}
        className="w-full h-full object-cover rounded-md"
      />

      {/* Title on Hover */}
      <div className="p-4 absolute inset-0 hidden text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl golden items-center justify-center bg-black/20 font-semibold group-hover:flex transition-all duration-300">
        {title}
      </div>
    </div>
  );
};

export default Card;
