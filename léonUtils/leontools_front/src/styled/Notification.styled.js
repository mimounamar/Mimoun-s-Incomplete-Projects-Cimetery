import styled from "styled-components";

export const NotificationWrapper = styled.div`
    position: relative;
    padding: 0.8rem;
    background-color: #ffffff;
    border: 1px solid #0A6466;
    border-radius: 15px;
    width: 18rem;
    height: 100%;
    display: block;
    overflow: hidden;
    text-overflow:ellipsis;
    @media screen and (max-width: 767px) {
      width: calc(100vw - 4rem);
      margin-bottom: 0.5rem;
    }
`;

export const NotificationTitle = styled.h3`
      font-family: Gilroy;
      font-weight: bold;
      font-size: 1em;
      color: #0A6466;
      margin: 0;
      padding: 0;
`;

export const NotificationAuthor = styled.h3`
      font-family: Gilroy;
      font-weight: normal;
      font-size: 1em;
      color: #0A6466;
      margin: 0;
      padding: 0;
`;

export const NotificationText = styled.p`
      font-family: Gilroy;
      font-weight: normal;
      font-size: 0.9em;
      color: #0A6466;
      margin-top: 0.5rem;
      padding: 0;
      text-align: justify;
      text-justify: inter-word;
`;

export const NotificationMore = styled.button`
      position: absolute;
      bottom: 0;
      right: 0;
      margin: 0.5rem;
      color: #ffffff;
      font-size: 1.2em;
      background-color: #0A6466;
      border-width: 0;
      border-radius: 50%;
      height: 1.8rem;
      width: 1.8rem;

      &:hover {
        background-color: #228a8c;
      }
`;
