import styled from "styled-components";

import { sharedBodyFontStyles, sharedSectionHeadingStyles } from "../shared.styles";

export const EducationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: darkslategray;
  /* background: linear-gradient(#121113, #121113, #4b385e, #4b385e, #4b385e); */
  padding: 75px;
  min-height: 100vh;
  width: 100%;
  /* width: 90%; */
`;

export const EducationTextContainer = styled.span`
  ${sharedBodyFontStyles}
`;

export const EducationGrid = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  /* width: 90%; */
`;

export const EducationColumnHeading = styled.h3`
  ${sharedSectionHeadingStyles}
`;
