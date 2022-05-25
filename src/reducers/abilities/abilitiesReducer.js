import _ from "lodash";
import {
  CREATE_ABILITY,
  FETCH_ABILITY,
  FETCH_ABILITIES,
  DELETE_ABILITY,
  EDIT_ABILITY,
} from "../../actions/types";

const initialState = {
  isLoading: false,
  abilities: [],
  columns: [],
  error: null
}

export const abilitiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ABILITIES:
      return { ...state, 
        abilities: action.payload,
        columns: Object.keys(action.payload[0])
      };
    case FETCH_ABILITY:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_ABILITY:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_ABILITY:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_ABILITY:
      return _.omit(state, action.payload);
    default:
      return state;
  }
}