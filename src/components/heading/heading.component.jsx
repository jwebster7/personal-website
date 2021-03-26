import styled from "styled-components";

const Heading = styled.h1`
  margin: 0.25em 1em 0.25em 0;

  color: ${({ theme: { palette } }) => palette?.font.primary};
  font-family: ${({ theme: { typography } }) => typography?.heading.fontFamily};
  font-size: ${({ theme: { typography } }) => typography?.heading.fontSize.primary};
  font-weight: ${({ theme: { typography } }) => typography?.heading.fontWeight};
  letter-spacing: ${({ theme: { typography } }) =>
    typography?.heading.letterSpacing};
  white-space: nowrap;

  @media only screen and (max-width: 768px) {
    font-size: ${({ theme: { typography } }) => typography?.heading.fontSize.secondary};
    white-space: normal;
  }
`;

export default Heading;
