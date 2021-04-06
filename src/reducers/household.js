import {
  CHANGE_COUNT_PEOPLE,
  FIRST_HOUSEHOLD_SAVE,
  GET_HOUSEHOLD_SUCCESS,
  INCREASE_COUNT_PEOPLE,
  SAVE_HOUSEHOLD_FAIL,
  SAVE_HOUSEHOLD_SUCCESS,
  GET_USAGES_SUCCESS,
} from '../constants';

const initialState = {
  countPeople: 1,
  formCompleted: false,
  error_message: '',
  locationTypeHouse: null,
  personNumber: null,
  washingMachineNumberWeek: null,
  washingMachineFullLoad: null,
  washHandNumberWeek: null,
  bowlWashing: null,
  dishwasherNumberWeek: null,
  toiletDualFlush: null,
  washCarNumberWeek: 0,
  waterGardenNumberWeek: 0,
  waterGardenLength: 0,
  collectRainwater: false,
  usages: [],
};

export default function (state = initialState, action) {
  const {type, payload} = action;
  switch (type) {
    case CHANGE_COUNT_PEOPLE: {
      return {
        ...state,
        countPeople: payload,
      };
    }
    case SAVE_HOUSEHOLD_SUCCESS: {
      return {
        ...state,
        locationTypeHouse: payload.locationTypeHouse,
        personNumber: payload.personNumber,
        washingMachineNumberWeek: payload.washingMachineNumberWeek,
        washingMachineFullLoad: payload.washingMachineFullLoad,
        washHandNumberWeek: payload.washHandNumberWeek,
        bowlWashing: payload.bowlWashing,
        dishwasherNumberWeek: payload.dishwasherNumberWeek,
        toiletDualFlush: payload.toiletDualFlush,
        washCarNumberWeek: payload.washCarNumberWeek,
        waterGardenNumberWeek: payload.waterGardenNumberWeek,
        collectRainwater: payload.collectRainwater,
      };
    }
    case SAVE_HOUSEHOLD_FAIL: {
      return {
        ...state,
        error_message: payload,
      };
    }
    case FIRST_HOUSEHOLD_SAVE: {
      return {
        ...state,
        locationTypeHouse: payload.locationTypeHouse,
        personNumber: payload.personNumber,
        washingMachineNumberWeek: payload.washingMachineNumberWeek,
        washingMachineFullLoad: payload.washingMachineFullLoad,
        washHandNumberWeek: payload.washHandNumberWeek,
        bowlWashing: payload.bowlWashing,
        dishwasherNumberWeek: payload.dishwasherNumberWeek,
        toiletDualFlush: payload.toiletDualFlush,
      };
    }
    case INCREASE_COUNT_PEOPLE: {
      return {
        ...state,
        countPeople: payload,
      };
    }
    case GET_HOUSEHOLD_SUCCESS: {
      return {
        ...state,
        //formCompleted: true, // needs to be completed with all household
      };
    }
    case GET_USAGES_SUCCESS: {
      return {
        ...state,
        usages: payload,
      };
    }
    default:
      return state;
  }
}
