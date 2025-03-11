import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { workExperience } from "@/data";

export function Experience() {
  return (
    <div id="experience" className="w-full px-8 mt-36">
      <h1 className="heading text-white">
        My professional <span className="text-blue-400">experience</span>
      </h1>
      <Timeline data={workExperience} />
    </div>
  );
}
