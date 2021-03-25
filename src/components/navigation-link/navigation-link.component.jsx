import { memo } from "react";
import styled from "styled-components";

const NavigationLink = styled.a`
  cursor: pointer;
  color: #fff5ee;
  font-family: "Ubuntu", sans-serif;
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  line-height: 1.5;
  text-align: left;
  text-decoration: none;
  outline: none;
  white-space: nowrap;
  transition: color 300ms ease-in-out, transform 300ms ease-in-out;

  :hover {
    color: #5b9999;
    transform: scale(1.1);
  }

  ${({ active }) => {
    return active
      ? `
        color: #5B9999; 
        transform: scale(1.1);
      `
      : `color: #FFF5EE;`;
  }};

  @media only screen and (max-width: ${(props) => props.changeMenuOn}) {
    margin: 0 auto 1em;
    font-size: 1rem;
    line-height: 1.25;
    white-space: normal;
  }
`;

export default memo(NavigationLink);
