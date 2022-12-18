import styled from "styled-components";

export const InfosWrapper = styled.div`
  background: #5CDB95;
  height: 100vh;
  width: 100vw;
  padding: 2.00rem 5.27rem;
  box-sizing: border-box;
  overflow: hidden;
  @media (max-width: 928px) {
    min-height: 100vh;
    height: auto;
  }
  @media (max-width: 637px) {
    padding: 2.00rem;
  }
`

export const InfosContent = styled.section`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 6fr 6.5fr;
  @media (max-width: 928px) {
    display: flex;
    flex-direction: column-reverse;
    height: auto;
  }

`
export const InfoTitle = styled.h1`
  font-size: 2.8em;
  color: #EDF5E1;
  margin: 0;
  font-weight: inherit;
  @media (max-width: 928px) {
    margin-bottom: 1rem;
  }
`

export const InfosHero = styled.section`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 637px) {
    margin-top: 1rem;
  }
`