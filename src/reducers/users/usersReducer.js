import _ from "lodash";
import {
  CREATE_USER,
  FETCH_USERS,
  FETCH_USER,
  DELETE_USER,
  EDIT_USER,
} from "../../actions/types";

const initialState = {
  isLoading: false,
  users: [],
  columns: [],
  error: null
}

export const usersReducer = (state = initialState,action) =>{
    switch (action.type) {
        case FETCH_USERS:
            return { ...state, 
              users: action.payload.data,
              columns: action.payload.columns
            };
          case FETCH_USER:
            return { ...state, [action.payload.id]: action.payload };
          case CREATE_USER:
            return { ...state, [action.payload.id]: action.payload };
          case EDIT_USER:
            return { ...state, [action.payload.id]: action.payload };
          case DELETE_USER:
            return _.omit(state, action.payload);
          default:
            return state;
    }
}