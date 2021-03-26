import styled from "styled-components";

import ContentContainer from "../../components/content-container/content-container.component";

export const ProfileContentContainer = styled(ContentContainer)`
  flex-direction: row;
  justify-content: center;

  > div:first-child {
    margin-right: 3em;
  }

  @media only screen and (max-width: 1280px) {
    flex-direction: column-reverse;
    justify-content: space-evenly;
    height: 100%;

    > div:first-child {
      margin-right: 0;
    }
  }
`;