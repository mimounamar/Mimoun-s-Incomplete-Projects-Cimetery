import styled from "styled-components";

export const LoginWrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`;

export const LoginPictureContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #D2E5DC;
  height: 100%;
  width: 65%;
  border-bottom-right-radius: 15px;
  border-top-right-radius: 15px;
  @media screen and (max-width: 767px) {
    height: 65%;
    width: 100%;
    border-bottom-right-radius: 12px;
    border-bottom-left-radius: 12px;
    border-top-right-radius: 0;
  }
`;

export const LoginPicture = styled.img`
  position: absolute;
  object-fit: cover;
  max-width: 85%;
  max-height: 100%;
  margin: 0;
`;

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 35%;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 767px) {
    height: 35%;
    width: 100%;
  }
`;

export const LoginTitle = styled.h1`
  text-align: center;
  font-family: Gilroy;
  font-weight: bold;
  font-size: 1.25em;
  color: #0A6466;
`;

export const ErrorWrapper = styled.div`
  display: none;
  font-family: Gilroy;
  margin-bottom: 1rem;
  font-size: 0.9em;
  color: #842029;
  background-color: #f8d7da;
  border: 1px solid #f5c2c7;
  padding: 0.5rem;
  border-radius: 5px;
  max-width: 85%;
`;
