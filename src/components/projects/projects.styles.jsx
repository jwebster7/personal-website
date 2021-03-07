import styled from "styled-components";
import { sharedSectionContainerStyles } from "../shared.styles";

export const ProjectsContainer = styled.div`
  background-color: darkslategray;
  ${sharedSectionContainerStyles}
`;

export const ProjectsGrid = styled.div`
  display: flex;
  /* flex-grow flex-shrink flex-basis */
  flex: 1 1 auto;
  /* flex-direction flex-wrap */
  flex-flow: row wrap;
  justify-content: space-around;
  width: 100%;
`;
