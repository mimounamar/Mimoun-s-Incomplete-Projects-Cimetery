import styled from "styled-components";

export const NavigationWrapper = styled.div`
  position: relative;
  width: 22%;
  text-align: center;
  @media screen and (max-width: 767px) {
    width: 100vw;
  }
`
export const NavigationList = styled.div`
  width: 100%;
  display: block;
  @media screen and (max-width: 767px) {
    width: 100vw;
    display: none;
  }
`;

export const NavigationTitle = styled.h1`
  font-family: Gilroy;
  font-size: 1.5em;
  font-weight: bold;
  color: #0A6466;
`;

export const NavigationHide = styled.i`
  display: none;
  @media screen and (max-width: 767px) {
    display: inline-block;
  }
`;

export const NavigationButton = styled.button`
  font-family: Gilroy;
  font-weight: normal;
  font-size: 1em;
  padding: 0.6rem;
  width: 80%;
  border-width: 0;
  border-radius: 15px;
  margin-bottom: 0.8rem;
`;

export const NavigationActive = styled(NavigationButton)`
  background-color: #0A6466;
  color: white;

  &:hover {
    background-color: #228a8c;
  }
`;

export const NavigationLogout = styled(NavigationButton)`
  background-color: #842029;
  color: white;

  &:hover {
    background-color: #f57b85;
  }
`;

export const NavigationInactive = styled(NavigationButton)`
  color: #0A6466;
  background-color: #EFF8F8;
  border: 1px solid #0A6466;

  &:hover {
    background-color: #228a8c;
    color: white;
  }
`;

export const Sprite = styled.i`
  font-size: 1em;
`;
