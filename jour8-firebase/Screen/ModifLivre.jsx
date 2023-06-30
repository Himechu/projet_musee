import { StyleSheet,  View , TextInput , Button } from 'react-native'
import React , {useState} from 'react'
import { db } from '../Config/firebase'
import {doc , updateDoc } from "firebase/firestore"

export default function ModifLivre({item , setId, setUpdate}) {
    const [livre , setLivre] = useState(item)

    function remplirLivre ( valeurSaisie , nom){
        const cloneLivre = {...livre};
        cloneLivre[nom] = valeurSaisie;
        setLivre(cloneLivre)
    }

    function submit( id ){
        updateDoc(doc(db , "livres" , id), livre)
            .then(function(){
                setLivre({})
                setId("")
                setUpdate(function(update){ return !update})
            })
    }
    return (
    <View>
        <TextInput 
            placeholder={'titre livre'} 
            style={styles.input} 
            onChangeText={function(textSaisie){ remplirLivre(textSaisie , "titre") } }
            value={livre.titre}
            />
        <TextInput 
            placeholder={'url couverture livre'} 
            style={styles.input} 
            onChangeText={function(textSaisie){ remplirLivre(textSaisie , "couverture") } }
            value={livre.couverture}
            />
        <TextInput 
            placeholder={'auteur livre'} 
            style={styles.input}  
            onChangeText={function(textSaisie){ remplirLivre(textSaisie , "auteur") } }
            value={livre.auteur}
            />
        <View>
            <Button title={'go'} onPress={function(){
                submit( livre.id )
            }} color={'#A7EDE7'} />
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    input : { borderColor : "black" , borderWidth :1 , marginBottom : 20 , padding : 10 , borderRadius : 10 }
})