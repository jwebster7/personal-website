import styled from "styled-components";

import {
  sharedBodyFontStyles,
  sharedSectionContainerStyles
} from "../../components/shared.styles";

export const AboutContainer = styled.div`
  background-color: #336666;
  ${sharedSectionContainerStyles}
`;

export const AboutContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 0.6;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;

  width: 80%;

  @media only screen and (max-width: 1300px) {
    flex-direction: column-reverse;
    justify-content: space-evenly;
    margin-top: 0;
    width: 90%;
  }

  @media only screen and (max-width: 1100px) {
    width: 100%;
  }
`;

export const AboutTextContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 1300px) {
    width: 100%;
  }
`;

export const AboutText = styled.span`
  ${sharedBodyFontStyles}
`;

export const AboutSkillContainer = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 12.5px 25px;
  justify-items: left;
  margin: 25px 0 0 25px;

  @media only screen and (max-width: 750px) {
    grid-gap: 0;
    margin: 0 0 0 12.5px;
  }
`;

export const AboutSkill = styled.li`
  ${sharedBodyFontStyles}
  white-space: nowrap;
  margin: 0;
`;

export const ProfilePictureContainer = styled.div`
  margin: 0 0 0 75px;
  padding: 0;
  border: 0;
  background-color: #336666;
  @media only screen and (max-width: 1300px) {
    margin: 0 0 25px 0;
  }
`;

export const ProfilePicture = styled.img`
  display: block;
  margin: 0;
  padding: 0;
  height: 400px;
  width: 360px;
  border-radius: .5em;
  background-color: #336666;
  background-position: center;

  @media only screen and (max-width: 1300px) {
    max-height: 350px;
    max-width: 310px;
  }

  @media only screen and (max-width: 750px) {
    max-height: 300px;
    max-width: 275px;
  }
`;

export const AboutLinkedInLink = styled.a`
  text-decoration: none;
  color: #FFF5EE;
  transition: color 0500ms ease;

  :hover {
    color: #121113;
  }
`;
