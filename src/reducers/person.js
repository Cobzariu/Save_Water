import {
  CHANGE_LOADING_PERSON_TRUE,
  CHANGE_LOADING_TRUE,
  DELETE_PERSON_FAIL,
  GET_PEOPLE_FAIL,
  GET_PEOPLE_SUCCESS,
  SAVE_PERSON_FAIL,
  SAVE_PERSON_SUCCESS,
  UPDATE_PERSON_FAIL,
} from '../constants';

const initialState = {
  error_message: '',
  people: [],
  isLoading: false,
};

export default function (state = initialState, action) {
  const {type, payload} = action;
  switch (type) {
    case SAVE_PERSON_SUCCESS: {
      return {
        ...state,
      };
    }
    case CHANGE_LOADING_PERSON_TRUE: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case SAVE_PERSON_FAIL: {
      return {
        ...state,
        error_message: payload,
      };
    }
    case GET_PEOPLE_SUCCESS: {
      return {
        ...state,
        people: payload,
        isLoading: false,
      };
    }
    case GET_PEOPLE_FAIL: {
      return {
        ...state,
        error_message: payload,
        isLoading: false,
      };
    }
    case DELETE_PERSON_FAIL: {
      return {
        ...state,
        error_message: payload,
      };
    }
    case UPDATE_PERSON_FAIL: {
      return {
        ...state,
        error_message: payload,
      };
    }
    default:
      return state;
  }
}
