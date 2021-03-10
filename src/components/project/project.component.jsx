import React from "react";

import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  ProjectContainer,
  ProjectImage,
  ProjectLinkedImageContainer,
  ProjectLinkContainer,
  ProjectLinkText,
  ProjectLink,
  ProjectTech,
  ProjectTechnologies,
  ProjectText,
  ProjectCaptionContainer,
  ProjectTitle,
  ProjectTitleLine,
  ProjectTitleContainer
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
      <ProjectLinkedImageContainer
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="website link"
      >
        {/* <ProjectImage width="600px" height="335px" src={ProjectImageMap[id]} alt={title} /> */}
        <ProjectImage src={ProjectImageMap[id]} alt={title} />
      </ProjectLinkedImageContainer>
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
            {/* {"Visit Website "} */}
            <FontAwesomeIcon icon={faExternalLinkAlt} size="lg" />
          </ProjectLink>
          <ProjectLink
            href={repo}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="code repository"
          >
            {/* {"GitHub Repo "} */}
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
