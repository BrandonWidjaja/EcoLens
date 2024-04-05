import { StyleSheet } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import Swipe from './pages/screens/Swipe'
// Your App

export default function App() {
  return (
    <SafeAreaProvider style={styles.background}>
      <Swipe />
    </SafeAreaProvider>
  )
}
const styles = StyleSheet.create({
  background: {
    backgroundColor: '#FAF3E1'
  },
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
