import axios from 'axios';
import {API_BASE} from '../utils/variables';
import authHeader from './authToken';

const getUsages = async () => {
  return axios.get(API_BASE + '/usage', {headers: await authHeader()}).then(
    async (response) => {
      return response.data.usages;
    },
    (error) => {
      throw error.response.data.error;
    },
  );
};

export default {getUsages};
