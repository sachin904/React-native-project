
import { StatusBar, StyleSheet, Text, useColorScheme, View,TextInput , FlatList, Pressable} from 'react-native';
import { currencyByRupee } from './contants';
import CurrencyButton from '../components/CurrencyButton';
import { useState } from 'react';
import Snackbar from 'react-native-snackbar';


function App() {
  const isDarkMode = useColorScheme() === 'dark';
  const [inputValue, setInputValue] = useState('');
  const [resultValue, setResultValue] = useState('');
  const [targetCurrency, setTargetCurrency] = useState('');

  const buttonPressed = (targetValue: Currency) => {
    if (!inputValue) {
      return Snackbar.show({
        text: 'enter the input value',
        backgroundColor: "#EA7773",
        textColor: "#000000"
      });
    }

    const inputAmount = parseFloat(inputValue);
    if (!isNaN(inputAmount)) {
      const convertValue = inputAmount * targetValue.value;
      const result = `${targetValue.symbol} ${convertValue.toFixed(2)}`
      setResultValue(result);
      setTargetCurrency(targetValue.name);
    }
    else {
      return Snackbar.show({
        text: 'not a valid number to convert',
        backgroundColor: "##F4BE2C",
        textColor: "#000000"
      });
    }
  }

  return (
    
      <View style={styles.container}> 
       <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
         <View style={styles.topContainer}>
           <View style={styles.rupeesContainer}>
             <Text style={styles.rupee}>₹</Text>
             <TextInput 
              maxLength={14}
              value={inputValue}
              clearButtonMode='always'
              onChangeText={setInputValue}
              keyboardType='number-pad'
              placeholder='Enter amount in Rupees'
              style={styles.inputAmountField}
              />
            </View>
             {resultValue && (
            <Text style={styles.resultTxt} >
              {resultValue}
            </Text>
          )}
         </View>
         <View style={styles.bottomContainer}>
           <FlatList
            numColumns={3}
            data={currencyByRupee}
            keyExtractor={item=>item.name}
            renderItem={({item})=>(
              <Pressable
               style={[styles.button,targetCurrency===item.name && styles.selected]} 
               onPress={()=>buttonPressed(item)}>
                <CurrencyButton {...item}/>
               </Pressable>
               
            )}
           />
         </View>
      </View>
  

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2d3436', // Darker, modern background
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  topContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingTop: 40,
    paddingBottom: 20,
  },
  rupeesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#dfe6e9',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 8,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 2, height: 2 },
  },
  rupee: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#2d3436',
    marginRight: 6,
  },
  resultTxt: {
    fontSize: 28,
    fontWeight: '700',
    color: '#ffffff',
    marginTop: 12,
  },
  inputAmountField: {
    flex: 1,
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 10,
    fontSize: 18,
    color: '#2d3436',
  },
  bottomContainer: {
    flex: 3,
    marginTop: 20,
  },
  button: {
    flex: 1,
    margin: 10,
    height: 60,
    borderRadius: 16,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowOffset: { width: 1, height: 1 },
  },
  selected: {
    backgroundColor: '#fdcb6e', // Highlighted selected button
  },
});


export default App;
