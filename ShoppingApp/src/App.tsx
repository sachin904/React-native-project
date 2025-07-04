import {} from 'react-native'
import React from 'react'
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

//screens
import Details from './Screens/Details';
import Home from './Screens/Home';

export type RootStackParamList = {
  Home: undefined;
  Details:{product:Product}
};
 const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
  
    <NavigationContainer>
       <Stack.Navigator initialRouteName='Home'>
         <Stack.Screen
           name='Home'
           component={Home}
           options={{
            title:"Trending Products"
           }}/>
           <Stack.Screen
           name='Details'
           component={Details}
           options={{
            title:"Trending Products"
           }}/>
       </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
