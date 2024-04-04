import React from 'react'
import { ScrollView, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { Button, LinearGradient} from '@rneui/themed';
import { View, Text } from 'react-native';
import { useState } from 'react';
import {
    responsiveHeight,
  } from "react-native-responsive-dimensions";

const Home = () => {
  const [count, setCount] = useState(0);
  const navigate = () => setCount(prevCount => prevCount + 1)
  return (
    <ScrollView>
        <View style = {styles.container}>
            <Text style = {styles.title}>EcoLens</Text>
            <TouchableOpacity onPress={navigate}>
                <Image 
                    resizeMode="cover"
                    style = {styles.logo}
                    source = {require('../../assets/logo.jpg')}
                />
            </TouchableOpacity>
            <Text style = {styles.desc}>
                Click the button to scan an Image! {count} 
            </Text>
            <Button color="success" radius={50} size='lg'>
                    Upload Picture
            </Button>
        </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 70,
        fontFamily: 'Arial',
        color: "green",
        textAlign: 'center',
        justifyContent: 'center',
        paddingTop: 50,
    },
    container: {
        flex: 1,
        alignItems: 'center',
    },
    logo: {
        aspectRatio:1,
        height: responsiveHeight(30),
        borderColor: 'green',
        borderWidth: 9,
        borderRadius: 10000,
    },
    desc: {
        paddingTop: 20,
        fontSize: 30,
        textAlign: 'center',
        paddingBottom: 20,
    }
})

export default Home
