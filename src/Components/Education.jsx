import React from "react";
import Section from "./Section";
import Project from "./Project";

import { projectList } from "../data";

const Education = () => {
  return (
    <Section
      title="Education"
      subtitle="I'm constantly learning. Here are a few highlights from my educational journey."
    >
      {projectList.map((project, index) => (
        <Project key={index} project={project} />
      ))}
    </Section>
  );
};

export default Education;
