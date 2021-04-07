import householdApi from '../api/householdApi';
import usageApi from '../api/usageApi';
import {
  CLEAR_HOUSEHOLD_MESSAGE,
  FIRST_HOUSEHOLD_SAVE,
  GET_HOUSEHOLD_FAIL,
  GET_HOUSEHOLD_SUCCESS,
  GET_USAGES_FAIL,
  GET_USAGES_SUCCESS,
  INCREASE_COUNT_PEOPLE,
  SAVE_HOUSEHOLD_FAIL,
  SAVE_HOUSEHOLD_SUCCESS,
  SAVE_PERSON_FAIL,
  SAVE_USAGE_FAIL,
  SAVE_USAGE_SUCCESS,
} from '../constants';

export const saveHousehold = (
  washCarNumberWeek,
  waterGardenNumberWeek,
  waterGardenLength,
  collectRainwater,
) => (dispatch, getState) => {
  const {
    locationTypeHouse,
    personNumber,
    washingMachineNumberWeek,
    washingMachineFullLoad,
    washHandNumberWeek,
    bowlWashing,
    dishwasherNumberWeek,
    toiletDualFlush,
  } = getState().household;
  return householdApi
    .saveHousehold(
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
    )
    .then(
      (data) => {
        dispatch({
          type: SAVE_HOUSEHOLD_SUCCESS,
          payload: data,
        });
        return Promise.resolve();
      },
      (error) => {
        dispatch({
          type: SAVE_HOUSEHOLD_FAIL,
          payload: error,
        });
        return Promise.reject();
      },
    );
};

export const firstHouseholdSave = (
  locationTypeHouse,
  personNumber,
  washingMachineNumberWeek,
  washingMachineFullLoad,
  washHandNumberWeek,
  bowlWashing,
  dishwasherNumberWeek,
  toiletDualFlush,
) => (dispatch) => {
  dispatch({
    type: FIRST_HOUSEHOLD_SAVE,
    payload: {
      locationTypeHouse,
      personNumber,
      washingMachineNumberWeek,
      washingMachineFullLoad,
      washHandNumberWeek,
      bowlWashing,
      dishwasherNumberWeek,
      toiletDualFlush,
    },
  });
};

export const getHousehold = () => (dispatch) => {
  return householdApi.getHousehold().then(
    (data) => {
      if (data) {
        dispatch({
          type: GET_HOUSEHOLD_SUCCESS,
          payload: data,
        });
      } else {
      }
    },
    (error) => {
      dispatch({
        type: GET_HOUSEHOLD_FAIL,
        payload: error,
      });
    },
  );
};

export const increaseCountPeople = (newCountPeople) => (dispatch) => {
  dispatch({
    type: INCREASE_COUNT_PEOPLE,
    payload: newCountPeople,
  });
};

export const getUsages = () => (dispatch) => {
  return usageApi.getUsages().then(
    (data) => {
      dispatch({
        type: GET_USAGES_SUCCESS,
        payload: data,
      });
    },
    (error) => {
      dispatch({
        type: GET_USAGES_FAIL,
        payload: error,
      });
    },
  );
};

export const saveUsage = (amount, month, year) => (dispatch) => {
  return usageApi.saveUsage(amount, month, year).then(
    (data) => {
      dispatch({
        type: SAVE_USAGE_SUCCESS,
        payload: data,
      });
      return Promise.resolve();
    },
    (error) => {
      dispatch({
        type: SAVE_USAGE_FAIL,
        payload: error,
      });
      return Promise.reject();
    },
  );
};

export const clearHouseholdMessage = () => (dispatch) => {
  dispatch({
    type: CLEAR_HOUSEHOLD_MESSAGE,
  });
};
