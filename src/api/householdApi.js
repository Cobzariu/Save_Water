import axios from 'axios';
import {API_BASE} from '../utils/variables';
import authHeader from './authToken';

const saveHousehold = async (
  locationTypeHouse,
  personNumber,
  washingMachineNumberWeek,
  washingMachineFullLoad,
  washHandNumberWeek,
  bowlWashing,
  dishwasherNumberWeek,
  toiletDualFlush,
  washCarNumberWeek,
  waterGardenNumberWeek,
  waterGardenLength,
  collectRainwater,
) => {
  return await axios
    .post(
      API_BASE + '/household',
      {
        locationTypeHouse,
        personNumber,
        washingMachineNumberWeek,
        washingMachineFullLoad,
        washHandNumberWeek,
        bowlWashing,
        dishwasherNumberWeek,
        toiletDualFlush,
        washCarNumberWeek,
        waterGardenNumberWeek,
        waterGardenLength,
        collectRainwater,
      },
      {
        headers: await authHeader(),
      },
    )
    .then(
      async (response) => {
        return response.data.household;
      },
      (error) => {
        throw error.response.data.error;
      },
    );
};

export default {
  saveHousehold,
};
