import styled from "styled-components";

import Heading from "../../components/heading/heading.component";
import HorizontalLine from "../horizontal-line/horizontal-line.component";

export const ProjectContainer = styled.div`
  margin: 3rem 0;
  width: 100%;
  display: flex;
  align-items: center;

  @media only screen and (max-width: 1410px) {
    align-items: center;
  }

  @media only screen and (max-width: 900px) {
    margin: 0 0 1em;
  }
`;

export const ProjectCaptionContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  @media only screen and (max-width: 1410px) {
    width: 100%;
    padding: 3em 0;
    max-width: 35em;
  }

  @media only screen and (max-width: 768px) {
    padding: 1em 0;
  }
`;

export const ProjectLinkContainer = styled.div`
  margin: auto 0 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const ProjectLink = styled.a`
  margin: 0 0 0 1em;
  display: flex;
  align-items: center;
  color: #fff5ee;
  text-decoration: none;
  font-weight: 500;
  font-size: 1.4rem;
  white-space: nowrap;

  svg {
    opacity: 0.75;
    transition: opacity 300ms ease-in-out, transform 300ms ease-in-out;
    :hover {
      text-decoration: none;
      transform: scale(1.1);
      opacity: 1;
    }
  }

  @media only screen and (max-width: 768px) {
    margin: 0 0 0 1em;
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

export const ProjectTitle = styled(Heading)`
  @media only screen and (max-width: 768px) {
    white-space: nowrap;
    align-content: center;
  }

  @media only screen and (max-width: 500px) {
    margin: 0 auto 0 0;
  }
`;

export const ProjectHorizontalLine = styled(HorizontalLine)`
  @media only screen and (max-width: 500px) {
    display: none;
    margin: 0;
  }
`;
