import styled, { css } from "styled-components";

const sharedHeadingStyles = css`
  margin: 0 0 50px 0;
  padding: 0;
  letter-spacing: 0.25rem;
  font-family: "Open Sans", sans-serif;
  color: #fff5ee;
`;

export const ExperienceContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #4b385e;
  padding: 50px;
  /* min-height: 100vh; */
  width: 100%;
`;

export const ExperienceHeading = styled.h1`
  ${sharedHeadingStyles}
  font-size: 2.75rem;
`;

export const ExperienceSubHeading = styled.h2`
  ${sharedHeadingStyles}
  font-size: 2.25rem;
`;

export const ExperienceGrid = styled.div`
  display: grid;
  width: 100%;
  justify-items: center;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  /* grid-template-columns: 1fr 1fr; */
  grid-gap: 75px;
`;
