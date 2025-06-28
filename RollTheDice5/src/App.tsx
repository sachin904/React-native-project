
import { JSX, PropsWithChildren, useState } from 'react';
import { Image, ImageSourcePropType, Pressable, StatusBar, StyleSheet, Text, useColorScheme, View } from 'react-native';
import ReactNativeHapticFeedback from "react-native-haptic-feedback";
import DiceOne from "../assets/One.png"
import DiceTwo from "../assets/Two.png"
import DiceThree from "../assets/Three.png"
import DiceFour from "../assets/Four.png"
import DiceFive from "../assets/Five.png"
import DiceSix from "../assets/Six.png"
 
type DiceProps= PropsWithChildren<{
  ImageUrl:ImageSourcePropType
}>
const Dice= ({ImageUrl}:DiceProps):JSX.Element=>{
  return(
    <View>
       <Image style={styles.diceImage} source={ImageUrl}/>
    </View>
  )
}
const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};
function App() {
  const isDarkMode = useColorScheme() === 'dark';
  const [diceImage,setDiceImage]= useState<ImageSourcePropType>(DiceOne);
   
  const rollDiceOnTap = ()=>{
    let randomNumber = Math.floor(Math.random()*6)+1;
    switch(randomNumber){
      case 1:
        setDiceImage(DiceOne);
        break;
      case 2:
        setDiceImage(DiceTwo);
        break;
      case 3:
        setDiceImage(DiceThree);
        break;
      case 4:
        setDiceImage(DiceFour);
        break;
      case 5:
        setDiceImage(DiceFive);
        break;
      case 6:
        setDiceImage(DiceSix);
        break;

    }
    ReactNativeHapticFeedback.trigger("impactLight",options);
  }
  return (
    <View style={styles.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Dice ImageUrl={diceImage}/>
      <Pressable onPress={rollDiceOnTap}>
        <Text style={styles.rollDiceBtnText}>
          ROLL THE DICE
        </Text>
      </Pressable>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF2F2',
  },
  diceContainer: {
    margin: 12,
  },
  diceImage: {
    width: 200,
    height: 200,
  },
  rollDiceBtnText: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#E5E0FF',
    fontSize: 16,
    color: '#8EA7E9',
    fontWeight: '700',
    textTransform: 'uppercase',
  },
});

export default App;
