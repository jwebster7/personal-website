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

  @media only screen and (max-width: 750px) {
    margin-bottom: 25px;
    font-size: 1.75rem;
    text-align: center;
  }
`;

export const StyledHeadingText = styled.h1`
  ${sharedHeadingStyles}
  ${sharedSectionHeadingStyles}
`;

export const StyledHeadingLine = styled.div`
  ${sharedHorizontalLineStyles}
  width: 100%;
`;
