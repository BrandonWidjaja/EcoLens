import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, Image, KeyboardAvoidingView, ScrollView, Platform } from 'react-native';
import { SearchBar } from '@rneui/themed';
import { View, Text } from 'react-native';
import { responsiveHeight } from "react-native-responsive-dimensions";

const Home = ({ navigation }) => {
  const [searchText, setSearchText] = useState('');

  const updateSearch = (search) => {
    setSearchText(search);
  }

  const handleSearchSubmit = () => {
    console.log('Search submitted:', searchText);
    
    navigation.navigate('SearchResults', { searchQuery: searchText });
  }

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.innerContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>EcoLens</Text>
          </View>
          <View style={styles.contentContainer}>
            <Text style={styles.desc}>Click the button below to scan an Image!</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
              <Image
                resizeMode="cover"
                style={styles.logo}
                source={require('../../assets/logo.jpg')}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.searchContainer}>
            <Text style={styles.desc}>Or</Text>
            <View style={styles.searchBarContainer}>
            <SearchBar
                placeholder="Describe your Item"
                onChangeText={updateSearch}
                lightTheme={true}
                value={searchText}
                round={true}
                onSubmitEditing={handleSearchSubmit}
                containerStyle={[styles.searchBar, { borderWidth: 0, borderBottomWidth: 0, borderTopWidth: 0 }]}
                inputStyle={styles.searchInput}
            />
              <TouchableOpacity style={styles.submitButton} onPress={handleSearchSubmit}>
                <Text style={styles.submitButtonText}>Submit</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF3E1',
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: '80%',
  },
  contentContainer: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: '80%',
  },
  searchContainer: {
    flex: 2,
    width: '80%',
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  searchBar: {
    flex: 1, 
    marginRight: 10, 
    backgroundColor: '#FAF3E1',
    borderRadius: 10,
  },
  searchInput: {
    fontSize: 16,
    color: '#333', 
  },
  title: {
    fontSize: 70,
    fontFamily: 'Arial',
    fontWeight: '500',
    color: "black",
    paddingTop: 30,
  },
  logo: {
    aspectRatio: 1,
    height: responsiveHeight(30),
    borderColor: 'green',
    borderWidth: 9,
    borderRadius: 100000,
  },
  desc: {
    paddingTop: 20,
    fontSize: 25,
    textAlign: 'center',
    paddingBottom: 20,
  },
  submitButton: {
    backgroundColor: 'green',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
  },
  submitButtonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default Home;
