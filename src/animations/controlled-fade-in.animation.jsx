import { css, keyframes } from "styled-components";

const frames = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const controlledFadeInAnimation = css`
  opacity: 0;
  animation: ${(props) => {
    const duration = props?.duration;
    const delay = props?.delay;
    return css`
      ${frames} ${duration} ease-in-out ${delay}
    `;
  }};

  animation-fill-mode: forwards;
`;

export default controlledFadeInAnimation;
