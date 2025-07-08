
import React, { useContext, useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'

import AppwriteContext from '../appwrite/AppwriteContext'
import Loading from '../components/Loading'

//routes
import { AppStack } from './AppStack'
import { AuthStack } from './AuthStack'


export const  Router = () => {
    const [isLoading,SetIsLoading] = useState<boolean>(true);
    const {appwrite,isLoggedIn,setIsLoggedIn} =useContext(AppwriteContext)

    useEffect(()=>{
        appwrite
        .getCurrentUser()
        .then(Response=>{
            SetIsLoading(false)
            if(Response){
               setIsLoggedIn(true)
            }
        }).catch(_ =>{
            SetIsLoading(false)
            setIsLoggedIn(false)
        })
    },[appwrite,setIsLoggedIn])
    if(isLoading){
        return <Loading/>
    }
  return (
    <NavigationContainer>
        {isLoggedIn?<AppStack/>:<AuthStack/>}
    </NavigationContainer>
  )
}