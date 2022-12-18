import React, {useEffect, useState} from 'react';
import Notification from "../components/Notification";
import 'bootstrap-icons/font/bootstrap-icons.css'
import Navigation from "../components/Navigation";
import Request from "../components/Request";
import {
    CategoryTitle,
    DashboardContent,
    DashboardWrapper,
    MoreRequests,
    MoreRequestsButtonContainer,
    Notifications,
    RequestHeaderColumn,
    Requests,
    RequestsHeader,
    WelcomeSubtitle,
    WelcomeTitle
} from "../styled/Dashboard.styled";
import {useNavigate} from "react-router-dom";
import getSessionFromDb from "../api/getSessionFromDb";
import getUserFromDb from "../api/getUserFromDb";
import getNotificationsFromDb from "../api/getNotificationsFromDb";
import NoNotifications from "../components/NoNotifications";
import getRequestsFromDb from "../api/getRequestsFromDb";

function Dashboard() {

    const navigate = useNavigate();

    const [userData, setUserData] = useState({});
    const [notificationPage, setNotificationPage] = useState(1);
    const [notifications, setNotifications] = useState([]);

    const [requestPage, setRequestPage] = useState(1);
    const [requests, setRequests] = useState([]);

    useEffect(()=> {
        const sessionId = sessionStorage.getItem('sessionId')
        if(sessionId){
            getSessionFromDb(sessionId).then(response => {
                getUserFromDb(response.data.google_id).then(userResponse => {
                    if(!userResponse.data.verified) {
                        navigate("/CGU", {replace: true})
                    }
                    else {
                        setUserData(userResponse.data)
                        getNotificationsFromDb(userResponse.data.google_id, notificationPage).then(response => {
                            setNotifications(response.data)
                        })
                        getRequestsFromDb(userResponse.data.google_id, requestPage).then(response => {
                            if(response.data.length === 0){
                                document.getElementById("more-requests-button").style.display="none"
                            }
                            setRequests(response.data)
                        })
                        getRequestsFromDb(userResponse.data.google_id, requestPage+1).then(response => {
                            document.getElementById("more-requests-button").style.display="none"
                        })
                    }
                }).catch(() => {
                    navigate("/", {replace: true})
                })
            }).catch(() => {
                navigate("/", {replace: true})
            })
        }
        else {
            navigate("/", {replace: true})
        }

    },[])

    function handleNotifications(increment){
        getNotificationsFromDb(userData.google_id, notificationPage + increment).then((response) => {
            if(response.data.length != 0){
                setNotificationPage(notificationPage + increment)
            }
            else {
                setNotificationPage(1)
            }
        })
    }

    useEffect(() => {
        getNotificationsFromDb(userData.google_id, notificationPage).then(response => {
            setNotifications(response.data)
        })
    }, [notificationPage]);

    function handleRequests(){
        getRequestsFromDb(userData.google_id, requestPage + 2).then(response => {
            if(response.data.length == 0){
                document.getElementById("more-requests-button").style.display = "none"
                setRequestPage(requestPage + 1)
            }
            else {
                setRequestPage(requestPage + 1)
            }
        })
    }

    useEffect(() => {
        getRequestsFromDb(userData.google_id, requestPage).then(response => {
            setRequests([...requests , ...response.data])
            console.log(requests)
        })
    }, [requestPage]);



    return (
        <DashboardWrapper>

            <Navigation/>

            <DashboardContent>
                <WelcomeTitle>Bienvenue</WelcomeTitle>
                <WelcomeSubtitle>sur votre tableau de bord.</WelcomeSubtitle>

                <CategoryTitle>Vos notifications
                    <i className="bi bi-chevron-left" onClick={() => handleNotifications(-1)}></i>
                    <i className="bi bi-chevron-right" onClick={() => handleNotifications(+1)}></i>
                </CategoryTitle>
                <Notifications id="notification-board" childCount={notifications.length}>
                    {notifications[0] && <Notification data={notifications[0]}/>}
                    {notifications[1] && <Notification data={notifications[1]}/>}
                    {notifications[2] && <Notification data={notifications[2]}/>}
                    {!notifications[0] && <NoNotifications/>}
                </Notifications>

                <CategoryTitle>Vos requêtes</CategoryTitle>

                <Requests>
                    <RequestsHeader>
                    <tr>
                        <RequestHeaderColumn>Identifiant unique</RequestHeaderColumn>
                        <RequestHeaderColumn>Date de publication</RequestHeaderColumn>
                        <RequestHeaderColumn>Salle concernée</RequestHeaderColumn>
                        <RequestHeaderColumn>Type d’incident</RequestHeaderColumn>
                        <RequestHeaderColumn>Description du problème</RequestHeaderColumn>
                        <RequestHeaderColumn>Status</RequestHeaderColumn>
                        <RequestHeaderColumn>Mise à jour</RequestHeaderColumn>
                    </tr>
                    </RequestsHeader>

                    <tbody>
                    {requests.map(request => (<Request data={request}/>))}
                    </tbody>


                </Requests>

                <MoreRequestsButtonContainer>
                    <MoreRequests id="more-requests-button" onClick={handleRequests}>En voir +</MoreRequests>
                </MoreRequestsButtonContainer>

            </DashboardContent>
        </DashboardWrapper>
    );
}

export default Dashboard;