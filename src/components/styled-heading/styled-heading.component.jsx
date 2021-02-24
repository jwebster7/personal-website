import React from "react";

import {
  StyledHeadingContainer,
  StyledHeadingLine,
  StyledHeadingText
} from "./styled-heading.styles";

const StyledHeading = ({ heading }) => {
  return (
    // <StyledHeadingContainer>
    //   <StyledHeadingLine />
    //   <StyledHeadingText>{heading}</StyledHeadingText>
    //   <StyledHeadingLine />
    // </StyledHeadingContainer>
    <StyledHeadingContainer>
      <StyledHeadingLine />
      <StyledHeadingText>{heading}</StyledHeadingText>
      <StyledHeadingLine />
    </StyledHeadingContainer>
  );
};

export default StyledHeading;
