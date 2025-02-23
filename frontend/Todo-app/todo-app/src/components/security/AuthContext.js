//create a Context

import { createContext, useContext, useState } from "react";

export const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

// const authconext = useContext(AuthContext)


//put some state in the context

//share the created context with ohter componnesent

export default  function AuthProvider({children}){
    const [number,setNumber] =  useState(10)

    const [isAuthenticated,setAuthenticated] = useState(false)

    // setInterval(
    //     () => setNumber(number+1),10000);

    // const valueToBeShared = {number,isAuthenticated,setAuthenticated}

    return(
        <AuthContext.Provider value={{number,isAuthenticated ,setAuthenticated}}>
            {children}
        </AuthContext.Provider>

    )
}