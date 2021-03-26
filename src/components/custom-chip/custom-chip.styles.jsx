import styled from "styled-components";
import Text from "../text/text.component";

export const StyledChip = styled(Text)`
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 1em 1em 0 0;
  padding: 0.5em 1em;

  ${({ useAlt, theme: { palette } }) => {    
    const backgroundColor = !!useAlt
      ? `${palette.element.secondary}`
      : `${palette.element.primary}`;
    return `background: ${backgroundColor};`;
  }}
  text-align: center;
  font-size: 0.75rem;
  font-weight: 500;
  white-space: nowrap;

  border-radius: 0.5em;
  transition: transform 300ms ease-in-out, box-shadow 300ms ease-in-out;

  :hover {
    cursor: pointer;
    transform: scale(1.1);
    box-shadow: 2px 2px 4px #121113;
  }
`;
