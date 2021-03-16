import React, { memo } from "react";

import HorizontalLine from "../horizontal-line/horizontal-line.component";
import NavigationLink from "../navigation-link/navigation-link.component";

import {
  TimelineLinkContainer,
  TimelineNavigatorContainer
} from "./timeline-navigator.styles";

const TimelineNavigator = ({ navigationList, handleSelectTab }) => {
  const navigationLinks = !!navigationList
    ? navigationList.map(({ id, tab, active }) => (
        <NavigationLink
          key={id}
          onClick={() => handleSelectTab(id)}
          active={!!active}
        >
          {tab}
        </NavigationLink>
      ))
    : null;

  return (
    <TimelineNavigatorContainer>
      <TimelineLinkContainer>{navigationLinks}</TimelineLinkContainer>
      <HorizontalLine />
    </TimelineNavigatorContainer>
  );
};

export default memo(TimelineNavigator);
