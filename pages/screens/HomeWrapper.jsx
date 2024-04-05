import { ScrollView, StyleSheet, Text, View, Image } from 'react-native'
import { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Home, CameraScreen } from './index.js'

export default function HomeWrapper() {
  const Stack = createNativeStackNavigator()
  const [backendText, setBackendText] = useState(null)
  const handleButtonPress = async () => {
    try {
      const response = await fetch('http://128.250.0.213:3000/hello')
      const data = await response.text()
      console.log(data) // Log the response
      setBackendText(data) // Set the state with fetched data
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Camera" component={CameraScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
const styles = StyleSheet.create({
  cameraContainer: {
    flex: 1,
    width: '100%'
  },
  camera: {
    flex: 1
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
