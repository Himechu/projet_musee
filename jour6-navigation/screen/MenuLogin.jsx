import {createNativeStackNavigator} from "@react-navigation/native-stack"
import MotPassOublie from "./MotPassOublie"
import Login from "./Login"

const Stack = createNativeStackNavigator()

export default function MenuLogin() {
  return (
    <Stack.Navigator>
        <Stack.Screen name={'connexion'} component={Login} />
        <Stack.Screen name={'mot-de-passe-oublie'} component={MotPassOublie} />
    </Stack.Navigator>
  )
}