import { StatusBar } from 'expo-status-bar'
import { ScrollView, StyleSheet, Text, View, Image } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Card, Button } from '@rneui/themed'
import { useState , useRef} from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { Camera } from 'expo-camera';
import tw from "twrnc";


const CameraScreen = () => {
  const [cameraPermission, setCameraPermission] = useState(null);
  const [camera, setCamera] = useState(null);
  const [imageUri, setImageUri] = useState(null);
  const [showCamera, setShowCamera] = useState(false);

  const cameraRef = useRef(null);

  const askCameraPermission = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();
    setCameraPermission(status === 'granted');
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
      const response = await fetch('http://10.13.201.21:3000/upload', {
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

export default CameraScreen