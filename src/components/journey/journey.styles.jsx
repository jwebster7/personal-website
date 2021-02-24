import styled from "styled-components";

import StyledHeading from "../styled-heading/styled-heading.component";

import { sharedBodyTextStyles, sharedHeadingStyles } from "../shared.styles";

export const JourneyContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
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
  ${sharedBodyTextStyles}
`;

export const JourneyGrid = styled.div`
  display: grid;
  /* width: 50%; */
  margin: 0 auto;
  /* justify-items: center; */
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 50px;
`;

export const JourneyColumnHeading = styled.h3`
  ${sharedHeadingStyles}
  font-size: 2.75rem;
  margin: 50px 0;
`;
