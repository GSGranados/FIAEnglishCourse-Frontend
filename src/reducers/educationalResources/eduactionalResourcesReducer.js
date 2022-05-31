import _ from "lodash";
import {
  CREATE_EDUCATIONAL_RESOURCE,
  FETCH_EDUCATIONAL_RESOURCE,
  FETCH_EDUCATIONAL_RESOURCES,
  DELETE_EDUCATIONAL_RESOURCE,
  EDIT_EDUCATIONAL_RESOURCE,
} from "../../actions/types";

const initialState = {
  isLoading: false,
  educationalResources: [],
  columns: [],
  error: null
}

export const educationalResourcesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EDUCATIONAL_RESOURCES:
      return { ...state, 
        educationalResources: action.payload,
        columns: Object.keys(action.payload[0])
      };
    case FETCH_EDUCATIONAL_RESOURCE:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_EDUCATIONAL_RESOURCE:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_EDUCATIONAL_RESOURCE:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_EDUCATIONAL_RESOURCE:
      return _.omit(state, action.payload);
    default:
      return state;
  }
}