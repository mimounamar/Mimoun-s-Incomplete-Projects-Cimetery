import styled from "styled-components";

export const CalendarPageWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background: #05386B;
  display: grid;
  padding: 0 4rem;
  box-sizing: border-box;
  grid-template-columns: ${props => props.inverted ? "4.5fr 9.5fr" : "9.5fr 4.5fr"};
  grid-template-areas: "header header" ${props => props.inverted ? '"info calendar"' : '"calendar info"'};

  grid-column-gap: 3.61rem;
  grid-auto-rows: .90fr;
  @media (max-width: 972px) {
    min-height: 100vh;
    height: auto;
    grid-template-areas: "header header" ${props => props.inverted ? '"info info" "calendar calendar"' : '"calendar calendar" "info info"'};
    grid-row-gap: 50px;
    padding: 2rem 4rem;
  }
  @media (max-width: 646px) {
    padding: 2rem;
  }
`


export const CalendarHeader = styled.div`
  grid-area: header;
  align-self: center;
`

export const CalendarWrapper = styled.div`
  grid-area: calendar;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding-right: 2.5rem;
  align-self: center;
  @media (max-width: 646px) {
    overflow-x: scroll;
    width: 100%;
    transform: translateY(-100px);
  }
`

export const CalendarContent = styled.div`
  width: 100%;
`

export const Calendar = styled.div`
  width: 100%;
  height: 53vh;
  display: flex;
  justify-content: space-between;
  @media (max-width: 646px) {
    width: 1000px;
  }
`

export const CalendarTimeColumn = styled.div`
  height: 100%;
  width: calc(100% / 13 - .75rem);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const CalendarColumn = styled.div`
  height: 100%;
  width: calc(2 * (100% / 13) - .75rem);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const CalendarTime = styled.span`
  font-size: 0.60em;
  text-align: right;
  color: #5CDB95;
  transform: translateY(5px);
`
export const CalendarCell = styled.div`
  height: calc(100% / 11);
  width: 100%;
  box-sizing: border-box;

`
export const CalendarDay = styled(CalendarCell)`
  font-size: 0.96em;
  display: flex;
  align-items: center;
  color: #5CDB95;
  border-bottom-color: #5CDB95;
  border-bottom-width: 2px;
  border-bottom-style: solid;
`
export const CalendarTimeSlot = styled(CalendarCell)`
  border-bottom-color: #5CDB95;
  border-bottom-width: 1px;
  border-bottom-style: solid;
`

export const CalendarDetailsInfo = styled.div`
  position: relative;
  overflow: hidden;
  grid-area: info;
  @media (max-width: 646px) {
    transform: translateY(-100px);
  }

`
