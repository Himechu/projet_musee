import { StyleSheet, Text, View , ActivityIndicator } from 'react-native'
import React , {useState , useEffect} from 'react'
import Personnage from './Personnage'
export default function ApiGameOfThrones() {
    const [personnage, setPersonnage] = useState({}) // objet vide 
    useEffect( function(){
        // exécuter une requête ajax uniquement lors de la phase de Monté du composant
        // mettre la requête ajax dans un useEffect( , [])
        fetch("https://thronesapi.com/api/v2/Characters/1")
            .then(function(reponse){ return reponse.json()})
            .then(function(data){ 
                setTimeout( function(){ setPersonnage(data) } , 2000)
              })
       /*  axios.get("https://thronesapi.com/api/v2/Characters/1%22)
            .then(function(data){ setPersonnage(data) }) */
    }, [])
  return (
    <View>
      <Text>ApiGameOfThrone</Text> 
      <View style={{ alignItems: "center" }}>
        { Object.keys(personnage).length === 0 
            ?
            <ActivityIndicator size={'large'}/>
            :
            <Personnage information={personnage} />
        }
      </View>

    </View>
  )
}

const styles = StyleSheet.create({})