import { StyleSheet, Text, View , ActivityIndicator } from 'react-native'
import React , {useState , useEffect} from 'react'
import { ScrollView } from 'react-native'

export default function Exo1() {
    const [user, setUser] = useState({})
    useEffect( function(){
        fetch("https://jsonplaceholder.typicode.com/users/1")
            .then(function(reponse ){ return reponse.json()})
            .then(function(data){  setUser(data) })
    } , [])
  return (
    <View>
      <Text>Exo1</Text>
      { Object.keys(user).length === 0  
      ?
        <ActivityIndicator />
      :
        <View>
            <Text>nom complet : {user.name} </Text>
            <Text>email : {user.email}</Text>
            <Text>téléphone : {user.phone}</Text>
            <Text>adresse : {user.address.street} {user.address.zipcode} {user.address.city}</Text>
            <View style={{  flexDirection : "row"}}>
                <ScrollView horizontal={true}>
                    { Object.values(user.address).map(function(item, key){
                        return <Text key={key}>{JSON.stringify(item)} </Text>
                    }) }
                </ScrollView>
            </View>
        </View>
        }
    </View>
  )
}

const styles = StyleSheet.create({})