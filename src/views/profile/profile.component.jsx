import React, {
  forwardRef,
  lazy,
  memo,
  Suspense,
  useEffect,
  useState
} from "react";

import ChipContainer from "../../components/chip-container/chip-container.component";
import CustomChip from "../../components/custom-chip/custom-chip.component";
import LinkedImage from "../../components/linked-image/linked-image.component";
import SectionContainer from "../../components/section-container/section-container.component";
import SectionHeading from "../../components/section-heading/section-heading.component";
import Spinner from "../../components/spinner/spinner.component";
import TextContainer from "../../components/text-container/text-container.component";
import Text from "../../components/text/text.component";

import profilePic from "../../assets/profile-pic-cropped.jpg";
import data from "../../data/static.json";

import { ProfileContentContainer } from "./profile.styles";

const LazyCustomImage = lazy(() =>
  import("../../components/custom-image/custom-image.component")
);

const Profile = forwardRef((props, ref) => {
  const [state, setState] = useState({
    title: "",
    body: "",
    skills: [],
    linkedInLink: "",
    loading: true
  });

  /* Read in static content here instead of API call. */
  useEffect(() => {
    setState({
      title: data.profile.title,
      body: data.profile.body,
      skills: data.profile.skills,
      linkedInLink: data.social.iconlinks.linkedin,
      loading: false
    });

    return () => {
      // cleanup any async tasks here.
    };
  }, []);

  const profileText = !!state.body
    ? Object.keys(state.body).map((key, index) => {
        const sectionContent = String(state.body[key]);
        return <Text key={index}>{sectionContent}</Text>;
      })
    : null;

  const ProfileSkills = !!state.skills
    ? state.skills.map((skill, index) => {
        return <CustomChip key={index}>{skill}</CustomChip>;
      })
    : null;

  return !state.loading ? (
    <SectionContainer ref={ref} backgroundColor="#336666">
      <SectionHeading heading="Profile" />
      <ProfileContentContainer>
        <TextContainer>
          {profileText}
          <ChipContainer>{ProfileSkills}</ChipContainer>
        </TextContainer>
        <LinkedImage
          url={state.linkedInLink}
          maxWidth="25em"
          overlayText="Contact Me"
        >
          <Suspense fallback={<Spinner />}>
            <LazyCustomImage
              src={profilePic}
              height="400px"
              width="400px"
              alt="avatar"
              loading="lazy"
            />
          </Suspense>
        </LinkedImage>
      </ProfileContentContainer>
    </SectionContainer>
  ) : null;
});

export default memo(Profile);
