import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
import { useNavigation } from '@react-navigation/native'
import {NativeStackNavigationProp} from "@react-navigation/native-stack"
import { Button } from 'react-native';

type DetailsProps=NativeStackScreenProps<RootStackParamList,'Details'>
const Details = ({route}:DetailsProps) => {
    const {productId}=route.params
   const navigation= useNavigation<NativeStackNavigationProp<RootStackParamList>>()
  return (
    <View style={styles.container}>
      <Text style={styles.smallText}>Details:{productId}</Text>
      <Button
      title="go to home"
      //onPress={()=>navigation.navigate("Home")}
      onPress={()=>navigation.goBack()}/>
      <Button
      title="go back to first screen"
      //onPress={()=> navigation.pop(2)}
      onPress={()=> navigation.popToTop()}/>
    </View>
  )
}

export default Details

const styles = StyleSheet.create({
      container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    smallText:{
        color:"red"
    }
})