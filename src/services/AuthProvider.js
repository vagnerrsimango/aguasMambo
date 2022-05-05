import * as React from 'react'
import { UserContext } from './Context'

export default function AuthProvider({children}){
    const [user,setUser] = React.useState(null)
    return(
        <UserContext.Provider value={{user,setUser}}>
            {children}
        </UserContext.Provider>
    )
}
