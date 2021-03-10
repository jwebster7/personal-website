import styled from "styled-components";

const StyledLink = styled.a`
  text-decoration: none;
  color: #fff5ee;
  font-weight: 600;

  transition: color 300ms ease-in-out;

  @media only screen and (max-width: 750px) {
    font-size: 1rem;
  }
`;

export default StyledLink;