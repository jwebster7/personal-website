import { css, keyframes } from "styled-components";

const frames = keyframes`
  from {
    opacity: 0;
    transform: translateX(100%);
  }

  to {
    opacity: 1;
    transform: translateX(0%);
  }
`;

const rightSlideInAnimation = css`
  animation: ${frames} 1s ease-in-out;
`;

export default rightSlideInAnimation;
