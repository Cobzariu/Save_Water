import personApi from '../api/personApi';
import {
  GET_PEOPLE_FAIL,
  GET_PEOPLE_SUCCESS,
  SAVE_NEW_PERSON_FAIL,
  SAVE_NEW_PERSON_SUCCESS,
  SAVE_PERSON_FAIL,
  SAVE_PERSON_SUCCESS,
} from '../constants';

export const savePerson = (
  name,
  showerNumberWeek,
  bathNumberWeek,
  showerLengthMinutes,
  waterRunningBrushingTeeth,
) => (dispatch) => {
  return personApi
    .savePerson(
      name,
      showerNumberWeek,
      bathNumberWeek,
      showerLengthMinutes,
      waterRunningBrushingTeeth,
    )
    .then(
      (data) => {
        dispatch({
          type: SAVE_PERSON_SUCCESS,
          payload: data,
        });
        return Promise.resolve();
      },
      (error) => {
        dispatch({
          type: SAVE_PERSON_FAIL,
          payload: error,
        });
        return Promise.reject();
      },
    );
};
export const addNewPerson = (
  name,
  showerNumberWeek,
  bathNumberWeek,
  showerLengthMinutes,
  waterRunningBrushingTeeth,
) => (dispatch) => {
  return personApi
    .addNewPerson(
      name,
      showerNumberWeek,
      bathNumberWeek,
      showerLengthMinutes,
      waterRunningBrushingTeeth,
    )
    .then(
      (data) => {
        dispatch({
          type: SAVE_NEW_PERSON_SUCCESS,
          payload: data,
        });
        return Promise.resolve();
      },
      (error) => {
        dispatch({
          type: SAVE_NEW_PERSON_FAIL,
          payload: error,
        });
        return Promise.reject();
      },
    );
};

export const getPeople = () => (dispatch) => {
  return personApi.getPeople().then(
    (data) => {
      dispatch({
        type: GET_PEOPLE_SUCCESS,
        payload: data,
      });
    },
    (error) => {
      dispatch({
        type: GET_PEOPLE_FAIL,
        payload: error,
      });
    },
  );
};
