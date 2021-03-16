import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

import NavBar from "../navbar/navbar.component";
import NavigationLink from "../navigation-link/navigation-link.component";

// TODO: add in a brand icon to the left of the nav container
const Navigation = ({
  scrollTo,
  profileEntry,
  experienceEntry,
  educationEntry,
  projectsEntry,
  profileInView,
  experienceInView,
  educationInView,
  projectsInView
}) => {
  const changeMenuOn = "1024px";

  return (
    <NavBar
      menu={
        <>
          <NavigationLink
            onClick={() => scrollTo(profileEntry)}
            active={profileInView}
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
