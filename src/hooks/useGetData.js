import { useState } from "react";
import useAuthContext from "./useAuthContext";
import { SERVER_URL } from "../utils/config";

export default function useGetData() {
  const { admin } = useAuthContext();
  const [isLoading, setIsLoading] = useState(false);

  async function getData(url, setData, setError, setShowToast) {
    setIsLoading(true);
    const response = await fetch(`${SERVER_URL}${url}`, {
      headers: { authorization: `Bearer ${admin.token}` },
    });
    const json = await response.json();
    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
      setShowToast(true);
    } else {
      setIsLoading(false);
      setData(json);
    }
  }

  return { getData, isLoading };
}
