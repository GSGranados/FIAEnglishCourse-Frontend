import _ from "lodash";
import {
  CREATE_RESOURCE_TYPE,
  FETCH_RESOURCE_TYPE,
  FETCH_RESOURCE_TYPES,
  DELETE_RESOURCE_TYPE,
  EDIT_RESOURCE_TYPE,
} from "../../actions/types";

const initialState = {
  isLoading: false,
  resourceTypes: [],
  columns: [],
  error: null
}

export const resourceTypesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_RESOURCE_TYPES:
      return { ...state, 
        resourceTypes: action.payload,
        columns: Object.keys(action.payload[0])
      };
    case FETCH_RESOURCE_TYPE:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_RESOURCE_TYPE:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_RESOURCE_TYPE:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_RESOURCE_TYPE:
      return _.omit(state, action.payload);
    default:
      return state;
  }
}