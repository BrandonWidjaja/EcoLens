import { StyleSheet } from 'react-native'
const theme = {
  color: {
    light: '#FAF3E1',
    dark: '#023E1A'
  }
}

import { Dimensions } from 'react-native'

const windowHeight = Dimensions.get('window').height
export const styles = StyleSheet.create({
  background: {
    backgroundColor: theme.color.light
  },
  resultBox: {
    marginTop: 0.07 * windowHeight,
    marginLeft: '13%',
    marginRight: '10%'
  },
  cardContainer: {
    width: '100%',
    height: 0.4 * windowHeight,
    alignItems: 'center'
  },
  card: {
    backgroundColor: '#000000',
    width: '80%',
    height: '100%',
    borderRadius: 10,
    overflow: 'hidden',
    margin: 10
  },
  imageContainer: {
    aspectRatio: 16 / 9 // Aspect ratio for a standard image size
  },
  image: {
    width: '100%',
    height: '100%'
  },
  smallText: {
    color: theme.dark,
    fontSize: 20 // Apply Josefin Sans font family
  },
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
