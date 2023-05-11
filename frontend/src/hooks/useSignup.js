import { useState } from "react";
import axios from "axios";

import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch } = useAuthContext();

  const signup = async (email, password, firstName, lastName) => {
    setIsLoading(true);
    setError(null);
    try {
      setIsLoading(true);
      const res = await axios.post(
        // TODO: replace url
        "http://localhost:3001/api/signup",
        JSON.stringify({
          email: email,
          password: password,
          firstName: firstName,
          lastName: lastName,
        }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      const json = res.data;
      console.log(json);
      // save user to localstorage
      localStorage.setItem("user", JSON.stringify(json));

      // update the auth context
      dispatch({ type: "LOGIN", payload: json });

      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      setError(err.response?.data);
    }
  };

  return { signup, isLoading, error };
};
