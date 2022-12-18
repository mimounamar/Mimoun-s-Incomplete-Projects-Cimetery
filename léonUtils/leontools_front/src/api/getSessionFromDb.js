import {leontoolsApi} from "./apiCall";
import axios from "axios";

function getSessionFromDb(sessionId) {
    return axios.get(leontoolsApi+"sessions/"+sessionId)
}

export default getSessionFromDb;