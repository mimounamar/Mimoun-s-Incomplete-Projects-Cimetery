import {
    SetupDigitInput,
    SetupFormCategory,
    SetupFormWrapper,
    SetupFunctionalContainer,
    SetupFunctionalContent,
    SetupH1,
    SetupH2,
    SetupH3,
    SetupHeroContainer,
    SetupHeroStyling,
    SetupStepIcon,
    SetupTextInput,
    SetupTextInputWrapper,
    SetupWrapper
} from "../styled/Setup.styled";
import {MagicButton, SubmitButton} from "../components/Buttons";

function SetupTutorWishAlt() {
    return (
        <SetupWrapper>
            <SetupHeroStyling/>
            <SetupFunctionalContainer>
                <SetupFunctionalContent>
                    <SetupStepIcon className="bi bi-arrow-left"></SetupStepIcon>
                    <SetupH1>3/<br/>Faisons connaissance !</SetupH1>
                    <SetupH2>Au cas où aucune disponiblité n'est trouvée...</SetupH2>
                    <SetupFormWrapper>
                        <SetupFormCategory>
                            <SetupH3 last={true}>Matière</SetupH3>
                            <MagicButton>Mathématiques</MagicButton><br/>
                            <MagicButton>Physique-chimie</MagicButton><br/>
                            <MagicButton>Histoire-géographie</MagicButton><br/>
                        </SetupFormCategory>
                        <SetupFormCategory>
                            <SetupH3 last={true}>Pour les niveaux</SetupH3>
                            <MagicButton>Seconde</MagicButton><br/>
                            <MagicButton>Première</MagicButton><br/>
                            <MagicButton>Terminale</MagicButton><br/>
                        </SetupFormCategory>
                        <SetupFormCategory>
                            <SetupH3 last={true}>Résultats du 1e Trim.</SetupH3>
                            <SetupTextInputWrapper>
                                <label>Moyenne (matière)</label>
                                <SetupDigitInput type={"text"} placeholder={"/20"}></SetupDigitInput>
                            </SetupTextInputWrapper>
                            <SetupTextInputWrapper>
                                <label>Appréciation (matière)</label>
                                <SetupTextInput placeholder={"Pour mieux cerner votre profil."}></SetupTextInput>
                            </SetupTextInputWrapper>
                        </SetupFormCategory>
                    </SetupFormWrapper>
                    <SetupH3 last={true}>Ou bien...</SetupH3>
                    <MagicButton full={true}>Pas de 2nd choix</MagicButton><br/>
                    <SubmitButton><i className="bi bi-arrow-right"></i></SubmitButton>
                </SetupFunctionalContent>
            </SetupFunctionalContainer>
            <SetupHeroContainer>
                <i className="bi bi-people-fill setup-hero"></i>
            </SetupHeroContainer>
        </SetupWrapper>
    );
}

export default SetupTutorWishAlt;
