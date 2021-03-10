import React from "react";

import StyledLink from "./custom-link.styles.jsx";

const CustomLink = ({ url, label, children }) => {
  return (
    <StyledLink
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
    >
      {children}
    </StyledLink>
  );
};

export default CustomLink;
