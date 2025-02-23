//create a Context

import { createContext } from "react";

const AuthContext = createContext()

//put some state in the context

//share the created context with ohter componnesent

export default  function AuthProvider({children}){

    return(
        <AuthContext.Provider>
            {children}
        </AuthContext.Provider>

    )
}