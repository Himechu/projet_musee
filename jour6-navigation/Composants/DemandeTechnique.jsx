import { StyleSheet, Text, View , TextInput , Button } from 'react-native'
import React from 'react'

export default function DemandeTechnique() {
  return (
    <View>
      <Text>DemandeTechnique</Text>
      <TextInput placeholder='votre email'  style={styles.input} />
      <TextInput placeholder='votre sujet'  style={styles.input} />
      <TextInput placeholder='détail de la demande'  style={styles.input}  multiline={true} numberOfLines={5}/>
      <View style={{ flexDirection : "row" , justifyContent : "center" }}>
        <Button title={'connexion'} onPress={function(){}}  color={'red'}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    input : { borderColor : "black" , borderWidth : 1 , marginBottom : 10 , padding : 5 }
})