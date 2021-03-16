import React, { memo } from "react";

import {
  TimelineHorizontalLine,
  TimelineLinkContainer,
  TimelineNavigationLink,
  TimelineNavigatorContainer
} from "./timeline-navigator.styles";

const TimelineNavigator = ({ navigationList, handleSelectTab }) => {
  const navigationLinks = !!navigationList
    ? navigationList.map(({ id, tab, active }) => (
        <TimelineNavigationLink
          key={id}
          onClick={() => handleSelectTab(id)}
          active={!!active}
        >
          {tab}
        </TimelineNavigationLink>
      ))
    : null;

  return (
    <TimelineNavigatorContainer>
      <TimelineLinkContainer>{navigationLinks}</TimelineLinkContainer>
      <TimelineHorizontalLine />
    </TimelineNavigatorContainer>
  );
};

export default memo(TimelineNavigator);
