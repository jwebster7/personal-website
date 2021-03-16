import styled from "styled-components";

const SubHeading = styled.h1`
  font-family: "Ubuntu", sans-serif;
  font-size: 1.25rem;
  font-weight: 300;
  color: #fff5ee;
  letter-spacing: 0.1em;
  margin: 0.25em 0 0.25em auto;

  @media only screen and (max-width: 1100px) {
    margin: 0.25em auto 0.25em 0;
  }

  @media only screen and (max-width: 768px) {
    font-size: 1rem;
    white-space: normal;
    margin: 0.25em 0 0.25em;
  }
`;

export default SubHeading;
