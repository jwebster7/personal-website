import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

// import { useAppData } from "../../context/app.provider";

import NavBar from "../navbar/navbar.component";
import NavigationLink from "../navigation-link/navigation-link.component";

import { NavigationLinkContainer } from "./navigation.styles";

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
  const sectionInView =
    aboutInView || educationInView || experienceInView || projectsInView;

  const changeMenuOn = "750px";

  return (
    <NavBar
      menu={
        <NavigationLinkContainer
          sectionInView={sectionInView}
          changeMenuOn={changeMenuOn}
        >
          <NavigationLink
            onClick={() => scrollTo(aboutEntry)}
            active={aboutInView}
            changeMenuOn={changeMenuOn}
          >
            Profile
          </NavigationLink>
          <NavigationLink
            onClick={() => scrollTo(experienceEntry)}
            active={experienceInView}
            changeMenuOn={changeMenuOn}
          >
            Experience
          </NavigationLink>
          <NavigationLink
            onClick={() => scrollTo(projectsEntry)}
            active={projectsInView}
            changeMenuOn={changeMenuOn}
          >
            Projects
          </NavigationLink>
          <NavigationLink
            onClick={() => scrollTo(educationEntry)}
            active={educationInView}
            changeMenuOn={changeMenuOn}
          >
            Education
          </NavigationLink>
        </NavigationLinkContainer>
      }
      changeMenuOn={changeMenuOn}
      menuOpenButton={<FontAwesomeIcon icon={faBars} size="2x" />}
      menuCloseButton={<FontAwesomeIcon icon={faTimes} size="2x" />}
    />
  );
};

export default Navigation;
