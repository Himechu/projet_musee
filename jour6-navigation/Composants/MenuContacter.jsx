import {createNativeStackNavigator} from "@react-navigation/native-stack"
import React from 'react'
import NousContacter from "../screen/NousContacter"
import DemandeTechnique from "./DemandeTechnique"


const Stack = createNativeStackNavigator()

export default function MenuContacter() {
  return (
    <Stack.Navigator>
        <Stack.Screen name="contacter" component={NousContacter}/>
        <Stack.Screen name="demande-technique" component={DemandeTechnique} />
    </Stack.Navigator>
  )
}

