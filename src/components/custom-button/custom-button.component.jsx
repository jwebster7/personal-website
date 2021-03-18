import React from "react";

import { StyledButton } from "../custom-button/custom-button.styles";

const CustomButton = ({ className, href, useAlt, children }) => {
  return (
    <StyledButton className={className} href={href} useAlt={useAlt}>
      {children}
    </StyledButton>
  );
};

export default CustomButton;
