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

const Journey = forwardRef((props, ref) => {
  const educationData = staticData?.education;
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

  return (
    <JourneyContainer ref={ref}>
      <StyledHeading heading={"Journey"} />
      <JourneyGrid>{educationPath}</JourneyGrid>
    </JourneyContainer>
  );
});

export default Journey;
