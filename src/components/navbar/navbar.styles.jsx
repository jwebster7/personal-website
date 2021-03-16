import styled, { css } from "styled-components";

import rightSlideInAnimation from "../../animations/right-slide-in.animation";

export const SmallMenuContainer = styled.div`
  display: none;
  @media (max-width: ${(props) => props.changeMenuOn}) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-end;

    width: 5em;

    border-radius: 0 0 0 1em;
    background: rgba(18, 17, 19, 0.6);
    backdrop-filter: blur(5px);

    transition: width 0.1s ease;
    /* transition: width 1s ease; */
    ${(props) => {
      if (props.showMenu) {
        return css`
          width: 10em;
        `;
      }
    }}
  }
`;

export const MenuIconContainer = styled.div`
  margin: 0;
  padding: 1em 1.5em;
`;

export const SmallMenu = styled.div`
  display: none;
  @media (max-width: ${(props) => props.changeMenuOn}) {
    ${(props) => {
      if (props.showMenu) {
        return css`
          display: block;
          padding: 0 1em 1em;
          width: 100%;
        `;
      }
    }}
  }
`;

export const LargeMenuLinkContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 1em 5em;
  min-height: 90px;
  min-width: 45vw;

  border-radius: 0 0 0 5em;
  background: rgba(18, 17, 19, 0.6);
  backdrop-filter: blur(5px);

  span:last-child {
    margin-right: 0;
  }

  @media only screen and (max-width: 1200px) {
    min-height: 5em;
    align-items: center;
  }

  @media only screen and (max-width: 1100px) {
    width: 100%;
    border-radius: 0;
  }

  @media (max-width: ${(props) => props.changeMenuOn}) {
    display: none;
  }
`;

export const NavBarContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1000;

  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  ${rightSlideInAnimation}

  @media only screen and (max-width: ${(props) => props.changeMenuOn}) {
    flex-direction: column;
    align-items: flex-end;
    min-height: 3em;
    width: 5em;
  }
`;

export const MenuIcon = ({ onClick, icon }) => (
  <div role="button" onClick={onClick}>
    {icon}
  </div>
);
