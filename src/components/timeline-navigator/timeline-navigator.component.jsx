import React, { memo } from "react";

import {
  TimelineHorizontalLine,
  TimelineLinkContainer,
  TimelineCustomLink,
  TimelineNavigatorContainer
} from "./timeline-navigator.styles";

const TimelineNavigator = ({ navigationList, handleSelectTab }) => {
  const CustomLinks = !!navigationList
    ? navigationList.map(({ id, tab, active }) => (
        <TimelineCustomLink
          key={id}
          onClick={() => handleSelectTab(id)}
          active={!!active}
        >
          {tab}
        </TimelineCustomLink>
      ))
    : null;

  return (
    <TimelineNavigatorContainer>
      <TimelineLinkContainer>{CustomLinks}</TimelineLinkContainer>
      <TimelineHorizontalLine />
    </TimelineNavigatorContainer>
  );
};

export default memo(TimelineNavigator);
