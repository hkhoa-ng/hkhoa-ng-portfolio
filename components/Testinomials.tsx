"use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { testimonials } from "@/data";

export function Testimonials() {
  return (
    <div
      id="testimonials"
      className="relative flex flex-col items-center justify-center px-8 mt-36"
    >
      <h1 className="text-white heading mb-14 md:mb-24">
        <span className="text-blue-400">Kind words</span> from people I've
        worked with...
      </h1>
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}
