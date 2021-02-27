import React from "react";

import {
  NavigationContainer,
  NavigationLinkContainer
} from "./navigation.styles";

// TODO: add in a brand icon to the left of the nav container

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
