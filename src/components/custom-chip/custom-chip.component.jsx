import React from "react";

import { StyledChip } from "./custom-chip.styles";

const CustomChip = ({ useAlt, children }) => {
  console.log(useAlt);
  return <StyledChip useAlt={useAlt}>{children}</StyledChip>;
};

export default CustomChip;
