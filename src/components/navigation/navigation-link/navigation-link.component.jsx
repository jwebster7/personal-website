import React from "react";

import StyledLink from "./navigation-link.styles";

const NavigationLink = ({ entry, active, href, changeMenuOn, children }) => {
  const scrollTo = (entry) => {
    entry.target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <StyledLink
      onClick={() => scrollTo(entry)}
      active={active}
      changeMenuOn={changeMenuOn}
      href={href}
    >
      {children}
    </StyledLink>
  );
};

export default NavigationLink;
