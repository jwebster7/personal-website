import React from "react";

import {
  EducationBlock,
  EducationContainer,
  EducationDate,
  EducationText,
  EducationHeading,
} from "../education/education.styles";

const Education = ({
  institution,
  degree,
  major,
  completionDate,
  description
}) => {
  return (
    <EducationContainer>
      <EducationBlock>
        <EducationHeading>{institution}</EducationHeading>
        <EducationDate>{completionDate}</EducationDate>
      </EducationBlock>

      <EducationBlock>
        <EducationHeading>{`${degree} in ${major}`}</EducationHeading>

        <EducationText>{description}</EducationText>
      </EducationBlock>
    </EducationContainer>
  );
};

export default Education;
