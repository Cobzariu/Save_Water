import userApi from '../api/userApi';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  LOCAL_LOGIN,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  SIGNUP_FAIL,
  SIGNUP_SUCCESS,
} from '../constants';

export const login = (username, password) => (dispatch) => {
  return userApi.login(username, password).then(
    (data) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: data,
      });
      return Promise.resolve();
    },
    (error) => {
      dispatch({
        type: LOGIN_FAIL,
        payload: error,
      });
      return Promise.reject();
    },
  );
};

export const signup = (username, password) => (dispatch) => {
  return userApi.signup(username, password).then(
    (data) => {
      dispatch({
        type: SIGNUP_SUCCESS,
        payload: data,
      });
      return Promise.resolve();
    },
    (error) => {
      dispatch({
        type: SIGNUP_FAIL,
        payload: 'Something went wrong',
      });
      return Promise.reject();
    },
  );
};

export const tryLocalSignIn = () => async (dispatch) => {
  const token = await AsyncStorage.getItem('accessToken');
  const loggedStatus = token.length > 0 ? true : false;
  dispatch({
    type: LOCAL_LOGIN,
    payload: {token, loggedStatus},
  });
};
