import {  View } from 'react-native'
import React , {useState} from 'react'
import AjouterLivre from "../Screen/AjouterLivre"
import ListeLivre from "../Screen/ListeLivre"

export default function Exo3() {
  const [update, setUpdate] = useState(true)
  return (
    <View style={{ marginHorizontal : 20 , flex: 1}}>
      <AjouterLivre setUpdate={setUpdate}/>
      <ListeLivre update={update} setUpdate={setUpdate}/>
    </View>
  )
}