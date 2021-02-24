import styled, { css } from "styled-components";

import { sharedBodyTextStyles, sharedHeadingStyles } from "../shared.styles";

const educationHeadingStyles = css`
  ${sharedHeadingStyles}
`;

export const EducationContainer = styled.div`
  /* display: flex;
  flex-direction: row;
  justify-content: space-between; */
  /* align-items: center; */
  /* width: 80%; */
  display: grid;
  // there's probably a better way to get this functionality
  grid-template-columns: repeat(auto-fit, minmax(700px, 1fr));
  width: 100%;
`;

export const EducationHeading = styled.h1`
  ${educationHeadingStyles}
  font-size: 2.25rem;
  /* margin-top: 0; */
`;

export const EducationDate = styled.p`
  ${educationHeadingStyles}
  font-size: 1.75rem;
  /* font-weight: 600; */
  margin-bottom: 0;
`;

export const EducationBlock = styled.div`
  /* width: 50%; */
`;

export const EducationTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: left;
`;

export const EducationText = styled.p`
  ${sharedBodyTextStyles}
  text-align: left;
`;
