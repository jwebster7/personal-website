import React, { useEffect, useState, forwardRef } from "react";

import StyledHeading from "../styled-heading/styled-heading.component";

import profilePic from "../../assets/profile-pic-cropped.png";
import staticData from "../../shared/mockData.json";

import {
  AboutContainer,
  AboutContentContainer,
  AboutText,
  AboutTextContainer,
  ProfilePicture,
  ProfilePictureContainer
} from "./about.styles";

const About = forwardRef((props, ref) => {
  const [state, setState] = useState({
    title: "",
    body: "",
    loading: true
  });

  /* Read in static content here instead of API call. */
  useEffect(() => {
    setState({
      title: staticData.about.title,
      body: staticData.about.body,
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
        <ProfilePictureContainer>
          <ProfilePicture
            className="profile-pic"
            src={profilePic}
            alt="avatar"
            loading="eager"
          />
        </ProfilePictureContainer>
        <AboutTextContainer>
          {Object.keys(state.body).map((key, index) => {
            const sectionContent = String(state.body[key]);
            return <AboutText key={index}>{sectionContent}</AboutText>;
          })}
        </AboutTextContainer>
      </AboutContentContainer>
    </AboutContainer>
  ) : null;
});

export default About;
