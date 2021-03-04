import styled from "styled-components";

import {
  sharedBodyFontStyles,
  sharedSubheadingStyles,
  sharedSectionContainerStyles
} from "../shared.styles";

export const AboutContainer = styled.div`
  background-color: darkslategray;
  ${sharedSectionContainerStyles}
`;

export const AboutContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 0.6;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;

  width: 90%;

  @media only screen and (max-width: 1300px) {
    flex-direction: column-reverse;
    margin-top: 0;
    width: 95%;
  }

  @media only screen and (max-width: 1100px) {
    width: 100%;
  }
`;

// export const AboutHeading = styled.h1`
//   ${sharedHeadingStyles}
// `;

export const AboutTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* width: 60%; */

  @media only screen and (max-width: 1300px) {
    width: 100%;
  }
`;

export const AboutText = styled.span`
  ${sharedBodyFontStyles}
`;

export const AboutSkillContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 12.5px 25px;
  /* grid-template-rows: 50px 50px 50px; */
  justify-items: left;
  margin: 25px 0 0 25px;
`;

export const AboutSkill = styled.li`
  ${sharedBodyFontStyles}
  white-space: nowrap;
  margin: 0;
`;

export const ProfilePictureContainer = styled.div`
  max-width: 415px;
  max-height: 450px;
  margin: 0 0 0 75px;
  padding: 0;
  border-radius: 33px;
  border: 0;
  /* overflow: hidden; */
  @media only screen and (max-width: 1300px) {
    margin: 0 0 50px 0;
  }
`;

export const ProfilePicture = styled.img`
  margin: 0;
  padding: 0;
  width: 415px;
  height: 450px;
  border: 0 transparent;
  border-radius: 100%;
  background-color: #121113;
  background-position: center;
`;

export const AboutLinkedInLink = styled.a`
  text-decoration: none;
  color: #fff5ee;
  transition: color 0.3s ease-in-out;

  :hover {
    color: #121113;
  }
`;
