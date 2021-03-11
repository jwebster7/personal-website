import React, { useState } from "react";

import TimelineNavigator from "../../components/timeline-navigator/timeline-navigator.component";
import HorizontalLine from "../horizontal-line/horizontal-line.component";

const Timeline = ({ idMap, eventMap }) => {
  const [selectedId, setSelectedId] = useState(0);
  const navigationList = !!idMap
    ? Object.entries(idMap).map(([key, value]) => {
        const { id, tab } = value;
        const isActive = parseInt(id) === parseInt(selectedId);
        return { id: id, tab: tab, active: isActive };
      })
    : null;

  const handleSelectTab = (id) => {
    setSelectedId(id);
  };

  return (
    <>
      <TimelineNavigator
        navigationList={navigationList}
        handleSelectTab={handleSelectTab}
      />
      {!!eventMap ? eventMap[selectedId] : null}
    </>
  );
};

export default Timeline;
