import React, { forwardRef } from "react";

import Institute from "../../components/institute/institute.component";
import StyledHeading from "../../components/styled-heading/styled-heading.component";
import { EducationContainer, EducationContent } from "./education.styles";

import data from "../../shared/static.json";

const Education = forwardRef((props, ref) => {
  const educationData = data?.education;
  const educationPath = educationData.map((education, index) => {
    return (
      <Institute
        key={index}
        institution={education?.institution}
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
      <EducationContent>{educationPath}</EducationContent>
    </EducationContainer>
  );
});

export default Education;
