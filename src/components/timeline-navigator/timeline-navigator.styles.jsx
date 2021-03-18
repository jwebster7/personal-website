import styled from "styled-components";

import HorizontalLine from "../horizontal-line/horizontal-line.component";
import NavigationLink from "../navigation-link/navigation-link.component";

export const TimelineNavigatorContainer = styled.div`
  width: 100%;
  margin: 2em 0;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  @media only screen and (max-width: 768px) {
    /* width: 80%; */
    margin: 0 0 2em;
  }

  @media only screen and (max-width: 512px) {
    /* width: 80%; */
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

export const TimelineNavigationLink = styled(NavigationLink)`
  @media screen and (max-width: 512px) {
    margin-right: 0;
  }
`;

export const TimelineHorizontalLine = styled(HorizontalLine)`
  @media screen and (max-width: 512px) {
    display: none;
  }
`;
