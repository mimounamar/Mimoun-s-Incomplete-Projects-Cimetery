import {InfosContent, InfosHero, InfosWrapper, InfoTitle} from "../styled/Informations.styled";
import Navigation from "../components/Navigation";
import {
    Answer,
    AnswerStatus,
    QnA,
    QnAContainer,
    QnAContent,
    Question,
    QuestionChevron
} from "../styled/Documentation.styled";
import {HeroImage, Oval} from "../components/Shapes";
import Hero from "../assets/hero-docs.svg"

function handleAnswer(id) {
    const answer = document.getElementById(id.concat("-answer"))
    answer.classList.toggle("answer-opened")
    const chevron = document.getElementById(id.concat("-chevron"))
    chevron.classList.toggle("chevron-opened")
}

function Documentation() {
    return (
        <InfosWrapper>
            <AnswerStatus/>
            <Navigation active={"docs"}/>
            <InfosContent>
                <QnA>
                    <InfoTitle>Des questions?</InfoTitle>
                    <QnAContainer>
                        <QnAContent>
                            <Question onClick={() => handleAnswer("lorem")}>Lorem Ipsum Dolor Is Met <QuestionChevron
                                id={"lorem-chevron"} className="bi bi-chevron-down"></QuestionChevron></Question>
                            <Answer id={"lorem-answer"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                                feugiat in arcu eget condime ntum. Integer imperdiet justo vel erat pretium luctus.
                                Etiam quis urna hendrerit, viverra enim nec, eleifend lacus. Integer ut tellus non purus
                                venenatis efficitur id nec nisi. Duis vel viverra elit, eu pretium lectus. Sed massa
                                est, euismod nec nulla nec, blandit aliquam nibh. Sed leo elit, so</Answer>
                            <Question onClick={() => handleAnswer("lorem2")}>Lorem Ipsum Dolor Is Met <QuestionChevron
                                id={"lorem2-chevron"} className="bi bi-chevron-down"></QuestionChevron></Question>
                            <Answer id={"lorem2-answer"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Aliquam feugiat in arcu eget condime ntum. Integer imperdiet justo vel erat pretium
                                luctus. Etiam quis urna hendrerit, viverra enim nec, eleifend lacus. Integer ut tellus
                                non purus venenatis efficitur id nec nisi. Duis vel viverra elit, eu pretium lectus. Sed
                                massa est, euismod nec nulla nec, blandit aliquam nibh. Sed leo elit, so</Answer>
                            <Question onClick={() => handleAnswer("lorem3")}>Lorem Ipsum Dolor Is Met <QuestionChevron
                                id={"lorem3-chevron"} className="bi bi-chevron-down"></QuestionChevron></Question>
                            <Answer id={"lorem3-answer"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Aliquam feugiat in arcu eget condime ntum. Integer imperdiet justo vel erat pretium
                                luctus. Etiam quis urna hendrerit, viverra enim nec, eleifend lacus. Integer ut tellus
                                non purus venenatis efficitur id nec nisi. Duis vel viverra elit, eu pretium lectus. Sed
                                massa est, euismod nec nulla nec, blandit aliquam nibh. Sed leo elit, so</Answer>
                        </QnAContent>
                    </QnAContainer>
                </QnA>
                <InfosHero>
                    <Oval size={"medium"}>
                        <HeroImage size={"medium"} src={Hero}/>
                    </Oval>
                </InfosHero>
            </InfosContent>
        </InfosWrapper>
    );
}

export default Documentation;
