import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import Home from "./screen/Home"
// import NousContacter from './screen/NousContacter'
import MenuContacter from './Composants/MenuContacter'


import MenuLogin from './screen/MenuLogin'

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"

const Tab = createBottomTabNavigator() ; // créer le Router 

export default function App() {
  return (
    <View style={{flex : 1}}>
      <NavigationContainer>
        <Tab.Navigator screenOptions={{ 
            tabBarActiveTintColor : "red" , 
            tabBarInactiveTintColor : "blue" }}>
            <Tab.Screen name={'accueil'} component={Home} options={{
                headerTitle : "Bienvenue",
                headerTitleAlign : "center",
                tabBarIcon: function({ color, size }){
                    return <MaterialCommunityIcons name={'home'} size={size} color={color} />
                }
            }}/>
            <Tab.Screen name={'nous-contacter'} component={MenuContacter} options={{
                headerShown : false , 
                tabBarIcon : function({ color, size }){
                    return <MaterialCommunityIcons name={'contacts'} size={size} color={color} />
                }
            }}/>
            <Tab.Screen name={'Login'} component={ MenuLogin } options={{
                headerShown : false , 
                tabBarIcon : function({ color, size }){
                    return <MaterialCommunityIcons name={'login'} size={size} color={color} />
                }
            }}/>
        </Tab.Navigator>    
      </NavigationContainer>
    </View>
  )
}

const styles = StyleSheet.create({})