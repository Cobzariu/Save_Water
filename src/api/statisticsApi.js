import axios from 'axios';
import {API_BASE} from '../utils/variables';
import authHeader from './authToken';

const getStatistics = async (year) => {
  return await axios
    .get(API_BASE + '/statistics/' + year, {
      headers: await authHeader(),
    })
    .then(
      async (response) => {
        const seasonsStats = response.data.seasonsStats;
        const lpdList = response.data.lpdList;
        return {seasonsStats, lpdList};
      },
      (error) => {
        throw error.response.data.error;
      },
    );
};

export default {
  getStatistics,
};
