import {
    SetupFormCategory,
    SetupFormWrapper,
    SetupFunctionalContainer,
    SetupFunctionalContent,
    SetupH1,
    SetupH2,
    SetupH3,
    SetupH4,
    SetupHeroContainer,
    SetupHeroStyling,
    SetupStepIcon,
    SetupWrapper
} from "../styled/Setup.styled";
import {MagicButton, SubmitButton} from "../components/Buttons";

function SetupAboutCurriculum() {
    return (
        <SetupWrapper>
            <SetupHeroStyling/>
            <SetupFunctionalContainer>
                <SetupFunctionalContent>
                    <SetupStepIcon className="bi bi-arrow-left"></SetupStepIcon>
                    <SetupH1>2/<br/>Faisons connaissance !</SetupH1>
                    <SetupH2>À propos de ma scolarité</SetupH2>
                    <SetupFormWrapper>
                        <SetupFormCategory>
                            <SetupH3>Je suis en classe de...</SetupH3>
                            <SetupH4>(rempli précédemment)</SetupH4>
                            <MagicButton>Seconde</MagicButton><br/>
                            <MagicButton>Première</MagicButton><br/>
                            <MagicButton>Terminale</MagicButton><br/>
                        </SetupFormCategory>
                        <SetupFormCategory>
                            <SetupH3 last={true}>en options ...</SetupH3>
                            <MagicButton>Espagnol</MagicButton><br/>
                            <MagicButton>Maths. Expertes</MagicButton><br/>
                            <MagicButton>Maths. Complé.</MagicButton><br/>
                            <MagicButton>D.G.E.M.C.</MagicButton><br/>
                        </SetupFormCategory>
                        <SetupFormCategory>
                            <SetupH3 last={true}>et spécialités</SetupH3>
                            <MagicButton>Mathématiques</MagicButton><br/>
                            <MagicButton>Physique-chimie</MagicButton><br/>
                            <MagicButton>Sc. Vie et Terre</MagicButton><br/>
                            <MagicButton>H.G.G.S.P.</MagicButton><br/>
                            <MagicButton>Sc. Éco. et Sociales</MagicButton><br/>
                            <MagicButton>Anglais A.M.C</MagicButton><br/>
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

export default SetupAboutCurriculum;
