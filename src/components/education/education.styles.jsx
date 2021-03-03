import styled from "styled-components";

import {
  sharedBodyFontStyles,
  sharedSectionContainerStyles,
  sharedSectionHeadingStyles
} from "../shared.styles";

export const EducationContainer = styled.div`
  /* background-color: darkslategray; */
  background-color: #121113;
  ${sharedSectionContainerStyles}
`;

export const EducationTextContainer = styled.span`
  ${sharedBodyFontStyles}
`;

export const EducationGrid = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: space-evenly;
  width: 80%;
`;

export const EducationColumnHeading = styled.h3`
  ${sharedSectionHeadingStyles}
`;
