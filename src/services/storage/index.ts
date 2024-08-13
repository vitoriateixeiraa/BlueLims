import AsyncStorage from '@react-native-async-storage/async-storage';

export interface Storage {
  getItem: <T = unknown>(key: string) => Promise<T | null>;
  setItem: <T>(key: string, value: T) => Promise<void>;
  removeItem: (key: string) => Promise<void>;
}

export const asyncStorage: Storage = {
  getItem: async (key) => {
    const item = await AsyncStorage.getItem(key);
    if (item) {
      return JSON.parse(item);
    } else {
      return null;
    }
  },
  setItem: async (key, value) => {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  },
  removeItem: async (key) => {
    await AsyncStorage.removeItem(key);
  },
};
