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
  margin: 0 0 30px 0;
`;

export const PositionContentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(575px, 1fr));
  @media (max-width: 1300px) {
    
  }
`;

export const PositionContentBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const PositionHeading = styled.h1`
  ${positionHeadingStyles}
  /* margin-right: auto; */
`;

export const PositionDates = styled.p`
  ${positionSubHeadingStyles}
  margin-left: auto;
  @media only screen and (max-width: 1300px) {
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

export const PositionText = styled.p`
  ${positionBodyFontStyles}
  text-align: left;
`;
