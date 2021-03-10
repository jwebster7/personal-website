import styled, { css } from "styled-components";

const layoutStyles = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const Layout = styled.div`
  ${layoutStyles}
  background-color: #121113;
  color: #FFF5EE;
`;

export const Content = styled.div`
  ${layoutStyles}
`;
