import { memo } from "react";
import styled from "styled-components";

const NavigationLink = styled.a`
  cursor: pointer;
  margin: 0 2.5em 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: color 300ms ease-in-out;

  color: #fff5ee;
  font-family: "Ubuntu", sans-serif;
  font-size: 1.25rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  line-height: 1.5;
  text-align: left;
  text-decoration: none;
  white-space: nowrap;

  :after {
    content: "";
    width: 0%;
    border-radius: 1em;
    border-top: 2px solid #5b9999;
    transition: width 300ms ease-in-out;
  }

  :hover {
    color: #5b9999;
  }

  ${({ active }) => {
    const style = active
      ? `
        color: #5B9999;
        :after {
          content: "";
          width: 95%;
          border-radius: 10em;
        }

        @media only screen and (max-width: 1024px) {
          :after {
            width: 0%;
          }
        }
    `
      : `color: #FFF5EE`;
    return style;
  }};

  @media only screen and (max-width: ${(props) => props.changeMenuOn}) {
    margin: 0 auto 1em;
    font-size: 1rem;
    line-height: 1.25;
    white-space: normal;
  }
`;

export default memo(NavigationLink);
