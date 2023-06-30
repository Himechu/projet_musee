import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

export default function Home({navigation}) {
  return (
    <View>
      <Text style={{ marginTop:10, marginLeft:10,}}>Voici le composant Home</Text>
      <View style={{flexDirection:"row", justifyContent:"space-between", marginVertical:10, marginLeft:10, marginRight:10,}}>
         <Button title={"aller voir la page contact"} onPress={function(){
          navigation.navigate("Nous-Contacter")
         }}/>
         <Button title={"se connecter"} onPress={function(){
          navigation.navigate("Login")

         }}/>
         
      </View>
      <View style={{padding:10}}>
      <Button title={"Message"} onPress={function(){
          navigation.navigate("Message")

         }}/>
         </View>
          </View>
  )
}

const styles = StyleSheet.create({})