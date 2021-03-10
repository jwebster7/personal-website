import React, { forwardRef } from "react";

import ContentContainer from "../../components/content-container/content-container.component";
import Position from "../../components/position/position.component";
import SectionContainer from "../../components/section-container/section-container.component";
import SectionHeading from "../../components/section-heading/section-heading.component";

import data from "../../data/static.json";

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
    <SectionContainer ref={ref} backgroundColor="#121113">
      <SectionHeading heading={"Experience"} />
      <ContentContainer>{jobPath}</ContentContainer>
    </SectionContainer>
  );
});

export default Experience;
