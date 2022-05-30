import _ from "lodash";
import {
  CREATE_PERMISSION,
  FETCH_PERMISSIONS,
  FETCH_PERMISSION,
  DELETE_PERMISSION,
  EDIT_PERMISSION,
} from "../../actions/types";

const initialState = {
  isLoading: false,
  permissions: [],
  columns: [],
  error: null
}

export const permissionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PERMISSIONS:
      return { ...state, 
        permissions: action.payload,
        columns: Object.keys(action.payload[0])
        //columns: action.payload.columns
      };
    case FETCH_PERMISSION:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_PERMISSION:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_PERMISSION:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_PERMISSION:
      return _.omit(state, action.payload);
    default:
      return state;
  }
}