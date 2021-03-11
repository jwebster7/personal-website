import styled from "styled-components";
import Text from "../text/text.component";

const NavigationLink = styled(Text)`
  cursor: pointer;
  margin: 0 2.5em 0 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-decoration: none;
  transition: color 300ms ease-in-out;
  font-weight: 600;
  white-space: nowrap;

  :after {
    content: "";
    width: 0%;
    border-top: 3px solid #5b9999;
    transition: width 300ms ease-in-out;
  }

  :hover {
    color: #5b9999;
  }

  ${({ active }) => {
    const style = active
      ? `
        color: #5B9999;
        // font-style: italic;
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

export default NavigationLink;
