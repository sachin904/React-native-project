import { StyleSheet, Text, View } from 'react-native'
import React, { PropsWithChildren } from 'react';

type CurrencyButtonProps= PropsWithChildren<{
    name:string;
    flag:string;
}> 

export default function CurrencyButton(props:CurrencyButtonProps) {
  return (
    <View style={styles.buttonContainer}>
      <Text style={styles.country}>{props.name}</Text>
      <Text style={styles.flag}>{props.flag}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    buttonContainer:{
       alignItems:"center"
    },
    country:{
         fontSize: 14,
        color: "#2d3436",
       
    },
    flag:{
         fontSize: 28,
        color: "#FFFFFF",
        marginBottom: 4
    }
})

