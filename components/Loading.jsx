import { View, Image } from 'react-native'
import { Dimensions } from 'react-native'

const windowHeight = Dimensions.get('window').height
function Loading() {
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        height: 0.4 * windowHeight,
        backgroundColor: 'transparent'
      }}
    >
      <Image
        style={{
          width: 150,
          height: 150,
          backgroundColor: 'transparent'
        }}
        source={require('../assets/load.gif')}
      />
    </View>
  )
}
export default Loading
