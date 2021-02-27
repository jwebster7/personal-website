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

import Education from "../education/education.component";
import StyledHeading from "../styled-heading/styled-heading.component";

import staticData from "../../shared/mockData.json";

import { JourneyContainer, JourneyGrid } from "./journey.styles";
import Position from "../position/position.component";

const Journey = forwardRef((props, ref) => {
  const educationData = staticData?.education;
  const jobData = staticData?.experience?.jobs;
  const educationPath = educationData.map((education, index) => {
    return (
      <Education
        key={index}
        institution={education?.institution}
        completionDate={education?.completionDate}
        degree={education?.degree}
        description={education?.description}
        major={education?.major}
      />
    );
  });

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
        exitStatement={position?.exitStatement}
      />
    );
  });

  return (
    <JourneyContainer ref={ref}>
      <StyledHeading heading={"Journey"} />
      <JourneyGrid>{jobPath}</JourneyGrid>
      {/* <JourneyGrid>{educationPath}</JourneyGrid> */}
    </JourneyContainer>
  );
});

export default Journey;
