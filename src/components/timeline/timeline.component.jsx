import React, { memo, useMemo, useState } from "react";

import TimelineNavigator from "../../components/timeline-navigator/timeline-navigator.component";

const Timeline = ({ idMap, eventMap }) => {
  const [selectedId, setSelectedId] = useState(2);
  const navigationList = useMemo(() => {
    return !!idMap
      ? Object.entries(idMap).map(([key, value]) => {
          const { id, tab } = value;
          const isActive = parseInt(id) === parseInt(selectedId);
          return { id: id, tab: tab, active: isActive };
        })
      : null;
  }, [idMap, selectedId]);

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

export default memo(Timeline);
