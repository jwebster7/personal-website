import styled from "styled-components";

import { fadeInAnimation } from "../shared.styles";

export const FooterContainer = styled.div`
  position: fixed;
  z-index: 100;
  bottom: 0;
  left: 0;
  height: 100px;
  min-width: 50vw;
  padding: 0 75px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 0 75px 0 0;
  background: rgba(18, 17, 19, 0.5);
  backdrop-filter: blur(5px);

  ${fadeInAnimation}

  a {
    margin: 0 50px 0 0;
  }

  a:first-child {
    margin-left: 0;
  }

  * {
    font-size: 1.75rem;
  }
`;

export const SocialIcon = styled.a`
  svg {
    color: #fff5ee;
    transition-duration: 0.3s;
    transition-timing-function: linear;
    transition-delay: 0;
    transition: font-size 0.3s ease-in-out, color 0.3s ease-in-out;

    :hover {
      color: #3d808b;
      font-size: 2rem;
      text-decoration: none;
    }
  }
`;
