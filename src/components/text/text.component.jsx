import styled from "styled-components";

const Text = styled.span`
  margin-top: 1em;

  color: ${({ theme: { palette } }) => palette?.font.primary};
  font-family: ${({ theme: { typography } }) => typography?.body.fontFamily};
  font-size: ${({ theme: { typography } }) => typography?.body.fontSize.primary};
  font-weight: ${({ theme: { typography } }) => typography?.body.fontWeight};
  letter-spacing: ${({ theme: { typography } }) =>
    typography?.body.letterSpacing};
  line-height: 1.5;
  text-align: left;

  @media only screen and (max-width: 768px) {
    font-size: ${({ theme: { typography } }) => typography?.body.fontSize.secondary};
    line-height: 1.4;
    white-space: normal;
  }
`;

export default Text;
