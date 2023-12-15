import React from "react";

import ChipContainer from "../chip-container/chip-container.component";
import CustomChip from "../custom-chip/custom-chip.component";
import Heading from "../../components/heading/heading.component";
import SubHeading from "../../components/sub-heading/sub-heading.component";
import Text from "../../components/text/text.component";

import {
  PositionContainer,
  PositionContentBox,
  PositionContentGrid
} from "./position.styles";

const Position = ({
  organization,
  title,
  startDate,
  endDate,
  responsibilities,
  summary,
  location,
  technologies
}) => {
  const cityState =
    location.remote ? `Remote` : !!location.city && !!location.state
      ? `${location.city}, ${location.state}`
      : "";
  const startEndDate =
    !!startDate && !!endDate ? `${startDate} - ${endDate}` : "";

  const technologyChips = !!technologies
    ? technologies.map((tech, index) => {
        return (
          <CustomChip key={index} useAlt>
            {tech}
          </CustomChip>
        );
      })
    : "";
  const jobDuties = !!responsibilities ? responsibilities : "";

  return (
    <PositionContainer>
      <PositionContentGrid>
        <PositionContentBox>
          <Heading>{title}</Heading>
          <Heading>{organization}</Heading>
        </PositionContentBox>
        <PositionContentBox>
          <SubHeading>{startEndDate}</SubHeading>
          <SubHeading>{cityState}</SubHeading>
        </PositionContentBox>
      </PositionContentGrid>
      <PositionContentBox>
        <Text>{summary}</Text>
        <Text>{`Responsibilities: ${jobDuties}`}</Text>
        <ChipContainer>{technologyChips}</ChipContainer>
      </PositionContentBox>
    </PositionContainer>
  );
};

export default Position;
