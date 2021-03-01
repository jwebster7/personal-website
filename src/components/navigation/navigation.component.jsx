import React from "react";

import {
  NavigationContainer,
  NavigationLinkContainer
} from "./navigation.styles";

// TODO: add in a brand icon to the left of the nav container

const Navigation = ({
  scrollTo,
  aboutEntry,
  experienceEntry,
  educationEntry,
  aboutInView,
  experienceInView,
  educationInView
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
        onClick={() => scrollTo(experienceEntry)}
        inView={experienceInView}
      >
        Experience
      </NavigationLinkContainer>
      <NavigationLinkContainer
        onClick={() => scrollTo(educationEntry)}
        inView={educationInView}
      >
        Education
      </NavigationLinkContainer>
      <NavigationLinkContainer>
        Skills
      </NavigationLinkContainer>
      <NavigationLinkContainer exact to="/contact">
        Contact
      </NavigationLinkContainer>
    </NavigationContainer>
  );
};

export default Navigation;
