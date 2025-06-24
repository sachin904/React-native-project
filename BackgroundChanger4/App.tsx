

import { useState } from 'react';
import { Text, StatusBar, StyleSheet, useColorScheme, View, TouchableOpacity } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';


function App() {
  const isDarkMode = useColorScheme() === 'dark';
  const [randomBackground, setRandomBackground] = useState("#ffffff");
  const createRandomColor = () => {
   const hexRange="0123456789ABCDEF";
   let color="#";
   for(let i=0;i<6;i++){
      color+=hexRange[Math.floor(Math.random()*16)] ;
   }
   setRandomBackground(color);
  }
  return (
    <>
      <SafeAreaProvider>
        <SafeAreaView style={styles.safeContainer} >
          <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content' } backgroundColor={randomBackground} />
          <View style={[styles.container,{backgroundColor:randomBackground}]}>
            <TouchableOpacity 
            onPress={()=>createRandomColor()}
            style={styles.actionButton}>
              <Text style={styles.actionButtontxt}>PRESS ME</Text>
            </TouchableOpacity>

          </View>
        </SafeAreaView>
      </SafeAreaProvider>
    </>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"

  },
  actionButton: {
  justifyContent: "center",
  alignItems: "center",
  borderRadius: 16,
  paddingHorizontal: 40,
  paddingVertical: 16,
  backgroundColor: "#4F46E5",  // Elegant blue-violet, change as per theme
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 4,
  },
  shadowOpacity: 0.2,
  shadowRadius: 6,
  elevation: 5,
},

actionButtontxt: {
  fontSize: 18,
  fontWeight: "600",
  color: "#fff",     // White text for contrast
  letterSpacing: 0.5,
},


});

export default App;
