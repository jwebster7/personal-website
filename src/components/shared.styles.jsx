/**
 * Theme
 *  #336666 - myrtle green
 *  #121113 - chinese black
 *  #FFF5EE - seashell
 *  #5B9999 - cadet blue
 */
import styled, { css, keyframes } from "styled-components";

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const leftSlideIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(-300%);
  }

  to {
    opacity: 1;
    transform: translateX(0%);
  }
`;

const rightSlideIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(300%);
  }

  to {
    opacity: 1;
    transform: translateX(0%);
  }
`;

const rightSlideOut = keyframes`
  from {
    transform: translateX(0%);
  }

  to {
    transform: translateX(300%);
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
  opacity: 0;
  animation: ${fadeIn} 1s ease-in-out 1s;
  animation-fill-mode: forwards;
`;

export const fadeOutAnimation = css`
  animation: ${fadeOut} 1.25s ease-in-out 1.25s;
  animation-fill-mode: backwards;
  opacity: 0;
`;

export const leftSlideInAnimation = css`
  animation: ${leftSlideIn} 1s ease-out;
`;

export const rightSlideInAnimation = css`
  animation: ${rightSlideIn} 1s ease-out;
`;

export const rightSlideOutAnimation = css`
  animation: ${rightSlideOut} 1.25s ease-out;
`;

export const topSlideDownAnimation = css`
  animation: ${topSlideIn} 1s ease-out;
`;

export const bottomSlideUpAnimation = css`
  animation: ${bottomSlideIn} 1.25s ease-out;
`;

export const sharedSubheadingStyles = css`
  font-family: "Ubuntu", sans-serif;
  font-size: 1.25rem;
  font-weight: 300;
  color: #fff5ee;
  letter-spacing: 0.1em;
  margin: 0.25em 0;

  @media only screen and (max-width: 750px) {
    font-size: 1rem;
    /* letter-spacing: normal; */
    white-space: normal;
    margin: 0 0 0.25em;
  }
`;

export const sharedBodyFontStyles = css`
  margin-top: 1em;
  font-family: "Ubuntu", sans-serif;
  font-size: 1.25rem;
  letter-spacing: 0.1em;
  line-height: 1.5;
  color: #fff5ee;
  text-align: left;

  @media only screen and (max-width: 750px) {
    font-size: 1rem;
    line-height: 1.25;
    white-space: normal;
  }
`;

export const sharedHorizontalLineStyles = css`
  margin: 0;
  padding: 0;
  border-color: #fff5ee;
  border: 0;
  opacity: 0.7;
  border-top: 5px solid #fff5ee;

  @media only screen and (max-width: 750px) {
  }
`;

export const GeneralSectionHeading = styled.h1``;
