import styled from "styled-components";

export const InstituteContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 50px 0;
  width: 100%;

  @media only screen and (max-width: 768px) {
    margin: 0 0 25px 0;
  }
`;

export const InstituteContentGrid = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const InstituteContentBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
