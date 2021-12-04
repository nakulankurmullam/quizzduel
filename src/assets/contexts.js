import React, { createContext, useState } from "react";
import { app } from "../firebase/firebaseConfig";

export const FirebaseContext = createContext(null);
export const AuthContext = createContext(null);
export const UserDetailsContext = createContext(null);

export default function Contexts({ children }) {
  const [isOnline, setIsOnline] = useState(false);
  return (
    <FirebaseContext.Provider value={app}>
      <AuthContext.Provider value={{ isOnline, setIsOnline }}>
        {children}
      </AuthContext.Provider>
    </FirebaseContext.Provider>
  );
}
