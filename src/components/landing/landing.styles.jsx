// #121113 - background
// #59545E
// #291E33
// #4B385E - active
// #A198AB -
// #fff5ee - font
// darkslategray
// #3d808b
import styled, { keyframes } from "styled-components";

import { sharedHeadingStyles, sharedHorizontalLineStyles } from "../shared.styles";

const nameTransition = keyframes`
  from {
    transform: translateY(-500%);
  }

  to {
    transform: translateY(0%);
  }
`;

const titleTransition = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    visibility: visible;
    opacity: 1;
  }
`;

const horizontalLineTransition = keyframes`
  from {
    transform: translateX(300%);
  }

  to {
    transform: translateX(0%);
  }
`;

export const LandingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #121113;
  padding: 50px;
  min-height: 100vh;
  width: 100%;
`;

export const LandingTextContainer = styled.span`
  font-size: 1.50rem;
  font-family: "Roboto Mono", serif;
  color: #fff5ee;
  text-align: justify;
  line-height: 2.15rem;
`;

export const LandingNameHeading = styled.h1`
  ${sharedHeadingStyles}
  font-weight: bold;
  margin: 25px 0;
  font-size: 5rem;
  animation: ${nameTransition} 1.5s ease-out;
`;

export const LandingHorizontalLine = styled.div`
  ${sharedHorizontalLineStyles}
  width: 700px;
  animation: ${horizontalLineTransition} 1.5s ease-out;
`;

export const LandingTitleHeading = styled.h1`
  ${sharedHeadingStyles}
  font-weight: bold;
  font-size: 3.5rem;
  margin: 25px 0;
  animation: ${titleTransition} 1.5s ease-in-out 1.5s;
  animation-fill-mode: forwards;
  visibility: hidden;
`;
