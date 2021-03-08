import styled, { css } from "styled-components";

import { sharedBodyFontStyles } from "../shared.styles";

const sharedTextStyles = css`
  ${sharedBodyFontStyles}
`;

export const NavigationLinkContainer = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  div:last-child {
    margin-right: 0;
  }

  @media only screen and (max-width: ${(props) => props.changeMenuOn}) {
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    padding: 0;
  }
`;

export const NavigationLink = styled.div`
  cursor: pointer;
  ${sharedTextStyles}
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 50px 0 0;
  text-decoration: none;
  transition: color 0.15s linear 0.2s;
  font-weight: 600;

  :after {
    content: "";
    width: 0%;
    border-top: 2.5px solid #5b9999;
    transition: width 0.15s linear 0.2s;
  }

  :hover {
    color: #5b9999;
  }

  ${({ inView }) => {
    const style = inView
      ? `
        color: #5b9999;
        :after {
          content: "";
          border-top: 3px solid #5b9999;
          width: 95%;
        }
    `
      : `color: #fff5ee`;
    return style;
  }};

  @media only screen and (max-width: ${(props) => props.changeMenuOn}) {
    margin: 10px 0;
  }
`;
