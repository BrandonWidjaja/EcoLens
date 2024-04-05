import { StyleSheet } from 'react-native'
export const theme = {
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
  },
  container1: {
    flex: 1,
    paddingBottom: 8 // Adjust padding bottom to move the tabs up or down
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: theme.color.light,
    position: 'absolute',
    bottom: 0, // Adjust bottom position to move the tabs up or down
    left: 0,
    right: 0,
    height: 40, // Adjust tab bar height as needed
    elevation: 8 // Add elevation for Android shadow
  },
  tabItem: {
    flex: 1,
    textAlign: 'center',
    paddingVertical: 8 // Adjust vertical padding as needed
  },
  tabView: {
    paddingBottom: 40 // Adjust padding bottom to move the content up or down
  }
})
