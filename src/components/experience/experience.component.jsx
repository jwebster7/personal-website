import React, { forwardRef } from "react";

import Position from "../position/position.component";
import StyledHeading from "../styled-heading/styled-heading.component";
import { ExperienceContainer, ExperienceGrid } from "./experience.styles";

import data from "../../shared/static.json";

const Experience = forwardRef((props, ref) => {
  const jobData = data?.experience?.jobs;
  const jobPath = jobData.map((position, index) => {
    return (
      <Position
        key={index}
        organization={position?.organization}
        title={position?.title}
        startDate={position?.startDate}
        endDate={position?.endDate}
        summary={position?.summary}
        location={position?.location}
        technologies={position?.technologies}
        exitStatement={position?.exitStatement}
      />
    );
  });

  return (
    <ExperienceContainer ref={ref}>
      <StyledHeading heading={"Experience"} />
      <ExperienceGrid>{jobPath}</ExperienceGrid>
    </ExperienceContainer>
  );
});

export default Experience;
