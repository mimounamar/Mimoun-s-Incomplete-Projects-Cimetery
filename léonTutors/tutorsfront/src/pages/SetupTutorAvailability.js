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

function SetupTutorAvailability() {
    return (
        <CalendarPageWrapper inverted={false}>
            <CalendarHeader>
                <SetupStepIcon className="bi bi-arrow-left"></SetupStepIcon>
                <SetupH1>4/<br/>Faisons connaissance !</SetupH1>
            </CalendarHeader>
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
                </CalendarContent>
            </CalendarWrapper>
            <CalendarDetailsInfo>
                <SetupH2 style={{textAlign: "center"}}>Avec une limite de...</SetupH2>
                <MagicButton>1 séance / semaine</MagicButton>
                <MagicButton>2 séances / semaine</MagicButton>
                <MagicButton>3 séances / semaine</MagicButton>
                <SubmitButton abs={true}><i className="bi bi-arrow-right"></i></SubmitButton>
            </CalendarDetailsInfo>
        </CalendarPageWrapper>
    );
}

export default SetupTutorAvailability;