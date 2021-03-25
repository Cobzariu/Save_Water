import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  SIGNUP_FAIL,
  SIGNUP_SUCCESS,
  LOCAL_LOGIN
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
    case LOCAL_LOGIN: {
      const {token, loggedStatus} = payload;
      return {
        ...state,
        loggedIn: loggedStatus,
        token: token,
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
        loggedIn: true,
        token: payload,
      };
    }
    case SIGNUP_FAIL: {
      return {
        ...state,
        message: payload,
      };
    }
    default:
      return state;
  }
}
