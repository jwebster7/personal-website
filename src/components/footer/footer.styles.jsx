import styled from "styled-components";

import fadeInAnimation from "../../animations/fade-in.animation";

export const FooterContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 1000;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  width: 5em;
  padding: 2em 1em;

  border-radius: 0 4em 0 0;
  background: rgba(18, 17, 19, 0.6);
  backdrop-filter: blur(5px);

  ${fadeInAnimation}

  @media only screen and (max-width: 1024px) {
    height: 4em;
    width: 100%;
    border-radius: 0;
    flex-direction: row;
    padding: 2em 5em;
  }

  @media only screen and (max-width: 768px) {
    height: 3.125em;
    padding: 0 3em;
    a {
      margin: 0;
    }
  }
`;

export const SocialIcon = styled.a`
  margin: 1em 0.5em;
  font-size: 1.25rem;
  
  svg {
    display: block;
    object-fit: cover;
    color: #fff5ee;
    text-decoration: none;
    transition: color 300ms ease-in-out, transform 300ms ease-in-out;
    font-size: 1em;

    :hover {
      color: #5b9999;
      transform: scale(1.15);
    }

    @media only screen and (max-width: 768px) {
      font-size: 1.1rem;
    }
  }

  @media only screen and (max-width: 1024px) {
    margin: 0;
  }
`;
