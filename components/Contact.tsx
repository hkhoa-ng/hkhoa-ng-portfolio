"use client";

import React from "react";
import { IconLocationFilled } from "@tabler/icons-react";
import Link from "next/link";
import { socialMedia } from "@/data";
import { MagicButton } from "./MagicButton";

export function Contact() {
  return (
    <div id="contact" className="mt-12">
      <div className="px-12 rounded-md flex flex-col antialiased bg-white dark:bg-slate-950 items-center justify-center relative overflow-hidden dark:bg-dot-white/[0.3] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]">
        <h1 className="text-white heading mt-36 z-10">
          Ready to create something{" "}
          <span className="text-blue-400">extraordinary</span> together?
        </h1>
        <p className="text-white text-center mt-4 max-w-lg mx-auto mb-16">
          Hire me today and let&apos;s collaborate to turn your vision into
          reality!
        </p>
        <MagicButton
          text="Let's get in touch"
          href="mailto:nhkhoa020400@gmail.com"
          icon={<IconLocationFilled className="h-4 w-4" />}
        />
        <div className="mt-12 mb-16 px-4 lg:px-40 flex flex-row items-center justify-between text-white w-full ">
          <div>
            <p className="font-normal text-sm md:text-md md:font-normal">
              © 2025 Khoa Nguyen
            </p>
            <a
              className="font-extralight text-sm md:text-md md:font-extralight underline"
              href="https://storyset.com/work"
            >
              Work illustrations by Storyset
            </a>
          </div>
          <div className="flex flex-row gap-2">
            {socialMedia.map((item) => (
              <Link
                href={item.link}
                className="text-white p-2 md:p-3 border border-white/[0.2] rounded-md backdrop-blur-md dark:bg-transparent"
                target="_blank"
                rel="noopener noreferrer"
                key={item.id}
              >
                {item.logo}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
