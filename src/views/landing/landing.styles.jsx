import styled from "styled-components";

import {
  fadeInAnimation,
  rightSlideInAnimation,
  sharedHeadingStyles,
  sharedHorizontalLineStyles,
  topSlideDownAnimation
} from "../../components/shared.styles";

export const LandingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #121113;
  padding: 50px;
  min-height: 100vh;
  width: 100%;

  @media only screen and (max-width: 750px) {
    display: none;
  }
`;

export const LandingNameHeading = styled.h1`
  ${sharedHeadingStyles}
  margin: 12.5px -.15em 12.5px 0;
  font-family: "Open Sans", sans-serif;
  font-size: 5rem;
  font-weight: 400;
  ${topSlideDownAnimation}
`;

export const LandingHorizontalLine = styled.div`
  ${sharedHorizontalLineStyles}
  width: 45em;
  ${rightSlideInAnimation}
`;

export const LandingTitleHeading = styled.h1`
  ${sharedHeadingStyles}
  margin: 12.5px 0;
  font-family: "Open Sans", sans-serif;
  font-size: 4rem;
  font-weight: 400;
  ${fadeInAnimation}
`;
