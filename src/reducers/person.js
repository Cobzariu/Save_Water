import {SAVE_PERSON_FAIL, SAVE_PERSON_SUCCESS} from '../constants';

const initialState = {
  error_message: '',
  people: [],
};

export default function (state = initialState, action) {
  const {type, payload} = action;
  switch (type) {
    case SAVE_PERSON_SUCCESS: {
      return {
        ...state,
      };
    }
    case SAVE_PERSON_FAIL: {
      return {
        ...state,
        error_message: payload,
      };
    }
    default:
      return state;
  }
}
