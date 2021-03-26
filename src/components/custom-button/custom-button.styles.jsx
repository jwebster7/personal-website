import styled, { css } from "styled-components";

export const StyledButton = styled.a`
  cursor: pointer;
  display: block;

  padding: 1em 2em;

  color: #fff5ee;
  font-family: "Ubuntu", sans-serif;
  font-size: 1.25rem;
  font-weight: 600;
  text-align: center;
  text-decoration: none;
  letter-spacing: 0.1em;
  line-height: 1.6;
  white-space: nowrap;

  border-radius: 0.5em;
  border: 2px solid #fff5ee;
  background-color: ${({ theme: { palette } }) => palette?.element.primary};

  transition: color 300ms ease-in-out, border 300ms ease-in-out,
    background-color 300ms ease-in-out;

  @media only screen and (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.4;
    white-space: normal;
  }

  :hover {
    color: ${({ theme: { palette } }) => palette.element.hover.primary};
    border: 2px solid ${({ theme: { palette } }) => palette.element.hover.primary};
    background-color: ${({ theme: { palette } }) => palette.element.hover.secondary}
  }
`;
