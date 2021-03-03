import styled from "styled-components";

import {
  sharedHeadingStyles,
  sharedSectionContainerStyles,
  sharedSectionHeadingStyles
} from "../shared.styles";

export const ExperienceContainer = styled.div`
  background-color: #121113;
  ${sharedSectionContainerStyles}
`;

export const ExperienceGrid = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: space-evenly;
  width: 80%;
`;

export const ExperienceSectionTitle = styled.h1`
  ${sharedHeadingStyles}
`;

export const ExperienceColumnHeading = styled.h3`
  ${sharedSectionHeadingStyles}
`;
