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
  padding: 0 75px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  border-radius: 0 75px 0 0;
  background: rgba(18, 17, 19, 0.6);
  backdrop-filter: blur(5px);

  ${leftSlideInAnimation}

  a {
    margin: 0 50px 0 0;
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

  @media only screen and (max-width: 1300px) {
    height: 75px;
  }

  @media only screen and (max-width: 1100px) {
    width: 100%;
    border-radius: 0;
  }

  @media only screen and (max-width: 750px) {
    height: 50px;
    padding: 0 25px;
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

    @media only screen and (max-width: 750px) {
      font-size: 1rem;
    }
  }
`;
