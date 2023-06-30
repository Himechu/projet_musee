import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import {db} from '../Config/firebase'
import  {addDoc, collection} from "firebase/firestore"

export default function AjouterArticle() {
  const [article, setArticle] = useState({titre:"", contenu:""})
  const [message, setMessage] = useState(false);
  
  function submit(){
    addDoc(collection(db,"articles"), article)
  .then(function(){
    setMessage(true);
    setTimeout(function(){setMessage(false);}, 1500)
    setArticle ({titre:"", contenu:''})})
}

  function remplir(t, nom){
    const cloneArticle ={...article};
    cloneArticle[nom] = t;
    setArticle(cloneArticle)
  }
  return (
    <View style={styles.box}>
        <TextInput placeholder='titre' style={styles.input} onChangeText={function(texteSaisi){remplir(texteSaisi,"titre")}} value={article.titre}/>
        <TextInput placeholder='contenu' style={styles.input} multiline={true} numberOfLines={5} value={article.contenu} onChangeText={function(texteSaisi){remplir(texteSaisi, "contenu")}}/>
        <TouchableOpacity style={styles.boxBtn} onPress={submit}>
            <Text style={styles.btn}>Ajouter Article</Text>
        </TouchableOpacity>
        {message && <View>
          <Text style={styles.succes}>Article enregistre dans Firebox</Text>
          </View>
          }
    </View>
  )
}

const styles = StyleSheet.create({
    input :{borderWidth:1, borderColor:"black", padding:15,marginBottom:10, borderRadius:10 },
    boxBtn :{flexDirection:"row", justifyContent:'center',},
    btn:{backgroundColor:"red",padding:10, width:"50%",borderRadius:10, textAlign:"center", fontSize:18, color:"white",},
    box:{margin:10,},
    succes : {padding:10, backgroundColor:"green", textAlign:"center", marginTop:10,}
  })