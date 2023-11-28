import { createContext, useState } from "react";

export const UserContext = createContext();

export function UserContextProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  return (
    <UserContext.Provider value={{ cartItems, setCartItems }}>
      {children}
    </UserContext.Provider>
  );
}
