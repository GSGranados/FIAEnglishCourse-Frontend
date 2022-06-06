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
        roles: action.payload.data,
        columns: action.payload.columns
      };
    case FETCH_ROLE:
      return { ...state, roles: [action.payload,...state.roles] };
    case CREATE_ROLE:
      return { ...state, roles: [action.payload,...state.roles]  };
    case EDIT_ROLE:
      const roleIndex = state.roles.findIndex(
        (role) => role.id === action.payload.id
      );
      const newRolesArray = [...state.roles];
      newRolesArray[roleIndex] = action.payload;
      return { ...state, roles: newRolesArray };
    case DELETE_ROLE:
      return {...state, roles: state.roles.filter(role=> role.id !== action.payload.id)}
    default:
      return state;
  }
}