import React from "react";

import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  ProjectContainer,
  ProjectImage,
  ProjectImageLink,
  ProjectLink,
  ProjectTech,
  ProjectTechnologies,
  ProjectText,
  ProjectCaptionContainer,
  ProjectTitle,
  ProjectTitleLine,
  ProjectTitleContainer,
  ProjectImageOverlay
} from "./project.styles";

import { ProjectImageMap } from "../../assets/index";

const Project = ({ id, url, repo, title, summary, technologies }) => {
  const technologyDisplay = !!technologies
    ? technologies.map((tech, index) => {
        return <ProjectTech key={index}>{tech}</ProjectTech>;
      })
    : null;
  return (
    <ProjectContainer>
      <ProjectImageLink
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="website link"
      >
        <ProjectImageOverlay>
          <ProjectTitleLine />
          <ProjectTitle>Visit Site</ProjectTitle>
          <ProjectTitleLine />
        </ProjectImageOverlay>
        <ProjectImage src={ProjectImageMap[id]} alt={title} />
      </ProjectImageLink>
      <ProjectCaptionContainer>
        <ProjectTitleContainer>
          <ProjectTitle>{title}</ProjectTitle>
          <ProjectTitleLine />
          <ProjectLink
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="website link"
          >
            <FontAwesomeIcon icon={faExternalLinkAlt} size="lg" />
          </ProjectLink>
          <ProjectLink
            href={repo}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="code repository"
          >
            <FontAwesomeIcon icon={faGithub} size="lg" />
          </ProjectLink>
        </ProjectTitleContainer>
        <ProjectText>{summary}</ProjectText>
        <ProjectTechnologies>{technologyDisplay}</ProjectTechnologies>
      </ProjectCaptionContainer>
    </ProjectContainer>
  );
};

export default Project;
