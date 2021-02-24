// #121113 - background
//       #59545E
//       #291E33
//       #4B385E - active
//       #A198AB -
//       #fff5ee - font
import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 40px 75px;
  width: 100%;
  background-color: #121113;
`;

export const SocialIconContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  /* width: 37.5%; */
  width: 50%;
  max-width: 525px;
  min-width: 425px;

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

export const CreatedByContainer = styled.div`
  color: #fff5ee;
  font-family: "Roboto Mono", serif;
  font-weight: bold;
  font-size: 1rem;
`;
