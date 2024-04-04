import { StyleSheet } from 'react-native'
export const styles = StyleSheet.create({
  cardContainer: {
    width: '100%',
    alignItems: 'center'
  },
  card: {
    width: '80%',
    height: 200,
    borderRadius: 10,
    overflow: 'hidden',
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  image: {
    width: '100%',
    height: '100%'
  },
  smallText: {
    color: 'pink',
    fontSize: 20,
    fontFamily: 'JosefinSans-Regular', // Apply Josefin Sans font family
    margin: 10
  }
})
