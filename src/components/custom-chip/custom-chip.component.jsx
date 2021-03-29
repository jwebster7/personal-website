import React from "react";

import { ChipLink, StyledChip } from "./custom-chip.styles";

const googleSearchPrefix = "https://www.google.com/search?q=";

const CustomChip = ({ useAlt, children }) => {
  const searchLink = `${googleSearchPrefix}${children.toString()}`;
  return (
    <ChipLink href={searchLink} target="_blank" rel="noopener noreferrer">
      <StyledChip useAlt={useAlt}>{children}</StyledChip>
    </ChipLink>
  );
};

export default CustomChip;
