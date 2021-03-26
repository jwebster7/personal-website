import styled from "styled-components";

import HorizontalLine from "../horizontal-line/horizontal-line.component";
import CustomLink from "../custom-link/custom-link.component";

export const TimelineNavigatorContainer = styled.div`
  width: 100%;
  margin: 2em 0;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  @media only screen and (max-width: 768px) {
    margin: 0 0 2em;
  }

  @media only screen and (max-width: 512px) {
    margin: 0 0 1em;
  }
`;

export const TimelineLinkContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: flex-start;

  @media only screen and (max-width: 512px) {
    width: 100%;
    justify-content: space-between;
  }
`;

export const TimelineCustomLink = styled(CustomLink)`
  margin: 0 2.5em 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  :after {
    content: "";
    width: 0%;
    border-radius: 5em;
    border-top: 3px solid #5b9999;
    transition: width 300ms ease-in-out;
  }

  ${({ active }) => {
    if (!!active) {
      return ` 
        :after {
          content: "";
          width: 95%;
        }

        @media only screen and (max-width: 1024px) {
          :after {
            width: 0%;
          }
        }
    `;
    }
  }};

  @media screen and (max-width: 512px) {
    margin-right: 0;
  }
`;

export const TimelineHorizontalLine = styled(HorizontalLine)`
  @media screen and (max-width: 512px) {
    display: none;
  }
`;
