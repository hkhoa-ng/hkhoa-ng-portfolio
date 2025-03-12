"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "./ui/aurora-background";
import { IconArrowBigRightLineFilled as IconSend } from "@tabler/icons-react";
import { Highlight } from "./ui/hero-highlight";
import { MagicButton } from "./MagicButton";

export function Hero() {
  return (
    <div id="home">
      <AuroraBackground className="bg-transparent">
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative flex flex-col gap-4 items-center justify-center px-8"
        >
          <div className="text-3xl md:text-5xl lg:text-7xl font-bold dark:text-white text-center">
            From ideas to <br />
            <div className="pt-2 md:pt-4" />
            <Highlight className="text-black dark:text-white">
              amazing user experience
            </Highlight>
          </div>
          <div className="text-center font-light text-base md:text-2xl dark:text-neutral-200 pb-12 pt-0 md:pt-4 md:pb-16">
            I&apos;m Khoa Nguyen, a Software Engineer based in Finland, <br />
            specialized in creating enterprise-level cloud applications.
          </div>
          <MagicButton
            className="px-20 py-2 md:px-40 md:py-4 md:text-xl md:font-bold"
            text="View my work"
            href="#projects"
            icon={<IconSend className="h-4 w-4" />}
          />
        </motion.div>
      </AuroraBackground>
    </div>
  );
}
