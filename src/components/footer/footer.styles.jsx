import styled from "styled-components";

import leftSlideInAnimation from "../../animations/left-slide-in.animation";

// import { leftSlideInAnimation } from "../shared.styles";

export const FooterContainer = styled.div`
  position: fixed;
  z-index: 1000;
  bottom: 0;
  left: 0;
  height: 90px;
  min-width: 40vw;
  padding: 0 5em;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  border-radius: 0 5em 0 0;
  background: rgba(18, 17, 19, 0.6);
  backdrop-filter: blur(5px);

  ${leftSlideInAnimation}

  a {
    margin: 0 3em 0 0;
  }

  a:first-child {
    margin-left: 0;
  }

  a:last-child {
    margin-right: 0;
  }

  * {
    font-size: 1.75rem;
  }

  @media only screen and (max-width: 1280px) {
    height: 5em;
  }

  @media only screen and (max-width: 1024px) {
    width: 100%;
    border-radius: 0;
  }

  @media only screen and (max-width: 768px) {
    height: 3.125em;
    padding: 0 1.5em;
    a {
      margin: 0;
    }
  }
`;

export const SocialIcon = styled.a`
  svg {
    color: #fff5ee;
    text-decoration: none;
    transition: color 300ms ease-in-out, transform 300ms ease-in-out;
    font-weight: 600;

    :hover {
      color: #5b9999;
      transform: scale(1.15);
    }

    @media only screen and (max-width: 768px) {
      font-size: 1.1rem;
    }
  }
`;
