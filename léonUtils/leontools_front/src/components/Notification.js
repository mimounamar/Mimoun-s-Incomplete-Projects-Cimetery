import React, {Component} from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css'
import {
    NotificationAuthor, NotificationMore,
    NotificationText,
    NotificationTitle,
    NotificationWrapper
} from "../styled/Notification.styled";

class Notification extends Component {
    render() {
        return (
            <NotificationWrapper>
                <NotificationTitle>{this.props.data.title}</NotificationTitle>
                <NotificationAuthor>de {this.props.data.publisher_google_id}</NotificationAuthor>
                <NotificationText>{this.props.data.content}</NotificationText>
                <NotificationMore><i className="bi bi-plus"></i></NotificationMore>
            </NotificationWrapper>
        );
    }
}

export default Notification;