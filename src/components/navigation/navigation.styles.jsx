import styled from "styled-components";

import Text from "../../components/text/text.component";

export const NavigationLinkContainer = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  div:last-child {
    margin-right: 0;
  }

  @media only screen and (max-width: ${(props) => props.changeMenuOn}) {
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    padding: 0;
  }
`;

export const NavigationLink = styled(Text)`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 50px 0 0;
  text-decoration: none;
  transition: color 300ms ease-in-out;
  font-weight: 600;

  :after {
    content: "";
    width: 0%;
    border-top: 3px solid #5b9999;
    transition: width 300ms ease-in-out;
  }

  :hover {
    color: #5b9999;
  }

  ${({ inView }) => {
    const style = inView
      ? `
        color: #5B9999;
        :after {
          content: "";
          width: 95%;
        }
    `
      : `color: #FFF5EE`;
    return style;
  }};

  @media only screen and (max-width: ${(props) => props.changeMenuOn}) {
    margin: 10px 0;
  }
`;
