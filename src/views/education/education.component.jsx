import React, { forwardRef, memo, useEffect, useMemo, useState } from "react";

import ContentContainer from "../../components/content-container/content-container.component";
import Institute from "../../components/institute/institute.component";
import SectionContainer from "../../components/section-container/section-container.component";
import SectionHeading from "../../components/section-heading/section-heading.component";
import Timeline from "../../components/timeline/timeline.component";

// import { useAppData } from "../../context/app.provider";

import data from "../../data/static.json";

const Education = forwardRef((props, ref) => {
  const [instituteIdMap, setInstituteIdMap] = useState({});

  useEffect(() => {
    const educationList = data?.education;
    let instituteMap = new Map();
    educationList.forEach((institute) => {
      instituteMap[institute?.id] = institute;
    });
    setInstituteIdMap(instituteMap);
  }, [setInstituteIdMap]);

  const eventIdMap = useMemo(() => {
    return !!instituteIdMap
      ? Object.entries(instituteIdMap).reduce((obj, [id, institute]) => {
          console.log("re-calculating the eventIdMap in education");

          obj[id] = (
            <Institute
              organization={institute?.organization}
              major={institute?.major}
              degree={institute?.degree}
              startDate={institute?.startDate}
              endDate={institute?.endDate}
              location={institute?.location}
              summary={institute?.summary}
            />
          );
          return obj;
        }, {})
      : {};
  }, [instituteIdMap]);

  console.log("re-calculating the Education view");

  return (
    <SectionContainer ref={ref} backgroundColor="#121113">
      <SectionHeading heading={"Education"} />
      <ContentContainer>
        <Timeline idMap={instituteIdMap} eventMap={eventIdMap} />
      </ContentContainer>
    </SectionContainer>
  );
});

export default memo(Education);
