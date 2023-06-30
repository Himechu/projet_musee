import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import ListeArticle from './Screen/ListeArticle';
import AjouterArticle from './Screen/AjouterArticle';
import Exo1 from './Screen/Exo1';
import Exo2 from './Screen/Exo2';
import Exo3 from './Screen/Exo3';

const Drawer = createDrawerNavigator()
export default function App() {
  return (
    <View style={styles.container}>
     
     <NavigationContainer>
     <Drawer.Navigator screenOptions={{
          unmountOnBlur : true
        }}>        
        <Drawer.Screen name={'ajouter-article'} component={AjouterArticle}/>
        <Drawer.Screen name={'exo1'} component={Exo1} />
        <Drawer.Screen name={'liste-article'} component={ListeArticle}/>
        <Drawer.Screen name={'exo2'} component={Exo2}/>
        <Drawer.Screen name={'exo3'} component={Exo3}/>


      </Drawer.Navigator>
     </NavigationContainer>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   
  },
});
