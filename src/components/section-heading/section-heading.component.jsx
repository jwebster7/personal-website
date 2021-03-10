import React from "react";

import {
  SectionHeadingContainer,
  SectionHeadingLine,
  SectionHeadingText
} from "./section-heading.styles";

const SectionHeading = ({ heading }) => {
  return (
    <SectionHeadingContainer>
      <SectionHeadingLine />
      <SectionHeadingText>{heading}</SectionHeadingText>
      <SectionHeadingLine />
    </SectionHeadingContainer>
  );
};

export default SectionHeading;
