// #121113 - background
// #59545E
// #291E33
// #4B385E - active
// #A198AB -
// #fff5ee - font
// darkslategray
// #3d808b
import styled, { keyframes } from "styled-components";

import {
  fadeInAnimation,
  rightSlideInAnimation,
  sharedHeadingStyles,
  sharedHorizontalLineStyles,
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

export const LandingTextContainer = styled.span`
  font-size: 1.5rem;
  font-family: "Roboto Mono", serif;
  color: #fff5ee;
  text-align: justify;
  line-height: 2.15rem;
`;

export const LandingNameHeading = styled.h1`
  ${sharedHeadingStyles}
  font-weight: bold;
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
  font-weight: bold;
  /* font-size: 3.5rem; use this if using brackets */
  font-size: 4rem;
  margin: 25px 0;
  ${fadeInAnimation}
`;
