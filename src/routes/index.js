import React,{useContext} from 'react'
import { NavigationContainer } from '@react-navigation/native'
import MainRoutes from './MainRoutes'
import AuthRoutes from './AuthRoutes'
import { UserContext } from '../services/Context'
import AgentRoutes from './AgentRoutes'

const Routes = () => {
  const {user}=useContext(UserContext)

  console.log(user)

  // const user = 3;
  return (
   <NavigationContainer>
      
       {user===null?  <AuthRoutes/>:user.admin? <MainRoutes/> : <AgentRoutes/>}

   </NavigationContainer>
  )
}

export default Routes

