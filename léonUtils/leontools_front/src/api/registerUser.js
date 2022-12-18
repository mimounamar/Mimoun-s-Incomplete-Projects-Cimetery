import {leontoolsApi} from "./apiCall";
import axios from "axios";

function registerUser(googleId, firstName, lastName) {
    return axios.post(leontoolsApi+"users/", {
        google_id: googleId,
        first_name: firstName,
        last_name: lastName
    })
}

export default registerUser;