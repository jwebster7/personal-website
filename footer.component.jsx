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

const Footer = () => {
  const iconLinks = !!staticData.social.iconlinks
    ? staticData.social.iconlinks
    : {};
  return (
    <footer className="footer">
      <div className="social-icon-container">
        <a
          href={iconLinks.facebook}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="facebook"
        >
          <FontAwesomeIcon icon={faFacebookSquare} size="lg" />
        </a>
        <a
          href={iconLinks.instagram}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="instagram"
        >
          <FontAwesomeIcon icon={faInstagram} size="lg" />
        </a>
        <a
          href={iconLinks.spotify}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="spotify"
        >
          <FontAwesomeIcon icon={faSpotify} size="lg" />
        </a>
        <a
          href={iconLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="linkedin"
        >
          <FontAwesomeIcon icon={faLinkedin} size="lg" />
        </a>
        <a
          href={iconLinks.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="github"
        >
          <FontAwesomeIcon icon={faGithub} size="lg" />
        </a>
        <a
          href={iconLinks.siterepo}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="facebook"
        >
          <FontAwesomeIcon icon={faCodeBranch} size="lg" />
        </a>
      </div>
      <div className="created-by-container">Created by Joseph Webster</div>
    </footer>
  );
};

export default Footer;
