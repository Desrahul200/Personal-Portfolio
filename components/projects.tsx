import React from "react";
import { projectsData } from "@/lib/data";
import SectionHeading from "./section-heading";
import Project from "./project";
export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-28 ">
      <SectionHeading>Projects</SectionHeading>
      <div className="mt-5">
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
