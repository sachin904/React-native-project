import { StyleSheet, View } from 'react-native'
import React from 'react'

const Separator = () => {
  return (
    <View style={styles.Separator}/>
  )
}

export default Separator

const styles = StyleSheet.create({
    Separator:{
        height:0.8,
        backgroundColor:"#CAD5E2"
    }
})