import axios from "axios";
import { endpoints } from "@/config/urls";

export const registerUser = async (name :string, email:string, password:string) => {
  try {
    const response = await axios.post(endpoints.REGISTER, {
      name,
      email,
      password,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};



export const verifyEmail = async (email:string, otp:string) => {
  try {
    const response = await axios.post(endpoints.VERIFY_OTP, { email, otp });
    return response.data;
  } catch (error) {
    throw error;
  }
};