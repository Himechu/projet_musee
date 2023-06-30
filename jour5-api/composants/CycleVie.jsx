import { StyleSheet, Text, View } from 'react-native'
import React, {useState, useEffect} from 'react'

export default function CycleVie() {
    // hook
    // use effect prends 2 valeurs
    // finction anonyme => METTRE DES STRAITEMENTS DEDANS => requete ajax
    // tableau => si il est vide je dois exécuter le traitement que mounted
   
    useEffect(function(){},[])
    const variable = 0;

    // si tableau contien une variable => la phase d'update
    // exécuter le traitement autant de foisque la valeur stockée dans la variable est modifiée
   
    useEffect(function(){},[variable])
   
    // SI LE TRaitement retourne une fonction et que je le tableau est vide 
    // je veux effectuer un traitement au moment ou le composant est supprimé de l'affichahr
    // phase unmounted
 
    return function(){}(
    <View>
      <Text>CycleVie</Text>
    </View>
  )
}

const styles = StyleSheet.create({})