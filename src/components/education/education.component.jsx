import React, { forwardRef } from "react";

import Institute from "../institute/institute.component";
import StyledHeading from "../styled-heading/styled-heading.component";
import { EducationContainer, EducationGrid } from "./education.styles";

import data from "../../shared/static.json";

const Education = forwardRef((props, ref) => {
  const educationData = data?.education;
  const educationPath = educationData.map((education, index) => {
    return (
      <Institute
        key={index}
        institution={education?.institution}
        // completionDate={education?.completionDate}
        major={education?.major}
        degree={education?.degree}
        startDate={education?.startDate}
        endDate={education?.endDate}
        location={education?.location}
        summary={education?.summary}
      />
    );
  });
  return (
    <EducationContainer ref={ref}>
      <StyledHeading heading={"Education"} />
      <EducationGrid>{educationPath}</EducationGrid>
    </EducationContainer>
  );
});

export default Education;
