import styled, { css } from "styled-components";
import Text from "../text/text.component";

export const StyledChip = styled(Text)`
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 1em 1em 0 0;
  padding: 0.5em 1em;

  ${(props) => {
    // this is fine for now, but I should redo this to use a themeprovider
    // cadet-blue - rgba(51, 102, 102, 0.6)
    const useAlt = !!props.useAlt;
    const backgroundColor = useAlt
      ? `rgb(51, 102, 102)`
      : `rgba(18, 17, 19, 0.6)`;
    const boxShadowColor = `2px 2px 2px rgba(18, 17, 19, 1)`;
    return css`
      background: ${backgroundColor};
      box-shadow: ${boxShadowColor};
    `;
  }}
  text-align: center;
  font-size: 0.75rem;
  font-weight: 500;
  white-space: nowrap;

  border-radius: 0.5em;
  /* box-shadow: 5px 5px 5px #121113; */
  transition: transform 300ms ease-in-out, box-shadow 300ms ease-in-out;

  :hover {
    cursor: pointer;
    transform: scale(1.03);
    box-shadow: 4px 4px 4px #121113;
  }
`;
