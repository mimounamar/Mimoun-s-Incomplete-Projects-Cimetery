import React, {Component} from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css'
import {RequestColumn, RequestRow, RequestSpace, RequestStatusDone, RequestUpdateUndo} from "../styled/Request.styled";

class Request extends Component {
    render() {
        return (
            <>
                <RequestRow>
                    <RequestColumn>{this.props.data.generated_id}</RequestColumn>
                    <RequestColumn>{new Date(this.props.data.publish_date).toLocaleDateString()}</RequestColumn>
                    <RequestColumn>{this.props.data.room}</RequestColumn>
                    <RequestColumn>{this.props.data.type}</RequestColumn>
                    <RequestColumn>{this.props.data.description}</RequestColumn>
                    <RequestColumn><RequestStatusDone><i
                        className="bi bi-check2"> </i>Validé</RequestStatusDone></RequestColumn>
                    <RequestColumn><RequestUpdateUndo><i className="bi bi-x"></i></RequestUpdateUndo></RequestColumn>
                </RequestRow>

                <RequestSpace>
                    <td></td>
                </RequestSpace>
            </>
        );
    }
}

export default Request;