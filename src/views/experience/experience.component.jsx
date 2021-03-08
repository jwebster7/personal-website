import React, { forwardRef } from "react";

import Position from "../../components/position/position.component";
import StyledHeading from "../../components/styled-heading/styled-heading.component";
import { ExperienceContainer, ExperienceContent } from "./experience.styles";

import data from "../../shared/static.json";

const Experience = forwardRef((props, ref) => {
  const jobData = data?.experience?.jobs;
  const jobPath = jobData.map((position, index) => {
    const {
      organization,
      title,
      startDate,
      endDate,
      responsibilities,
      summary,
      location,
      technologies,
      exitStatement
    } = position;
    return (
      <Position
        key={index}
        organization={organization}
        title={title}
        startDate={startDate}
        endDate={endDate}
        responsibilities={responsibilities}
        summary={summary}
        location={location}
        technologies={technologies}
        exitStatement={exitStatement}
      />
    );
  });

  return (
    <ExperienceContainer ref={ref}>
      <StyledHeading heading={"Experience"} />
      <ExperienceContent>{jobPath}</ExperienceContent>
    </ExperienceContainer>
  );
});

export default Experience;
