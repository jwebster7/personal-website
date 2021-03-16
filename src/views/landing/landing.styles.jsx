import styled from "styled-components";

import delayedFadeInAnimation from "../../animations/delayed-fade-in.animation";
import fadeInAnimation from "../../animations/fade-in.animation";

import Heading from "../../components/heading/heading.component";
import HorizontalLine from "../../components/horizontal-line/horizontal-line.component";
import SectionContainer from "../../components/section-container/section-container.component";

export const LandingContainer = styled(SectionContainer)`
  justify-content: center;
  background-color: #121113;
  padding: 5em;
  min-height: 100vh;
  width: 100%;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

export const LandingNameHeading = styled(Heading)`
  margin: 12.5px -0.15em 12.5px 0;
  font-family: "Open Sans", sans-serif;
  font-size: 5rem;
  font-weight: 400;
  ${fadeInAnimation}
`;

export const LandingHorizontalLine = styled(HorizontalLine)`
  width: 45em;
  ${fadeInAnimation}
`;

export const LandingTitleHeading = styled(Heading)`
  margin: 12.5px 0;
  font-family: "Open Sans", sans-serif;
  font-size: 4rem;
  font-weight: 400;
  ${delayedFadeInAnimation}
`;
