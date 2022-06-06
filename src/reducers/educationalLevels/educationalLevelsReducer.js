import {
  CREATE_EDUCATIONAL_LEVEL,
  FETCH_EDUCATIONAL_LEVEL,
  FETCH_EDUCATIONAL_LEVELS,
  DELETE_EDUCATIONAL_LEVEL,
  EDIT_EDUCATIONAL_LEVEL,
} from "../../actions/types";

const initialState = {
  isLoading: false,
  educationalLevels: [],
  columns: [],
  error: null
}

export const educationalLevelsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EDUCATIONAL_LEVELS:
      return { ...state, 
        educationalLevels: action.payload.data,
        columns: action.payload.columns
      };
    case FETCH_EDUCATIONAL_LEVEL:
      return { ...state, educationalLevels: [action.payload, ...state.educationalLevels] };
      case CREATE_EDUCATIONAL_LEVEL:
      return { ...state, educationalLevels: [action.payload, ...state.educationalLevels] };
    case EDIT_EDUCATIONAL_LEVEL:
      const educationalLevelIndex = state.educationalLevels.findIndex(
        (educationalLevel) => educationalLevel.id === action.payload.id
      );
      const newEducationalLevelsArray = [...state.educationalLevels];
      newEducationalLevelsArray[educationalLevelIndex] = action.payload;
      return { ...state, educationalLevels: newEducationalLevelsArray };
    case DELETE_EDUCATIONAL_LEVEL:
      return {
        ...state,
        educationalLevels: state.educationalLevels.filter(
          (educationalLevel) => educationalLevel.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
}