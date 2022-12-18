import styled from "styled-components";

export const DashboardWrapper = styled.div`
  display: flex;
  background-color: #EFF8F8;
  min-height: 100vh;
  width: 100vw;
  @media screen and (max-width: 767px) {
    flex-direction: column;
    width: 100vw;
  }
`;
export const DashboardContent = styled.div`
  width: 78%;
  padding: 1rem;
  @media screen and (max-width: 767px) {
    width: calc(100vw - 2rem);
    height: 78%;
  }
`;

export const WelcomeTitle = styled.h2`
  font-family: Gilroy;
  font-weight: normal;
  font-size: 1.1em;
  color: #0A6466;
  margin: 0;
  padding: 0;
`;

export const WelcomeSubtitle = styled.h2`
  font-family: Gilroy;
  font-weight: bold;
  font-size: 1.1em;
  color: #0A6466;
  margin: 0;
  padding: 0;
`;

export const CategoryTitle = styled.h3`
  font-family: Gilroy;
  font-weight: bold;
  font-size: 1em;
  margin-top: 1rem;
  margin-bottom: 1rem;
  color: #0A6466;
  padding: 0;
`;

export const Notifications = styled.div`
  display: flex;
  justify-content: space-between;
  height: 12rem;
  width: calc(20rem * ${props => props.childCount});
  margin-bottom: 3rem;
  @media screen and (max-width: 767px) {
    height: calc(13rem * ${props => props.childCount});
    width: 100%;
    flex-direction: column;
    justify-content: center;
  }
`;

export const Requests = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  @media screen and (max-width: 767px) {
    width: calc(100vw - 2rem);
  }
`;

export const RequestsHeader = styled.thead`
  font-family: Gilroy;
  font-weight: bold;
  font-size: 0.85em;
  color: #0A6466;
  @media screen and (max-width: 767px) {
    display: none;
  }
`;

export const RequestHeaderColumn = styled.th`
  text-align: center;
  padding: 0.8rem;
`

export const MoreRequestsButtonContainer = styled.div`
  text-align: center;
`

export const MoreRequests = styled.button`
  background-color: #0A6466;
  color: #ffffff;
  font-family: Gilroy;
  font-weight: normal;
  font-size: 0.8em;
  padding: 0.6rem;
  border-width: 0;
  border-radius: 15px;
  margin-bottom: 0.8rem;
  &:hover {
    background-color: #228a8c;
  }
`