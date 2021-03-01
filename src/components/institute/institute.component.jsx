import React from "react";

import {
  InstituteContainer,
  InstituteDates,
  InstituteText,
  InstituteHeading,
  InstituteContentGrid,
  InstituteContentBox
} from "./institute.styles";

const Institute = ({
  institution,
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
          <InstituteHeading>{degreeMajor}</InstituteHeading>
          <InstituteHeading>{institution}</InstituteHeading>
        </InstituteContentBox>

        <InstituteContentBox>
          <InstituteDates>{startEndDate}</InstituteDates>
          <InstituteDates>{cityState}</InstituteDates>
        </InstituteContentBox>
      </InstituteContentGrid>
      <InstituteText>{summary}</InstituteText>
    </InstituteContainer>
  );
};

export default Institute;
