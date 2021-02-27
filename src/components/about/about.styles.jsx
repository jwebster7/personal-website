import styled, { keyframes } from "styled-components";

import { sharedBodyTextStyles } from "../shared.styles";

const profilePicTransition = keyframes`
  from {
    transform: translateX(-300%);
  }

  to {
    transform: translateX(0%);
  }
`;

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
  /* flex-grow: 1; */
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;

export const AboutTextContainer = styled.div``;

export const AboutText = styled.p`
  ${sharedBodyTextStyles}
`;

export const ProfilePictureContainer = styled.div`
  max-width: 400px;
  max-height: 400px;
  margin: 0 75px 0 0;
  border-radius: 100%;
  animation: ${profilePicTransition} 1.5s ease-out;
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
