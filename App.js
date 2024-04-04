import React, { useState, useRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Card } from '@rneui/themed';
import tw from 'twrnc';
import { Camera } from 'expo-camera';

export default function App() {
  const [backendText, setBackendText] = useState(null);
  const [cameraPermission, setCameraPermission] = useState(null);
  const [camera, setCamera] = useState(null);
  const [imageUri, setImageUri] = useState(null);
  const [showCamera, setShowCamera] = useState(false);

  const cameraRef = useRef(null);

  const askCameraPermission = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();
    setCameraPermission(status === 'granted');
  };

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

  const takePicture = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      const uri = photo.uri;
      console.log('Photo URI:', uri);
      setImageUri(uri);
      uploadImage(uri);
    }
  };

  const uploadImage = async (uri) => {
    const formData = new FormData();
    formData.append('image', {
      uri,
      name: 'photo.jpg',
      type: 'image/jpeg',
    });

    try {
      const response = await fetch('http://10.13.87.253:3000/upload', {
        method: 'POST',
        body: formData,
        headers: {
          'content-type': 'multipart/form-data',
        },
      });
      const responseData = await response.json();
      console.log('Upload Response:', responseData);
    } catch (error) {
      console.error('Upload Error:', error);
    }
  };

  const openCamera = () => {
    setShowCamera(true);
  };

  const closeCamera = () => {
    setShowCamera(false);
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
        {!showCamera && (
          <Button title="Open Camera" onPress={openCamera} />
        )}
        {cameraPermission === null ? (
          <Button title="Request Camera Permission" onPress={askCameraPermission} />
        ) : cameraPermission === false ? (
          <Text>No access to camera</Text>
        ) : showCamera && (
          <View style={styles.cameraContainer}>
            <Camera
              ref={cameraRef}
              style={styles.camera}
              type={Camera.Constants.Type.back}
              ratio="1:1"
              onCameraReady={() => setCamera(true)}
            />
            <View style={styles.buttonContainer}>
              <Button title="Take Picture" onPress={takePicture} />
              <Button title="Take Another Photo" onPress={closeCamera} />
            </View>
          </View>
        )}
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  cameraContainer: {
    flex: 1,
    width: '100%',
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
