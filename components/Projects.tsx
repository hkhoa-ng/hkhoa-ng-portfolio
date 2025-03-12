"use client";
import { projectsData } from "@/data";

export function Projects() {
  return (
    <div
      id="projects"
      className="relative flex flex-col items-center justify-center px-8 mt-36"
    >
      <h1 className="heading text-white">
        A selection of my{" "}
        <span className="text-blue-400">personal projects</span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 mt-14 md:mt-24 mb-8 md:mb-12">
        {projectsData.map((item) => (
          <ProjectCard
            key={item.id}
            title={item.name}
            description={item.description}
            img={item.img}
            liveUrl={item.url}
            repoUrl={item.source}
          />
        ))}
      </div>
      <p className="text-white font-light md:text-xl">
        ...and more <span className="text-blue-400">work projects</span> that I
        can&apos;t include here!
      </p>
    </div>
  );
}

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Link from "next/link";

export function ProjectCard({
  title,
  description,
  img,
  liveUrl,
  repoUrl,
}: Readonly<{
  title: string;
  description?: string;
  img: string;
  liveUrl?: string;
  repoUrl: string;
}>) {
  return (
    <div className="drop-shadow-[0_5px_15px_rgba(0,255,255,0.1)] ">
      <CardContainer className="inter-var">
        <CardBody className="dark:bg-slate-950 backdrop-blur-3xl relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.3] dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] md:w-[25rem] h-auto rounded-xl p-6 border">
          <CardItem
            translateZ="20"
            className="text-xl font-bold text-neutral-600 dark:text-white"
          >
            {title}
          </CardItem>
          {description && (
            <CardItem
              as="p"
              translateZ="30"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              {description}
            </CardItem>
          )}
          <CardItem translateZ="50" className="w-full mt-4">
            <Image
              src={img}
              height="1000"
              width="1000"
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
          <div className="flex justify-between items-center mt-10">
            {liveUrl && (
              <CardItem
                translateZ={10}
                as={Link}
                href={repoUrl}
                target="__blank"
                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
              >
                Source →
              </CardItem>
            )}
            <div />
            <CardItem
              translateZ={10}
              as={Link}
              href={liveUrl}
              target="__blank"
              className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
            >
              Try it!
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
    </div>
  );
}
