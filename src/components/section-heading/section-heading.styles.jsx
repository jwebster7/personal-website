import styled from "styled-components";

export const SectionHeadingContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  margin-bottom: 2.5em;

  @media only screen and (max-width: 750px) {
    margin-bottom: 25px;
    font-size: 1.75rem;
    text-align: center;
  }
`;

export const SectionHeadingText = styled.h1`
  font-family: "Ubuntu", sans-serif;
  font-size: 2rem;
  margin: 0 calc(30px - 0.75rem) 0 30px;
  letter-spacing: 0.75rem;
  @media only screen and (max-width: 750px) {
    margin: 0 12.5px;
    font-size: 1.5rem;
    letter-spacing: 0.5rem;
    text-align: center;
  }
`;