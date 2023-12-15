import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

import {
  LargeMenu,
  MenuIcon,
  MenuIconContainer,
  NavigationContainer,
  SmallMenu,
  SmallMenuContainer
} from "./navigation.styles";
import NavigationLink from "./navigation-link/navigation-link.component";

const changeMenuOn = "1024px";

const Navigation = ({ profile, experience, /*portfolio,*/ education }) => {
  const [showMenu, setShowMenu] = useState(false);
  const handleClick = () => {
    setShowMenu(!showMenu);
  };

  const menu = [
    <NavigationLink
      entry={profile?.entry}
      active={profile?.inView}
      changeMenuOn={changeMenuOn}
      href="#profile"
      key="profile"
    >
      profile
    </NavigationLink>,
    <NavigationLink
      entry={experience?.entry}
      active={experience?.inView}
      changeMenuOn={changeMenuOn}
      href="#experience"
      key="experience"
    >
      experience
    </NavigationLink>,
    <NavigationLink
      entry={education?.entry}
      active={education?.inView}
      changeMenuOn={changeMenuOn}
      href="#education"
      key="education"
    >
      education
    </NavigationLink>
  ];

  return (
    <NavigationContainer className="nav-bar" changeMenuOn={changeMenuOn}>
      <LargeMenu changeMenuOn={changeMenuOn}>{menu}</LargeMenu>
      <SmallMenuContainer changeMenuOn={changeMenuOn} showMenu={showMenu}>
        <MenuIconContainer>
          {!showMenu ? (
            <MenuIcon
              onClick={handleClick}
              icon={<FontAwesomeIcon icon={faBars} size="2x" />}
            />
          ) : (
            <MenuIcon
              onClick={handleClick}
              icon={<FontAwesomeIcon icon={faTimes} size="2x" />}
            />
          )}
        </MenuIconContainer>
        <SmallMenu changeMenuOn={changeMenuOn} showMenu={showMenu}>
          {showMenu ? <>{menu}</> : null}
        </SmallMenu>
      </SmallMenuContainer>
    </NavigationContainer>
  );
};

export default Navigation;

