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

const Navigation = ({
  scrollTo,
  aboutEntry,
  journeyEntry,
  aboutInView,
  journeyInView
}) => {

  return (
    <NavigationContainer>
      <NavigationLinkContainer
        onClick={() => scrollTo(aboutEntry)}
        inView={aboutInView}
      >
        Profile
      </NavigationLinkContainer>
      <NavigationLinkContainer
        onClick={() => scrollTo(journeyEntry)}
        inView={journeyInView}
      >
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
