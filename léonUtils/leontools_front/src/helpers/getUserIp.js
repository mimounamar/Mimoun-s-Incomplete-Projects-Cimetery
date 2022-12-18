import axios from "axios";

const getUserIp = () => {
    return axios.get('https://api.db-ip.com/v2/free/self')
}

export default getUserIp;