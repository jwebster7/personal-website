import React, { memo, useEffect, useState } from "react";

import {
  LandingButton,
  LandingContainer,
  LandingNameHeading,
  LandingTitleHeading
} from "./landing.styles";

import data from "../../data/static.json";

const Landing = () => {
  const [mailTo, setMailTo] = useState("");

  useEffect(() => {
    const mailTo = !!data.contact.mailto ? data.contact.mailto : "";
    setMailTo(mailTo);
  }, [setMailTo]);

  return (
    <LandingContainer backgroundColor="primary">
      <LandingNameHeading>Joseph Webster</LandingNameHeading>
      <LandingTitleHeading duration="1200ms" delay="600ms">
        Software Developer
      </LandingTitleHeading>
      <LandingButton href={mailTo} duration="1200ms" delay="1200ms">
        Let's Connect
      </LandingButton>
    </LandingContainer>
  );
};

export default memo(Landing);
