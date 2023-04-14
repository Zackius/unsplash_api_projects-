import axios from "axios";

const API_URL_Register = "/user-auth-node/auth/register/";
const API_URL_Login = "/user-auth-node/auth/login/";

//register users

const registerUser = async (userData) => {
  const response = await axios.post(API_URL_Register, userData);
  return response.data;
};

//login users
const loginUser = async (userData) => {
  const response = await axios.post(API_URL_Login, userData);
  return response.data;
};

const authServices = {
  registerUser,
  loginUser,
};
export default authServices;
