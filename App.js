import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import { ThemeProvider } from '@rneui/themed'
import { Card, Button } from '@rneui/themed'

import { styles } from './styles.js'
import HeaderWithSwiper from './pages/MySwiper.jsx'
import HowTo from './pages/screens/HowToScreen.jsx'

// Your App
export default function App() {
  return (
    <SafeAreaProvider>
      <HowTo></HowTo>
    </SafeAreaProvider>
  )
}
