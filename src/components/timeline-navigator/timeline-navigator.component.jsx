import React, { memo } from "react";

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

  console.log("re-rendering timeline navigator");

  return (
    <TimelineNavigatorContainer>
      {navigationLinks}
      <HorizontalLine />
    </TimelineNavigatorContainer>
  );
};

export default memo(TimelineNavigator);
