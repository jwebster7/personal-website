import styled from "styled-components";

const Text = styled.span`
  margin-top: 1em;
  font-family: "Ubuntu", sans-serif;
  font-size: 1.25rem;
  letter-spacing: 0.1em;
  line-height: 1.5;
  color: #fff5ee;
  text-align: left;

  @media only screen and (max-width: 750px) {
    font-size: 1rem;
    line-height: 1.25;
    white-space: normal;
    /* text-align: justify; */
  }
`;

export default Text;
