import { StatusBar, StyleSheet, useColorScheme } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
//navigation
import { NavigationContainer } from '@react-navigation/native'; 
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//screens
import Details from './screens/Details';
import Home from './screens/Home';

export type RootStackParamList={
  Home:undefined;
  Details:{productId:string}
}
const Stack=createNativeStackNavigator<RootStackParamList>();
function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
         <NavigationContainer>
           <Stack.Navigator>
              <Stack.Screen 
                name='Home'
                component={Home}
                options={{
                  title:"trending products"
                }
                }/>
                <Stack.Screen 
                name='Details'
                component={Details}
                options={{
                  title:"trending products"
                }
                }/>
           </Stack.Navigator>
         </NavigationContainer>
               </SafeAreaView>
    </SafeAreaProvider>
   
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
