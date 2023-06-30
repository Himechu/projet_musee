import { StyleSheet,  View , TextInput , Button } from 'react-native'
import React , {useState} from 'react'
import { db } from '../Config/firebase'
import {doc , updateDoc } from "firebase/firestore"

export default function ModifLesOeuvres({item , setId, setUpdate}) {
    const [art , setArt] = useState(item)

    function changerArt ( valeurSaisie , nom){
        const cloneArt = {...art};
        cloneArt[nom] = valeurSaisie;
        setArt(cloneArt)
    }

    function submit( id ){
        updateDoc(doc(db , "art" , id), art)
            .then(function(){
                setArt({})
                setId("")
                setUpdate(function(update){ return !update})
            })
    }
    return (
    <View>
        <TextInput 
            placeholder={'nom'} 
            style={styles.input} 
            onChangeText={function(textSaisie){ changerArt(textSaisie , "nom") } }
            value={art.nom}
            />
        <TextInput 
            placeholder={'description'} 
            style={styles.input} 
            onChangeText={function(textSaisie){ changerArt(textSaisie , "description") } }
            value={art.description}
            />
             <TextInput 
            placeholder={'url_art'} 
            style={styles.input} 
            onChangeText={function(textSaisie){ changerArt(textSaisie , "image") } }
            value={art.image}
            />
        <TextInput 
            placeholder={'auteur'} 
            style={styles.input}  
            onChangeText={function(textSaisie){ changerArt(textSaisie , "auteur") } }
            value={art.auteur}
            />
            <TextInput 
            placeholder={'dte_creation'} 
            style={styles.input}  
            onChangeText={function(textSaisie){ changerArt(textSaisie , "dte_creation") } }
            value={art.dte_creation}
            />
        <View>
            <Button title={'go'} onPress={function(){
                submit( art.id )
            }} color={'#16663C'} />
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    input : { borderColor : "black" , borderWidth :1 , marginBottom : 20 , padding : 10 , borderRadius : 10 }
})