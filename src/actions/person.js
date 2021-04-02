import personApi from '../api/personApi';
import {SAVE_PERSON_FAIL, SAVE_PERSON_SUCCESS} from '../constants';

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
