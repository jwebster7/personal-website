import styled from "styled-components";

import {
  sharedHeadingStyles,
  sharedHorizontalLineStyles,
  sharedSectionHeadingStyles
} from "../shared.styles";


export const StyledHeadingContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  margin-bottom: 50px;
`;

export const StyledHeadingText = styled.h1`
  ${sharedHeadingStyles}
  /* font-size: 3.5rem;
  margin: 0 50px; */
  ${sharedSectionHeadingStyles}
`;

export const StyledHeadingLine = styled.div`
  ${sharedHorizontalLineStyles}
  width: 100%;
`;