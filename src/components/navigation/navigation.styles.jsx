import styled, { css } from "styled-components";

import { sharedBodyFontStyles, rightSlideInAnimation } from "../shared.styles";

const sharedTextStyles = css`
  ${sharedBodyFontStyles}
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
  backdrop-filter: blur(5px);

  ${rightSlideInAnimation}

  div:last-child {
    margin-right: 0;
  }

  @media only screen and (max-width: 1300px) {
    height: 75px;
  }

  @media only screen and (max-width: 1100px) {
    width: 100%;
    border-radius: 0;
  }

  @media only screen and (max-width: 500px) {
    /* background: none;
    backdrop-filter: none; */
    height: 50px;
    padding: 0 25px;
  }
`;

// ${({ sectionInView }) => {
//   const style = sectionInView
//     ? css`
//         ${fadeInAnimation}
//       `
//     : css`
//         ${fadeOutAnimation}
//       `;
//   return style;
// }};

export const NavigationLinkContainer = styled.div`
  cursor: pointer;
  ${sharedTextStyles}
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 50px 0 0;
  text-decoration: none;
  transition: color 0.15s linear 0.15s;
  font-weight: 600;

  :after {
    content: "";
    width: 0%;
    border-top: 2.5px solid #5b9999;
    transition: width 0.15s linear 0.15s;
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

  @media only screen and (max-width: 500px) {
    height: 50px;
    margin: 0 12.5px 0 0;
  }
`;
