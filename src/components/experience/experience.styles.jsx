import styled from "styled-components";

import {
  sharedBodyFontStyles,
  sharedHeadingStyles,
  sharedSectionHeadingStyles
} from "../shared.styles";

export const ExperienceContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #121113;
  /* background: linear-gradient(#121113, #121113, #4b385e, #4b385e, #4b385e); */
  padding: 75px;
  min-height: 100vh;
  width: 100%;
  /* width: 90%; */
`;

// export const ExperienceContent = styled.div`
//   width: 90%;
//   @media only screen and (max-width: 1300px) {
//     width: 100%;
//   }
// `;

export const ExperienceTextContainer = styled.p`
  ${sharedBodyFontStyles}
`;

export const ExperienceGrid = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  /* width: 85%; */
`;

export const ExperienceColumnHeading = styled.h3`
  ${sharedSectionHeadingStyles}
`;
