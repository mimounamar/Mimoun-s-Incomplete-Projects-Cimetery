import {leontoolsApi} from "./apiCall";
import axios from "axios";

function createSession(googleId, userIp, sessionId) {
    return axios.post(leontoolsApi+"sessions/", {
        session_id: sessionId,
        google_id: googleId,
        ip_address: userIp,
        user_agent: navigator.userAgent
    })
}

export default createSession;