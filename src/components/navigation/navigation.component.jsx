import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

import NavBar from "../navbar/navbar.component";
import NavigationLink from "../navigation-link/navigation-link.component";

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
            href="#profile"
          >
            profile
          </NavigationLink>
          <NavigationLink
            onClick={() => scrollTo(experienceEntry)}
            active={experienceInView}
            changeMenuOn={changeMenuOn}
            href="#experience"
          >
            experience
          </NavigationLink>
          <NavigationLink
            onClick={() => scrollTo(projectsEntry)}
            active={projectsInView}
            changeMenuOn={changeMenuOn}
            href="#projects"
          >
            portfolio
          </NavigationLink>
          <NavigationLink
            onClick={() => scrollTo(educationEntry)}
            active={educationInView}
            changeMenuOn={changeMenuOn}
            href="#education"
          >
            education
          </NavigationLink>
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
