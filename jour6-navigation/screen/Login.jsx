import { StyleSheet, Text, View , TextInput , Button} from 'react-native'
import React from 'react'

export default function Login({navigation}) {
  return (
    <View>
      <Text>Login</Text>
      <TextInput placeholder='votre login' style={styles.input}/>
      <TextInput placeholder='votre password'  style={styles.input} />
      <View style={{ flexDirection : "row" , justifyContent : "center" }}>
        <Button title={'connexion'} onPress={function(){}}  color={'green'}/>
      </View>
      <View style={{ flexDirection : "row" , justifyContent : "center" , marginTop : 30 }}>
        <Button title={'mot de passe oublié ??'} onPress={function(){
          navigation.navigate("mot-de-passe-oublie")
        }} />
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  input : { borderColor : "black" , borderWidth : 1 , marginBottom : 10 , padding : 5 }
})