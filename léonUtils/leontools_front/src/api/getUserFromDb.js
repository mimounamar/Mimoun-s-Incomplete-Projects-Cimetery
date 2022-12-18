import {leontoolsApi} from "./apiCall";
import axios from "axios";

function getUserFromDb(googleId) {
    return axios.get(leontoolsApi+"users/"+googleId)
}

export default getUserFromDb;