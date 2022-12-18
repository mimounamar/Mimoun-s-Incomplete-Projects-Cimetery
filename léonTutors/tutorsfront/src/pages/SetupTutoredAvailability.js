import {
    Calendar,
    CalendarColumn,
    CalendarContent,
    CalendarDay,
    CalendarDetailsInfo,
    CalendarHeader,
    CalendarPageWrapper,
    CalendarTime,
    CalendarTimeColumn,
    CalendarTimeSlot,
    CalendarWrapper
} from "../styled/CalendarPages.styled";
import React from 'react';
import {SetupH1, SetupH2, SetupStepIcon} from "../styled/Setup.styled";
import {MagicButton, SubmitButton} from "../components/Buttons";
import {TutoredCalendarH4, TutoredCalendarP, TutorInfo, TutorsList} from "../styled/TutoredCalendar.styled";

function SetupTutoredAvailability() {
    return (
        <CalendarPageWrapper inverted={true}>
            <CalendarHeader>
                <SetupStepIcon className="bi bi-arrow-left"></SetupStepIcon>
                <SetupH1>4/<br/>Plus qu'une étape !</SetupH1>
            </CalendarHeader>
            <CalendarDetailsInfo>
                <SetupH2>Voir les disponiblités de...</SetupH2>
                <TutorsList>
                    <MagicButton>Tuteur nº1</MagicButton>
                    <MagicButton>Tuteur nº2</MagicButton>
                    <MagicButton>Tuteur nº3</MagicButton>
                    <MagicButton>Tuteur nº4</MagicButton>
                    <MagicButton>Tuteur nº5</MagicButton>
                </TutorsList>
                <SetupH2 first={true}>À propos...</SetupH2>
                <TutorInfo>
                    <TutoredCalendarH4>TUTEUR Nº3</TutoredCalendarH4>
                    <TutoredCalendarP>EST UN ÉLÈVE DE TERMINALE, EN SPÉCIALITÉS S.V.T, PHYSIQUE-CHIMIE ET OPTIONS MATHS.
                        COMPLÉ.</TutoredCalendarP>
                    <TutoredCalendarP>IL/ELLE SOUHAITERAIT AIDER DES ÉLÈVES DE 1ÈRE 2 FOIS PAR SEMAINE EN
                        MATHÉMATIQUES.</TutoredCalendarP>
                </TutorInfo>
            </CalendarDetailsInfo>
            <CalendarWrapper>
                <CalendarContent>
                    <SetupH2>Quand êtes vous disponible?</SetupH2>
                    <Calendar>
                        <CalendarTimeColumn>
                            <CalendarTime></CalendarTime>
                            <CalendarTime>8h00</CalendarTime>
                            <CalendarTime>9h00</CalendarTime>
                            <CalendarTime>10h00</CalendarTime>
                            <CalendarTime>11h00</CalendarTime>
                            <CalendarTime>12h00</CalendarTime>
                            <CalendarTime>13h00</CalendarTime>
                            <CalendarTime>14h00</CalendarTime>
                            <CalendarTime>15h00</CalendarTime>
                            <CalendarTime>16h00</CalendarTime>
                            <CalendarTime>17h00</CalendarTime>
                            <CalendarTime>18h00</CalendarTime>
                        </CalendarTimeColumn>
                        <CalendarColumn>
                            <CalendarDay>Lundi</CalendarDay>
                            <CalendarTimeSlot/>
                            <CalendarTimeSlot/>
                            <CalendarTimeSlot/>
                            <CalendarTimeSlot/>
                            <CalendarTimeSlot/>
                            <CalendarTimeSlot/>
                            <CalendarTimeSlot/>
                            <CalendarTimeSlot/>
                            <CalendarTimeSlot/>
                            <CalendarTimeSlot/>
                        </CalendarColumn>
                        <CalendarColumn>
                            <CalendarDay>Mardi</CalendarDay>
                            <CalendarTimeSlot/>
                            <CalendarTimeSlot/>
                            <CalendarTimeSlot/>
                            <CalendarTimeSlot/>
                            <CalendarTimeSlot/>
                            <CalendarTimeSlot/>
                            <CalendarTimeSlot/>
                            <CalendarTimeSlot/>
                            <CalendarTimeSlot/>
                            <CalendarTimeSlot/>
                        </CalendarColumn>
                        <CalendarColumn>
                            <CalendarDay>Mercredi</CalendarDay>
                            <CalendarTimeSlot/>
                            <CalendarTimeSlot/>
                            <CalendarTimeSlot/>
                            <CalendarTimeSlot/>
                            <CalendarTimeSlot/>
                            <CalendarTimeSlot/>
                            <CalendarTimeSlot/>
                            <CalendarTimeSlot/>
                            <CalendarTimeSlot/>
                            <CalendarTimeSlot/>
                        </CalendarColumn>
                        <CalendarColumn>
                            <CalendarDay>Jeudi</CalendarDay>
                            <CalendarTimeSlot/>
                            <CalendarTimeSlot/>
                            <CalendarTimeSlot/>
                            <CalendarTimeSlot/>
                            <CalendarTimeSlot/>
                            <CalendarTimeSlot/>
                            <CalendarTimeSlot/>
                            <CalendarTimeSlot/>
                            <CalendarTimeSlot/>
                            <CalendarTimeSlot/>
                        </CalendarColumn>
                        <CalendarColumn>
                            <CalendarDay>Vendredi</CalendarDay>
                            <CalendarTimeSlot/>
                            <CalendarTimeSlot/>
                            <CalendarTimeSlot/>
                            <CalendarTimeSlot/>
                            <CalendarTimeSlot/>
                            <CalendarTimeSlot/>
                            <CalendarTimeSlot/>
                            <CalendarTimeSlot/>
                            <CalendarTimeSlot/>
                            <CalendarTimeSlot/>
                        </CalendarColumn>
                        <CalendarColumn>
                            <CalendarDay>Samedi</CalendarDay>
                            <CalendarTimeSlot/>
                            <CalendarTimeSlot/>
                            <CalendarTimeSlot/>
                            <CalendarTimeSlot/>
                            <CalendarTimeSlot/>
                            <CalendarTimeSlot/>
                            <CalendarTimeSlot/>
                            <CalendarTimeSlot/>
                            <CalendarTimeSlot/>
                            <CalendarTimeSlot/>
                        </CalendarColumn>
                    </Calendar>
                    <SubmitButton abs={false}><i className="bi bi-arrow-right"></i></SubmitButton>
                </CalendarContent>
            </CalendarWrapper>
        </CalendarPageWrapper>
    );
}

export default SetupTutoredAvailability;