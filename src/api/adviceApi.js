import axios from 'axios';
import {API_BASE} from '../utils/variables';
import authHeader from './authToken';

const getAdvices = async () => {
  return await axios
    .get(API_BASE + '/advice', {
      headers: await authHeader(),
    })
    .then(
      async (response) => {
        const statistics = response.data.statistics;
        const advices = response.data.advices;
        return {advices, statistics};
      },
      (error) => {
        throw error.response.data.error;
      },
    );
};

export default {
  getAdvices,
};
