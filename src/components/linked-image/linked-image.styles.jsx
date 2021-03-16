import styled from "styled-components";

import Heading from "../../components/heading/heading.component";
import HorizontalLine from "../horizontal-line/horizontal-line.component";

export const LinkedImageLink = styled.a`
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  margin: 0 0 1em;

  transition: transform 600ms ease-in-out;

  :hover {
    cursor: pointer;
    transform: scale(1.05);
  }
`;

export const LinkedImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;

  margin: 0;
  padding: 2em;

  display: flex;
  justify-content: center;
  align-items: center;

  opacity: 0;
  background: rgba(18, 17, 19, 0.75);
  border-radius: 0.5em;
  /* overflow: hidden; */
  transition: opacity 300ms ease-in-out;

  h1 {
    margin: 0 1em;
  }

  :hover {
    opacity: 1;
  }
`;

export const LinkedImageHorizontalLine = styled(HorizontalLine)`
  @media only screen and (max-width: 500px) {
    display: none;
    margin: 0;
  }
`;

export const LinkedImageTitle = styled(Heading)`
  font-weight: 600;

  @media only screen and (max-width: 768px) {
    white-space: nowrap;
    align-content: center;
  }

  @media only screen and (max-width: 500px) {
    margin: 0 auto 0 0;
  }
`;
