import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Card, Button } from '@rneui/themed'
import tw from 'twrnc'
import { styles } from './styles.js'
import Home from './pages/screens/Home.jsx'

export default function App() {
  return (
    <SafeAreaProvider>
      <View styles = {tw`bg-sky-500`}>
        <Home />
      </View>
      
    </SafeAreaProvider>
  )
}
