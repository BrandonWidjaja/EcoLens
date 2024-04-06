import React, { useState } from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  Platform
} from 'react-native'
import { SearchBar } from '@rneui/themed'
import { View, Text } from 'react-native'
import axios from 'axios'
import PressableImage from '../../components/PressableImage.jsx'

const Home = ({ navigation }) => {
  const [searchText, setSearchText] = useState('')

  const updateSearch = (search) => {
    setSearchText(search)
  }

  const handleSearchSubmit = async () => {
    try {
      console.log('Search submitted:', searchText)

      if (!searchText) {
        console.error('Search text is empty')
        return
      }

      const response = await axios.post(
        'http://' + process.env.EXPO_PUBLIC_MY_IP + ':3000/search',
        { text: searchText },
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      )
      console.log('Backend response:', response.data.message)
      const message = response.data.message
      navigation.navigate('Search', { message })
      // Clear search text after successful submission
      setSearchText('')

      // Handle response data as needed
    } catch (error) {
      console.error('Error searching text:', error)
      // Handle error as needed
    }
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.innerContainer}>
          <View style={styles.titleContainer}>
          <Image
                resizeMode="contain"
                style={styles.ecolensImage}
                source={require("../../assets/ecolens.png")}
                />
          </View>
          <View style={styles.contentContainer}>
            <Text style={styles.desc}>
              Click the button below to scan an Image!
            </Text>
            <PressableImage onPress={() => navigation.navigate('Camera')} />
          </View>
          <View style={styles.searchContainer}>
            <Text style={styles.desc}>Or describe your item here</Text>
            <View style={styles.searchBarContainer}>
              <SearchBar
                placeholder="Search Item"
                onChangeText={updateSearch}
                lightTheme={true}
                value={searchText}
                round={true}
                containerStyle={[
                  styles.searchBar,
                  { borderWidth: 0, borderBottomWidth: 0, borderTopWidth: 0 }
                ]}
                inputStyle={styles.searchInput}
              />

              <TouchableOpacity
                style={styles.submitButton}
                onPress={handleSearchSubmit}
              >
                <Text style={styles.submitButtonText}>Submit</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF3E1'
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20
  },
  titleContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: 'center',
    maxWidth: '80%'
  },
  contentContainer: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: '80%'
  },
  searchContainer: {
    flex: 2,
    width: '80%'
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  searchBar: {
    flex: 1,
    marginRight: 10,
    backgroundColor: '#FAF3E1',
    borderRadius: 10
  },
  searchInput: {
    fontSize: 16,
    color: '#333'
  },
  title: {
    fontSize: 70,
    // fontFamily: 'Arial',
    fontWeight: '500',
    color: 'black',
    paddingTop: 30
  },
  desc: {
    paddingTop: 0,
    fontSize: 25,
    textAlign: 'center',
    paddingBottom: 20
  },
  submitButton: {
    backgroundColor: 'green',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5
  },
  submitButtonText: {
    color: 'white',
    fontSize: 18
  },
  ecolensImage: {
    width: 300, 
    height: 100, 
    resizeMode: 'contain', 
    
  }
})

export default Home
