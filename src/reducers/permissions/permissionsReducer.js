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
        permissions: action.payload.data,
        columns: action.payload.columns
      };
    case FETCH_PERMISSION:
      return { ...state, permissions:[action.payload, ...state.permissions] };
    case CREATE_PERMISSION:
      return { ...state, permissions:[action.payload, ...state.permissions] };
    case EDIT_PERMISSION:
      const permissionIndex = state.permissions.findIndex(
        (permission) => permission.id === action.payload.id
      );
      const newPermissionsArray = [...state.permissions];
      newPermissionsArray[permissionIndex] = action.payload;
      return { ...state, permissions: newPermissionsArray };
    case DELETE_PERMISSION:
      return {
        ...state,
        permissions: state.permissions.filter((permission) => permission.id !== action.payload.id),
      };
    default:
      return state;
  }
}