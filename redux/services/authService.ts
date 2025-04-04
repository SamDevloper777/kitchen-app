import axios from "axios";
import { endpoints } from "@/config/urls";
import { useDispatch } from "react-redux";
import { login } from "../slices/authSlice";
import { router } from "expo-router";

export const registerUser = async (name: string, email: string, password: string) => {
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

export const verifyEmail = async (email: string, otp: string) => {
  try {
    const response = await axios.post(endpoints.VERIFY_OTP, { email, otp });
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Assuming the response for Login to be:
// As according to the API Sheet
// {
//   "message": "Login successful",
//   "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjo0ODk2MTI4NzIxLCJpYXQiOjE3NDI1Mjg3MjEsImp0aSI6IjQ1YzIwYWZiYzYxYzRhM2I5N2JkYTExNGEzNDc1YzFhIiwidXNlcl9pZCI6Nn0.dJD8dmq5eQCfKuPpiVh5qE1j5z9VS8ObQDBxTVaXyhQ",
//   "refresh_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6NDg5NjEyODcyMSwiaWF0IjoxNzQyNTI4NzIxLCJqdGkiOiI3OWI1NGQ4NWE4OTc0NDE5YmFlNjk2OWU1NmY3MmE2NCIsInVzZXJfaWQiOjZ9.SkJt15BNl9BtoYX9yJ5E-9sYcUAAQuqnYX0F5xibRdI",
//   "user": {
//     "id": 6,
//     "email": "john@gmail.com",
//     "username": "john",
//     "role": "owner"
//   }
// }

// TODO: Move the following return type to a types file
interface LoginResponse {
  message: string;
  access_token: string;
  refresh_token: string;
  user: {
    id: number; // TODO: Change to string if UUID is implemented by the Django API :)
    email: string;
    username: string;
    role: string;
  };
}

// This void async function calls the API and sets the state for redux store
export async function loginOwner(email: string, password: string, dispatch: any): Promise<void> {
  // TODO: Uncomment the following code when the API to be used
  // try {
  //   const response = await axios.post(endpoints.LOGIN, { email, password });
  //   return response.data;
  // } catch (error) {
  //   throw error;
  // }
  // Mocking the response for now
  const response: LoginResponse = {
    message: "Login successful",
    access_token: "mocked_access_token",
    refresh_token: "mocked_refresh_token",
    user: {
      id: 6,
      email: "john@gmail.com",
      username: "john",
      role: "owner"
    }
  }
  // Call the auth Reducer to set login state
  dispatch(login(
    {
      access_token: response.access_token,
      refresh_token: response.refresh_token,
      user: response.user
    }
  ))
  router.replace("/(tabs)")
};  
