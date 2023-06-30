import { StyleSheet, Text, View , TextInput , Button} from 'react-native'
import React , {useState, useContext} from 'react'
import { AuthContext } from '../contexte/AuthContext'
export default function Login() {
    const [identifiants , setIdentifiants] = useState({ email : "toto@yahoo.fr", password : "azerty"  })
    const {login}= useContext(AuthContext);

  return (
    <View>
      <Text>Login</Text>
      <TextInput placeholder='votre login' style={styles.input} onChangeText={function(texteSaisi){
        const cloneIdentifiants = {...identifiants}
        cloneIdentifiants.email = texteSaisi 
        setIdentifiants(cloneIdentifiants)
      }} value={ identifiants.email }/>
      <TextInput placeholder='votre password'  style={styles.input} onChangeText={function(texteSaisi){
        const cloneIdentifiants = {...identifiants}
        cloneIdentifiants.password = texteSaisi 
        setIdentifiants(cloneIdentifiants)
      }} value={ identifiants.password }/>
      <View style={{ flexDirection : "row" , justifyContent : "center" }}>
        <Button title={'connexion'} onPress={function(){
            console.log(identifiants)
            login(identifiants)
            }}  color={'green'}/>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  input : { borderColor : "black" , borderWidth : 1 , marginBottom : 10 , padding : 5 }
})