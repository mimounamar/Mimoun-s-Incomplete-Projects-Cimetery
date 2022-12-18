import styled from "styled-components";

export const RequestRow = styled.tr`
  background-color: white;
`;

export const RequestColumn = styled.td`
  text-align: center;
  padding: 0.9rem;
  border-width: 1px;
  border-color: #0A6466;
  font-family: Gilroy;
  font-weight: normal;
  color: #0A6466;
  font-size: 0.9em;
  border-top-style: solid;
  border-bottom-style: solid;
  border-spacing: 0;

  &:first-child {
    border-style: solid;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    border-right: 0;
  }

  &:last-child {
    border-style: solid;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    border-left: 0;
  }

  @media screen and (max-width: 767px) {
    display: flex;
    border-style: none;
    border-left-style: solid;
    border-right-style: solid;
    padding: 0.5rem;
    text-align: left;
    
    &:first-child {
      border-style: none;
      border-top-style: solid;
      border-right-style: solid;
      border-right-width: 1px;
      border-left-style: solid;
      border-left-width: 1px;
      border-top-left-radius: 12px;
      border-bottom-left-radius: 0;
      border-top-right-radius: 12px;
    }

    &:last-child{
      border-style: none;
      border-bottom-style: solid;
      border-right-style: solid;
      border-right-width: 1px;
      border-left-style: solid;
      border-left-width: 1px;
      border-bottom-left-radius: 12px;
      border-top-right-radius: 0;
      border-bottom-right-radius: 12px;
    }
    
    &:before{
      font-weight: bold;
      width: 5rem;
      padding-right: 2rem;
    }
    
    &:nth-of-type(1):before{
      content: "ID unique";
    }

    &:nth-of-type(2):before{
      content: "Date";
    }

    &:nth-of-type(3):before{
      content: "Salle";
    }

    &:nth-of-type(4):before{
      content: "Type";
    }

    &:nth-of-type(5):before{
      content: "Détail";
    }

    &:nth-of-type(6):before{
      content: "Status";
    }

    &:nth-of-type(7):before{
      content: "Mise à jour";
    }
  }
`;

export const RequestStatus = styled.span`
  display: inline-block;
  padding: 0.1rem;
  border-radius: 1px;
  width: 5rem;
  text-align: center;
`;

export const RequestStatusDone = styled(RequestStatus)`
  color: #9CD0B7;
  background-color: #DEF1E8;
`;

export const RequestUpdate = styled.button`
  display: inline-block;
  font-size: 1em;
  border-radius: 50%;
  height: 1.4rem;
  width: 1.4rem;
  border-width: 0;
`;

export const RequestUpdateUndo = styled(RequestUpdate)`
  color: #ffffff;
  background-color: #FD453A;

  &:hover {
    background-color: #f1827d;
  }
`;

export const RequestSpace = styled.tr`
  height: 1rem;
  text-align: center;
`;
