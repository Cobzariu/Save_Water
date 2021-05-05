import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  SIGNUP_FAIL,
  SIGNUP_SUCCESS,
  SIGNUP_COMPLETE,
  CLEAR_USER_MESSAGE,
} from '../constants';

const initialState = {
  message: '',
  loggedIn: false,
  token: '',
};

export default function (state = initialState, action) {
  const {type, payload} = action;

  switch (type) {
    case LOGIN_SUCCESS: {
      return {
        ...state,
        loggedIn: true,
        token: payload,
      };
    }
    case LOGIN_FAIL:
      return {
        ...state,
        message: payload,
      };
    case LOGOUT:
      return {
        ...state,
        loggedIn: false,
        token: '',
      };
    case SIGNUP_SUCCESS: {
      return {
        ...state,
        token: payload,
      };
    }
    case SIGNUP_COMPLETE: {
      return {
        ...state,
        loggedIn: true,
        message: '',
      };
    }
    case SIGNUP_FAIL: {
      return {
        ...state,
        message: payload,
      };
    }
    case CLEAR_USER_MESSAGE: {
      return {
        ...state,
        message: '',
      };
    }
    default:
      return state;
  }
}
