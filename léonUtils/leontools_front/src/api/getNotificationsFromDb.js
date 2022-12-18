import {leontoolsApi} from "./apiCall";
import axios from "axios";

function getNotificationsFromDb(googleId, page) {
    return axios.get(leontoolsApi+"notifications/"+googleId+"/"+page)
}

export default getNotificationsFromDb;