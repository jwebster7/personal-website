import React, { forwardRef, useState } from "react";

import StyledHeading from "../styled-heading/styled-heading.component";

import { ProjectsContainer, ProjectsGrid } from "./projects.styles";

import data from "../../shared/static.json";
import { useEffect } from "react";
import Project from "../project/project.component";

const Projects = forwardRef((props, ref) => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const projects = !!data?.projects ? data?.projects : [];
    setProjects(projects);
  }, []);

  return (
    <ProjectsContainer ref={ref}>
      <StyledHeading heading={"Projects"} />
      <ProjectsGrid>
        {projects.map((project, index) => {
          return (
            <Project
              key={index}
              id={project?.id}
              url={project?.url}
              repo={project?.repo}
              title={project?.title}
              summary={project?.summary}
            />
          );
        })}
      </ProjectsGrid>
    </ProjectsContainer>
  );
});

export default Projects;
