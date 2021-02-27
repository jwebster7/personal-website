import styled from "styled-components";

import StyledHeading from "../styled-heading/styled-heading.component";

import { sharedBodyFontStyles, sharedHeadingStyles, sharedSectionHeadingStyles } from "../shared.styles";

export const JourneyContainer = styled.div`
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

export const JourneyTextContainer = styled.p`
  ${sharedBodyFontStyles}
`;

export const JourneyGrid = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  /* width: 90%; */
`;

export const JourneyColumnHeading = styled.h3`
  ${sharedSectionHeadingStyles}
`;
