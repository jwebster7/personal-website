import styled from "styled-components";
import { sharedSectionContainerStyles } from "../../components/shared.styles";

export const ProjectsContainer = styled.div`
  background-color: #336666;
  ${sharedSectionContainerStyles}
`;

export const ProjectsGrid = styled.div`
  display: flex;
  /* flex-grow flex-shrink flex-basis */
  flex: 1 1 auto;
  /* flex-direction flex-wrap */
  flex-flow: column wrap;
  justify-content: space-around;
  align-items: center;
  width: 90%;

  > div:nth-child(odd) {
    flex-direction: row;

    /* > div {
      margin-left: 40px;
    } */
  }

  > div:nth-child(even) {
    flex-direction: row-reverse;

    /* > div {
      margin-left: 40px;
    } */
  }

  @media only screen and (max-width: 1300px) {
    > div:nth-child(odd) {
      flex-direction: column;
    }

    > div:nth-child(even) {
      flex-direction: column;
    }
  }

  @media only screen and (max-width: 1300px) {
    width: 100%;
  }

  @media only screen and (max-width: 750px) {
    margin: 0 25px 50px 25px;
    min-height: 400px;
    min-width: 300px;
  }
`;
