import { StatusBar } from 'expo-status-bar'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Card, Button } from '@rneui/themed'
import { useState } from 'react'
import tw from 'twrnc'
import { styles } from './styles.js'
import Home from './pages/screens/Home.jsx'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CameraScreen from './pages/screens/CameraScreen.jsx'

export default function App() {
  const Stack = createNativeStackNavigator();
  const [backendText, setBackendText] = useState(null);

  const handleButtonPress = async () => {
    try {
      const response = await fetch('http://10.13.87.253:3000/hello'); 
      const data = await response.text();
      console.log(data); // Log the response
      setBackendText(data); // Set the state with fetched data
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
          />
          <Stack.Screen name="Profile" component={CameraScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );

  
}
