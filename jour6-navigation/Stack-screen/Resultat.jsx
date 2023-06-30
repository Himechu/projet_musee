import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Resultat({route}) {
  return (
    <View>
      <Text>Resultat {route.params.recherche}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})