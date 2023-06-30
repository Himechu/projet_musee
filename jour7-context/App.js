import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import MenuPrincipal from './Screen/MenuPrincipal';
import { AuthContextProvider } from './contexte/AuthContext';




const Tab = createBottomTabNavigator() ; 

export default function App() {
  return (<AuthContextProvider>
    <View style={styles.container}>
      <MenuPrincipal />
      <StatusBar style="auto" />
    </View>
  </AuthContextProvider>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   
  },
});




// npm install firebase

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBBZncoV_5a0H91OtIO1DwznTQJFMpjapU",
//   authDomain: "fir-doranco-cda-50be9.firebaseapp.com",
//   projectId: "fir-doranco-cda-50be9",
//   storageBucket: "fir-doranco-cda-50be9.appspot.com",
//   messagingSenderId: "656027022660",
//   appId: "1:656027022660:web:495fcf9bf7653832079311"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);