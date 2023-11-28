import { useState } from "react";
import { SERVER_URL } from "../utils/config";
import useAuthContext from "./useAuthContext";
import { useNavigate } from "react-router-dom";

export default function useDelete() {
  const navigate = useNavigate();
  const { admin } = useAuthContext();
  const [isLoading, setIsLoading] = useState(false);

  async function deleteOne(url, successMsg, redirectTo, setError, setShowToast) {
    setIsLoading(true);
    const response = await fetch(`${SERVER_URL}${url}`, {
      method: "DELETE",
      headers: { authorization: `Bearer ${admin.token}` },
    });
    const json = await response.json();
    if (!response.ok) {
        setIsLoading(false);
        setError(json.error);
        setShowToast(true);
    }else if(response.ok){
        setIsLoading(false);
      alert(successMsg);
      const link = redirectTo || 0; //if redirectTo is falsy value, just refresh the page
      navigate(link);
    }
  }

  return {deleteOne, isLoading};
}
