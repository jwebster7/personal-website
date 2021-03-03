import React, { useEffect, useState, forwardRef } from "react";

import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import StyledHeading from "../styled-heading/styled-heading.component";

import profilePic from "../../assets/profile-pic-cropped.png";
import data from "../../shared/static.json";

import {
  AboutContainer,
  AboutContentContainer,
  AboutLinkedInLink,
  AboutSkill,
  AboutSkillContainer,
  AboutText,
  AboutTextContainer,
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
    <AboutContainer ref={ref}>
      <StyledHeading heading={"Profile"} />
      <AboutContentContainer>
        <AboutTextContainer>
          {Object.keys(state.body).map((key, index) => {
            const sectionContent = String(state.body[key]);
            return <AboutText key={index}>{sectionContent}</AboutText>;
          })}
          <AboutSkillContainer>
            {state.skills.map((skill, index) => {
              return <AboutSkill key={index}>{skill}</AboutSkill>;
            })}
          </AboutSkillContainer>

          <AboutText>
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
          </AboutText>
        </AboutTextContainer>

        <ProfilePictureContainer>
          <ProfilePicture
            className="profile-pic"
            src={profilePic}
            alt="avatar"
            loading="eager"
          />
        </ProfilePictureContainer>
      </AboutContentContainer>
    </AboutContainer>
  ) : null;
});

export default About;
