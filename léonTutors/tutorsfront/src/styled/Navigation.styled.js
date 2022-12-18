import styled from "styled-components";

export const NavigationWrapper = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  @media (max-width: 928px) {
    flex-direction: column;
    margin-bottom: 2.5rem;
  }
  @media (max-width: 520px) {
    margin-bottom: 0;
  }
`

export const NavigationSection = styled.div`
  display: flex;
  justify-content: center;
  @media (max-width: 928px) {
    flex-direction: column;
    &.hidden {
      display: none;
    }
  }
`

export const NavigationTitle = styled.span`
  color: #05386B;
  font-size: 1.47em;
  margin-right: 3.54rem;
  display: block;
  @media (max-width: 928px) {
    display: none;
  }
`

export const NavigationTitleMobile = styled.span`
  display: none;
  @media (max-width: 928px) {
    display: block;
    text-align: center;
    margin-right: 0;
    margin-bottom: .5rem;
    color: #05386B;
    font-size: 1.47em;
  }
`

export const NavigationList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: inline;
  @media (max-width: 928px) {
    display: flex;
    flex-direction: column;
  }
`

export const NavigationLinkItem = styled.li`
  display: inline;
  font-family: Raleway;
  font-weight: 700;
  font-size: .76em;
  margin-right: 1.31rem;
  text-transform: uppercase;
`

export const NavigationLink = styled.a`
  color: #05386B;
  text-decoration-line: underline;
  text-underline-offset: ${props => props.current ? "5px" : "0"};
  text-decoration-color: ${props => props.current ? "#05386B" : "rgba(0, 0, 0, 0)"};
  text-decoration-thickness: 2px;
  transition: all .3s;

  &:hover {
    text-decoration-color: #085096;
    text-underline-offset: 5px;
    color: #085096;
  }

  @media (max-width: 928px) {
    text-decoration: none;
    display: block;
    margin-bottom: .5rem;
    width: 100%;
    text-align: center;
    background: #05386B;
    border-style: none;
    font-family: Raleway;
    font-weight: 700;
    color: #EDF5E1;
    text-transform: uppercase;
    padding: 0.48rem 0.76rem;
    transition: background .5s;
    width: calc(100% - 3px);
    &:hover {
      background: #085096;
      color: #EDF5E1;
    }
  }
`
export const NavButtonMobile = styled.i`
  display: none;
  @media (max-width: 928px) {
    display: inline;
    transition: color .5s;
    &:hover {
      color: #085096;
    }
  }
`
