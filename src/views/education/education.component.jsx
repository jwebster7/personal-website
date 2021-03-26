import React, {
  forwardRef,
  lazy,
  memo,
  Suspense,
  useEffect,
  useMemo,
  useState
} from "react";

import ContentContainer from "../../components/content-container/content-container.component";
import Institute from "../../components/institute/institute.component";
import SectionContainer from "../../components/section-container/section-container.component";
import SectionHeading from "../../components/section-heading/section-heading.component";
import Spinner from "../../components/spinner/spinner.component";

import data from "../../data/static.json";

const LazyTimeline = lazy(() =>
  import("../../components/timeline/timeline.component")
);

const Education = forwardRef((props, ref) => {
  const [instituteIdMap, setInstituteIdMap] = useState({});

  useEffect(() => {
    const educationList = data?.education;
    let instituteMap = {};
    educationList.forEach((institute) => {
      instituteMap[institute?.id] = institute;
    });
    setInstituteIdMap(instituteMap);
  }, [setInstituteIdMap]);

  const eventIdMap = useMemo(() => {
    return !!instituteIdMap
      ? Object.entries(instituteIdMap).reduce((obj, [id, institute]) => {
          obj[id] = (
            <Institute
              organization={institute?.organization}
              major={institute?.major}
              degree={institute?.degree}
              startDate={institute?.startDate}
              endDate={institute?.endDate}
              location={institute?.location}
              summary={institute?.summary}
              featuredTopics={institute?.featuredTopics}
            />
          );
          return obj;
        }, {})
      : {};
  }, [instituteIdMap]);

  return (
    <SectionContainer ref={ref} backgroundColor="primary">
      <SectionHeading heading="Education" />
      <ContentContainer>
        <Suspense fallback={<Spinner />}>
          <LazyTimeline idMap={instituteIdMap} eventMap={eventIdMap} />
        </Suspense>
      </ContentContainer>
    </SectionContainer>
  );
});

export default memo(Education);
