import { useEffect, createContext, useState } from "react";
import { SERVER_URL } from "../utils/config";

export const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [admin, setAdmin] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    let adminToken = JSON.parse(localStorage.getItem("adminToken"));
    if (adminToken) {
      //if token is avaliable in the localstorage
      const verify = async () => {
        const response = await fetch(`${SERVER_URL}admins/verify`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ token: adminToken.token }),
        });
        const json = await response.json();
        if (!response.ok) {
          localStorage.removeItem("adminToken");
          setLoading(false);
        }
        if (response.ok) {
          setLoading(false);
          setAdmin({ ...json, ...adminToken });
        }
      };
      verify();
    } else {
      setLoading(false);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ admin, setAdmin, loading }}>
      {children}
    </AuthContext.Provider>
  );
}
