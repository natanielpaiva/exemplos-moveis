import React, { useEffect } from 'react';
import { View, Button } from 'react-native';
import { Camera, useCameraDevices } from 'react-native-vision-camera';

const CameraScreen = () => {
  const devices = useCameraDevices();
  const device = devices.back;

  useEffect(() => {
    (async () => {
      const cameraPermission = await Camera.requestCameraPermission();
      const microphonePermission = await Camera.requestMicrophonePermission();
      console.log({ cameraPermission, microphonePermission });
    })();
  }, []);

  if (device == null) return <View />;

  return (
    <View style={{ flex: 1 }}>
      <Camera
        style={{ flex: 1 }}
        device={device}
        isActive={true}
        photo={true}
      />
      <Button title="Tirar Foto" onPress={() => {/* Função para capturar */}} />
    </View>
  );
};

export default CameraScreen;