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
  height: 100px;
  min-width: 50vw;
  padding: 0 75px;

  display: flex;
  flex-grow: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  border-radius: 0 0 0 75px;
  background: rgba(18, 17, 19, 0.5);
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
  transition: color 0.3s ease-in-out;

  :active {
    color: #a198ab;
  }

  :hover {
    color: #a198ab;
  }
`;
