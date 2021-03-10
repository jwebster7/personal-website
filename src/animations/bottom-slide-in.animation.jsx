import { css, keyframes } from "styled-components";

const frames = keyframes`
  from {
    transform: translateY(150%);
  }

  to {
    transform: translateY(0%);
  }
`;

const bottomSlideInAnimation = css`
  animation: ${frames} 1.25s ease-out;
`;

export default bottomSlideInAnimation;
