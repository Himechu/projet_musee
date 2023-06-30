import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, StatusBar as S, ScrollBar, } from 'react-native';
import CycleVie from './composants/CycleVie';
import ApiGameOfThrones from './composants/ApiGameOfThrones';
import Exo1 from './composants/Exo1';
import Recherche from './composants/Recherche';
import Resultat from './composants/Resultats';
import FormulaireDeRecherche from './composants/FormulaireDeRecherche';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <CycleVie/> */}
      {/* <Exo1/> */}
     
      <Recherche/>
      {/* <ApiGameOfThrones/> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop:S.currentHeight,
    paddingHorizontal:20,
    
  },
});
