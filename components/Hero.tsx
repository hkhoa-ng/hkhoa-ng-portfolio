"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "./ui/aurora-background";
import { IconArrowBigRightLineFilled as IconSend } from "@tabler/icons-react";
import { BackgroundGradient } from "./ui/background-gradient";
import Link from "next/link";

export function Hero() {
  return (
    <div id="home">
      <AuroraBackground>
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
            Transforming ideas into reality.
          </div>
          <div className="font-light text-base md:text-2xl dark:text-neutral-200 py-4">
            Hi, I'm Khoa Nguyen, a Software Engineer based in Finland.
          </div>
          <BackgroundGradient className="rounded-md bg-white dark:bg-slate-950">
            <Link href="#projects">
              <button className="bg-transparent text-white px-20 py-2 flex items-center justify-center">
                View my work{" "}
                <span className="ml-2">
                  <IconSend className="h-4 w-4" />
                </span>
              </button>
            </Link>
          </BackgroundGradient>
        </motion.div>
      </AuroraBackground>
    </div>
  );
}
