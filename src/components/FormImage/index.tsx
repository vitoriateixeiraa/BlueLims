import { Box, Image, Text } from '@gluestack-ui/themed';
import { useNavigation } from '@react-navigation/native';
import { Dimensions, Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const SCREEN_WIDTH = Dimensions.get('screen').width;

export function FormImage({ imageUri }: { imageUri?: string }) {
  const navigation = useNavigation();

  function navigateToCameraScreen() {
    navigation.navigate('CameraScreen');
  }

  return (
    <Box position="relative" mt="$4" height={230} width={SCREEN_WIDTH}>
      <Pressable
        onPress={navigateToCameraScreen}
        style={{
          position: 'absolute',
          right: 24,
          top: 24,
          zIndex: 10,
          backgroundColor: '#010101',
          borderRadius: 48,
          width: 48,
          height: 48,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <AntDesign name="close" size={24} color="#ffffff" />
      </Pressable>
      <Image
        alt="novo insumo"
        height={230}
        objectFit="contain"
        width={SCREEN_WIDTH}
        source={{
          uri: imageUri,
        }}
      />
    </Box>
  );
}
