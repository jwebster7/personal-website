import React from "react";

import HorizontalLine from "../horizontal-line/horizontal-line.component";
import NavigationLink from "../navigation-link/navigation-link.component";

import { TimelineNavigatorContainer } from "./timeline-navigator.styles";

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
      {navigationLinks}
      <HorizontalLine />
    </TimelineNavigatorContainer>
  );
};

export default TimelineNavigator;
