import {InfosContent, InfosHero, InfosWrapper, InfoTitle} from "../styled/Informations.styled";
import Navigation from "../components/Navigation";
import "bootstrap-icons/font/bootstrap-icons.css"
import {HeroImage, Oval} from "../components/Shapes";
import Hero from "../assets/hero-contact.svg"
import {ContactForm, ContactFormContainer, ContactInput, ContactTextArea} from "../styled/Contact.styled";
import {BasicButton} from "../components/Buttons";

function Contact() {
    return (
        <InfosWrapper>
            <Navigation active={"contact"}/>
            <InfosContent>
                <ContactFormContainer>
                    <InfoTitle>Un problème?</InfoTitle>
                    <ContactForm>
                        <label for={"mail"}>Adresse Mail</label>
                        <ContactInput type={"email"} name={"mail"} id={"mail"} placeholder={"prenom.nom@example.org"}/>
                        <label for={"name"}>Nom et prénom</label>
                        <ContactInput type={"text"} name={"name"} id={"name"} placeholder={"PICHARD Jean-Michel"}/>
                        <label for={"message"}>Message</label>
                        <ContactTextArea name={"message"} id={"message"} placeholder={"Ce site est vraiment super !"}/>
                        <BasicButton>Envoyer</BasicButton>
                    </ContactForm>
                </ContactFormContainer>
                <InfosHero>
                    <Oval size={"medium"}>
                        <HeroImage size={"medium"} src={Hero}/>
                    </Oval>
                </InfosHero>
            </InfosContent>
        </InfosWrapper>
    );
}

export default Contact;
