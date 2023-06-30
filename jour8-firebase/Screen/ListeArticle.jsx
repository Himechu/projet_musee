import { StyleSheet, Text, View , FlatList } from 'react-native'
import React , {useState , useEffect} from 'react'
import { db } from '../Config/firebase'
import {getDocs , collection } from "firebase/firestore"

export default function ListeArticle() {

    const [articles , setArticles] = useState([])
    useEffect( function(){
        getDocs(collection(db, "articles"))
            .then(function(reponse){ 
                const resultat = reponse.docs.map(function(doc){
                    return doc.data()
                })
                setArticles(resultat)
            })
    } , [])

  return (
    <View>
      <Text>ListeArticle</Text>
      <FlatList 
        data={articles}
        renderItem={function({item}){
            return <View>
                <Text style={{fontSize : 25}}>{item.titre}</Text>
                <Text>{item.contenu}</Text>
            </View>
        }}
        keyExtractor={function(){ return Math.random().toString() }}
      />

    </View>
  )
}