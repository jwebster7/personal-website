import { css, keyframes } from "styled-components";

const frames = keyframes`
  from {
    transform: translateY(-600%);
  }

  to {
    transform: translateY(0%);
  }
`;

export const topSlideInAnimation = css`
  animation: ${frames} 1s ease-in-out;
`;

export default topSlideInAnimation;
