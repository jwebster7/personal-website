import styled from "styled-components";

import ContentContainer from "../content-container/content-container.component";

export const ConnectContent = styled(ContentContainer)`
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;

  > :first-child {
    margin: 0 3em 0 0;
  }

  @media only screen and (max-width: 1280px) {
    flex-direction: column;
    justify-content: space-evenly;
    height: 100%;

    > :first-child {
      margin-right: 0;
    }

    > :last-child {
      margin-top: 1em;
    }
  }
`;
