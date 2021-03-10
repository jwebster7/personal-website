import { css, keyframes } from "styled-components";

const frames = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

export const fadeOutAnimation = css`
  animation: ${frames} 1.25s ease-in-out 1.25s;
  animation-fill-mode: backwards;
  opacity: 0;
`;

export const fadeOutAnimation;
