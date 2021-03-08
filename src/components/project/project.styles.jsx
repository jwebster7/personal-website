import styled from "styled-components";
import {
  sharedBodyFontStyles,
  sharedHeadingStyles,
  sharedHorizontalLineStyles
} from "../shared.styles";

export const ProjectContainer = styled.div`
  display: flex;
  border-radius: 1.5em;
  box-shadow: 0 0 25px 5px #121113;
  background-color: #121113;
  margin: 50px 0;
  min-height: 335px;
  height: auto;
  max-width: 1300px;
  overflow: hidden;

  @media only screen and (max-width: 1300px) {
    /* margin: 25px 0; */
    width: 600px;
  }

  @media only screen and (max-width: 900px) {
    margin: 25px 0;
    width: 500px;
  }

  @media only screen and (max-width: 750px) {
    height: 400px;
    width: 300px;
  }
`;

export const ProjectLinkedImageContainer = styled.a`
  opacity: 0.75;
  transition: opacity 0.3s ease-in-out;
  max-height: 335px;
  max-width: 600px;
  height: auto;
  width: 50%;

  :hover {
    cursor: pointer;
    opacity: 1;

    img {
      transform: scale(1.1);
      transition: transform 5s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }
  }

  @media only screen and (max-width: 1300px) {
    max-height: 335px;
    max-width: 600px;
    width: 100%;
  }

  @media only screen and (max-width: 750px) {
    width: 300px;
  }
`;

export const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;

  @media only screen and (max-width: 750px) {
    height: 167.5px;
  }
`;

export const ProjectTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ProjectTitle = styled.h1`
  ${sharedHeadingStyles}
  white-space: nowrap;
  transition: color 0.3s ease-in-out;
  font-weight: 600;
  margin-right: 25px;

  @media only screen and (max-width: 750px) {
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
  width: 50%;

  @media only screen and (max-width: 1300px) {
    height: 100%;
    width: 100%;
  }

  @media only screen and (max-width: 750px) {
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
