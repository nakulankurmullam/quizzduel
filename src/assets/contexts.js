import React, {createContext,useState}from 'react'

export const FirebaseContext = createContext(null);
export const AuthContext = createContext(null);
export const UserDetailsContext = createContext(null);

export default function Contexts({children}) {
  const [isOnline, setIsOnline] = useState(false)
  return (
    <AuthContext.Provider value={{isOnline,setIsOnline}}>
      {children}
    </AuthContext.Provider>
  )
}


