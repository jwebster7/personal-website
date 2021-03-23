import styled from "styled-components";

const Heading = styled.h1`
  margin: 0.25em 1em 0.25em 0;

  font-family: "Ubuntu", sans-serif;
  font-size: 1.5rem;
  font-weight: 500;
  color: #fff5ee;
  letter-spacing: 0.1em;
  white-space: nowrap;

  @media only screen and (max-width: 768px) {
    font-size: 1.25rem;
    white-space: normal;
  }
`;

export default Heading;
