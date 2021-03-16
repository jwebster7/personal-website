import { css, keyframes } from "styled-components";

const frames = keyframes`
  from {
    transform: translateY(-600%);
    opacity: 0;
  }

  to {
    transform: translateY(0%);
    opacity: 1;
  }
`;

export const topSlideInAnimation = css`
  animation: ${frames} 1s ease-in-out;
`;

export default topSlideInAnimation;
