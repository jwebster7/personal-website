import styled from "styled-components";

export const SectionHeadingContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  margin-bottom: 5em;

  @media only screen and (max-width: 1024px) {
    margin-bottom: 2.5em;
  }

  @media only screen and (max-width: 768px) {
    margin-bottom: 1em;
    font-size: 1.75rem;
    text-align: center;
  }
`;

export const SectionHeadingText = styled.h1`
  margin: 0 calc(2em - 0.75rem) 0 2em;

  color: ${({ theme: { palette} }) => palette?.font.primary};
  font-family: ${({ theme: {typography} }) => typography?.sectionHeading.fontFamily};
  font-size: ${({ theme: {typography} }) => typography?.sectionHeading.fontSize.primary};
  font-weight: ${({ theme: {typography} }) => typography?.sectionHeading.fontWeight};
  letter-spacing: ${({ theme: {typography} }) => typography?.sectionHeading.letterSpacing};

  @media only screen and (max-width: 768px) {
    margin: 0 calc(0.75em - 0.5rem) 0 0.75em;
    font-size: ${({ theme: {typography} }) => typography?.sectionHeading.fontSize.secondary};
    text-align: center;
  }
`;
