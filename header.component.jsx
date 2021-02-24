import React from "react";

import {
  BrandContainer,
  HeaderContainer,
  NavigationContainer,
  NavigationLinkContainer
} from "./header.styles";

const Header = () => {
  return (
    <HeaderContainer>
      <BrandContainer>Joseph Webster</BrandContainer>
      <NavigationContainer>
        <NavigationLinkContainer exact to="/about">
          About
        </NavigationLinkContainer>
        <NavigationLinkContainer exact to="/expertise">
          Expertise
        </NavigationLinkContainer>
        <NavigationLinkContainer exact to="/music">
          Music
        </NavigationLinkContainer>
      </NavigationContainer>
    </HeaderContainer>
  );
};

export default Header;
