import styled, { css } from "styled-components";

const layoutStyles = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Layout = styled.div`
  ${layoutStyles}
  background-color: #121113;
  color: #fff5ee;
`;

export const Content = styled.div`
  ${layoutStyles}/* position: absolute;
  top: 0;
  z-index: 99; */
`;
