import styled from "styled-components";

import Heading from "../../components/heading/heading.component";
import HorizontalLine from "../horizontal-line/horizontal-line.component";

export const LinkedImageLink = styled.a`
  display: block;
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0 0 1em;
  height: auto;
  width: 100%;
  max-width: ${({ maxWidth }) => {
    return maxWidth ?? "25em";
  }};

  border-radius: 0.5em;
  box-shadow: 10px 10px 10px #121113;
  transition: transform 300ms ease-in-out, box-shadow 300ms ease-in-out;
  overflow: hidden;

  :hover {
    cursor: pointer;
    transform: scale(1.03);
    box-shadow: 15px 15px 15px #121113;
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
  backdrop-filter: blur(5px);
  border: 3px solid #fff5ee;
  border-radius: 0.5em;
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
