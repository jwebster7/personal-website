import { css, keyframes } from "styled-components";

const frames = keyframes`
  from {
    opacity: 0;
    /* transform: scale(.75); */
  }
  to {
    opacity: 1;
    /* transform: scale(1); */
  }
`;

const fadeInAnimation = css`
  opacity: 0;
  animation: ${frames} 1200ms ease-in-out;
  animation-fill-mode: forwards;
`;

export default fadeInAnimation;
