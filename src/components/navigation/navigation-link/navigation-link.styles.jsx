import styled from "styled-components";

import CustomLink from "../../custom-link/custom-link.component";

const StyledLink = styled(CustomLink)`
  font-size: 1.15rem;
  margin: 1em 0.5em;
  writing-mode: vertical-rl;
  text-orientation: mixed;

  @media (max-width: ${(props) => props.changeMenuOn}) {
    writing-mode: horizontal-tb;
    text-orientation: mixed;
  }
`;

export default StyledLink;
