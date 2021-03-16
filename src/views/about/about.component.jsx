import React, { useEffect, useState, forwardRef } from "react";

import LinkedImage from "../../components/linked-image/linked-image.component";
import SectionContainer from "../../components/section-container/section-container.component";
import SectionHeading from "../../components/section-heading/section-heading.component";
import TextContainer from "../../components/text-container/text-container.component";
import Text from "../../components/text/text.component";

import profilePic from "../../assets/profile-pic-cropped.jpg";
import data from "../../data/static.json";

import {
  AboutContentContainer,
  AboutSkill,
  AboutSkillContainer
} from "./about.styles";
import { CustomImage } from "../../components/custom-image/custom-image.component";

const About = forwardRef((props, ref) => {
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
      title: data.about.title,
      body: data.about.body,
      skills: data.about.skills,
      linkedInLink: data.social.iconlinks.linkedin,
      loading: false
    });

    return () => {
      // cleanup any async tasks here.
    };
  }, []);

  return !state.loading ? (
    <SectionContainer ref={ref} backgroundColor="#336666">
      <SectionHeading heading={"Profile"} />
      <AboutContentContainer>
        <TextContainer>
          {Object.keys(state.body).map((key, index) => {
            const sectionContent = String(state.body[key]);
            return <Text key={index}>{sectionContent}</Text>;
          })}
          <AboutSkillContainer>
            {state.skills.map((skill, index) => {
              return <AboutSkill key={index}>{skill}</AboutSkill>;
            })}
          </AboutSkillContainer>
        </TextContainer>
        <LinkedImage
          url={state.linkedInLink}
          maxWidth="25em"
          overlayText="Contact Me"
        >
          <CustomImage
            src={profilePic}
            height="400px"
            width="400px"
            alt="avatar"
            loading="lazy"
          />
        </LinkedImage>
      </AboutContentContainer>
    </SectionContainer>
  ) : null;
});

export default About;
