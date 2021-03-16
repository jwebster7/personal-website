import React, { memo } from "react";

import CustomChip from "../../components/custom-chip/custom-chip.component";
import LinkedImage from "../../components/linked-image/linked-image.component";
import Text from "../../components/text/text.component";

import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  ProjectContainer,
  ProjectLink,
  ProjectCaptionContainer,
  ProjectChipContainer,
  ProjectHorizontalLine,
  ProjectTitle,
  ProjectTitleContainer
} from "./project.styles";

import { ProjectImageMap } from "../../assets/index";
import { CustomImage } from "../custom-image/custom-image.component";

const Project = ({ id, url, repo, title, summary, technologies }) => {
  const technologyChips = !!technologies
    ? technologies.map((tech, index) => {
        return <CustomChip key={index}>{tech}</CustomChip>;
      })
    : null;

  return (
    <ProjectContainer>
      <LinkedImage url={url} maxWidth="35em" overlayText={title}>
        <CustomImage
          src={ProjectImageMap[id]}
          alt={title}
          height="280px"
          width="500px"
          loading="lazy"
        />
      </LinkedImage>
      <ProjectCaptionContainer>
        <ProjectTitleContainer>
          <ProjectTitle>{title}</ProjectTitle>
          <ProjectHorizontalLine />
          <ProjectLink
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="website link"
          >
            <FontAwesomeIcon icon={faExternalLinkAlt} />
          </ProjectLink>
          <ProjectLink
            href={repo}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="code repository"
          >
            <FontAwesomeIcon icon={faGithub} />
          </ProjectLink>
        </ProjectTitleContainer>
        <Text>{summary}</Text>
        <ProjectChipContainer>{technologyChips}</ProjectChipContainer>
      </ProjectCaptionContainer>
    </ProjectContainer>
  );
};

export default memo(Project);
