import { StyleSheet, Text, View } from 'react-native'
import React, {useState, useEffect}from 'react'
import FormulaireDeRecherche from './FormulaireDeRecherche'
import Resultats from './Resultats'

export default function Recherche() {
    const [cocktails, setCocktails]= useState([])

    useEffect(function(){
        fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
        .then(function(reponse){return reponse.json()})
        .then(function(data){setCocktails (data.drinks)})
        },[])
  return (
    <View>
      <Text style={{fontSize:25}}>Recherche</Text>
      <FormulaireDeRecherche/>
      <Resultats cocktails={cocktails}/>
    </View>
  )
}

const styles = StyleSheet.create({})