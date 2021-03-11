import styled from "styled-components";

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: flex-start;
  align-items: center;
  padding: 5em;
  min-height: 100vh;
  width: 100%;

  background-color: ${(props) => props.backgroundColor};

  @media only screen and (max-width: 750px) {
    padding: 3.75em 2em;
  }
`;

export default SectionContainer;
