import styled, { css } from "styled-components";

import { rightSlideInAnimation } from "../shared.styles";

export const SmallMenuContainer = styled.div`
  display: none;
  @media (max-width: ${(props) => props.changeMenuOn}) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-end;

    width: 80px;

    border-radius: 0 0 0 15px;
    background: rgba(18, 17, 19, 0.6);
    backdrop-filter: blur(5px);

    transition: width 0.1s ease;
    /* transition: width 1s ease-in-out; */
    ${(props) => {
      if (props.showMenu) {
        return css`
          width: 160px;
        `;
      }
    }}
  }
`;

export const MenuIconContainer = styled.div`
  margin: 0;
  padding: 15px 25px;
`;

export const SmallMenu = styled.div`
  display: none;
  @media (max-width: ${(props) => props.changeMenuOn}) {
    ${(props) => {
      if (props.showMenu) {
        return css`
          display: block;
          padding: 0 25px 25px 25px;
          width: 100%
        `;
      }
    }}
  }
`;

export const LargeMenu = styled.div`
  position: absolute;
  top: 0;
  right: 0;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 25px 75px;
  min-height: 90px;
  min-width: 45vw;

  border-radius: 0 0 0 75px;
  background: rgba(18, 17, 19, 0.6);
  backdrop-filter: blur(5px);

  @media only screen and (max-width: 1300px) {
    min-height: 75px;
    align-items: flex-start;
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

  /* padding: 25px 75px;
  min-height: 90px;
  min-width: 45vw; */

  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  /* border-radius: 0 0 0 75px;
  background: rgba(18, 17, 19, 0.6);
  backdrop-filter: blur(5px); */

  ${rightSlideInAnimation}

  /* @media only screen and (max-width: 1300px) {
    min-height: 75px;
    align-items: flex-start;
  } */

  /* @media only screen and (max-width: 1100px) {
    width: 100%;
    border-radius: 0;
  } */

  @media only screen and (max-width: ${(props) => props.changeMenuOn}) {
    flex-direction: column;
    align-items: flex-end;
    min-height: 50px;
    /* padding: 15px 25px; */
  }
`;

export const MenuIcon = ({ onClick, icon }) => (
  <div role="button" onClick={onClick}>
    {icon}
  </div>
);
