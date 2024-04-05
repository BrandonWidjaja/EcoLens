import { Header } from '@rneui/themed'
import { View, TouchableOpacity } from 'react-native'
import { Card, Text, Icon } from '@rneui/themed'
import { styles } from '../styles'
function AppHeader() {
  return (
    <Header
      leftComponent={
        <TouchableOpacity onPress={console.log('idea')}>
          <Icon type="material" name="lightbulb" color="white" />
        </TouchableOpacity>
      }
      rightComponent={
        <View style={styles.headerRight}>
          <TouchableOpacity onPress={console.log('map')}>
            <Icon type="material" name="location-on" color="white" />
          </TouchableOpacity>
        </View>
      }
      centerComponent={{ text: 'Header', style: styles.heading }}
    />
  )
}

export default AppHeader
