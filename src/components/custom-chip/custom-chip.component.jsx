import React from "react";

import { StyledChip } from "./custom-chip.styles";

const CustomChip = ({ useAlt, children }) => {
  return <StyledChip useAlt={useAlt}>{children}</StyledChip>;
};

export default CustomChip;
