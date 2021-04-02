import householdApi from '../api/householdApi';
import {
  FIRST_HOUSEHOLD_SAVE,
  GET_HOUSEHOLD_FAIL,
  GET_HOUSEHOLD_SUCCESS,
  INCREASE_COUNT_PEOPLE,
  SAVE_HOUSEHOLD_FAIL,
  SAVE_HOUSEHOLD_SUCCESS,
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

export const getHousehold = () => (dispatch) =>{
  return householdApi.getHousehold().then(
    (data) => {
      if (data)
      {
        console.log("VALID");
        dispatch({
          type: GET_HOUSEHOLD_SUCCESS,
          payload: data,
        });
      }
      else {
        
      }
      
    },
    (error) => {
      console.log(error);
      dispatch({
        type: GET_HOUSEHOLD_FAIL,
        payload: error,
      });
    },
  );
}

export const increaseCountPeople = (newCountPeople) => (dispatch) => {
  dispatch({
    type: INCREASE_COUNT_PEOPLE,
    payload: newCountPeople,
  });
};
