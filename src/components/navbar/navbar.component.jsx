import React, { useState } from "react";

import {
  LargeMenuLinkContainer,
  MenuIcon,
  MenuIconContainer,
  NavBarContainer,
  SmallMenu,
  SmallMenuContainer
} from "./navbar.styles";

const NavBar = ({ menu, changeMenuOn, menuOpenButton, menuCloseButton }) => {
  const [showMenu, setShowMenu] = useState(false);
  const handleClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <NavBarContainer className="nav-bar" changeMenuOn={changeMenuOn}>
      <LargeMenuLinkContainer changeMenuOn={changeMenuOn}>{menu}</LargeMenuLinkContainer>
      <SmallMenuContainer changeMenuOn={changeMenuOn} showMenu={showMenu}>
        <MenuIconContainer>
          {!showMenu ? (
            <MenuIcon onClick={handleClick} icon={menuOpenButton} />
          ) : (
            <MenuIcon onClick={handleClick} icon={menuCloseButton} />
          )}
        </MenuIconContainer>
        <SmallMenu changeMenuOn={changeMenuOn} showMenu={showMenu}>
          {showMenu ? <div>{menu}</div> : null}
        </SmallMenu>
      </SmallMenuContainer>
    </NavBarContainer>
  );
};

export default NavBar;
