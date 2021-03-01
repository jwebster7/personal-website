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
  margin: 0 0 30px 0;
`;

export const InstituteContentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(575px, 1fr));
  @media (max-width: 1300px) {
  }
`;

export const InstituteContentBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const InstituteHeading = styled.h1`
  ${instituteHeadingStyles}/* font-size: 2.25rem; */
  /* margin-top: 0; */
`;

export const InstituteDates = styled.p`
  ${instituteSubHeadingStyles}
  margin-left: auto;
  @media only screen and (max-width: 1300px) {
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

export const InstituteText = styled.p`
  ${instituteBodyFontStyles}
  text-align: left;
`;

// const InstituteHeadingStyles = css`
//   ${sharedHeadingStyles}
// `;

// export const InstituteContainer = styled.div`
//   /* display: flex;
//   flex-direction: row;
//   justify-content: space-between; */
//   /* align-items: center; */
//   /* width: 80%; */
//   display: grid;
//   // there's probably a better way to get this functionality
//   grid-template-columns: repeat(auto-fit, minmax(700px, 1fr));
//   width: 100%;
// `;

// export const InstituteHeading = styled.h1`
//   ${InstituteHeadingStyles}
//   /* font-size: 2.25rem; */
//   /* margin-top: 0; */
// `;

// export const InstituteDate = styled.p`
//   ${InstituteHeadingStyles}
//   /* font-size: 1.75rem; */
//   /* font-weight: 600; */
//   margin-bottom: 0;
// `;

// export const InstituteBlock = styled.div`
//   /* width: 50%; */
// `;

// export const InstituteTextContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: flex-start;
//   align-items: left;
// `;

// export const InstituteText = styled.p`
//   ${sharedBodyFontStyles}
//   text-align: left;
// `;
