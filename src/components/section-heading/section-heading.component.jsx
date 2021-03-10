import React from "react";

import HorizontalLine from "../../components/horizontal-line/horizontal-line.component";

import {
  SectionHeadingContainer,
  SectionHeadingText
} from "./section-heading.styles";

const SectionHeading = ({ heading }) => {
  return (
    <SectionHeadingContainer>
      <HorizontalLine />
      <SectionHeadingText>{heading}</SectionHeadingText>
      <HorizontalLine />
    </SectionHeadingContainer>
  );
};

export default SectionHeading;
