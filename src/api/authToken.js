import AsyncStorage from '@react-native-async-storage/async-storage';
export default async function authHeader() {
  const token = await AsyncStorage.getItem('accessToken');
  if (token.length > 0) {
    return {Authorization: 'Bearer ' + token};
  } else {
    return {};
  }
}
