import React, {Component} from 'react';
import {
    NavigationActive,
    NavigationHide, NavigationInactive,
    NavigationList, NavigationLogout,
    NavigationTitle,
    NavigationWrapper, Sprite
} from "../styled/Navigation.styled";

const showNavigation = () => {
    const element = document.getElementById("navigation-list")
    element.style.display === "none" ? element.style.display = "block" : element.style.display = "none"
}

class Navigation extends Component {
    render() {
        return (
            <NavigationWrapper>
                <NavigationTitle>léonTools <NavigationHide className="bi bi-list" onClick={showNavigation}></NavigationHide></NavigationTitle>
                <NavigationList id="navigation-list">
                    <NavigationActive><Sprite className="bi bi-gear"> </Sprite>Tableau de bord</NavigationActive>
                    <NavigationInactive><Sprite
                        className="bi bi-file-earmark-bar-graph"> </Sprite>Statistiques</NavigationInactive>
                    <NavigationLogout><Sprite className="bi bi-box-arrow-left"> </Sprite>Se déconnecter</NavigationLogout>
                </NavigationList>
            </NavigationWrapper>
        );
    }
}

export default Navigation;