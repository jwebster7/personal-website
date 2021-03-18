import React, { memo } from "react";

import {
  LandingButton,
  LandingContainer,
  LandingNameHeading,
  LandingTitleHeading
} from "./landing.styles";

const Landing = () => {
  return (
    <LandingContainer>
      <LandingNameHeading>Joseph Webster</LandingNameHeading>
      <LandingTitleHeading duration="1200ms" delay="600ms">
        Software Developer
      </LandingTitleHeading>
      <LandingButton
        href="mailto:joseph.webster.dev@gmail.com"
        useAlt
        duration="1200ms"
        delay="1200ms"
      >
        Let's Connect
      </LandingButton>
    </LandingContainer>
  );
};

export default memo(Landing);
