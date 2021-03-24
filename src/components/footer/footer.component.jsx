import React, { memo, useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebookSquare,
  faGithub,
  faLinkedin,
  faSpotify
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

import data from "../../data/static.json";

import { FooterContainer, SocialIcon } from "./footer.styles";

const Footer = () => {
  const [iconLinks, setIconLinks] = useState({});

  useEffect(() => {
    const iconLinks = !!data.social.iconlinks ? data.social.iconlinks : {};
    setIconLinks(iconLinks);
  }, [setIconLinks]);

  return !!iconLinks ? (
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
        href={iconLinks.mailto}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="facebook"
      >
        <FontAwesomeIcon icon={faEnvelope} size="lg" />
      </SocialIcon>
    </FooterContainer>
  ) : null;
};

export default memo(Footer);
