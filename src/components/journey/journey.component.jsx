import React from "react";
import StyledHeading from "../styled-heading/styled-heading.component";
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

import staticData from "../../shared/mockData.json";

import { JourneyContainer, JourneyGrid } from "./journey.styles";

const Journey = () => {
  const education = staticData?.education;
  const educationHistory = education.map((education, index) => {
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
    <JourneyContainer>
      <StyledHeading heading={"Journey"} />
      <JourneyGrid>{educationHistory}</JourneyGrid>
    </JourneyContainer>
  );
};

export default Journey;
