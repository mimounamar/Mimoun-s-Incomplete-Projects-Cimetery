import {api} from "./root";

function handleAuth(gtoken){
    return api.get("auth/"+gtoken).then(response => response.data)
}

export default handleAuth;
