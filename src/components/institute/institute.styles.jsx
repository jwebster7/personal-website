import styled, { css } from "styled-components";

import {
  sharedBodyFontStyles,
  sharedHeadingStyles,
  sharedSubheadingStyles
} from "../shared.styles";

const instituteBodyFontStyles = css`
  ${sharedBodyFontStyles}
`;

const instituteHeadingStyles = css`
  ${sharedHeadingStyles}
`;

const instituteSubHeadingStyles = css`
  ${sharedSubheadingStyles}
`;

export const InstituteContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 50px 0;
  width: 100%;

  @media only screen and (max-width: 600px) {
    margin: 0 0 25px 0;
  }
`;

export const InstituteContentGrid = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  @media (max-width: 1100px) {
    flex-direction: column;
  }
`;

export const InstituteContentBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const InstituteHeading = styled.h1`
  ${instituteHeadingStyles}
`;

export const InstituteDates = styled.div`
  ${instituteSubHeadingStyles}
  margin-left: auto;
  @media only screen and (max-width: 1100px) {
    margin-left: 0;
    margin-right: auto;
  }
`;

export const InstituteTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: left;
`;

export const InstituteText = styled.span`
  ${instituteBodyFontStyles}
  text-align: left;
`;
