import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function Personnage({information}) {
  return (
    <View style={{ alignItems: "center" }}>
      <Text>Nom Complet : {information.fullName}</Text>
      <Text>Titre : {information.title}</Text>
      <Text>Famille : {information.family}</Text>
      <Image source={{ uri : information.imageUrl , width: 150, height : 150 }} />
    </View>
  )
}

const styles = StyleSheet.create({})