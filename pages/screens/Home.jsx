import React from 'react'
import { ScrollView, StyleSheet, TouchableOpacity, Image, KeyboardAvoidingView } from 'react-native'
import { Button, SearchBar} from '@rneui/themed';
import { View, Text, Platform} from 'react-native';
import { useState } from 'react';
import { responsiveHeight } from "react-native-responsive-dimensions";

const Home = ({navigation}) => {
  const [count, setCount] = useState(0);
  //const navigate = () => setCount(prevCount => prevCount + 1)
  const [searchText, setSearchText] = useState('');
  const updateSearch = (search) => {
    setSearchText(search);
  }
  return (
    <View style = {[styles.container, {flexDirection: 'column',},]}>
        <View style = {{flex: 1, backgroundColor: 'orange', maxWidth: '80%', justifyContent:'center', alignItems:'center'}}>
            <Text style = {styles.title}>EcoLens</Text>
        </View>
        <View style = {{flex: 3, backgroundColor: 'red', maxWidth: '80%', justifyContent:'center', alignItems:'center'}}>
            <Text style = {styles.desc}>
                Click the button below to scan an Image!
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                <Image 
                    resizeMode="cover"
                    style = {styles.logo}
                    source = {require('../../assets/logo.jpg')}
                />
            </TouchableOpacity>
        </View>
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height' ? 'padding' : 'height'} style = {{flex: 2, backgroundColor: 'white', width: '80%'}}>
            <Text style = {styles.desc}>
                Or
            </Text>
            <SearchBar
                placeholder="Describe your Item"
                onChangeText={updateSearch}
                lightTheme={true}
                value={searchText}
                round={true}
            />
        </KeyboardAvoidingView>
    </View>
  )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 70,
        fontFamily: 'Arial',
        fontWeight: '500',
        color: "green",
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightgreen',
        flexDirection: 'column',
    },
    logo: {
        aspectRatio:1,
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
    }
})

export default Home
