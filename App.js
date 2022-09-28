import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import styles from './Estilo';
import { NavigationContainer } 
                           from '@react-navigation/native';
import { createNativeStackNavigator } 
                      from '@react-navigation/native-stack';
import Login from "./Login";

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


