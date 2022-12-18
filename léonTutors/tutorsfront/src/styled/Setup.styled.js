import styled, {createGlobalStyle, css} from "styled-components";

export const SetupWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-columns: 8.5fr 5.5fr;
  @media (max-width: 1175px) {
    grid-template-columns: 9.5fr 4.5fr;
  }
  @media (max-width: 1027px) {
    display: ${props => props.small ? "flex" : "flex"};
    flex-direction: ${props => props.small ? "column" : "column"};
    height: ${props => props.small ? "100vh" : "fit-content"};
  }
  @media (max-width: 637px) {
    height: ${props => props.small ? "100vh" : "fit-content"};
  }
  @media (max-width: 455px) {
    display: ${props => props.small ? "flex" : "flex"};
    flex-direction: ${props => props.small ? "column" : "column-reverse"};
  }
`

export const SetupFunctionalContainer = styled.section`
  background: #05386B;
  display: flex;
  align-items: center;
  padding: 0 4rem;
  box-sizing: border-box;
  @media (max-width: 1027px) {
    height: ${props => props.small ? "50vh" : "fit-content"};
    min-height: ${props => props.small ? "50vh" : "100vh"};
    padding: ${props => props.small ? "0 4rem" : "1.5rem 4rem"};
  }
  @media (max-width: 637px) {
    height: ${props => props.small ? "70vh" : "fit-content"};
    min-height: ${props => props.small ? "70vh" : "100vh"};
    padding: ${props => props.small ? "0 4rem" : "1.5rem 4rem"};
  }
  @media (max-width: 455px) {
    height: ${props => props.small ? "70vh" : "fit-content"};
    min-height: ${props => props.small ? "70vh" : "100vh"};
    padding: 1.5rem;
  }
`

export const SetupHeroContainer = styled.section`
  background: #5CDB95;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 1027px) {
    display: ${props => props.small ? "flex" : "none"};
  }
  @media (max-width: 637px) {
    height: ${props => props.small ? "30vh" : "fit-content"};
    min-height: ${props => props.small ? "30vh" : "100vh"};
  }
`

export const SetupFunctionalContent = styled.div`
  width: 100%;
  @media (max-width: 455px) {
    width: 120%;
    transform: ${props => props.small ? "scale(.9)" : "none"};
  }
`

export const SetupStepIcon = styled.i`
  font-size: 1.73em;
  transition: color .5s;

  &:hover {
    color: #5CDB95;
  }
`

export const SetupHeroStyling = createGlobalStyle`
  img.setup-hero {
    width: 100%;
    @media (max-width: 1027px) {
      max-height: 50vh;
    }
    @media (max-width: 455px) {
      max-height: 30vh;
    }
  }

  i.setup-hero {
    font-size: 21rem;
    color: #05386B;
  }
`
export const SetupH1 = styled.h1`
  font-size: 2.8em;
  color: #EDF5E1;
  margin: .98rem 0 1.69rem;
  font-weight: inherit;
  @media (max-width: 646px) {
    font-size: 2em;
  }
`

export const SetupH2 = styled.h2`
  font-size: 1.47em;
  margin: 0 0 1.13rem;
  margin-top: ${props => props.first ? "1.13rem" : "inherit"};
  color: #EDF5E1;
  font-weight: inherit;
`

export const SetupH3 = styled.h3`
  font-size: 0.94em;
  margin: ${props => props.last ? "0 0 1.13rem" : "0"};
  color: #EDF5E1;
  font-weight: inherit;
`

export const SetupH4 = styled.h4`
  font-size: 0.60em;
  margin: 0 0 1.09rem;
  color: #EDF5E1;
  font-weight: inherit;
`

export const SetupP = styled.p`
  font-size: 0.94em;
  margin: 0 0 1.13rem;
  color: #EDF5E1;
  font-weight: 700;
  text-align: justify;
  text-justify: inter-word;
`

export const SetupFormWrapper = styled.form`
  width: 100%;
  max-height: 40vh;
  display: flex;
  justify-content: space-between;
  @media (max-width: 1027px) {
    height: fit-content;
    min-height: 25vh;
    max-height: fit-content;
  }
  @media (max-width: 637px) {
    flex-direction: column;
    height: fit-content;
    min-height: 25vh;
    max-height: fit-content;
  }
`

export const SetupFormCategory = styled.div`
  width: calc(100% / 3 - 1rem);
  display: flex;
  flex-direction: column;
  overflow: scroll;
  @media (max-width: 1027px) {
    overflow: visible;
  }
  @media (max-width: 637px) {
    width: 100%;
    overflow: visible;
  }
`

export const SetupTextInputWrapper = styled.div`
  border-width: 1px;
  border-style: solid;
  border-color: #5CDB95;
  text-transform: uppercase;
  color: #5CDB95;
  text-align: center;
  font-size: .76em;
  box-sizing: border-box;
  padding: .5rem;
  margin-bottom: 0.56rem;
`

export const SetupInput = css`
  display: block;
  border: none;
  background: none;
  font: inherit;
  color: #EDF5E1;
  margin-top: .5rem;

  &:active, &:focus {
    outline: none;
  }
`

export const SetupDigitInput = styled.input`
  ${SetupInput};
  width: 2.5rem;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
`

export const SetupTextInput = styled.textarea`
  ${SetupInput};
  width: 100%;
  resize: none;
  min-height: 4rem;
`
