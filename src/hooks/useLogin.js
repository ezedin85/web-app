import { useNavigate } from "react-router-dom";
import { SERVER_URL } from "../utils/config";
import useAuthContext from "./useAuthContext";
import { useState } from "react";

export default function useLogin() {
  const navigate = useNavigate();
  const { setAdmin } = useAuthContext();
  const [isLoading, setIsLoading] = useState(false);
  async function login(data, setError, setShowToast) {
    setIsLoading(true);
    const response = await fetch(`${SERVER_URL}admins/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const json = await response.json();
    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
      setShowToast(true);
    } else {
      setIsLoading(false);
      setAdmin(json);
      localStorage.setItem("adminToken", JSON.stringify({ token: json.token }));
      alert("Login Successful");
      navigate("/dashboard");
    }
  }

  return { login, isLoading };
}
