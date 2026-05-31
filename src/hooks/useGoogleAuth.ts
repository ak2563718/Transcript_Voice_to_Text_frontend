import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";

export const useGoogleAuth = () => {
  return useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        const res = await axios.post(
          "http://localhost:4000/api/google",
          {
            accessToken: tokenResponse.access_token,
          },
          {
            withCredentials: true,
          }
        );

        console.log(res.data);
      } catch (error) {
        console.error(error);
      }
    },

    onError: () => {
      console.log("Google Login Failed");
    },
  });
};