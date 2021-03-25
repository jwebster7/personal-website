import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

import NavBar from "../navbar/navbar.component";
import { NavBarLink } from "../navbar/navbar.styles";

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
          <NavBarLink
            onClick={() => scrollTo(profileEntry)}
            active={profileInView}
            changeMenuOn={changeMenuOn}
            href="#profile"
          >
            profile
          </NavBarLink>
          <NavBarLink
            onClick={() => scrollTo(experienceEntry)}
            active={experienceInView}
            changeMenuOn={changeMenuOn}
            href="#experience"
          >
            experience
          </NavBarLink>
          <NavBarLink
            onClick={() => scrollTo(projectsEntry)}
            active={projectsInView}
            changeMenuOn={changeMenuOn}
            href="#projects"
          >
            portfolio
          </NavBarLink>
          <NavBarLink
            onClick={() => scrollTo(educationEntry)}
            active={educationInView}
            changeMenuOn={changeMenuOn}
            href="#education"
          >
            education
          </NavBarLink>
          {/* <NavigationLink
            onClick={() => scrollTo(profileEntry)}
            active={profileInView}
            changeMenuOn={changeMenuOn}
            href="#profile"
          >
            contact
          </NavigationLink> */}
        </>
      }
      changeMenuOn={changeMenuOn}
      menuOpenButton={<FontAwesomeIcon icon={faBars} size="2x" />}
      menuCloseButton={<FontAwesomeIcon icon={faTimes} size="2x" />}
    />
  );
};

export default Navigation;
