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
  flex-grow: 1;
  border-radius: 2em;
  /* border: 2.5px dotted #fff5ee; */
  background-color: #121113;
  /* min-height: 600px; */
  width: 550px;
  overflow: hidden;
`;

export const ProjectLinkedImageContainer = styled.a`
  height: 50%;
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
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
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
`;

export const ProjectTitleLine = styled.div`
  ${sharedHorizontalLineStyles}
  width: 100%;
`;

export const ProjectLinkText = styled.h1`
  ${sharedSubheadingStyles}
  transition: color 0.3s ease-in-out;
  font-weight: 500;
  font-size: 1.4rem;
`;

export const ProjectTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 40px;
`;

export const ProjectLinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-top: 50px;
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
  text-align: justify;

`;
