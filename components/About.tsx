"use client";

import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import { FlipWords } from "./ui/flip-words";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import {
  techStack1,
  techStack2,
  techStack3,
  socialMedia,
  hobbies,
} from "@/data";
import Image from "next/image";
import Link from "next/link";
import { BackgroundGradientAnimation } from "./ui/background-gradient-animation";
import { MagicButton } from "./MagicButton";
import { IconMailForward } from "@tabler/icons-react";
import { getRandomInt } from "@/lib/utils";

export function About() {
  const words = ["Frontend", "Backend", "Fullstack", "CI/CD", "DevOps"];

  // Mapping to set random animation to the items
  const [styles, setStyles] = React.useState(
    hobbies.map(() => ({
      animationDelay: `0s`, // Default delay
      animationDirection: "alternate",
      animationDuration: "5s", // Default duration
    }))
  );
  React.useEffect(() => {
    const newStyles = hobbies.map((item, index) => {
      const randomInt = getRandomInt(7);
      const delay = -index * randomInt;
      const duration = Math.random() * 5 + 5;
      return {
        animationDelay: `${delay}s`,
        animationDirection: "alternate",
        animationDuration: `${duration}s`,
      };
    });
    setStyles(newStyles);
  }, []);

  // Content array, had to put it here since somehow this whole thing breaks if I put it outside
  const aboutMe = [
    {
      title: "My tech stack 📚",
      description: "I'm always learning and sharpening my skills.",
      header: (
        <div className="pb-2">
          <InfiniteMovingCards
            items={techStack1}
            direction="right"
            speed="fast"
            className="py-0 pb-2 md:pb-4"
            itemClassName="w-auto md:w-auto h-auto md:h-auto p-2 px-4 md:p-4 md:px-8 border-0 rounded-lg"
          />
          <InfiniteMovingCards
            items={techStack2}
            direction="right"
            speed="fast"
            className="py-0 pb-2 md:pb-4"
            itemClassName="w-auto md:w-auto h-auto md:h-auto p-2 px-4 md:p-4 md:px-8 rounded-lg border-0"
          />
          <InfiniteMovingCards
            items={techStack3}
            direction="right"
            speed="fast"
            className="py-0"
            itemClassName="w-auto md:w-auto h-auto md:h-auto p-2 px-4 md:p-4 md:px-8 rounded-lg border-0"
          />
        </div>
      ),
      className: "md:col-span-2",
    },
    {
      title: "",
      description: "",
      header: (
        <div className="flex flex-col justify-center items-center z-50 overflow-hidden rounded-xl relative h-[350px] md:h-full ">
          <Image
            src="/collab-animate.svg"
            alt="Vector artwork of people collaborating."
            width={300}
            height={300}
            className="absolute top-0 md:w-[250px] md:h-[250px] z-50"
          />
          <h1 className="text-xl font-bold text-white text-center px-4 group-hover/bento:translate-x-2 transition duration-100 absolute bottom-8 z-50">
            I value collaboration & communication 💡
          </h1>
          <div className="h-full w-full dark:bg-dot-white/[0.5] [mask-image:radial-gradient(ellipse_at_center,white,transparent)] bg-neutral-100 dark:bg-slate-950" />
        </div>
      ),
      className: "md:col-span-1 p-0",
    },
    {
      title: "",
      description: "",
      header: (
        <BackgroundGradientAnimation
          className="h-full"
          containerClassName="rounded-xl"
        >
          <div className="p-8 h-full flex flex-col justify-center items-center z-50 ">
            <h1 className="text-xl font-bold text-white text-center group-hover/bento:-translate-y-1 group-hover/bento:scale-110 transition duration-100">
              Let&apos;s start a project together?
            </h1>
            <div className="flex flex-col gap-4 mt-4">
              <MagicButton
                text="Email me"
                href="mailto:nhkhoa020400@gmail.com"
                icon={<IconMailForward className="h-5 w-5" />}
                className=""
              />
              <div className="flex flex-row w-full justify-between ">
                {socialMedia.map((item) => (
                  <Link
                    href={item.link}
                    className="text-white p-2 md:p-3 border border-white/[0.2] rounded-md backdrop-blur-md dark:bg-transparent z-50 hover:transform hover:scale-110 transition duration-200 hover:border-white dark:hover:drop-shadow-[0_10px_10px_rgba(255,255,255,0.5)] "
                    target="_blank"
                    rel="noopener noreferrer"
                    key={item.id}
                  >
                    {item.logo}
                  </Link>
                ))}
              </div>{" "}
            </div>
          </div>
        </BackgroundGradientAnimation>
      ),
      className: "md:col-span-1 p-0 ",
    },
    {
      title: "",
      description: "",
      header: (
        <div className="min-h-[200px] h-full w-full relative flex flex-wrap">
          <h1 className="text-xl text-left w-full font-sans font-bold text-neutral-600 dark:text-neutral-200 my-1 z-10 group-hover/bento:translate-x-2 transition duration-100">
            Beyond the code ✨
          </h1>
          <div className="flex flex-wrap gap-2 md:gap-4 justify-center items-center h-fit">
            {hobbies.map((item, index) => (
              <div
                key={item}
                className="inline-flex animate-float z-10"
                style={styles[index]}
              >
                <BackgroundGradientAnimation containerClassName="rounded-full">
                  <h1 className="text-white px-6 py-2 whitespace-nowrap text-sm md:text-md lg:text-lg">
                    {item}
                  </h1>
                </BackgroundGradientAnimation>
              </div>
            ))}
          </div>
          <div className="h-full w-full dark:bg-dot-white/[0.5] [mask-image:radial-gradient(ellipse_at_center,white,transparent)] bg-neutral-100 dark:bg-slate-950 absolute z-0" />
        </div>
      ),
      className: "md:col-span-2",
    },
  ];

  // Rendering
  return (
    <section
      id="about"
      className="relative flex flex-col items-center justify-center px-12 mt-24"
    >
      <h1 className="text-white heading pb-16 md:pb-24">
        A <span className="text-blue-400">Software Engineer</span> experienced
        in
        <div className="inline-block min-w-[120px] max-w-full align-baseline">
          <FlipWords words={words} className="dark:text-blue-400" />
        </div>
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
