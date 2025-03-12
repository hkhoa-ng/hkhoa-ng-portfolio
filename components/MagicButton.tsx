"use client";

import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function MagicButton({
  icon,
  text,
  href,
  className,
}: Readonly<{
  icon?: React.ReactNode;
  text: string;
  href?: string;
  className?: string;
}>) {
  return (
    <BackgroundGradient className={cn("rounded-md bg-white dark:bg-slate-950")}>
      <Link href={href ?? "#"}>
        <button
          className={cn(
            "w-full text-white px-10 py-2 flex items-center justify-center",
            className
          )}
        >
          {text}
          <span className="ml-2">{icon}</span>
        </button>
      </Link>
    </BackgroundGradient>
  );
}
