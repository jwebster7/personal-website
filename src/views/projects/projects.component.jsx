import React, { forwardRef, useEffect, useState } from "react";

import Project from "../../components/project/project.component";
import StyledHeading from "../../components/styled-heading/styled-heading.component";

import { ProjectsContainer, ProjectsGrid } from "./projects.styles";

import data from "../../shared/static.json";

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
              technologies={project?.technologies}
            />
          );
        })}
      </ProjectsGrid>
    </ProjectsContainer>
  );
});

export default Projects;
