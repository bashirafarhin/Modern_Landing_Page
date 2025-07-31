"use client";
import React, { useEffect, useState } from "react";

interface StatBoxProps {
  label: string;
  target: number;
}

const StatBox: React.FC<StatBoxProps> = ({ label, target }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = target;
    const duration = 15000;
    const increment = end / (duration / 16);
    const step = () => {
      start += increment;
      if (start < end) {
        setCount(Math.floor(start));
        requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };
    requestAnimationFrame(step);
  }, [target]);

  return (
    <div className="flex flex-col items-center p-6 rounded-lg bg-zinc-800">
      <h3 className="text-3xl font-bold text-indigo-600">{count}+</h3>
      <p className="mt-2 font-extralight">{label}</p>
    </div>
  );
};

const Stats = () => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 py-12 mt-10">
      <StatBox label="Clients Worldwide" target={120} />
      <StatBox label="Projects Delivered" target={250} />
      <StatBox label="Support Tickets Closed" target={980} />
    </section>
  );
};

export default Stats;
