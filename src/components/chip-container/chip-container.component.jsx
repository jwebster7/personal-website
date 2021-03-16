import styled from "styled-components";

const ChipContainer = styled.div`
  margin: 1em 0;
  width: 100%;
  display: flex;
  flex: 1 1 auto;
  justify-content: flex-start;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  > span:last-child {
    margin-right: auto;
  }

  /* @media screen and (max-width: 512px) {
    justify-content: space-evenly;
    > span:last-child {
      margin-right: 0;
    }
  } */
`;

export default ChipContainer;
