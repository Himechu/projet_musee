import { StyleSheet, Text, View, TextInput, TouchableOpacity  } from 'react-native'
import React, {useState} from 'react'
import {db} from '../Config/firebase'
import  {addDoc, collection} from "firebase/firestore"
import * as Crypto from 'expo-crypto';


export default function Exo1() {

    const [ client, setClient] = useState({ nom : "" , email : "" , password : "" , role : "" })
    const [message , setMessage] = useState(false);

    function submit(){
        // contient au minimum 8 lettres 
        // et dans les 8 lettres minimum il FAUT chiffre / lettre Majuscule / minuscule
        const regex =  /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/
        if(!regex.test(client.password))
        {
            alert("password invalide !")
            return
        }

        Crypto.digestStringAsync(
            Crypto.CryptoDigestAlgorithm.SHA256,
            client.password
          ).then(function(password ){
            client.password = password 

            addDoc(collection(db, "clients"), client )
                    .then(function(){
                        setMessage(true);
                        setTimeout(function(){
                            setMessage(false);
                        } , 1500)
                        setClient({ nom : "" , email : "" , password : "" , role : "" })
                    })
          })
    }

    function remplir( t , nom ){
        const cloneClient = {...client};
        cloneClient[nom] = t ;
        setClient(cloneClient)
       }
  return (
    <View style={styles.box}>
      <Text>Exo1</Text>
      <TextInput placeholder='nom' style={styles.input} onChangeText={function(texteSaisi){ remplir(texteSaisi , "nom") }} value={client.nom} />
      <TextInput placeholder='email' style={styles.input} onChangeText={function(texteSaisi){ remplir(texteSaisi , "email") }} value={client.email} />
      <TextInput placeholder='password' 
        style={styles.input} 
        onChangeText={function(texteSaisi){ remplir(texteSaisi , "password") }} 
        value={client.password} 
        secureTextEntry={true}/>
      <TextInput placeholder='role' style={styles.input} onChangeText={function(texteSaisi){ remplir(texteSaisi , "role") }} value={client.role} />
      <TouchableOpacity style={styles.boxBtn} onPress={submit}>
            <Text style={styles.btn}>ajouter</Text>
      </TouchableOpacity>
      {message && <View>
        <Text style={ styles.success }>Client créé dans Firebase</Text>
    </View>}
    </View>
  )
}

const styles = StyleSheet.create({
    success : { padding : 10 , backgroundColor : "green" , textAlign : "center", marginTop : 20  }, 
    box : { marginHorizontal : 20 },
    input : { borderColor : "black" , borderWidth : 1 , padding : 10 , marginBottom : 10 , borderRadius : 10 },
    boxBtn : { flexDirection : "row" , justifyContent : "center"},
    btn : { backgroundColor : "red" , padding : 10 , width : "50%" , borderRadius : 10 , textAlign : "center" , fontSize : 22 }
})