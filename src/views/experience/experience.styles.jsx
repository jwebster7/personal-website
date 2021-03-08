import styled from "styled-components";

import {
  sharedHeadingStyles,
  sharedSectionContainerStyles,
  sharedSectionHeadingStyles
} from "../../components/shared.styles";

export const ExperienceContainer = styled.div`
  background-color: #121113;
  ${sharedSectionContainerStyles}
`;

export const ExperienceContent = styled.div`
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

export const ExperienceSectionTitle = styled.h1`
  ${sharedHeadingStyles}
`;

export const ExperienceColumnHeading = styled.h3`
  ${sharedSectionHeadingStyles}
`;
