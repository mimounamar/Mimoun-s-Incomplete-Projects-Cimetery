import styled from "styled-components";

export const BasicButton = styled.button`
  background: #05386B;
  border-style: none;
  font-family: Raleway;
  font-size: .76em;
  font-weight: 700;
  color: #EDF5E1;
  text-transform: uppercase;
  padding: 0.48rem 0.76rem;
  transition: background .5s;

  &:hover {
    background: #085096;
  }
`

export const MagicButton = styled.button`
  background: linear-gradient(to left, #05386B 50%, #5CDB95 50%) right;
  background-size: calc(200% + 1px) 100%;
  border-style: solid;
  border-color: #5CDB95;
  border-width: 1px;
  font-family: Raleway;
  margin-bottom: 0.56rem;
  font-size: .76em;
  font-weight: 700;
  color: #EDF5E1;
  text-transform: uppercase;
  padding: 0.48rem 0.76rem;
  transition: all .5s;
  width: ${props => props.full ? "calc(100%/3 - 18px)" : "100%"};

  &:hover, &.active {
    background-position: left;
    color: #05386B;
  }

  @media (max-width: 545px) {
    width: ${props => props.full ? "50%" : "100%"};
  }
`

export const SubmitButton = styled.button`
  border-radius: 100%;
  height: 2.65rem;
  width: 2.65rem;
  float: ${props => props.abs ? "none" : "right"};
  position: ${props => props.abs ? "absolute" : "inherit"};
  bottom: ${props => props.abs ? "0" : "inherit"};
  right: ${props => props.abs ? "0" : "inherit"};
  border: none;
  background: #5CDB95;
  color: #05386B;
  font-size: 1.25em;
  transition: background .5s;
  margin-top: .75rem;

  &:hover {
    background: #92fdc0;
  }
`