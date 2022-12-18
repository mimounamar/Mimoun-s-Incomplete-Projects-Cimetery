import styled from "styled-components";

export const Oval = styled.div`
  height: ${props => props.size == "big" ? "30rem" : "17.7rem"};
  width: ${props => props.size == "big" ? "34.71rem" : "20.47rem"};
  border-radius: 50%;
  background: #05386B;
  transform: skewX(-20deg);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  @media (max-width: 1102px) {
    height: ${props => props.size == "big" ? "24.5rem" : "17.7rem"};
    width: ${props => props.size == "big" ? "27.86rem" : "20.47rem"};
  }
  @media (max-width: 1007px) {
    height: ${props => props.size == "big" ? "20rem" : "17.7rem"};
    width: ${props => props.size == "big" ? "22.83rem" : "20.47rem"};
  }
  @media (max-width: 637px) {
    height: ${props => props.size == "big" ? "20rem" : "13.25rem"};
    width: ${props => props.size == "big" ? "22.83rem" : "15.35rem"};
  }
`

export const HeroImage = styled.img`
  position: absolute;
  transform: skewX(20deg);
  height: ${props => props.size == "big" ? "25rem" : "20.3rem"};
  @media (max-width: 1102px) {
    height: ${props => props.size == "big" ? "20.49rem" : "20.3rem"};
  }
  @media (max-width: 1007px) {
    height: ${props => props.size == "big" ? "16.79rem" : "20.3rem"};
  }
  @media (max-width: 637px) {
    height: ${props => props.size == "big" ? "16.79rem" : "15.22rem"};
  }
`

