import React from "react";
import {
  LandingContainer,
  LandingHorizontalLine,
  LandingNameHeading,
  LandingTitleHeading
} from "./landing.styles";

const Landing = () => {
  return (
    <LandingContainer>
      <LandingNameHeading>Joseph Webster</LandingNameHeading>
      <LandingHorizontalLine />
      {/* <LandingTitleHeading>{"{ Software Developer }"} </LandingTitleHeading> */}
      <LandingTitleHeading>Software Developer</LandingTitleHeading>
    </LandingContainer>
  );
};

export default Landing;
