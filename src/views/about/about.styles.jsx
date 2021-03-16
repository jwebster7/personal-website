import styled from "styled-components";

import ContentContainer from "../../components/content-container/content-container.component";

export const AboutContentContainer = styled(ContentContainer)`
  flex-direction: row;
  flex-grow: 1;
  justify-content: center;

  > div:first-child {
    margin-right: 2em;
  }

  @media only screen and (max-width: 1280px) {
    flex-direction: column-reverse;
    /* i should change this is. it's garbage and it looks horrible */
    justify-content: space-evenly;
    height: 100%;
    margin-top: 0;

    > div:first-child {
      margin-right: 0;
    }
  }
`;

export const AboutSkillContainer = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1em;
  justify-items: left;
  margin: 1em 0 0;
`;

export const AboutSkill = styled.li`
  font-family: "Ubuntu", sans-serif;
  font-size: 1.25rem;
  letter-spacing: 0.1em;
  line-height: 1.5;
  color: #fff5ee;
  text-align: left;
  white-space: nowrap;

  @media only screen and (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.25;
    white-space: normal;
  }
`;

export const ProfilePicture = styled.img`
  /* display: block;
  margin: 0;
  padding: 0;
  border-radius: 0.5em;
  background-color: #336666;
  background-position: center;

  @media only screen and (max-width: 1280px) {
    height: 350px;
    max-width: 350px;
  }

  @media only screen and (max-width: 768px) {
    height: 275px;
    max-width: 275px;
  } */
`;

export const AboutLinkedInLink = styled.a`
  text-decoration: none;
  color: #fff5ee;
  transition: color 300ms ease-in-out;

  :hover {
    color: #121113;
  }
`;
