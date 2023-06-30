import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import React from 'react'

export default function FormulaireDeRecherche() {
  return (
    <View style={{flexDirection:"row", alignItems:"center"}}>
      <TextInput placeholder={"saisire le nom de ce machin"} style={styles.input}/>
      <Button title={"go"} onPress={function(){}} />
    </View>
  )
}

const styles = StyleSheet.create({
    input:{borderColor:"black", borderWidth:1, flex:1, marginRight: 10, paddin:5},
})