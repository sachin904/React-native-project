import { Pressable, StyleSheet, View } from 'react-native'
import React from 'react'

//React Navigation
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import {RootStackParamList} from "../App"

import ProductItem from '../Components/ProductItem'
import Separator from '../Components/Separator'

import { PRODUCTS_LIST } from '../data/constant'
import { FlatList } from 'react-native'

type HomeProps =  NativeStackScreenProps<RootStackParamList,"Home">


const Home = ({navigation}:HomeProps) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={PRODUCTS_LIST}
        ItemSeparatorComponent={Separator}
        keyExtractor={item=>item.id}
        renderItem={({item})=>(
          <Pressable
          onPress={()=>{
            navigation.navigate('Details',{
              product:item
            })
          }}>
             <ProductItem product={item}/>
          </Pressable>
        )}/>
        
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',

    padding: 12,
    backgroundColor: '#FFFFFF',
  },
});