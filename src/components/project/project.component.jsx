import React, { lazy, memo, Suspense } from "react";

import ChipContainer from "../../components/chip-container/chip-container.component";
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
  ProjectHorizontalLine,
  ProjectTitle,
  ProjectTitleContainer
} from "./project.styles";

import { ProjectImageMap } from "../../assets/index";
import Spinner from "../spinner/spinner.component";

const LazyCustomImage = lazy(() =>
  import("../../components/custom-image/custom-image.component")
);

const Project = ({ id, url, repo, title, summary, technologies }) => {
  const technologyChips = !!technologies
    ? technologies.map((tech, index) => {
        return <CustomChip key={index}>{tech}</CustomChip>;
      })
    : null;

  const projectImageSrc = ProjectImageMap[id];

  return (
    <ProjectContainer>
      <LinkedImage url={url} maxWidth="35em" overlayText={title}>
        <Suspense fallback={<Spinner />}>
          <LazyCustomImage
            src={projectImageSrc}
            alt={title}
            height="280px"
            width="500px"
            loading="lazy"
          />
        </Suspense>
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
        <ChipContainer>{technologyChips}</ChipContainer>
      </ProjectCaptionContainer>
    </ProjectContainer>
  );
};

export default memo(Project);
