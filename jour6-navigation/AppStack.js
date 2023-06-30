import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, StatusBar as S } from 'react-native';
import {NavigationContainer} from "@react-navigation/native"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Stack-screen/Home';
import NousContacter from './Stack-screen/NousContacter';
import Login from './Stack-screen/Login';
import MentionLegale from './Stack-screen/MentionLegale';
import Message from './Stack-screen/Message'
import Resultat from './Stack-screen/Resultat';

const Stack = createNativeStackNavigator();// qui permet de créer le routeur

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name={"acceuil"} component={Home} options={{headerTitle:'bienvenue sur l acceuil', headerStyle: {backgroundColor : "red"}, headerTintColor :'white', headerTitleAlign :"center" }}/>
          <Stack.Screen name={"Nous-Contacter"} component={NousContacter}/>
          <Stack.Screen name={"Message"} component={Message}/>
          <Stack.Screen name={"Login"} component={Login}/>
          <Stack.Screen name={"MentionLegale"} component={MentionLegale}/>
          <Stack.Screen name={'resultat'} component={Resultat} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop:S.currentHeight
  },
});
