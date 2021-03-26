import React, { forwardRef, memo, useEffect, useMemo, useState } from "react";

import Project from "../../components/project/project.component";
import SectionContainer from "../../components/section-container/section-container.component";
import SectionHeading from "../../components/section-heading/section-heading.component";

import { PortfolioContent } from "./portfolio.styles";

import data from "../../data/static.json";

const Portfolio = forwardRef((props, ref) => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const projects = !!data?.projects ? data?.projects : [];
    setProjects(projects);
  }, [setProjects]);

  const projectComponents = useMemo(() => {
    return !!projects
      ? projects.map((project, index) => {
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
        })
      : null;
  }, [projects]);

  return (
    <SectionContainer ref={ref} backgroundColor="secondary">
      <SectionHeading heading="Portfolio" />
      <PortfolioContent>{projectComponents}</PortfolioContent>
    </SectionContainer>
  );
});

export default memo(Portfolio);
