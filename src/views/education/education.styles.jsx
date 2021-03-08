import styled from "styled-components";

import {
  sharedBodyFontStyles,
  sharedSectionContainerStyles,
  sharedSectionHeadingStyles
} from "../../components/shared.styles";

export const EducationContainer = styled.div`
  background-color: #121113;
  ${sharedSectionContainerStyles}
`;

export const EducationContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: space-evenly;
  width: 80%;

  @media only screen and (max-width: 1300px) {
    width: 90%;
  }

  @media only screen and (max-width: 1100px) {
    width: 100%;
  }
`;

export const EducationTextContainer = styled.span`
  ${sharedBodyFontStyles}
`;

export const EducationColumnHeading = styled.h3`
  ${sharedSectionHeadingStyles}
`;
