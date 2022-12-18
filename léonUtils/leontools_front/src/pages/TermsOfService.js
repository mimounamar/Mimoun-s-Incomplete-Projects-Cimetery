import homeIcon from '../assets/images/icon_home.png'
import 'bootstrap-icons/font/bootstrap-icons.css'
import {
    CGUCheckboxContainer,
    CGUContainer,
    CGUContent,
    CGUPicture, CGUPictureContainer, CGUSubmit,
    CGUTitle,
    CGUWrapper
} from "../styled/TermsOfService.styled";
import getSessionFromDb from "../api/getSessionFromDb";
import {useNavigate} from "react-router-dom";
import updateUser from "../api/updateUser";
import {useEffect} from "react";
import getUserFromDb from "../api/getUserFromDb";

function TermsOfService() {

    const navigate = useNavigate()

    useEffect(() => {
        const sessionId = sessionStorage.getItem('sessionId')
        if(sessionId){
            getSessionFromDb(sessionId).then(response => {
                getUserFromDb(response.data.google_id).then(userResponse => {
                    if(userResponse.data.verified) {
                        navigate("/dashboard", {replace: true})
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

    function handleVerification(){
        const checkbox = document.getElementById("cgu-checkbox");
        const sessionId = sessionStorage.getItem('sessionId')
        if(checkbox.checked){
            getSessionFromDb(sessionId).then(response => {
                const googleId = response.data.google_id
                getUserFromDb(googleId).then(response =>{
                    const firstName = response.data.first_name
                    const lastName = response.data.last_name
                    const defaultRole = "user"
                    const verified = true
                    updateUser(googleId, firstName, lastName, defaultRole, verified).then(response =>
                    {
                        console.log("Verified user")
                        navigate("/dashboard", { replace: true })
                    })
                })
            })
        }
    }

    return (

        <CGUWrapper>
            <CGUPictureContainer>
                <CGUPicture src={homeIcon}></CGUPicture>
            </CGUPictureContainer>

            <CGUContainer>
                <CGUTitle>Conditions générales d'utilisation</CGUTitle>
                <CGUContent> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet aliquet dolor. Vivamus vel sem auctor, placerat felis blandit, aliquam dui. Praesent suscipit lorem sed erat aliquet rhoncus. Aenean nec nibh sed nisi iaculis dignissim. Vestibulum fringilla odio laoreet orci consectetur, id consectetur enim semper. Mauris non sem ut justo sollicitudin fermentum sed et est. Nam auctor eleifend justo sit amet sagittis. Donec vel nunc vitae ante molestie semper. Nam metus sapien, elementum in lacus at, luctus mattis augue. Maecenas vitae faucibus tortor. Ut ac tellus varius, tristique neque eu, vestibulum nunc. Suspendisse potenti. Donec imperdiet leo ut nulla convallis, ut euismod ipsum accumsan. In hac habitasse platea dictumst. Sed consequat est at orci pellentesque posuere. Curabitur vitae magna blandit, commodo metus rhoncus, porta risus.

                    Nullam at congue sem. Aliquam sed varius arcu, sed scelerisque libero. Nullam sollicitudin facilisis nisi, at semper ante fringilla in. Sed varius risus purus, sed dictum erat ultricies nec. Fusce lectus sapien, sollicitudin ornare porttitor vitae, scelerisque ut velit. Donec id ultrices ante. Aenean semper risus eget velit tempor, id pharetra ex semper. Etiam ac tortor egestas, eleifend mauris sed, euismod nisl. Proin vestibulum ante erat, ut euismod lectus eleifend non. Praesent vel enim neque. Donec at maximus diam. Fusce lobortis vulputate leo, at euismod nunc. Donec convallis et lectus eget viverra. Nam mollis luctus fringilla.

                    Nam libero arcu, sodales non posuere nec, dignissim sed lectus. Mauris auctor, sapien a sagittis egestas, nisl lorem tempus metus, ut ultricies magna sapien sit amet ligula. Aenean id fringilla lectus. Nulla tempus nec dui vitae efficitur. Vivamus vitae tortor id tellus ultricies cursus vitae eu libero. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque fringilla justo in nisl posuere, sit amet tincidunt est semper. Nunc faucibus condimentum dignissim. Integer sagittis vulputate tortor, sit amet pellentesque dui. </CGUContent>

                <CGUCheckboxContainer>
                    <input name="cgu-checkbox" id="cgu-checkbox" type="checkbox"/>
                    <label htmlFor="cgu-checkbox">En cochant cette case, vous consentez aux Conditions générales d'utilisation énoncées ci-dessus.</label>
                </CGUCheckboxContainer>

                <CGUSubmit id="cgu-submit" onClick={handleVerification}>CONFIRMER</CGUSubmit>

            </CGUContainer>


        </CGUWrapper>
    );
}

export default TermsOfService;