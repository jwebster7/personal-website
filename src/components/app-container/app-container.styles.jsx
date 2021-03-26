import styled from "styled-components";

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: ${({ theme: { palette } }) => palette?.background.primary};
  color: ${({ theme: { palette } }) => palette?.font.primary};
`;
