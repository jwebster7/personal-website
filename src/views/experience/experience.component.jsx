import React, { forwardRef, memo, useEffect, useMemo, useState } from "react";

import ContentContainer from "../../components/content-container/content-container.component";
import Position from "../../components/position/position.component";
import SectionContainer from "../../components/section-container/section-container.component";
import SectionHeading from "../../components/section-heading/section-heading.component";
import Timeline from "../../components/timeline/timeline.component";

import data from "../../data/static.json";

const Experience = forwardRef((props, ref) => {
  const [positionIdMap, setPositionMap] = useState({});

  useEffect(() => {
    const jobList = data?.experience;
    let positionMap = {};
    jobList.forEach((position) => {
      positionMap[parseInt(position?.id)] = position;
    });
    setPositionMap(positionMap);
  }, [setPositionMap]);

  const eventIdMap = useMemo(() => {
    return !!positionIdMap
      ? Object.entries(positionIdMap).reduce((obj, [id, position]) => {
          obj[id] = (
            <Position
              organization={position?.organization}
              title={position?.title}
              startDate={position?.startDate}
              endDate={position?.endDate}
              responsibilities={position?.responsibilities}
              summary={position?.summary}
              location={position?.location}
              technologies={position?.technologies}
            />
          );
          return obj;
        }, {})
      : {};
  }, [positionIdMap]);

  return (
    <SectionContainer ref={ref} backgroundColor="#121113">
      <SectionHeading heading={"Experience"} />
      <ContentContainer>
        <Timeline idMap={positionIdMap} eventMap={eventIdMap} />
      </ContentContainer>
    </SectionContainer>
  );
});

export default memo(Experience);
