import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Card } from '@rneui/themed';
import tw from 'twrnc';

export default function App() {
  const [backendText, setBackendText] = useState(null);

  const handleButtonPress = async () => {
    try {
      const response = await fetch('http://10.13.87.253:3000/hello'); 
      const data = await response.text();
      console.log(data); // Log the response
      setBackendText(data); // Set the state with fetched data
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SafeAreaProvider>
      <View style={tw`flex-1 justify-center items-center`}>
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
        <Card>
          <Text>Word of the Day</Text>
          {backendText && <Text>{backendText}</Text>}
          <Button title="Fetch from Backend" size="sm" type="clear" onPress={handleButtonPress} />
        </Card>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
