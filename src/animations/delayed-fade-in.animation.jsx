import { css, keyframes } from "styled-components";

const frames = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const delayedFadeInAnimation = css`
  opacity: 0;
  animation: ${frames} 1.25s ease-in-out 1s;
  animation-fill-mode: forwards;
`;

export default delayedFadeInAnimation;
