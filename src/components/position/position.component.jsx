import React from "react";
import {
  PositionContainer,
  PositionContentBox,
  PositionContentGrid,
  PositionDates,
  PositionHeading,
  PositionText
} from "./position.styles";

// TODO: redo this and the styling a bit to be responsive
const Position = ({
  organization,
  title,
  startDate,
  endDate,
  summary,
  location,
  exitStatement
}) => {
  const cityState =
    !!location.city && !!location.state
      ? `${location.city}, ${location.state}`
      : "";
  const startEndDate =
    !!startDate && !!endDate ? `${startDate} - ${endDate}` : "";
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
      <PositionText>{summary}</PositionText>
    </PositionContainer>
  );
};

export default Position;
