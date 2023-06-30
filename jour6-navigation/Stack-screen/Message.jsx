import { StyleSheet, Text, View , Button , TextInput } from 'react-native'
import React , {useState} from 'react'

export default function Message({navigation}) {
    const [email , setEmail] = useState("")
  return (
    <View>
      <Text style={{ fontSize : 25 , marginBottom :10 }}>Message</Text>
      <TextInput 
        placeholder='votre@email.fr' 
        style={styles.input} 
        onChangeText={function(textSaisie){ setEmail(textSaisie) }}
        value={email}/>
      <Button title={'envoyer'} onPress={ function(){
        navigation.navigate( 'resultat' , { recherche : email })
      }} />
    </View>
  )
}

const styles = StyleSheet.create({
    input : { borderColor : "black" , borderWidth : 1 , borderRadius : 5 , padding : 5 ,marginBottom : 10 }
})