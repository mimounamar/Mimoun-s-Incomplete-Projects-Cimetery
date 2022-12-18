import {
    NavButtonMobile,
    NavigationLink,
    NavigationLinkItem,
    NavigationList,
    NavigationSection,
    NavigationTitle,
    NavigationTitleMobile,
    NavigationWrapper
} from "../styled/Navigation.styled";
import {BasicButton} from "./Buttons";
import {useRef} from "react";

function Navigation(props) {
    const navigation_1 = useRef()
    const navigation_2 = useRef()

    function toggleNavigation() {
        navigation_1.current.classList.toggle("hidden")
        navigation_2.current.classList.toggle("hidden")
    }

    return (
        <NavigationWrapper>
            <NavigationTitleMobile>léonTools <NavButtonMobile className="bi bi-list"
                                                              onClick={toggleNavigation}></NavButtonMobile></NavigationTitleMobile>
            <NavigationSection ref={navigation_1} className={"hidden"}>
                <NavigationTitle>léonTools</NavigationTitle>
                <NavigationList>
                    <NavigationLinkItem><NavigationLink current={props.active === "home"}
                                                        href="/">Accueil</NavigationLink></NavigationLinkItem>
                    <NavigationLinkItem><NavigationLink current={props.active === "docs"}
                                                        href="/documentation">Documentation</NavigationLink></NavigationLinkItem>
                    <NavigationLinkItem><NavigationLink current={props.active === "contact"} href="/contact">Un problème
                        ?</NavigationLink></NavigationLinkItem>
                </NavigationList>
            </NavigationSection>
            <NavigationSection ref={navigation_2} className={"hidden"}>
                <BasicButton>Identification</BasicButton>
            </NavigationSection>
        </NavigationWrapper>
    );
}

export default Navigation;
