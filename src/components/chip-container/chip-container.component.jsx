import styled from "styled-components";

const ChipContainer = styled.div`
  margin: 1em 0;
  width: 100%;
  display: flex;
  flex: 1 1 auto;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  > :last-child {
    margin-right: auto;
  }
`;

export default ChipContainer;
