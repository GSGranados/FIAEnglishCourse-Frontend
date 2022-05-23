import _ from "lodash";
import {
  CREATE_ROLE,
  FETCH_ROLE,
  FETCH_ROLES,
  DELETE_ROLE,
  EDIT_ROLE,
} from "../../actions/types";

const initialState = {
  isLoading: false,
  roles: [],
  columns: [],
  error: null
}

export const rolesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ROLES:
      
      return { ...state, 
        roles: action.payload,
        columns: Object.keys(action.payload[0])
      };
    case FETCH_ROLE:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_ROLE:
      console.log(state);
      console.log(action.payload);
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_ROLE:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_ROLE:
      return _.omit(state, action.payload);
    default:
      return state;
  }
}