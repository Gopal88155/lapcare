import axios from "axios";
import { ApiUrl } from "../../config";


const register = async (formData) => {
  const response = await axios.post(`${ApiUrl}/api/user/register`, formData);
  localStorage.setItem("user", JSON.stringify(response.data));
  return response.data;
};

const login = async (formData) => {
  const response = await axios.post(`${ApiUrl}/api/user/login`, formData);
  localStorage.setItem("user", JSON.stringify(response.data));
  return response.data;
};

const authService = { register, login };

export default authService;
