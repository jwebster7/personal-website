import styled from "styled-components";
import Text from "../text/text.component";

export const StyledChip = styled(Text)`
  margin: 1em 1em 0 0;
  padding: 0.5em 1em;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 0.5em;
  ${(props) => {
    // this is fine for now, but I should redo this to use a themeprovider
    // cadet-blue - rgba(51, 102, 102, 0.6)
    const useAlt = !!props.useAlt;
    const backgroundColor = useAlt
      ? `rgb(51, 102, 102)`
      : `rgba(18, 17, 19, 0.6)`;
    return `background: ${backgroundColor};`;
  }}
  text-align: center;
  font-size: 0.75rem;
  white-space: nowrap;

  @media screen and (max-width: 750px) {
    font-size: 0.5rem;
    margin: 1em 1em 0 0;
  }
`;
