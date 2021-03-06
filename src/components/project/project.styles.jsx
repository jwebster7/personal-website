import styled from "styled-components";
import {
  sharedBodyFontStyles,
  sharedHeadingStyles,
  sharedHorizontalLineStyles,
  sharedSubheadingStyles
} from "../shared.styles";

export const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 2em;
  background-color: #121113;
  margin: 50px;
  min-height: 600px;
  width: 600px;
  overflow: hidden;

  /* @media only screen and (max-width: 1300px) {
    min-width: 350px;
    width: 100%;
    margin: 0 0 50px 0;
  } */

  @media only screen and (max-width: 600px) {
    margin: 0 25px 50px 25px;
    min-height: 400px;
    min-width: 300px;
  }
`;

export const ProjectLinkedImageContainer = styled.a`
  opacity: 0.75;
  transition: opacity 0.3s ease-in-out;

  :hover {
    cursor: pointer;
    opacity: 1;

    img {
      transform: scale(1.1);
      transition: transform 5s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }
  }
`;

export const ProjectImage = styled.img`
  height: 335px;
  width: 600px;
  background-size: cover;
  background-position: center;

  @media only screen and (max-width: 900px) {
    width: 100%;
  }

  @media only screen and (max-width: 600px) {
    height: 167.5px;
    width: 300px;
  }
`;

export const ProjectTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
`;

export const ProjectTitle = styled.h1`
  ${sharedHeadingStyles}
  white-space: nowrap;
  transition: color 0.3s ease-in-out;
  font-weight: 600;
  margin-right: 25px;
  @media only screen and (max-width: 600px) {
    margin-right: 12.5px;
    white-space: nowrap;
  }
`;

export const ProjectTitleLine = styled.div`
  ${sharedHorizontalLineStyles}
  width: 100%;
`;

export const ProjectLinkText = styled.h1`
  ${sharedHeadingStyles}
  transition: color 0.3s ease-in-out;
  font-weight: 500;
  font-size: 1.4rem;
`;

export const ProjectTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 40px;

  @media only screen and (max-width: 600px) {
    padding: 25px;
  }
`;

export const ProjectLinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding-top: 25px;
  margin-top: auto;
`;

export const ProjectLink = styled.a`
  text-decoration: none;

  :hover > h1 {
    color: #5b9999;
    /* color: #121113; */
  }
`;

export const ProjectRepository = styled.a`
  margin-left: auto;
  text-decoration: none;
`;

export const ProjectText = styled.span`
  ${sharedBodyFontStyles}
`;
