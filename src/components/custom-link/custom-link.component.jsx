import { memo } from "react";
import styled from "styled-components";

const CustomLink = styled.a`
  cursor: pointer;
  color: ${({ theme: { palette} }) => palette?.font.primary};
  font-family: ${({ theme: { typography } }) => typography.primary.fontFamily};
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: ${({ theme: { typography } }) =>
    typography.primary.letterSpacing};
  line-height: 1.5;
  text-align: left;
  text-decoration: none;
  outline: none;
  white-space: nowrap;
  transition: color 300ms ease-in-out, transform 300ms ease-in-out;

  :hover {
    color: ${({ theme }) => theme.palette.font.hover};
    transform: scale(1.1);
  }

  ${({ active, theme: { palette } }) => {
    return active
      ? `
        color: ${palette.font.active};
        transform: scale(1.1);
      `
      : `
        color: ${palette.font.primary};
      `;
  }};

  @media only screen and (max-width: ${(props) => props.changeMenuOn}) {
    margin: 0 auto 1em;
    font-size: 1rem;
    line-height: 1.25;
    white-space: normal;
  }
`;

export default memo(CustomLink);
