import React from "react";
import {
  PositionContainer,
  PositionContentBox,
  PositionContentGrid,
  PositionDates,
  PositionHeading,
  PositionText
} from "./position.styles";

const Position = ({
  organization,
  title,
  startDate,
  endDate,
  summary,
  location,
  technologies,
  exitStatement
}) => {
  const cityState =
    !!location.city && !!location.state
      ? `${location.city}, ${location.state}`
      : "";
  const startEndDate =
    !!startDate && !!endDate ? `${startDate} - ${endDate}` : "";
  const technologyString = !!technologies ? technologies.join(", ") : "";

  return (
    <PositionContainer>
      <PositionContentGrid>
        <PositionContentBox>
          <PositionHeading>{title}</PositionHeading>
          <PositionHeading>{organization}</PositionHeading>
        </PositionContentBox>
        <PositionContentBox>
          <PositionDates>{startEndDate}</PositionDates>
          <PositionDates>{cityState}</PositionDates>
        </PositionContentBox>
      </PositionContentGrid>
      <PositionContentBox>
        <PositionText>{summary}</PositionText>
        <PositionText>{`Technologies: ${technologyString}`}</PositionText>
      </PositionContentBox>
    </PositionContainer>
  );
};

export default Position;
