import styled from "styled-components";

export const NoNotificationsWrapper = styled.div`
    position: relative;
    padding: 0.8rem;
    background-color: #ffffff;
    border: 1px solid #0A6466;
    border-radius: 15px;
    width: 100%;
    height: 100%;
    overflow-x: scroll;
    @media screen and (max-width: 767px) {
      width: calc(100vw - 4rem);
      margin-bottom: 0.5rem;
    }
`;


