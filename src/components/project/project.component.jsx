import React from "react";
import {
  faCodeBranch,
  faExternalLinkAlt
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  ProjectContainer,
  ProjectImage,
  ProjectLinkedImageContainer,
  ProjectLinkContainer,
  ProjectLinkText,
  ProjectLink,
  ProjectText,
  ProjectTextContainer,
  ProjectTitle,
  ProjectTitleLine,
  ProjectTitleContainer
} from "./project.styles";

import { ProjectImageMap } from "../../assets/index";

/**
 * Cards for displaying project info.
 * Each card should have:
 *  1. Image
 *  2. Link to project hosted (if applicable)
 *  3. Link to the project repo.
 *  4. Summary
 */
const Project = ({ id, url, repo, title, summary, technologies }) => {
  return (
    <ProjectContainer>
      <ProjectLinkedImageContainer
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="website link"
      >
        <ProjectImage src={ProjectImageMap[id]} alt={title} />
      </ProjectLinkedImageContainer>
      <ProjectTextContainer>
        <ProjectTitleContainer>
          <ProjectTitle>{title}</ProjectTitle>
          <ProjectTitleLine />
        </ProjectTitleContainer>
        <ProjectText>{summary}</ProjectText>

        <ProjectLinkContainer>
          <ProjectLink
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="website link"
          >
            <ProjectLinkText>
              {"Visit Website "}
              <FontAwesomeIcon icon={faExternalLinkAlt} size="sm" />
            </ProjectLinkText>
          </ProjectLink>
          <ProjectLink
            href={repo}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="code repository"
          >
            <ProjectLinkText>
              {"GitHub Repo "}
              <FontAwesomeIcon icon={faCodeBranch} size="sm" />
            </ProjectLinkText>
          </ProjectLink>
        </ProjectLinkContainer>
      </ProjectTextContainer>
    </ProjectContainer>
  );
};

export default Project;
