import { StyleSheet, Text, View , FlatList , Button } from 'react-native'
import React , {useEffect, useState} from 'react'
import { db } from '../Config/firebase'
import { collection , getDocs , deleteDoc , doc } from "firebase/firestore"

export default function Exo2() {
    const [clients , setClients] = useState([])
    const [update, setUpdate] = useState(true)
    const [id, setId] = useState("")

    useEffect( function(){
        getDocs(collection(db, "clients"))
            .then(function(reponse){
                const resultat = reponse.docs.map(function(doc){
                    return { ...doc.data() , id : doc.id}
                })
                setClients(resultat)
            })
    }, [update]) // ici dans le useEffect qui est dépendant de la valeur du state update

    function supprimer(id){
        deleteDoc(doc(db , "clients", id))
            .then(function(){
                setUpdate(!update)
            })
    }

    
  return (
    <View style={{ marginHorizontal : 10 }}>
      <Text>Exo2</Text>
    <FlatList 
        data={clients}
        renderItem={function({item}){
            return <View >
                <Text style={{ fontSize : 20 }}>{item.nom}</Text>
                <Text>{item.email}</Text>
                <Text>{item.role}</Text>
                <View style={{ flexDirection : "row"  }}>
                    <Button title={'modifier'} onPress={function(){}} color={'orange'} />
                    <Button title={'supprimer'} onPress={function(){
                        supprimer(item.id)
                    }} color={'red'} />
                </View>
            </View>
        }}
        keyExtractor={function(item){
            return Math.random().toString()
        }}
    />
    </View>
  )
}

const styles = StyleSheet.create({})