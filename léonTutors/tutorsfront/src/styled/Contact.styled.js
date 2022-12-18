import styled, {css} from "styled-components";

export const ContactFormContainer = styled.div`
  height: 100%;
  padding-top: 3.61rem;
  box-sizing: border-box;
  position: relative;
  @media (max-width: 928px) {
    height: auto;
    min-height: 100vh;
  }
`

export const ContactForm = styled.form`
  position: absolute;
  height: calc(100% - 8rem);
  bottom: 0;
  width: 100%;
`

export const ContactInputBase = css`
  display: block;
  margin: 0.52rem 0;
  border: none;
  background: #05386B;
  font-family: inherit;
  font-size: inherit;
  color: inherit;
  padding: 0.87rem 1.01rem;
  box-sizing: border-box;
  width: 100%;

  &:active, &:focus {
    outline: none;
  }
`

export const ContactInput = styled.input`
  ${ContactInputBase};
`

export const ContactTextArea = styled.textarea`
  ${ContactInputBase};
  resize: none;
  height: 10rem;
`