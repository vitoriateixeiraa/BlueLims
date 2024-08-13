import { Box, Button, Text, View } from '@gluestack-ui/themed';
import { useEffect, useState, useRef } from 'react';
import {
  Dimensions,
  Pressable,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {
  Camera,
  CameraPosition,
  Templates,
  useCameraDevice,
  useCameraFormat,
  useCameraPermission,
} from 'react-native-vision-camera';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { AppScreenProps } from '../../../routes/nagivationType';
import { multimidiaService } from '../../../services/multimidia/multimidiaService';
const CAMERA_VIEW = Dimensions.get('screen').width;
const CONTROL_HEIGHT = (Dimensions.get('screen').height - CAMERA_VIEW) / 2;
const CONTROL_DIFF = 30;

export function CameraScreen({ navigation }: AppScreenProps<'CameraScreen'>) {
  const { hasPermission, requestPermission } = useCameraPermission();
  const [flashOn, setFlashOn] = useState(false);
  const [cameraPosition, setCameraPosition] = useState<CameraPosition>('back');
  const device = useCameraDevice(cameraPosition, {
    physicalDevices: [
      'ultra-wide-angle-camera',
      'wide-angle-camera',
      'telephoto-camera',
    ],
  });
  const [permission, setPermission] = useState<null | boolean>(null);
  const format = useCameraFormat(device, Templates.Instagram);

  const cameraRef = useRef<Camera>(null);

  function navigateGoBack() {
    navigation.goBack();
  }

  useEffect(() => {
    (async () => {
      const status = await requestPermission();
      if (status) {
        setPermission(true);
      }
    })();
  }, []);

  function toggleFlash() {
    setFlashOn((prev) => !prev);
  }

  function toggleCameraPosition() {
    setCameraPosition((prev) => (prev === 'back' ? 'front' : 'back'));
  }

  async function takePhoto() {
    if (cameraRef.current) {
      const photoFile = await cameraRef.current.takePhoto({
        flash: flashOn ? 'on' : 'off',
        qualityPrioritization: 'quality',
        enableAutoStabilization: true,
      });

      navigation.navigate('AppTabNavigator', {
        screen: 'RegisterChemicalsScreen',
        params: {
          imageUri: multimidiaService.prepareImageUri(photoFile.path),
        },
      });
    }
  }

  if (!permission && !hasPermission)
    return (
      <View>
        <Text mt="$4">Permita o BlueLims acessar a camera.</Text>
      </View>
    );

  return (
    <View flex={1} bg="#0000">
      {device && device !== null && (
        <Camera
          style={StyleSheet.absoluteFill}
          ref={cameraRef}
          device={device}
          isActive={true}
          format={format}
          photo={true}
          orientation="portrait"
          resizeMode="cover"
          fps={format?.maxFps}
          enableHighQualityPhotos={true}
        />
      )}

      <Box flex={1} justifyContent="space-between">
        <Box style={styles.controlAreaTop}>
          <Pressable onPress={navigateGoBack}>
            <AntDesign name="arrowleft" size={32} color="#ffffff" />
          </Pressable>

          <Pressable onPress={toggleFlash}>
            <MaterialIcons
              name={flashOn ? 'flash-on' : 'flash-off'}
              size={32}
              color="#ffffff"
            />
          </Pressable>
          <Pressable onPress={toggleCameraPosition}>
            <Ionicons name="camera-reverse-outline" size={32} color="#ffffff" />
          </Pressable>
        </Box>
        <Box style={styles.controlAreaBottom}>
          <TouchableOpacity style={styles.button} onPress={takePhoto}>
            <View style={styles.takePhotoIcon} />
          </TouchableOpacity>
        </Box>
      </Box>
    </View>
  );
}

const styles = StyleSheet.create({
  controlAreaTop: {
    backgroundColor: 'rgba(0, 0, 0, 0.603)',
    height: CONTROL_HEIGHT - CONTROL_DIFF,
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 24,
    paddingVertical: 48,
  },
  controlAreaBottom: {
    backgroundColor: 'rgba(0, 0, 0, 0.603)',
    height: CONTROL_HEIGHT - CONTROL_DIFF,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    borderWidth: 4,
    borderColor: '#ffffff',
    borderRadius: 80,
  },
  takePhotoIcon: {
    width: 80,
    height: 80,
    backgroundColor: '#ffffff',
    borderRadius: 80,
    borderWidth: 2,
    borderColor: 'black',
  },
});
