import { StyleSheet, Text, View , FlatList, Image, Dimensions } from 'react-native'
import React , {useState , useEffect} from 'react'
import { db } from '../Config/firebase'
import {getDocs , collection } from "firebase/firestore"
// import { useFonts } from 'expo-font';

// import { HarrrP, enableFontFaces, getExpoFontMap } from 'react-native-font-faces';

// enableFontFaces(HarrrP);





export default function Acceuil() {
  // const [loaded, error] = useFonts(getExpoFontMap(HarrrP));

    const [oeuvres , setOeuvres] = useState([])
    useEffect( function(){
        getDocs(collection(db, "art"))
            .then(function(reponse){ 
                const resultat = reponse.docs.map(function(doc){
                    return doc.data()
                })
                setOeuvres(resultat)
            })
    } , [])

  return (
    <View style={{margin:20}}>
      <Text style={{fontSize:30, color:"#16663C"}}>Liste des oeuvres Harry potter</Text>
      <FlatList 
        data={oeuvres}
        renderItem={function({item}){
            return <View>
                <Text style={{fontSize : 25, marginTop:30, marginBottom:16}}>{item.nom}</Text>
                <Image 
                        source={{ 
                            uri : item.image , 
                            width: Dimensions.get("window").width - 40 , 
                            height : 100 
                        }} 
                        fadeDuration={2000}
                        /> 
                <Text>{item.auteur}</Text>
                <Text>{item.description}</Text>
                <Text>{item.dte_creation}</Text>

            </View>
        }}
        keyExtractor={function(){ return Math.random().toString() }}
      />
    </View>
  )
}

const styles = StyleSheet.create({})