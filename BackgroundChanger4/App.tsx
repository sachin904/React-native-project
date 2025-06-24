

import { useState } from 'react';
import { Text, StatusBar, StyleSheet, useColorScheme, View, TouchableOpacity } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';



function App() {
  const isDarkMode = useColorScheme() === 'dark';
  const [randomBackground, setRandomBackground] = useState(["#ffffff"]);
  const createRandomColor = () => {
    const hexRange = "0123456789ABCDEF";
    let color = "#";
    let color1 = "#";
    let color2 = "#";
    let color3 = "#";
    let color4 = "#";
    let color5 = "#";
    let color6 = "#";
    for (let i = 0; i < 6; i++) {
      color += hexRange[Math.floor(Math.random() * 16)];
      color1 += hexRange[Math.floor(Math.random() * 16)];
      color2 += hexRange[Math.floor(Math.random() * 16)];
      color3 += hexRange[Math.floor(Math.random() * 16)];
      color4 += hexRange[Math.floor(Math.random() * 16)];
      color5 += hexRange[Math.floor(Math.random() * 16)];
      color6 += hexRange[Math.floor(Math.random() * 16)];


    }
    setRandomBackground([color, color1, color2, color3, color4, color5, color6]);
  }
  return (
    <>
      <SafeAreaProvider>
        <SafeAreaView style={styles.safeContainer} >
          <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} backgroundColor={randomBackground[1]} />
          <View style={[styles.container, { backgroundColor: randomBackground[1] }]}>
            <View style={styles.shapeContainer}>
              <View style={[styles.rectangle, { backgroundColor: randomBackground[0] }]}>
                <Text />
              </View>
              <View style={[styles.circle, { backgroundColor: randomBackground[2] }]}>
                <Text />
              </View>
              <View style={[styles.square, { backgroundColor: randomBackground[3] }]}>
                <Text />
              </View>
            </View>

            <TouchableOpacity
              onPress={() => createRandomColor()}
              style={styles.actionButton}>
              <Text style={styles.actionButtontxt}>PRESS ME</Text>
            </TouchableOpacity>
            <View style={styles.shapeContainer}>
              <View style={[styles.sapphire, { backgroundColor: randomBackground[4] }]}>
                <Text />
              </View>
              <View style={[styles.oval, { backgroundColor: randomBackground[5] }]}>
                <Text />
              </View>
              <View style={[styles.Triangle, { borderBottomColor: randomBackground[6] }]}>
                <Text />
              </View>
            </View>
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
  shapeContainer: {
    width: "100%",
    height: 100,
    marginVertical: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    marginHorizontal: 20
  },
  rectangle: {
    height: 50,
    width: 80,
    marginLeft: 20,
    borderWidth: 1,
    borderColor: "black",
    shadowOffset: {
      height: 2,
      width: 0
    },
    elevation: 2,
    shadowColor: "white"
  },
  circle: {
    height: 70,
    width: 70,
    borderRadius: 70 / 2,
    borderWidth: 1,
    borderColor: "black",
    shadowOffset: {
      height: 2,
      width: 0
    },
    elevation: 2,
    shadowColor: "white"
  },
  square: {
    height: 70,
    width: 70,
    borderWidth: 1,
    borderColor: "black",
    shadowOffset: {
      height: 2,
      width: 0
    },
    elevation: 2,
    shadowColor: "white"
  },
  oval: {
    height: 50,
    width: 70,
    borderRadius: 70 / 2,
    marginLeft: 20,


  },
  Triangle: {
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderLeftWidth: 35,
    borderRightWidth: 35,
    borderBottomWidth: 70,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "black",

  },
  sapphire: {
    width: 70,
    height: 70,
    transform: [{ rotate: "45deg" }],
    marginLeft: 30,
    borderWidth: 1,
    borderColor: "black",
    shadowOffset: {
      height: 2,
      width: 0
    },
    elevation: 2,
    shadowColor: "white"
  }


});

export default App;
