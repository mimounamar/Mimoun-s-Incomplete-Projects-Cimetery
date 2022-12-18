import styled from "styled-components";

export const CGUWrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;

export const CGUPictureContainer = styled.div`
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
    display: none;
  }
`;

export const CGUPicture = styled.img`
  position: absolute;
  object-fit: cover;
  max-width: 85%;
  max-height: 100%;
  margin: 0;
`;

export const CGUContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 35%;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;

export const CGUTitle = styled.h1`
  text-align: center;
  font-family: Gilroy;
  font-weight: bold;
  font-size: 1.25em;
  color: #0A6466;
`;

export const CGUContent = styled.div`
  font-family: Gilroy;
  color: #0A6466;
  font-size: 1em;
  width: 80%;
  height: 60%;
  text-justify: inter-word;
  text-align: justify;
  overflow-y: scroll;
  border: 1px solid #0A6466;
  border-radius: 15px;
  padding: 1rem;
`;

export const CGUCheckboxContainer = styled.div`
  font-family: Gilroy;
  font-size: 0.8em;
  padding: 1.5rem;
  text-align: justify;
  text-justify: inter-word;
  color: #0A6466;
`;

export const CGUSubmit = styled.button`
  font-family: Gilroy;
  font-weight: bold;
  font-size: 1em;
  padding: 0.6rem;
  width: 80%;
  border-width: 0;
  background-color: #0A6466;
  color: white;
  border-radius: 15px;

  &:hover {
    background-color: #228a8c;
  }
`