// #121113 - background
// #5c4054
// #966889
// #A198AB
// #fff5ee - font
import styled, { css, keyframes } from "styled-components";

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    visibility: visible;
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    visibility: hidden;
    opacity: 0;
  }
`;

const leftSlideIn = keyframes`
  from {
    transform: translateX(-300%);
  }

  to {
    transform: translateX(0%);
  }
`;

const rightSlideIn = keyframes`
  from {
    transform: translateX(300%);
  }

  to {
    transform: translateX(0%);
  }
`;

const topSlideIn = keyframes`
  from {
    transform: translateY(-500%);
  }

  to {
    transform: translateY(0%);
  }
`;

const bottomSlideIn = keyframes`
  from {
    transform: translateY(150%);
  }

  to {
    transform: translateY(0%);
  }
`;

export const fadeInAnimation = css`
  animation: ${fadeIn} 1.25s ease-in-out 1.25s;
  animation-fill-mode: forwards;
  visibility: hidden;
`;

export const fadeOutAnimation = css`
  animation: ${fadeOut} 1.25s ease-in-out;
  animation-fill-mode: backwards;
  visibility: visible;
`;

export const leftSlideInAnimation = css`
  animation: ${leftSlideIn} 1.25s ease-out;
`;

export const rightSlideInAnimation = css`
  /* visibility: hidden; */
  animation: ${rightSlideIn} 1.25s ease-out;
`;

export const topSlideDownAnimation = css`
  animation: ${topSlideIn} 1.25s ease-out;
`;

export const bottomSlideUpAnimation = css`
  animation: ${bottomSlideIn} 1.25s ease-out;
`;

export const sharedBodyTextStyles = css`
  font-size: 1.75rem;
  font-family: "Roboto Mono", serif;

  color: #fff5ee;
  text-align: left;
`;

export const sharedHeadingStyles = css`
  font-size: 3rem;
  font-family: "Open Sans", sans-serif;
  color: #fff5ee;
  letter-spacing: 0.25rem;
  white-space: nowrap;
`;

export const sharedHeadingTextStyles = css`
  text-decoration: none;
  transition: color 0.3s ease-in-out;
  font-weight: 600;
`;

export const sharedHorizontalLineStyles = css`
  border-color: #fff5ee;
  border: 0;
  opacity: 0.7;
  border-top: 5px solid #fff5ee;
`;

export const GeneralSectionHeading = styled.h1``;
