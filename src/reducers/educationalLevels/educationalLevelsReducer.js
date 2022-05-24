import _ from "lodash";
import {
  CREATE_EDUCATIONAL_LEVEL,
  FETCH_EDUCATIONAL_LEVEL,
  FETCH_EDUCATIONAL_LEVELS,
  DELETE_EDUCATIONAL_LEVEL,
  EDIT_EDUCATIONAL_LEVEL,
} from "../../actions/types";

const initialState = {
  isLoading: false,
  educationalLevels: [],
  columns: [],
  error: null
}

export const educationalLevelsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EDUCATIONAL_LEVELS:
      return { ...state, 
        educationalLevels: action.payload,
        columns: Object.keys(action.payload[0])
      };
    case FETCH_EDUCATIONAL_LEVEL:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_EDUCATIONAL_LEVEL:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_EDUCATIONAL_LEVEL:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_EDUCATIONAL_LEVEL:
      return _.omit(state, action.payload);
    default:
      return state;
  }
}