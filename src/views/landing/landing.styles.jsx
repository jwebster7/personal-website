import styled from "styled-components";

import controlledFadeInAnimation from "../../animations/controlled-fade-in.animation";
import fadeInAnimation from "../../animations/fade-in.animation";

import CustomButton from "../../components/custom-button/custom-button.component";
import Heading from "../../components/heading/heading.component";
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
  display: block;
  margin: 0 -0.15em 0.25em 0;
  font-family: "Open Sans", sans-serif;
  font-size: 5rem;
  font-weight: 400;
  ${fadeInAnimation}
`;

export const LandingTitleHeading = styled(Heading)`
  display: block;
  margin: 0 0 0.25em 0;
  font-family: "Open Sans", sans-serif;
  font-size: 4rem;
  font-weight: 400;
  ${controlledFadeInAnimation}
`;

export const LandingButton = styled(CustomButton)`
  margin: 3em 1em 0 0;
  ${controlledFadeInAnimation}
`;
