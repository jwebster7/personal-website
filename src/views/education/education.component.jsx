import React, { forwardRef } from "react";

import Institute from "../../components/institute/institute.component";
import SectionContainer from "../../components/section-container/section-container.component";
import SectionHeading from "../../components/section-heading/section-heading.component";
import { EducationContent } from "./education.styles";

import data from "../../data/static.json";

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
    <SectionContainer ref={ref} backgroundColor="#121113">
      <SectionHeading heading={"Education"} />
      <EducationContent>{educationPath}</EducationContent>
    </SectionContainer>
  );
});

export default Education;
