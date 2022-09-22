import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (key, value, cb) => {
  try {
    await AsyncStorage.get(key, value);
    console.log('Storing data');
    cb(true);
  } catch (error) {
    cb(error);
  }
};

export const readData = async (key, cb) => {
  try {
    const data = await AsyncStorage.get(key);
    if (data !== null) {
      console.log('Reading data');
      cb(data);
    }
  } catch (error) {
    cb(error);
  }
};
