import {HomeContent, HomeHero, HomeJoin, HomeSubtitle, HomeTitle, HomeWrapper} from "../styled/Homepage.styled";
import Navigation from "../components/Navigation";
import {BasicButton} from "../components/Buttons";
import Hero from "../assets/hero-main.svg"
import {HeroImage, Oval} from "../components/Shapes";

function Homepage() {
    return (
        <HomeWrapper>
            <Navigation active={"home"}/>
            <HomeContent>
                <HomeJoin>
                    <div>
                        <HomeTitle>À deux, c’est toujours mieux !</HomeTitle>
                        <HomeSubtitle>Sinon, pourquoi Batman aurait-t-il besoin de Robin?</HomeSubtitle>
                        <BasicButton>Rejoignez-nous</BasicButton>
                    </div>
                </HomeJoin>
                <HomeHero>
                    <Oval size={"big"}>
                        <HeroImage size={"big"} src={Hero}/>
                    </Oval>
                </HomeHero>
            </HomeContent>
        </HomeWrapper>
    );
}

export default Homepage;
