import styled, { css } from "styled-components";

import { fadeInAnimation, sharedBodyTextStyles } from "../shared.styles";

const sharedTextStyles = css`
  ${sharedBodyTextStyles}
`;

export const NavigationContainer = styled.nav`
  position: fixed;
  z-index: 100;
  top: 0;
  right: 0;
  height: 90px;
  min-width: 40vw;
  padding: 0 75px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  border-radius: 0 0 0 75px;
  background: rgba(18, 17, 19, 0.6);
  /* background: rgba(47, 79, 79, 0.6); */
  backdrop-filter: blur(5px);

  ${fadeInAnimation}

  div {
    margin: 0 50px 0 0;
  }

  div:last-child {
    margin-right: 0;
  }
`;

export const NavigationLinkContainer = styled.div`
  ${sharedTextStyles}
  text-decoration: none;
  transition: color 0.5s ease-in-out;
  font-weight: 600;

  ${({ inView }) => {
    // console.log(inView);
    const style = inView
      ? `
    color: #5b9999;
    `
      : `color: #fff5ee`;
    return style;
  }};
  
  /* :active {
    color: #5b9999;
  } */

  :hover {
    color: #5b9999;
  }
`;
