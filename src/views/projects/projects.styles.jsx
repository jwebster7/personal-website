import styled from "styled-components";

import ContentContainer from "../../components/content-container/content-container.component";

export const ProjectsContent = styled(ContentContainer)`
  flex-flow: column wrap;
  justify-content: space-around;

  > div:nth-child(odd) {
    flex-direction: row;

    > div {
      margin-left: 3em;
    }
  }

  > div:nth-child(even) {
    flex-direction: row-reverse;

    > div {
      margin-right: 3em;
    }
  }

  @media only screen and (max-width: 1280px) {
    
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

  @media only screen and (max-width: 1280px) {
    width: 100%;
  }

  @media only screen and (max-width: 768px) {
    margin: 0 0 1em;
  }
`;
