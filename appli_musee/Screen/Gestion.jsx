
import { StyleSheet, Text, View , Image , Dimensions , FlatList , Button , TextInput } from 'react-native'
import React , {useState , useEffect } from 'react'
import {db} from '../Config/firebase'
import { getDocs , collection , doc , deleteDoc  } from "firebase/firestore"
import Confirm from './Confirm'
import ModifLesOeuvres from './ModifLesOeuvres'



export default function Gestion({update , setUpdate}) {

    const [malfoy , setMalfoy] = useState([])
    const [id, setId] = useState("");
    useEffect( function() {
        getDocs(collection(db, "art"))
            .then(function(reponse){
                const resultat = reponse.docs.map(function(doc){
                    return {...doc.data(), id : doc.id }
                })
                setMalfoy(resultat)
            })
    } , [update])

    function supprimer( id ){
        deleteDoc(doc(db, "art", id))
            .then(function(){
                setUpdate(function(update){ return !update })
                alert("L'oeuvre d'art a bien été supprimer")
            })
    }

  return (
    <View style={{flex: 1}}>
      <Text style={{ marginTop:10, fontSize:30, marginLeft:18}} >Oeuvres Harry potter</Text>
      <View style={{ height : "auto" }}>
        <FlatList 
        data={malfoy}
        renderItem={function({item}){
            return <View>
            { item.id === id 
                ? 
                <ModifLesOeuvres item={item} setUpdate={setUpdate} setId={setId}/>
                :
                <View style={{marginTop:30, marginBottom:16, marginLeft:16, marginRight:30}}>
                    <Text style={{fontSize : 25, color:"#16663C"}}>titre : {item.nom}</Text>
                    <Text >id : {item.id}</Text>
                    <Image style={{alignItems:'center'}}
                        source={{ 
                            uri : item.image , 
                            width: Dimensions.get("window").width - 40 , 
                            height : 100 
                        }} 
                        fadeDuration={2000}
                        /> 
                    <Text style={{ marginTop:10,}}>description : {item.description}</Text>
                    <Text >auteur : {item.auteur}</Text>
                    <Text >dt_creation : {item.dt_creation}</Text>
                    <View style={{ flexDirection : "row", justifyContent:"space-between", marginTop:10 }}>
                        <Button title={'modifier'} onPress={function(){
                            setId(item.id)
                        }} color={'#16663C'} />
                        <Button title={'supprimer'} onPress={function(){
                            Confirm(function(){ supprimer( item.id ) })  
                        }} color={'#C70C0C'} />
                    </View>
                </View>
            }
            
        </View>
        }}
        keyExtractor={function(){ return Math.random().toString()}}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
})