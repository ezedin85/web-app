import { useContext } from "react";
import { UserContext } from "../contexts/userContext";

export default function useUserContext() {
  const context = useContext(UserContext);
  if (!context) {
    throw Error("useUserContext must be used in UserContext.provider");
  }
  return context;
}
