import React from "react";

import {
  NavigationContainer,
  NavigationLinkContainer
} from "./navigation.styles";

// TODO: add in a brand icon to the left of the nav container

const Navigation = ({
  scrollTo,
  aboutEntry,
  contactEntry,
  experienceEntry,
  educationEntry,
  skillsEntry,
  aboutInView,
  contactInView,
  experienceInView,
  educationInView,
  skillsInView
}) => {
  const sectionInView = aboutInView || educationInView || experienceInView || skillsInView;
  return (
    <NavigationContainer sectionInView={sectionInView}>
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
      <NavigationLinkContainer
        onClick={() => scrollTo(skillsEntry)}
        inView={skillsInView}
      >
        Skills
      </NavigationLinkContainer>
    </NavigationContainer>
  );
};

export default Navigation;
