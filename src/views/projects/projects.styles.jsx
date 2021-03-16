import styled from "styled-components";

import ContentContainer from "../../components/content-container/content-container.component";

export const ProjectsContent = styled(ContentContainer)`
  flex-flow: column wrap;
  justify-content: space-around;
  /* width: 80%; */

  > div:nth-child(odd) {
    flex-direction: row;

    > div {
      margin-left: 2.5em;
    }
  }

  > div:nth-child(even) {
    flex-direction: row-reverse;

    > div {
      margin-right: 2.5em;
    }
  }

  @media only screen and (max-width: 1200px) {
    > div:nth-child(odd) {
      flex-direction: column;
      > div {
        margin-left: unset;
      }
    }

    > div:nth-child(even) {
      flex-direction: column;
      > div {
        margin-right: unset;
      }
    }
  }

  @media only screen and (max-width: 1200px) {
    width: 100%;
  }

  @media only screen and (max-width: 768px) {
    margin: 0 0 1em;
  }
`;
