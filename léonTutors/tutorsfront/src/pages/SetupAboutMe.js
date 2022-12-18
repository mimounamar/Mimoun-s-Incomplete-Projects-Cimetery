import {
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
    SetupWrapper
} from "../styled/Setup.styled";
import {MagicButton, SubmitButton} from "../components/Buttons";

function SetupAboutMe() {
    return (
        <SetupWrapper>
            <SetupHeroStyling/>
            <SetupFunctionalContainer>
                <SetupFunctionalContent>
                    <SetupStepIcon className="bi bi-house-door"></SetupStepIcon>
                    <SetupH1>1/<br/>Faisons connaissance !</SetupH1>
                    <SetupH2>À propos de moi</SetupH2>
                    <SetupFormWrapper>
                        <SetupFormCategory>
                            <SetupH3 last={true}>Je suis en classe de...</SetupH3>
                            <MagicButton>Seconde</MagicButton><br/>
                            <MagicButton>Première</MagicButton><br/>
                            <MagicButton>Terminale</MagicButton><br/>
                        </SetupFormCategory>
                        <SetupFormCategory>
                            <SetupH3 last={true}>division de classe ...</SetupH3>
                            <MagicButton>Première 1</MagicButton><br/>
                            <MagicButton>Première 2</MagicButton><br/>
                            <MagicButton>Première 3</MagicButton><br/>
                            <MagicButton>Première 4</MagicButton><br/>
                            <MagicButton>Première 5</MagicButton><br/>
                            <MagicButton>Première 6</MagicButton><br/>
                            <MagicButton>Première 7</MagicButton><br/>
                            <MagicButton>Première 8</MagicButton><br/>
                            <MagicButton>Première STMG 1</MagicButton><br/>
                            <MagicButton>Première STMG 2</MagicButton><br/>
                        </SetupFormCategory>
                        <SetupFormCategory>
                            <SetupH3 last={true}>et souhaiterais...</SetupH3>
                            <MagicButton>Devenir tuteur</MagicButton><br/>
                            <MagicButton>Obtenir un tuteur</MagicButton><br/>
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

export default SetupAboutMe;
