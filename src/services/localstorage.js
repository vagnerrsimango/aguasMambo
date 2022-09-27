import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeData = async (key, value, cb) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));

    cb(true);
  } catch (error) {
    cb(error);
  }
};

export const readData = async (key) => {
  try {
    const data = await AsyncStorage.getItem(key);
    if (data !== null) {
      return JSON.parse(data);
    }
  } catch (error) {
    return error;
  }
};

export const updateData = async (key, value, id) => {
  try {
    const data = await AsyncStorage.getItem(key);
    let index = data.findIndex((item) => item.id === id);
    data[index].id = value;

    await AsyncStorage.setItem(key, JSON.stringify(data));

    cb(true);
  } catch (error) {
    cb(error);
  }
};
