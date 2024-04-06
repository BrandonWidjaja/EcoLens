import React, { useState, useEffect, useRef } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Image, Alert } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Button } from "@rneui/themed";
import { Camera } from "expo-camera";
import tw from "twrnc";

const CameraScreen = ({ navigation }) => {
  const [showCamera, setShowCamera] = useState(false);
  const [capturedImage, setCapturedImage] = useState(null);
  const [confirmedImage, setConfirmedImage] = useState(null);
  const cameraRef = useRef(null);

  useEffect(() => {
    checkCameraPermission();
  }, []);

  const checkCameraPermission = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();
    if (status === "granted") {
      setShowCamera(true);
    } else {
      Alert.alert(
        "Camera Permission Required",
        "Please enable camera access in settings to use this feature."
      );
    }
  };

  const takePicture = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      const uri = photo.uri;
      console.log("Photo URI:", uri);
      setCapturedImage(uri);
      setShowCamera(false);
    }
  };

  const confirmPicture = () => {
    setConfirmedImage(capturedImage);
    closeCamera();
    navigation.navigate("Results", { capturedImage: capturedImage });
  };

  const closeCamera = () => {
    setShowCamera(false);
    setCapturedImage(null);
  };

  const retakePhoto = () => {
    setShowCamera(true);
    setCapturedImage(null);
  };

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
              <Button
                title="Take Picture"
                color={"green"}
                onPress={() => {
                  takePicture();
                }}
              />
              <Button
                title="Cancel"
                color={"green"}
                onPress={() => {
                  closeCamera();
                  navigation.navigate("Home");
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
              <Button
                title="Confirm"
                color={"green"}
                onPress={confirmPicture}
              />
              <Button title="Retake" color={"green"} onPress={retakePhoto} />
            </View>
          </View>
        )}
        {confirmedImage && (
          <View style={styles.imagePreviewContainer}>
            <Image
              source={{ uri: confirmedImage }}
              style={styles.imagePreview}
            />
          </View>
        )}
      </View>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  cameraContainer: {
    flex: 1,
    width: "100%",
    backgroundColor: "#FAF3E1",
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginVertical: 20,
    width: "100%",
  },
  imagePreviewContainer: {
    flex: 1,
    width: "100%",
    backgroundColor: "#FAF3E1",
    alignItems: "center",
    paddingTop: 50,
  },
  imagePreview: {
    width: "90%",
    height: "80%",
    borderRadius: 10,
  },
});

export default CameraScreen;
