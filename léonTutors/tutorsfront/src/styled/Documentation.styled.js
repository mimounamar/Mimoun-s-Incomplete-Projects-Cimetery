import styled, {createGlobalStyle} from "styled-components";

export const QnA = styled.div`
  height: 100%;
  overflow-y: scroll;
  padding-top: 3.61rem;
  box-sizing: border-box;
  position: relative;
  @media (max-width: 928px) {
    overflow-y: visible;
    height: auto;
  }
`

export const QnAContainer = styled.section`
  position: absolute;
  height: calc(100% - 8rem);
  bottom: 0;
  width: 100%;
  overflow-y: scroll;
  @media (max-width: 928px) {
    overflow-y: visible;
    height: auto;
    position: relative;
  }
`

export const QnAContent = styled.article`
  width: 90%;
  @media (max-width: 637px) {
    width: 100%;
  }
`
export const Question = styled.div`
  width: 100%;
  font-size: 0.94em;
  padding: 1.05rem 0.85rem;
  box-sizing: border-box;
  background: #05386B;
  position: relative;
  transition: background .5s;

  &:hover {
    background: #085096;
  }
`
export const QuestionChevron = styled.i`
  position: absolute;
  right: 1.05rem;
  transition: transform .75s;
`
export const Answer = styled.div`
  width: 100%;
  border-color: #05386B;
  border-width: 1px;
  border-style: solid;
  box-sizing: border-box;
  font-size: 0.85em;
  font-weight: 700;
  overflow: hidden;
  text-align: justify;
  text-justify: inter-word;
  max-height: 0;
  transition: all .75s;
`

export const AnswerStatus = createGlobalStyle`
  .answer-opened {
    max-height: 100vh;
    padding: .8rem;
    @media (max-width: 637px) {
      max-height: 200vh;
    }
  }

  .chevron-opened {
    transform: rotateX(180deg);
  }
`

