import {leontoolsApi} from "./apiCall";
import axios from "axios";

function updateUser(googleId, firstName, lastName, role, verified) {
    return axios.put(leontoolsApi+"users/"+googleId, {
        google_id: googleId,
        first_name: firstName,
        last_name: lastName,
        role: role,
        verified: verified
    })
}

export default updateUser;