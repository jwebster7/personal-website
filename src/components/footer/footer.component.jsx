import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebookSquare,
  faGithub,
  faLinkedin,
  faSpotify
} from "@fortawesome/free-brands-svg-icons";
import { faCodeBranch } from "@fortawesome/free-solid-svg-icons";

import staticData from "../../shared/mockData.json";

import { FooterContainer, SocialIcon } from "./footer.styles";

const Footer = () => {
  const iconLinks = !!staticData.social.iconlinks
    ? staticData.social.iconlinks
    : {};
  return (
    <FooterContainer>
      <SocialIcon
        href={iconLinks.facebook}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="facebook"
      >
        <FontAwesomeIcon icon={faFacebookSquare} size="lg" />
      </SocialIcon>
      <SocialIcon
        href={iconLinks.instagram}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="instagram"
      >
        <FontAwesomeIcon icon={faInstagram} size="lg" />
      </SocialIcon>
      <SocialIcon
        href={iconLinks.spotify}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="spotify"
      >
        <FontAwesomeIcon icon={faSpotify} size="lg" />
      </SocialIcon>
      <SocialIcon
        href={iconLinks.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="linkedin"
      >
        <FontAwesomeIcon icon={faLinkedin} size="lg" />
      </SocialIcon>
      <SocialIcon
        href={iconLinks.github}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="github"
      >
        <FontAwesomeIcon icon={faGithub} size="lg" />
      </SocialIcon>
      <SocialIcon
        href={iconLinks.siterepo}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="facebook"
      >
        <FontAwesomeIcon icon={faCodeBranch} size="lg" />
      </SocialIcon>
    </FooterContainer>
  );
};

export default Footer;

  /* <FooterContainer>
<SocialIconContainer>
  <SocialIcon
    href={iconLinks.facebook}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="facebook"
  >
    <FontAwesomeIcon icon={faFacebookSquare} size="lg" />
  </SocialIcon>
  <SocialIcon
    href={iconLinks.instagram}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="instagram"
  >
    <FontAwesomeIcon icon={faInstagram} size="lg" />
  </SocialIcon>
  <SocialIcon
    href={iconLinks.spotify}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="spotify"
  >
    <FontAwesomeIcon icon={faSpotify} size="lg" />
  </SocialIcon>
  <SocialIcon
    href={iconLinks.linkedin}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="linkedin"
  >
    <FontAwesomeIcon icon={faLinkedin} size="lg" />
  </SocialIcon>
  <SocialIcon
    href={iconLinks.github}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="github"
  >
    <FontAwesomeIcon icon={faGithub} size="lg" />
  </SocialIcon>
  <SocialIcon
    href={iconLinks.siterepo}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="facebook"
  >
    <FontAwesomeIcon icon={faCodeBranch} size="lg" />
  </SocialIcon>
</SocialIconContainer>
<CreatedByContainer>Created by Joseph Webster</CreatedByContainer>
</FooterContainer> */

