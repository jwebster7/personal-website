import styled, { css } from "styled-components";

export const StyledButton = styled.a`
  cursor: pointer;
  display: block;

  padding: 1em 2em;

  color: #fff5ee;
  font-family: "Ubuntu", sans-serif;
  font-size: 1.25rem;
  font-weight: 600;
  text-align: center;
  text-decoration: none;
  letter-spacing: 0.1em;
  line-height: 1.6;
  white-space: nowrap;

  border-radius: 0.5em;
  border: 2px solid #fff5ee;
  background-color: rgba(18, 17, 19, 0.6);

  transition: color 300ms ease-in-out, border 300ms ease-in-out,
    background-color 300ms ease-in-out;

  @media only screen and (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.4;
    white-space: normal;
  }

  ${(props) => {
    // this is fine for now, but I should redo this to use a themeprovider
    // #336666 - rgba(51, 102, 102, 0.6)
    const useAlt = !!props.useAlt;
    const altColor = useAlt ? `#5b9999` : `rgba(255, 245, 238, 1)`;
    const backgroundColor = useAlt
      ? `rgba(51, 102, 102, .2)`
      : `rgba(18, 17, 19, 0)`;

    return css`
      :hover {
        color: ${altColor};
        border: 2px solid ${altColor};
        background-color: ${backgroundColor};
      }
    `;
  }}
`;
