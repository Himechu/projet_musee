import { StyleSheet, Text, View,Button } from 'react-native'
import React from 'react'

export default function Login({navigation}) {
  return (
    <View>
      <Text>J'aime le paté</Text>
      <Button title={"MentionLegale"} onPress={function(){
          navigation.navigate("MentionLegale")

         }}/>
    </View>
  )
}

const styles = StyleSheet.create({})