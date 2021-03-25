import axios from 'axios';
import {API_BASE} from '../utils/variables';
import AsyncStorage from '@react-native-async-storage/async-storage';

const login = async (email, password) => {
  return await axios.post(API_BASE + '/signin', {email, password}).then(
    async (response) => {
      await AsyncStorage.setItem('accessToken', response.data.token);
      return response.data.token;
    },
    (error) => {
      throw error.response.data.error;
    },
  );
};

const signup = async (email, password) => {
  return await axios.post(API_BASE + '/signup', {email, password}).then(
    async (response) => {
      await AsyncStorage.setItem('accessToken', response.data.token);
      return response.data.token;
    },
    (error) => {
      throw error.response.data.error;
    },
  );
};

export default {
  login,
  signup,
};
