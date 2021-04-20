import {
  CHANGE_COUNT_PEOPLE,
  FIRST_HOUSEHOLD_SAVE,
  GET_HOUSEHOLD_SUCCESS,
  INCREASE_COUNT_PEOPLE,
  SAVE_HOUSEHOLD_FAIL,
  SAVE_HOUSEHOLD_SUCCESS,
  GET_USAGES_SUCCESS,
  DELETE_USAGE_FAIL,
  SAVE_USAGE_FAIL,
  CLEAR_HOUSEHOLD_MESSAGE,
  GET_ADVICES_SUCCESS,
  GET_ADVICES_FAIL,
  CHANGE_LOADING_TRUE,
  CHANGE_LOADING_FALSE,
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
  householdBackend: null,
  advices: null,
  statistics: null,
  isLoading: false,
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
    case CHANGE_LOADING_TRUE: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case CHANGE_LOADING_FALSE: {
      return {
        ...state,
        isLoading: false,
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
        householdBackend: payload,
        isLoading: false,
      };
    }
    case GET_USAGES_SUCCESS: {
      return {
        ...state,
        usages: payload,
        isLoading: false,
      };
    }
    case SAVE_USAGE_FAIL: {
      return {
        ...state,
        error_message: payload,
      };
    }
    case DELETE_USAGE_FAIL: {
      return {
        ...state,
        error_message: payload,
      };
    }
    case CLEAR_HOUSEHOLD_MESSAGE: {
      return {
        ...state,
        error_message: '',
      };
    }
    case GET_ADVICES_SUCCESS: {
      return {
        ...state,
        advices: payload.advices,
        statistics: payload.statistics,
        isLoading: false,
      };
    }
    case GET_ADVICES_FAIL: {
      return {
        ...state,
        error_message: payload,
        isLoading: false,
      };
    }
    default:
      return state;
  }
}
