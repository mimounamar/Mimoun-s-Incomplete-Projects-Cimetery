import {
    SetupFunctionalContainer,
    SetupFunctionalContent,
    SetupHeroContainer,
    SetupHeroStyling,
    SetupStepIcon,
    SetupWrapper
} from "../styled/Setup.styled";
import {ErrorLogin, LoginCGU, LoginSubtitle, LoginTitle} from "../styled/Login.styled";
import {useGoogleLogin} from '@react-oauth/google';
import {MagicButton} from "../components/Buttons";
import Hero from "../assets/batman-robin-heroes.svg"
import handleAuth from "../api/auth";
import {useState} from "react";

function Login() {
    const [loginStatus, setLoginStatus] = useState({
        error: false,
        message: null
    });

    const login = useGoogleLogin({
        onSuccess: async tokenResponse => {
            const response = await handleAuth(tokenResponse.access_token)
            switch (response.status){
                case "invalid token":
                    setLoginStatus({
                        error: true,
                        code: "Erreur d'authentification aux serveurs Google. Veuillez réessayer."
                    })
                    break
                case "will not create user":
                    setLoginStatus({
                        error: false,
                        message: null
                    })
                    sessionStorage.setItem("sessionId", tokenResponse.access_token)
                    break
                case "non professional email":
                    setLoginStatus({
                        error: true,
                        message: "Veuillez utiliser votre adresse e-mail de l'établissement."
                    })
                    break
                case "created user":
                    setLoginStatus({
                        error: false,
                        message: null
                    })
                    sessionStorage.setItem("sessionId", tokenResponse.access_token)
                    break
            }
        },
    });

    return (
        <SetupWrapper small={true}>
            <SetupHeroStyling/>
            <SetupFunctionalContainer small={true}>
                <SetupFunctionalContent>
                    <SetupStepIcon className="bi bi-house-door"></SetupStepIcon>
                    <LoginTitle>Identifiez-vous en un clic !</LoginTitle>
                    <LoginSubtitle>Clac ! En un claquement de doigts !</LoginSubtitle>
                    <MagicButton full={true} onClick={() => login()}>S'identifier avec Google</MagicButton>
                    <LoginCGU>En vous inscrivant, vous acceptez les conditions générales d'utilisation.</LoginCGU>
                    {loginStatus.error ? <ErrorLogin>{loginStatus.message}</ErrorLogin> : ""}
                </SetupFunctionalContent>
            </SetupFunctionalContainer>
            <SetupHeroContainer small={true}>
                <img src={Hero} className={"setup-hero"}/>
            </SetupHeroContainer>
        </SetupWrapper>
    );
}

export default Login;
