import { StyleSheet, Text, View , TextInput , Button } from 'react-native'
import React , {useState} from 'react'
import {db} from '../Config/firebase'
import { addDoc , collection } from "firebase/firestore"

export default function AjouterLivre({setUpdate}) {

    const [livre , setLivre] = useState({})

    function remplirLivre ( valeurSaisie , nom){
        const cloneLivre = {...livre};
        cloneLivre[nom] = valeurSaisie;
        setLivre(cloneLivre)
    }

    function submit(){
        addDoc(collection(db , "livres"), livre)
            .then(function(){
                alert("le livre a été ajouté en Bdd");
                setLivre({})
                setUpdate(function(update){ return !update})
            })
    }

  return (
    <View>
      <Text style={styles.titre}>AjouterLivre</Text>
      <TextInput 
        placeholder={'titre livre'} 
        style={styles.input} 
        onChangeText={function(textSaisie){  remplirLivre(textSaisie , "titre") }} 
        value={livre.titre}/>
      <TextInput 
        placeholder={'url couverture livre'} 
        style={styles.input} 
        onChangeText={function(textSaisie){  remplirLivre(textSaisie , "couverture") }} 
        value={livre.couverture}/>
      <TextInput 
        placeholder={'auteur livre'} 
        style={styles.input}  
        onChangeText={function(textSaisie){  remplirLivre(textSaisie , "auteur") }} 
        value={livre.auteur}/>
      <View>
        <Button title={'ajouter'} onPress={submit} color={'#6527BE'} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    titre : {fontSize : 25 , marginBottom : 20 },
    input : { borderColor : "black" , borderWidth :1 , marginBottom : 20 , padding : 10 , borderRadius : 10 }
})