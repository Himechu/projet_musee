import { StyleSheet, Text, View , Button } from 'react-native'
import React from 'react'

export default function NousContacter({navigation}) {
  return (
    <View>
      <Text>NousContacter</Text>
      <Button title={'accéder au formulaire de demande technique'} onPress={function(){
        navigation.navigate("demande-technique")
      }} />
    </View>
  )
}