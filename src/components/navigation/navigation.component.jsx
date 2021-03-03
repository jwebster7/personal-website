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
  projectsEntry,
  aboutInView,
  experienceInView,
  educationInView,
  projectsInView,
  skillsInView
}) => {
  const sectionInView =
    aboutInView ||
    educationInView ||
    experienceInView ||
    projectsInView ||
    skillsInView;
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
        onClick={() => scrollTo(projectsEntry)}
        inView={projectsInView}
      >
        Projects
      </NavigationLinkContainer>
      <NavigationLinkContainer
        onClick={() => scrollTo(educationEntry)}
        inView={educationInView}
      >
        Education
      </NavigationLinkContainer>
    </NavigationContainer>
  );
};

export default Navigation;
