import { StyleSheet, Text, View, Button, Image, Dimensions } from 'react-native'
import React from 'react'

export default function MentionLegale() {
  return (
    <View>
    <View style={{flexDirection:"row", justifyContent:"space-between", width:140, margin:50 }}>
    <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia mollitia, rem voluptate officiis ducimus necessitatibus voluptatibus ratione nam totam aliquid fugiat quod itaque! Eveniet, reiciendis! Tenetur repellendus praesentium veritatis laudantium?</Text>
    <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, excepturi unde. Magnam sapiente quaerat qui itaque odit eaque? Mollitia quidem labore possimus amet. Iste quo placeat voluptate non commodi. Nisi!</Text>
    </View>
    <View>
    <Image source={{uri : "https://via.placeholder.com/300x100", width: 400, height :100, } }/>      
    </View>
    </View>
  )
}

const styles = StyleSheet.create({})