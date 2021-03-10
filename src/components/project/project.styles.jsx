import styled from "styled-components";
import {
  sharedBodyFontStyles,
  sharedHeadingStyles,
  sharedHorizontalLineStyles
} from "../shared.styles";

export const ProjectContainer = styled.div`
  display: flex;
  margin: 50px 0;
  min-height: 335px;
  height: auto;
  max-width: 1500px;
  width: 90%;
  align-items: center;

  @media only screen and (max-width: 1300px) {
    align-items: center;
  }

  @media only screen and (max-width: 900px) {
    margin: 25px 0;
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
  border-radius: 1em;
  background-size: cover;
  background-position: center;

  @media only screen and (max-width: 750px) {
    width: 100%;
  }
`;

export const ProjectCaptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 0 40px;
  /* background: rgba(18, 17, 19, 0.6); */

  @media only screen and (max-width: 1300px) {
    padding: 40px 0;
    height: 100%;
    width: 600px;
  }

  @media only screen and (max-width: 750px) {
    padding: 20px 0;
    width: 100%;
  }
`;

export const ProjectLinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-top: auto;
  margin: 0;
`;

export const ProjectLink = styled.a`
  display: flex;
  align-items: center;

  color: #fff5ee;
  text-decoration: none;
  margin: 0 0 0 1em;
  transition: color 0.3s ease-in-out;
  font-weight: 500;
  font-size: 1.4rem;
  white-space: nowrap;

  :hover > svg {
    text-decoration: none;
    color: #5b9999;
  }

  @media only screen and (max-width: 750px) {
    * {
      font-size: 1rem;
    }
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
  margin-right: 1em;

  @media only screen and (max-width: 750px) {
    white-space: nowrap;
    margin: 0 1em 0 0;
    align-content: center;
  }
`;

export const ProjectTitleLine = styled.div`
  ${sharedHorizontalLineStyles}
  width: 100%;
`;

export const ProjectText = styled.span`
  ${sharedBodyFontStyles}
`;

export const ProjectTech = styled.span`
  ${sharedBodyFontStyles}
  margin: 1em 1em 0 0;
  padding: 0.5em 1em;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 1em;
  background: rgba(18, 17, 19, 0.6);
  text-align: center;
  font-size: 0.75rem;
  font-style: italic;
  white-space: nowrap;

  @media screen and (max-width: 750px) {
    font-size: 0.5rem;
    margin: 1em 1em 0 0;
  }
`;

export const ProjectTechnologies = styled.div`
  margin: 1em 0;
  width: 100%;
  display: flex;
  flex: 1 1 auto;
  justify-content: space-between;
  flex-wrap: wrap;
`;
