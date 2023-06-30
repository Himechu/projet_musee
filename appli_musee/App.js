import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer'
// module . exports = { projet : { ios :{}, android :{} }, assets :[ '../assets/font/HARRYP__.TTF' ], } 




import Formulaire from './Screen/Formulaire';
import Gestion from './Screen/Gestion';
import Acceuil from './Screen/Acceuil';

const Drawer = createDrawerNavigator()

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
     <Drawer.Navigator screenOptions={{
          unmountOnBlur : true}}>  
       <Drawer.Screen name={'acceuil'} component={Acceuil}/>
       <Drawer.Screen name={'art'} component={Formulaire}/>
        <Drawer.Screen name={'gestion'} component={Gestion}/>
      </Drawer.Navigator>
     </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
