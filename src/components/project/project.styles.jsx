import styled from "styled-components";

import ChipContainer from "../../components/chip-container/chip-container.component";
import Heading from "../../components/heading/heading.component";
import Text from "../../components/text/text.component";
import HorizontalLine from "../horizontal-line/horizontal-line.component";

export const ProjectContainer = styled.div`
  margin: 3rem 0;

  display: flex;
  align-items: center;
  width: 100%;

  @media only screen and (max-width: 1200px) {
    align-items: center;
  }

  @media only screen and (max-width: 900px) {
    margin: 0 0 1em;
  }
`;

export const ProjectImageLink = styled.a`
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  transition: transform 600ms ease-in-out;

  * {
    border-radius: 0.5em;
  }

  :hover {
    cursor: pointer;
    transform: scale(1.05);
  }
`;

export const ProjectImage = styled.img`
  display: block;
  background-size: cover;
  background-position: center;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const ProjectImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;

  margin: 0;
  padding: 2em;

  display: flex;
  justify-content: center;
  align-items: center;

  opacity: 0;
  background: rgba(18, 17, 19, 0.75);
  transition: opacity 300ms ease-in-out;

  h1 {
    margin: 0 1em;
  }

  :hover {
    opacity: 1;
  }
`;

export const ProjectCaptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  @media only screen and (max-width: 1200px) {
    padding: 3em 0;
    max-width: 37.5em;
    width: 100%;
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
  display: flex;
  align-items: center;

  color: #fff5ee;
  text-decoration: none;
  margin: 0 0 0 1em;
  font-weight: 500;
  font-size: 1.4rem;
  white-space: nowrap;

  svg {
    transition: color 300ms ease-in-out;
    :hover {
      text-decoration: none;
      color: #121113;
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
  font-weight: 600;

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

export const ProjectTech = styled(Text)`
  margin: 1em 1em 0 0;
  padding: 0.5em 1em;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 0.5em;
  background: rgba(18, 17, 19, 0.6);
  text-align: center;
  font-size: 0.75rem;
  font-style: italic;
  white-space: nowrap;

  @media screen and (max-width: 768px) {
    font-size: 0.5rem;
    margin: 1em 1em 0 0;
  }
`;

export const ProjectChipContainer = styled(ChipContainer)`
  margin: 1em 0;
  width: 100%;

  display: flex;
  flex: 1 1 auto;
  justify-content: space-between;
  flex-wrap: wrap;
`;
