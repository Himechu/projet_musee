import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function User({user}) {
  return (
    <View style={{ alignItems: "center" }}>
      <Text>Nom Complet : {user.name}</Text>
      <Text>Email : {user.title}</Text>
      <Text>téléphone : {information.email}</Text>
      <Text>téléphone : {information.adress.street}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})