import React, { forwardRef } from "react";

// import {
//   faChalkboardTeacher,
//   faCodeBranch,
//   faLaptopCode,
//   faLaptopHouse,
//   faSave,
//   faSchool,
//   faUniversity
// } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
      {/* <ExperienceContent> */}
        <ExperienceGrid>{jobPath}</ExperienceGrid>
      {/* </ExperienceContent> */}
    </ExperienceContainer>
  );
});

export default Experience;
