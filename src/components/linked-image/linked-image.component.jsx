import React from "react";
import {
  LinkedImageHorizontalLine,
  LinkedImageLink,
  LinkedImageTag,
  LinkedImageTitle,
  LinkedImageOverlay
} from "./linked-image.styles";

const LinkedImage = ({ url, src, alt, sizes, overlayText }) => {
  console.log(sizes);
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
      <LinkedImageTag
        src={src}
        alt={alt}
        height={sizes.initial.height}
        width={sizes.initial.width}
        sizes={sizes}
        loading="lazy"
      />
    </LinkedImageLink>
  );
};

export default LinkedImage;
