import styled from "styled-components";

const SubHeading = styled.h1`
  margin: 0.25em 0 0.25em auto;

  color: ${({ theme: { palette } }) => palette?.font.primary};
  font-family: ${({ theme : { typography }}) => typography?.subHeading.fontFamily};
  font-size: ${({ theme : { typography }}) => typography?.subHeading.fontSize.primary};
  font-weight: ${({ theme : { typography }}) => typography?.subHeading.fontWeight};
  letter-spacing: ${({ theme : { typography }}) => typography?.subHeading.letterSpacing};

  @media only screen and (max-width: 1024px) {
    margin: 0.25em auto 0.25em 0;
  }

  @media only screen and (max-width: 768px) {
    font-size: ${({ theme : { typography }}) => typography?.subHeading.fontSize.secondary};
    white-space: normal;
    margin: 0.25em 0 0.25em;
  }
`;

export default SubHeading;
