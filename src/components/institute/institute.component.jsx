import React from "react";

import CustomChip from "../custom-chip/custom-chip.component";
import Heading from "../../components/heading/heading.component";
import SubHeading from "../../components/sub-heading/sub-heading.component";
import Text from "../../components/text/text.component";

import {
  InstituteContainer,
  InstituteContentGrid,
  InstituteContentBox
} from "./institute.styles";
import ChipContainer from "../chip-container/chip-container.component";

const Institute = ({
  organization,
  degree,
  major,
  startDate,
  endDate,
  location,
  summary,
  featuredTopics
}) => {
  const cityState =
    !!location.city && !!location.state
      ? `${location.city}, ${location.state}`
      : "";
  const startEndDate =
    !!startDate && !!endDate ? `${startDate} - ${endDate}` : "";

  const degreeMajor = !!degree && !!major ? `${degree} ${major}` : null;

  const topics = !!featuredTopics
    ? featuredTopics.map((topic, index) => {
        return (
          <CustomChip key={index} useAlt>
            {topic}
          </CustomChip>
        );
      })
    : "";

  return (
    <InstituteContainer>
      <InstituteContentGrid>
        <InstituteContentBox>
          <Heading>{degreeMajor}</Heading>
          <Heading>{organization}</Heading>
        </InstituteContentBox>

        <InstituteContentBox>
          <SubHeading>{startEndDate}</SubHeading>
          <SubHeading>{cityState}</SubHeading>
        </InstituteContentBox>
      </InstituteContentGrid>
      <InstituteContentBox>
        <Text>{summary}</Text>
        <ChipContainer>{topics}</ChipContainer>
      </InstituteContentBox>
    </InstituteContainer>
  );
};

export default Institute;
