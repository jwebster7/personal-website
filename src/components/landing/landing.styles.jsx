import styled from "styled-components";

import {
  fadeInAnimation,
  rightSlideInAnimation,
  sharedHeadingStyles,
  sharedHorizontalLineStyles,
  sharedSectionContainerStyles,
  topSlideDownAnimation
} from "../shared.styles";

export const LandingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #121113;
  padding: 50px;
  min-height: 100vh;
  width: 100%;
`;

export const LandingNameHeading = styled.h1`
  ${sharedHeadingStyles}
  font-family: "Open Sans", sans-serif;
  font-weight: 400;
  margin: 25px 0;
  font-size: 5rem;
  ${topSlideDownAnimation}
`;

export const LandingHorizontalLine = styled.div`
  ${sharedHorizontalLineStyles}
  width: 675px;
  ${rightSlideInAnimation}
`;

export const LandingTitleHeading = styled.h1`
  ${sharedHeadingStyles}
  font-family: "Open Sans", sans-serif;
  font-weight: 400;
  /* font-size: 3.5rem; use this if using brackets */
  font-size: 4rem;
  margin: 25px 0;
  ${fadeInAnimation}
`;
