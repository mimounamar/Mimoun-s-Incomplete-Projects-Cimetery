import {
    SetupFunctionalContainer,
    SetupFunctionalContent,
    SetupH1,
    SetupH2,
    SetupHeroContainer,
    SetupHeroStyling,
    SetupP,
    SetupStepIcon,
    SetupWrapper
} from "../styled/Setup.styled";

function Thanks() {
    return (
        <SetupWrapper>
            <SetupHeroStyling/>
            <SetupFunctionalContainer>
                <SetupFunctionalContent>
                    <SetupStepIcon className="bi bi-house-door"></SetupStepIcon>
                    <SetupH1>Merci</SetupH1>
                    <SetupH2>Vous êtes désormais inscrit !</SetupH2>
                    <SetupP>Vous recevrez dans pas longtemps un e-mail contenant les directives à suivre pour les
                        prochaines étapes du processus. Pendant ce temps là, relax !</SetupP>
                    <SetupP>Pour quelconque autre information, consultez la documentation ou contactez nous - catégorie
                        "Un problème ?"</SetupP>
                </SetupFunctionalContent>
            </SetupFunctionalContainer>
            <SetupHeroContainer>
                <i className="bi bi-check-lg setup-hero"></i>
            </SetupHeroContainer>
        </SetupWrapper>
    );
}

export default Thanks;
