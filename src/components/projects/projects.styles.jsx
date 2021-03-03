import styled from "styled-components";
import { sharedSectionContainerStyles } from "../shared.styles";

export const ProjectsContainer = styled.div`
  background-color: #121113;
  background-color: darkslategray;
  ${sharedSectionContainerStyles}
`;

export const ProjectsGrid = styled.div`
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(auto-fit, minmax(550px, 1fr));
  grid-gap: 75px 100px;
  width: 80%;
  margin: 25px 0;
`;
