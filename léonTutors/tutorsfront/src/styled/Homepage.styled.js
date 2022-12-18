import styled from "styled-components";

export const HomeWrapper = styled.div`
  background: #5CDB95;
  height: 100vh;
  width: 100vw;
  padding: 2.00rem 5.27rem;
  box-sizing: border-box;
  overflow: hidden;
  @media (max-width: 928px) {
    height: auto;
    min-height: 100vh;
  }
`;

export const HomeContent = styled.section`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 4.5fr 7.5fr;
  @media (max-width: 1102px) {
    grid-template-columns: 5.5fr 6.5fr;
  }
  @media (max-width: 1007px) {
    grid-template-columns: 6.5fr 5.5fr;
  }
  @media (max-width: 928px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
`

export const HomeJoin = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  @media (max-width: 925px) {
    width: 60%;
  }
  @media (max-width: 753px) {
    width: 80%;
  }
  @media (max-width: 607px) {
    width: 100%;
  }
  @media (max-width: 520px) {
    width: calc(100vw - 5px);
    transform: scale(.8);
  }

`

export const HomeTitle = styled.h1`
  font-size: 2.8em;
  color: #EDF5E1;
  margin: 0;
  font-weight: inherit;
`

export const HomeSubtitle = styled.h4`
  font-size: 0.94em;
  margin: 0.94rem 0;
  color: #EDF5E1;
  font-weight: inherit;
`

export const HomeHero = styled.section`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`


