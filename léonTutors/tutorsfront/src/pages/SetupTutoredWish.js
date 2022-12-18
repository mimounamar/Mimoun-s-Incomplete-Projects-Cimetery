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

function SetupTutoredWish() {
    return (
        <SetupWrapper>
            <SetupHeroStyling/>
            <SetupFunctionalContainer>
                <SetupFunctionalContent>
                    <SetupStepIcon className="bi bi-arrow-left"></SetupStepIcon>
                    <SetupH1>3/<br/>Faisons connaissance !</SetupH1>
                    <SetupH2>Je souhaiterais obtenir de l'aide en...</SetupH2>
                    <SetupFormWrapper>
                        <SetupFormCategory>
                            <SetupH3 last={true}>Matière</SetupH3>
                            <MagicButton>Mathématiques</MagicButton><br/>
                            <MagicButton>Physique-chimie</MagicButton><br/>
                            <MagicButton>Histoire-géographie</MagicButton><br/>
                        </SetupFormCategory>
                        <SetupFormCategory>
                            <SetupH3 last={true}>Résultats du 1e Trim.</SetupH3>
                            <SetupTextInputWrapper>
                                <label>Moyenne (matière)</label>
                                <SetupDigitInput type={"text"} placeholder={"/20"}></SetupDigitInput>
                            </SetupTextInputWrapper>
                            <SetupTextInputWrapper>
                                <label>Appréciation (matière)</label>
                                <SetupTextInput
                                    placeholder={"Pour aider votre futur tuteur à comprendre vos difficultés."}></SetupTextInput>
                            </SetupTextInputWrapper>
                        </SetupFormCategory>
                    </SetupFormWrapper>
                    <SubmitButton><i className="bi bi-arrow-right"></i></SubmitButton>
                </SetupFunctionalContent>
            </SetupFunctionalContainer>
            <SetupHeroContainer>
                <i className="bi bi-people-fill setup-hero"></i>
            </SetupHeroContainer>
        </SetupWrapper>
    );
}

export default SetupTutoredWish;
