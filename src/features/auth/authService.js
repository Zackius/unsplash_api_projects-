import axios from "axios";


const API_URL = "localhost:4500/user-auth-node/auth/register"

const register = async (userData) => {
    const response = await axios.post(API_URL, userData)
    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }
    return response.data
}
const authServices = {
    register,
}
export default authServices