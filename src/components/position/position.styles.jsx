import styled from "styled-components";

export const PositionContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 50px 0;
  width: 100%;

  @media only screen and (max-width: 768px) {
    margin: 0 0 25px 0;
  }
`;

export const PositionContentGrid = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const PositionContentBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;