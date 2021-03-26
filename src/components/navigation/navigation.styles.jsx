import styled, { css } from "styled-components";

import fadeInAnimation from "../../animations/fade-in.animation";

export const NavigationContainer = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1000;
`;

export const LargeMenu = styled.nav`
  position: absolute;
  top: 0;
  right: 0;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  width: 5em;
  padding: 2em 1em;

  border-radius: 0 0 0 4em;
  background-color: rgba(18, 17, 19, 0.6);
  backdrop-filter: blur(5px);

  ${fadeInAnimation}

  @media (max-width: ${(props) => props.changeMenuOn}) {
    display: none;
  }
`;

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

    transition: width 150ms ease;
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

export const SmallMenu = styled.nav`
  display: none;
  @media (max-width: ${(props) => props.changeMenuOn}) {
    ${(props) => {
      if (props.showMenu) {
        return css`
          display: flex;
          flex-direction: column;
          padding: 0 1em 1em;
          width: 100%;
        `;
      }
    }}
  }
`;

export const MenuIcon = ({ onClick, icon }) => (
  <div role="button" aria-label="button" onClick={onClick}>
    {icon}
  </div>
);
