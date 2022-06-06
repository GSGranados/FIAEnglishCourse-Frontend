import {
  CREATE_CAREER,
  FETCH_CAREER,
  FETCH_CAREERS,
  DELETE_CAREER,
  EDIT_CAREER,
} from "../../actions/types";

const initialState = {
  isLoading: false,
  careers: [],
  columns: [],
  error: null,
};

export const careersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CAREERS:
      return {
        ...state,
        careers: action.payload.data,
        columns: action.payload.columns,
      };
    case FETCH_CAREER:
      return { ...state, carrers: [action.payload, ...state.careers] };
    case CREATE_CAREER:
      return { ...state, carrers: [action.payload, ...state.careers] };
    case EDIT_CAREER:
      const careerIndex = state.careers.findIndex(
        (career) => career.id === action.payload.id
      );
      const newCareersArray = [...state.careers];
      newCareersArray[careerIndex] = action.payload;
      return { ...state, careers: newCareersArray };
    case DELETE_CAREER:
      return {
        ...state,
        careers: state.careers.filter(
          (career) => career.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
};
