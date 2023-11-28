import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuthContext from "./useAuthContext";
import { SERVER_URL } from "../utils/config";

export default function usePostPatch() {
  const navigate = useNavigate();
  const { admin } = useAuthContext();
  const [isLoading, setIsLoading] = useState(false);

  // This function adds or edits a shop depending on the URL and the METHOD passed to it.
  async function postOrPatch(
    url,
    method,
    redirectTo,
    setError,
    setShowToast,
    successMsg,
    data,
  ) {
    setIsLoading(true);
    const response = await fetch(`${SERVER_URL}${url}`, {
      method,
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${admin.token}`,
      },
      body: JSON.stringify(data),
    });
    const json = await response.json();
    console.log(json);
    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
      setShowToast(true);
    } else {
      setIsLoading(false);
      alert(successMsg);
      const link = redirectTo || 0; //if redirectTo is falsy value, just refresh the page
      navigate(link);
    }
  }

  return { postOrPatch, isLoading };
}
