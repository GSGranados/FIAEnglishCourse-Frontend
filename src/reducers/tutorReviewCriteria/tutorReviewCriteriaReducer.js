import {
  CREATE_TUTOR_REVIEW_CRITERIA,
  FETCH_TUTOR_REVIEW_CRITERIA,
  FETCH_MULTIPLE_TUTOR_REVIEW_CRITERIA,
  DELETE_TUTOR_REVIEW_CRITERIA,
  EDIT_TUTOR_REVIEW_CRITERIA,
} from "../../actions/types";

const initialState = {
  isLoading: false,
  tutorReviewCriteria: [],
  columns: [],
  error: null,
};

export const tutorReviewCriteriaReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MULTIPLE_TUTOR_REVIEW_CRITERIA:
      return {
        ...state,
        tutorReviewCriteria: action.payload.data,
        columns: action.payload.columns,
      };
    case FETCH_TUTOR_REVIEW_CRITERIA:
      return {
        ...state,
        tutorReviewCriteria: [action.payload, ...state.tutorReviewCriteria],
      };
    case CREATE_TUTOR_REVIEW_CRITERIA:
      return {
        ...state,
        tutorReviewCriteria: [action.payload, ...state.tutorReviewCriteria],
      };
    case EDIT_TUTOR_REVIEW_CRITERIA:
      const tutorReviewCriteriaIndex = state.tutorReviewCriteria.findIndex(
        (tutorReviewCriteria) => tutorReviewCriteria.id === action.payload.id
      );
      const newtutorReviewCriteriaArray = [...state.tutorReviewCriteria];
      newtutorReviewCriteriaArray[tutorReviewCriteriaIndex] = action.payload;
      return { ...state, tutorReviewCriteria: newtutorReviewCriteriaArray };
    case DELETE_TUTOR_REVIEW_CRITERIA:
      return {
        ...state,
        tutorReviewCriteria: state.tutorReviewCriteria.filter(
          (criteria) => criteria.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
};
