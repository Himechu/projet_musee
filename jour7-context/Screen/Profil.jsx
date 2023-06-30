import { StyleSheet, Text, View, Button, TextInput } from 'react-native'
import React, {useContext} from 'react'
import { AuthContext } from '../contexte/AuthContext'

export default function Profil() {
    const {logout}=useContext(AuthContext)
  return (
    <View style={{alignItems:"center"}}>
      <Text>Bienvenue sur le profil</Text>
      <View>
        <Button title={'deconnexion'} onPress={function(){
            logout()
        }}/>
      </View>
      <View>
        <TextInput placeholder='titre' onChangeText={function(){}} style={{borderWidth:1, borderColor:"Black"}}/>
        <TextInput placeholder='contenu' onChangeText={function(){}} multiline={true} numberOfLines={5} style={{borderWidth:1, borderColor:"Black"}}/>
        <Button title={'submissive'} onPress={function(){
            logout()}}/>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({})