import styled from "styled-components";

export const TimelineNavigatorContainer = styled.div`
  width: 100%;
  margin: 2em 0 4em;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  @media only screen and (max-width: 768px) {
    margin: 0 0 1em;
  }
`;

export const TimelineLinkContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: flex-start;
`