import { StyleSheet, Text, View,FlatList,Image } from 'react-native'
import React, {useState, useEffect}from 'react'

export default function Resultat() {
  return (
    <View>
      <Text>Liste des cocktails</Text>
      <FlatList
      data={cocktails}
      renderItem={function (item){
        return <View style={{flexDirection:"column", margin:3}}>
        <image source={{uri : item.strDrinkThumb, width: 150, height:150}}/>
        <Text style={{fontSize:16}}>{item.strDrink}</Text>
        <Text numberOfLines={2} style={styles.text}>{item.strInstructions}</Text>
        </View>
      }}
      keyExtractor={function(item){ return item.idDrink}}
     numColumns={2}
     />
    </View>
  )
}

const styles = StyleSheet.create({
})