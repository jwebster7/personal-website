import styled from "styled-components";

import { sharedBodyFontStyles } from "../shared.styles";

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: darkslategray;
  /* background-color: #008b8b; */
  padding: 75px;
  min-height: 100vh;
`;

export const AboutContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 0.6;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  width: 90%;

  @media only screen and (max-width: 1300px) {
    flex-direction: column;
    margin-top: 0;
    width: 100%;
  }
`;

export const AboutTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const AboutText = styled.span`
  ${sharedBodyFontStyles}
  margin-bottom: 25px;
`;

export const ProfilePictureContainer = styled.div`
  max-width: 400px;
  max-height: 400px;
  margin: 0 75px 0 0;
  border-radius: 100%;
  @media only screen and (max-width: 1300px) {
    margin: 0 0 0 0;
  }
`;

export const ProfilePicture = styled.img`
  margin: 0;
  padding: 0;
  /* width: 415px;
  height: 450px; */
  max-width: 400px;
  max-height: 400px;
  border-radius: 100%;
  border: 0 transparent;
  background-color: #121113;
`;
