import styled from "styled-components";

const ContentContainer = styled.div`
  min-height: 100%;
  width: 75%;
  max-width: 1400px;

  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  @media only screen and (max-width: 1664px) {
    width: 90%;
  }

  @media only screen and (max-width: 1280px) {
    width: 95%;
  }

  @media only screen and (max-width: 1024px) {
    width: 100%;
  }
`;

export default ContentContainer;
