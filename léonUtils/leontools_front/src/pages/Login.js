import React, {useEffect, useState} from 'react';
import homeIcon from '../assets/images/icon_home.png'
import 'bootstrap-icons/font/bootstrap-icons.css'
import jwtDecode from "jwt-decode";
import {
    ErrorWrapper,
    LoginContainer,
    LoginPicture,
    LoginTitle,
    LoginWrapper,
    LoginPictureContainer
} from "../styled/Login.styled";
import getUserFromDb from "../api/getUserFromDb";
import registerUser from "../api/registerUser";
import getUserIp from "../helpers/getUserIp";
import createSession from "../api/createSession";
import randomText from "../helpers/randomText";
import {useNavigate} from "react-router-dom";
import getSessionFromDb from "../api/getSessionFromDb";

function Login() {

    const navigate = useNavigate();

    useEffect(() => {
        const sessionId = sessionStorage.getItem('sessionId')
        if(sessionId){
            getSessionFromDb(sessionId).then(response => {
                getUserFromDb(response.data.google_id).then(userResponse => {
                    userResponse.data.verified ? navigate("/dashboard", { replace: true }) : navigate("/CGU", { replace: true })
                })
            })
        }
    },[])

    const [errorString, setErrorString] = useState("")

    function verifyUserValidity(response){
        const userObject = jwtDecode(response.credential);
        const userMail = userObject.email;
        const userFirstName = userObject.given_name;
        const userLastName = userObject.family_name;
        const userDomain = userMail.split("@")[1];
        if (userDomain !== ("leonafricain.ma" || "elbilia.ma")){
            setErrorString("Veuillez utiliser votre adresse mail professionnelle");
            document.getElementById("error-wrapper").style.display = "block";
        }
        else{
            setErrorString("");
            document.getElementById("error-wrapper").style.display = "none";
            handleLogin(userMail, userFirstName, userLastName)
        }
    }

    function handleLogin(googleId, firstName, lastName){
        getUserFromDb(googleId)
            .then((response) => {
                getUserIp().then(ipResponse => {
                    const userIp = ipResponse.data.ipAddress
                    const sessionId = randomText(10)
                    createSession(googleId, userIp, sessionId).then(response => {
                        sessionStorage.setItem("sessionId", sessionId)
                        navigate("/dashboard", { replace: true })
                    })
                })
            }).catch(error => {
            if (error.response && error.response.status === 404) {
                registerUser(googleId, firstName, lastName)
                    .then(response => {
                        getUserIp().then(ipResponse => {
                            const userIp = ipResponse.data.ipAddress
                            const sessionId = randomText(10)
                            createSession(googleId, userIp, sessionId).then(response => {
                                sessionStorage.setItem("sessionId", sessionId)
                                navigate("/CGU", { replace: true })
                            })
                        })
                    })
            }
        })

    }

    const google = window.google;

    if(typeof google == 'undefined'){
        window.location.reload(false);
    }

    useEffect(() => {
        google.accounts.id.initialize({
            client_id: "518591411336-6r7hes5r15e658cieinangeh7f39ctsb.apps.googleusercontent.com",
            callback: verifyUserValidity
        });
        google.accounts.id.renderButton(
            document.getElementById("signInDiv"),
            {theme:"outline", size:"large", shape:"pill"}
        );
    },[]);


    return (
        <LoginWrapper>
            <LoginPictureContainer>
                <LoginPicture src={homeIcon}></LoginPicture>
            </LoginPictureContainer>

            <LoginContainer>
                <LoginTitle>Connectez vous en utilisant Google</LoginTitle>
                <ErrorWrapper id="error-wrapper">
                    <i className="bi bi-exclamation-triangle"> </i>
                    {errorString}
                </ErrorWrapper>
                <div id="signInDiv"></div>
            </LoginContainer>
        </LoginWrapper>
    );
}

export default Login;