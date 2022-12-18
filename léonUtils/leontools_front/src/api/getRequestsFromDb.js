import {leontoolsApi} from "./apiCall";
import axios from "axios";

function getRequestsFromDb(googleId, page) {
    return axios.get(leontoolsApi+"requests/"+googleId+"/"+page)
}

export default getRequestsFromDb;