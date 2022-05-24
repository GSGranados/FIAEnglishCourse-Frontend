import _ from "lodash";
import {
  CREATE_CAREER,
  FETCH_CAREER,
  FETCH_CAREERS,
  DELETE_CAREER,
  EDIT_CAREER,
} from "../../actions/types";

const initialState = {
  isLoading: false,
  careers: [],
  columns: [],
  error: null
}

export const careersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CAREERS:
      return { ...state, 
        careers: action.payload,
        columns: Object.keys(action.payload[0])
      };
    case FETCH_CAREER:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_CAREER:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_CAREER:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_CAREER:
      return _.omit(state, action.payload);
    default:
      return state;
  }
}