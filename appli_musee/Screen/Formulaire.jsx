import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import {db} from '../Config/firebase'
import  {addDoc, collection} from "firebase/firestore"

export default function Formulaire({setUpdate}) {
  
    const [art, setArt] = useState({nom:"", description:"",image:"", auteur:"",dte_creation:"" })
    // const [message, setMessage] = useState(false);
    
  //   function submit(){
  //     addDoc(collection(db,"art"), art)
  //   .then(function(){
  //     setMessage(true);
  //     setTimeout(function(){setMessage(false);}, 1500)
  //     setArt ({nom:"", description:"",image:"", auteur:"",dte_creation:""})})
  // }
  function submit(){
    addDoc(collection(db , "art"), art)
        .then(function(){
            alert("l'oeuvre d'art a été ajouté'");
            setArt({})
            setUpdate(function(update){ return !update})
        })
}



    function remplir(valeurSaisie, nom){
      const cloneArt ={...art};
      cloneArt[nom] = valeurSaisie;
      setArt(cloneArt)
    }
  return (
    <View style={{margin:30}}>
     <TextInput placeholder='nom' style={styles.input} onChangeText={function(texteSaisi){ remplir(texteSaisi , "nom") }} value={art.nom} />
      <TextInput placeholder='description' style={styles.input} multiline={true} numberOfLines={5} onChangeText={function(texteSaisi){ remplir(texteSaisi , "description") }} value={art.description} />
      <TextInput placeholder='url art' style={styles.input} onChangeText={function(texteSaisi){ remplir(texteSaisi , "image") }} value={art.image} />
      <TextInput placeholder='auteur' style={styles.input}  onChangeText={function(texteSaisi){ remplir(texteSaisi , "auteur") }} value={art.auteur} />
      <TextInput placeholder='dte_creation' style={styles.input} onChangeText={function(texteSaisi){ remplir(texteSaisi , "dte_creation") }} value={art.dte_creation} />
      <TouchableOpacity style={styles.boxBtn} onPress={submit}>
            <Text style={styles.btn}>ajouter</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    input :{borderWidth:1, borderColor:"#16663C", padding:15,marginBottom:10, borderRadius:10 },
    boxBtn :{flexDirection:"row", justifyContent:'center',},
    btn:{backgroundColor:"#16663C",padding:10, width:"50%",borderRadius:10, textAlign:"center", fontSize:18, color:"white",},
    box:{margin:10,},
    succes : {padding:10, backgroundColor:"green", textAlign:"center", marginTop:10,}
})