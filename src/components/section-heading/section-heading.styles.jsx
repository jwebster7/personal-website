import styled from "styled-components";

export const SectionHeadingContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  margin-bottom: 2.5em;

  @media only screen and (max-width: 768px) {
    margin-bottom: 1em;
    font-size: 1.75rem;
    text-align: center;
  }
`;

export const SectionHeadingText = styled.h1`
  font-family: "Ubuntu", sans-serif;
  font-size: 2rem;
  margin: 0 calc(2em - 0.75rem) 0 2em;
  letter-spacing: 0.75rem;
  @media only screen and (max-width: 768px) {
    margin: 0 .75em;
    margin: 0 calc(.75em - 0.5rem) 0 .75em;
    font-size: 1.5rem;
    letter-spacing: 0.5rem;
    text-align: center;
  }
`;