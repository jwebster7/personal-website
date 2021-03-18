import styled from "styled-components";

import controlledFadeInAnimation from "../../animations/controlled-fade-in.animation";
import fadeInAnimation from "../../animations/fade-in.animation";

import CustomButton from "../../components/custom-button/custom-button.component";
import Heading from "../../components/heading/heading.component";
import SectionContainer from "../../components/section-container/section-container.component";

export const LandingContainer = styled(SectionContainer)`
  align-items: center;
  justify-content: center;
  background-color: #121113;
  min-height: 100vh;
  width: 100%;
`;

export const LandingNameHeading = styled(Heading)`
  margin: 0 -0.15em 0.25em 0;
  font-family: "Open Sans", sans-serif;
  font-size: 5rem;
  font-weight: 400;
  ${fadeInAnimation}

  @media only screen and (max-width: 768px) {
    font-size: 3rem;
  }

  @media only screen and (max-width: 512px) {
    font-size: 2rem;
  }
`;

export const LandingTitleHeading = styled(Heading)`
  margin: 0 0 0.25em 0;
  font-family: "Open Sans", sans-serif;
  font-size: 4rem;
  font-weight: 400;
  ${controlledFadeInAnimation}

  @media only screen and (max-width: 768px) {
    font-size: 2rem;
  }

  @media only screen and (max-width: 512px) {
    font-size: 1.5rem;
  }
`;

export const LandingButton = styled(CustomButton)`
  margin: 3em 1em 0 0;
  ${controlledFadeInAnimation}
`;
