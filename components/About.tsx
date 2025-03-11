"use client";

import React from "react";
import { aboutMe } from "@/data";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import { FlipWords } from "./ui/flip-words";

export function About() {
  const words = ["Frontend", "Backend", "Fullstack", "CI/CD", "DevOps"];
  return (
    <section
      id="about"
      className="relative flex flex-col items-center justify-center px-12 mt-24"
    >
      <h1 className="text-white heading pb-16 md:pb-24">
        A <span className="text-blue-400">Software Engineer</span> experienced
        in
        <FlipWords words={words} className="dark:text-blue-400" />
      </h1>
      <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
        {aboutMe.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            className={item.className}
          />
        ))}
      </BentoGrid>
    </section>
  );
}
