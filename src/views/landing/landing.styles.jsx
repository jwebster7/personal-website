import styled from "styled-components";

import Heading from "../../components/heading/heading.component";
import SectionContainer from "../../components/section-container/section-container.component";

import {
  fadeInAnimation,
  rightSlideInAnimation,
  sharedHorizontalLineStyles,
  topSlideDownAnimation
} from "../../components/shared.styles";

export const LandingContainer = styled(SectionContainer)`
  justify-content: center;
  background-color: #121113;
  padding: 50px;
  min-height: 100vh;
  width: 100%;

  @media only screen and (max-width: 750px) {
    display: none;
  }
`;

export const LandingNameHeading = styled(Heading)`
  margin: 12.5px -0.15em 12.5px 0;
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

export const LandingTitleHeading = styled(Heading)`
  margin: 12.5px 0;
  font-family: "Open Sans", sans-serif;
  font-size: 4rem;
  font-weight: 400;
  ${fadeInAnimation}
`;
