import React from "react";

import Heading from "../../components/heading/heading.component";
import SubHeading from "../../components/sub-heading/sub-heading.component";
import Text from "../../components/text/text.component";

import {
  InstituteContainer,
  InstituteContentGrid,
  InstituteContentBox
} from "./institute.styles";

const Institute = ({
  organization,
  degree,
  major,
  startDate,
  endDate,
  location,
  summary
}) => {
  const cityState =
    !!location.city && !!location.state
      ? `${location.city}, ${location.state}`
      : "";
  const startEndDate =
    !!startDate && !!endDate ? `${startDate} - ${endDate}` : "";

  const degreeMajor = !!degree && !!major ? `${degree} ${major}` : null;

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
      <Text>{summary}</Text>
    </InstituteContainer>
  );
};

export default Institute;
