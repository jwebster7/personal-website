import React from "react";

import {
  NavigationContainer,
  NavigationLinkContainer
} from "./navigation.styles";

/**
 * Be visible when users reach a new section on the page.
 * Auto-hide when scrolling down.
 * Auto-show when scrolling up.
 */

const Navigation = () => {
  return (
    <NavigationContainer>
      <NavigationLinkContainer exact to="/profile">
        Profile
      </NavigationLinkContainer>
      <NavigationLinkContainer exact to="/journey">
        Journey
      </NavigationLinkContainer>
      <NavigationLinkContainer exact to="/skills">
        Skills
      </NavigationLinkContainer>
      <NavigationLinkContainer exact to="/contact">
        Contact
      </NavigationLinkContainer>
    </NavigationContainer>
  );
};

export default Navigation;
