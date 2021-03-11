import styled from "styled-components";

import ContentContainer from "../../components/content-container/content-container.component";

export const ProjectsContent = styled(ContentContainer)`
  flex-flow: column wrap;
  justify-content: space-around;
  width: 85%;

  > div:nth-child(odd) {
    flex-direction: row;

    /* > div {
      margin-left: 40px;
    } */
  }

  > div:nth-child(even) {
    flex-direction: row-reverse;

    /* > div {
      margin-right: 40px;
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
    margin: 0 0 1em;
  }
`;
