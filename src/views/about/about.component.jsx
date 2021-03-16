import React, { useEffect, useState, forwardRef } from "react";

import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import SectionContainer from "../../components/section-container/section-container.component";
import SectionHeading from "../../components/section-heading/section-heading.component";
import TextContainer from "../../components/text-container/text-container.component";
import Text from "../../components/text/text.component";

import profilePic from "../../assets/profile-pic-cropped.jpg";
import data from "../../data/static.json";

import {
  AboutContentContainer,
  AboutLinkedInLink,
  AboutSkill,
  AboutSkillContainer,
  ProfilePicture,
  ProfilePictureContainer
} from "./about.styles";

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

          <Text>
            {
              "If you'd like to work together or have any questions, feel free to reach out to me on "
            }
            <AboutLinkedInLink
              href={state.linkedInLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="github"
            >
              {"LinkedIn "}
              <FontAwesomeIcon icon={faExternalLinkAlt} size="sm" />
            </AboutLinkedInLink>
            {"."}
          </Text>
        </TextContainer>

        <ProfilePictureContainer>
          <ProfilePicture
            className="profile-pic"
            src={profilePic}
            alt="avatar"
            loading="eager"
          />
        </ProfilePictureContainer>
      </AboutContentContainer>
    </SectionContainer>
  ) : null;
});

export default About;
