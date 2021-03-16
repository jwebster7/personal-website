import React from "react";

import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  LinkedImageHorizontalLine,
  LinkedImageLink,
  LinkedImageTitle,
  LinkedImageOverlay
} from "./linked-image.styles";

const LinkedImage = ({ url, overlayText, children }) => {
  return (
    <LinkedImageLink
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="website link"
    >
      <LinkedImageOverlay>
        <LinkedImageHorizontalLine />
        <LinkedImageTitle>{overlayText}</LinkedImageTitle>
        <LinkedImageHorizontalLine />
      </LinkedImageOverlay>
      {children}
    </LinkedImageLink>
  );
};

export default LinkedImage;
