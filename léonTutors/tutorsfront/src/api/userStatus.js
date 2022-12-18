import {api} from "./root";

function getUserStatus(gtoken){
    return api.get("users/"+gtoken).then(response => response.data)
}

export default getUserStatus;
