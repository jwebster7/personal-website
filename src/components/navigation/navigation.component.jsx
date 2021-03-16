import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

import NavBar from "../navbar/navbar.component";
import NavigationLink from "../navigation-link/navigation-link.component";

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
  projectsInView
}) => {
  const changeMenuOn = "768px";

  return (
    <NavBar
      menu={
        <>
          <NavigationLink
            onClick={() => scrollTo(aboutEntry)}
            active={aboutInView}
            changeMenuOn={changeMenuOn}
            to="profile"
          >
            Profile
          </NavigationLink>
          <NavigationLink
            onClick={() => scrollTo(experienceEntry)}
            active={experienceInView}
            changeMenuOn={changeMenuOn}
            to="experience"
          >
            Experience
          </NavigationLink>
          <NavigationLink
            onClick={() => scrollTo(projectsEntry)}
            active={projectsInView}
            changeMenuOn={changeMenuOn}
            to="projects"
          >
            Projects
          </NavigationLink>
          <NavigationLink
            onClick={() => scrollTo(educationEntry)}
            active={educationInView}
            changeMenuOn={changeMenuOn}
            to="education"
          >
            Education
          </NavigationLink>
        </>
      }
      changeMenuOn={changeMenuOn}
      menuOpenButton={<FontAwesomeIcon icon={faBars} size="2x" />}
      menuCloseButton={<FontAwesomeIcon icon={faTimes} size="2x" />}
    />
  );
};

export default Navigation;
