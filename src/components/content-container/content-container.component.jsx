import styled from "styled-components";

const ContentContainer = styled.div`
  display: flex;
  /* flex: 1 1 auto; */
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 80%;

  @media only screen and (max-width: 1300px) {
    width: 90%;
  }

  @media only screen and (max-width: 1100px) {
    width: 100%;
  }
`;

export default ContentContainer;
