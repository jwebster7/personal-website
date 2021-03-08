import styled, { css } from "styled-components";

import {
  sharedBodyFontStyles,
  sharedHeadingStyles,
  sharedSubheadingStyles
} from "../shared.styles";

const positionBodyFontStyles = css`
  ${sharedBodyFontStyles}
`;

const positionHeadingStyles = css`
  ${sharedHeadingStyles}
`;

const positionSubHeadingStyles = css`
  ${sharedSubheadingStyles}
`;

export const PositionContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 50px 0;
  width: 100%;

  @media only screen and (max-width: 750px) {
    margin: 0 0 25px 0;
  }
`;

export const PositionContentGrid = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  @media (max-width: 1100px) {
    flex-direction: column;
  }
`;

export const PositionContentBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const PositionHeading = styled.h1`
  ${positionHeadingStyles}
  white-space: nowrap;
`;

export const PositionDates = styled.span`
  ${positionSubHeadingStyles}
  margin-left: auto;
  /* white-space: nowrap; */
  @media only screen and (max-width: 1100px) {
    margin-left: 0;
    margin-right: auto;
  }
`;

export const PositionTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: left;
`;

export const PositionText = styled.span`
  ${positionBodyFontStyles}
  text-align: left;
`;
