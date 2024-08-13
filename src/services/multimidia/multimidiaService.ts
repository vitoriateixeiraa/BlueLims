import { SaveFormat, manipulateAsync } from 'expo-image-manipulator';
import { Platform } from 'react-native';
import { supabaseClient } from './client';
import { ImageForUpload } from './multimidiaTypes';
import * as FileSystem from 'expo-file-system';
import { decode } from 'base64-arraybuffer';

const BUCKET_NAME = 'bluelims-bucket';

export async function prepareImageForUpload(
  imageUri: string
): Promise<ImageForUpload> {
  const image = await manipulateAsync(imageUri, [], {
    compress: 0.5,
    format: SaveFormat.JPEG,
  });

  return {
    uri: image.uri,
    name: Date.now().toString(),
    type: 'image/jpeg',
  };
}

export function prepareImageUri(imageUri: string): string {
  if (Platform.OS !== 'android') {
    return imageUri;
  }

  if (imageUri.startsWith('file://')) {
    return imageUri;
  }

  return `file://${imageUri}`;
}

export const getImage = (url: string) => {
  const { data } = supabaseClient.storage.from(BUCKET_NAME).getPublicUrl(url);

  return data;
};

export const storeImage = async (image: ImageForUpload) => {
  const base64 = await FileSystem.readAsStringAsync(image.uri, {
    encoding: 'base64',
  });

  const { data } = await supabaseClient.storage
    .from('bluelims-bucket')
    .upload(image.name, decode(base64), {
      contentType: image.type,
    });
  return data;
};

export const multimidiaService = {
  getImage,
  storeImage,
  prepareImageForUpload,
  prepareImageUri,
};
