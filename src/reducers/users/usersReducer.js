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
            return { ...state,  users:[action.payload, ...state.users]};
          case CREATE_USER:
            return { ...state, users:[action.payload, ...state.users] };
          case EDIT_USER:
            const userIndex = state.users.findIndex(
              (user) => user.id === action.payload.id
            );
            const newUsersArray = [...state.users];
            newUsersArray[userIndex] = action.payload;
            return { ...state, users: newUsersArray };
          case DELETE_USER:
            return {...state, users:state.users.filter(user=> user.id !== action.payload.id)}
          default:
            return state;
    }
}