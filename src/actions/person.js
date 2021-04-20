import personApi from '../api/personApi';
import {
  CHANGE_LOADING_PERSON_TRUE,
  CHANGE_LOADING_TRUE,
  CLEAR_PERSON_MESSAGE,
  DELETE_PERSON_FAIL,
  DELETE_PERSON_SUCCESS,
  GET_PEOPLE_FAIL,
  GET_PEOPLE_SUCCESS,
  SAVE_NEW_PERSON_FAIL,
  SAVE_NEW_PERSON_SUCCESS,
  SAVE_PERSON_FAIL,
  SAVE_PERSON_SUCCESS,
  UPDATE_PERSON_FAIL,
  UPDATE_PERSON_SUCCESS,
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

export const updatePerson = (
  person_id,
  name,
  showerNumberWeek,
  bathNumberWeek,
  showerLengthMinutes,
  waterRunningBrushingTeeth,
) => (dispatch) => {
  return personApi
    .updatePerson(
      person_id,
      name,
      showerNumberWeek,
      bathNumberWeek,
      showerLengthMinutes,
      waterRunningBrushingTeeth,
    )
    .then(
      (data) => {
        dispatch({
          type: UPDATE_PERSON_SUCCESS,
          payload: data,
        });
        return Promise.resolve();
      },
      (error) => {
        dispatch({
          type: UPDATE_PERSON_FAIL,
          payload: error,
        });
        return Promise.reject();
      },
    );
};

export const deletePerson = (person_id) => (dispatch) => {
  return personApi.deletePerson(person_id).then(
    (data) => {
      dispatch({
        type: DELETE_PERSON_SUCCESS,
        payload: data,
      });
      return Promise.resolve();
    },
    (error) => {
      dispatch({
        type: DELETE_PERSON_FAIL,
        payload: error,
      });
      return Promise.reject();
    },
  );
};

export const getPeople = () => (dispatch) => {
  dispatch({
    type: CHANGE_LOADING_PERSON_TRUE,
  });
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
export const clearPersonMessage = () => (dispatch) => {
  dispatch({
    type: CLEAR_PERSON_MESSAGE,
  });
};
