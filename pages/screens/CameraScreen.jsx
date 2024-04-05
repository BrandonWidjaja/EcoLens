import React, { useState, useEffect, useRef } from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View, Image, Alert } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Button } from '@rneui/themed'
import { Camera } from 'expo-camera'
import tw from 'twrnc'

const CameraScreen = ({ navigation }) => {
  const [showCamera, setShowCamera] = useState(false)
  const [capturedImage, setCapturedImage] = useState(null)
  const [confirmedImage, setConfirmedImage] = useState(null)
  const cameraRef = useRef(null)

  useEffect(() => {
    checkCameraPermission()
  }, [])

  const checkCameraPermission = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync()
    if (status === 'granted') {
      setShowCamera(true)
    } else {
      Alert.alert(
        'Camera Permission Required',
        'Please enable camera access in settings to use this feature.'
      )
    }
  }

  const takePicture = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync()
      const uri = photo.uri
      console.log('Photo URI:', uri)
      setCapturedImage(uri)
    }
  }

  const uploadImage = async (uri) => {
    const formData = new FormData()
    formData.append('image', {
      uri,
      name: 'photo.jpg',
      type: 'image/jpeg'
    })

    try {
      const response = await fetch('http://128.250.0.213:3000/upload', {
        method: 'POST',
        body: formData,
        headers: {
          'content-type': 'multipart/form-data'
        }
      })
      const responseData = await response.json()
      console.log('Upload Response:', responseData)
    } catch (error) {
      console.error('Upload Error:', error)
    }
  }

  const confirmPicture = () => {
    setConfirmedImage(capturedImage)
    closeCamera()
    uploadImage(capturedImage)
  }

  const closeCamera = () => {
    setShowCamera(false)
    setCapturedImage(null)
  }

  return (
    <SafeAreaProvider>
      <View style={tw`flex-1 justify-center items-center`}>
        <StatusBar style="auto" />
        {showCamera && (
          <View style={styles.cameraContainer}>
            <Camera
              ref={cameraRef}
              style={styles.camera}
              type={Camera.Constants.Type.back}
              ratio="1:1"
              onCameraReady={() => setCapturedImage(null)}
            />
            <View style={styles.buttonContainer}>
              <Button title="Take Picture" onPress={takePicture} />
              <Button
                title="Cancel"
                onPress={() => {
                  closeCamera()
                  navigation.navigate('Home')
                }}
              />
            </View>
          </View>
        )}
        {capturedImage && (
          <View style={styles.imagePreviewContainer}>
            <Image
              source={{ uri: capturedImage }}
              style={styles.imagePreview}
            />
            <View style={styles.buttonContainer}>
              <Button title="Confirm" onPress={confirmPicture} />
              <Button title="Retake" onPress={() => setCapturedImage(null)} />
              <Button title="Cancel" onPress={closeCamera} />
            </View>
          </View>
        )}
        {confirmedImage && (
          <View style={styles.imagePreviewContainer}>
            <Image
              source={{ uri: confirmedImage }}
              style={styles.imagePreview}
            />
            {}
          </View>
        )}
      </View>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  cameraContainer: {
    flex: 1,
    width: '100%'
  },
  camera: {
    flex: 1
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginVertical: 20
  },
  imagePreviewContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  imagePreview: {
    width: '80%',
    height: 300,
    resizeMode: 'contain',
    marginBottom: 20
  }
})

export default CameraScreen
