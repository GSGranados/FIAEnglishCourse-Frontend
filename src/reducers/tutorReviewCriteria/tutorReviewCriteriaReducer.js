import _ from "lodash";
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
  error: null
}

export const tutorReviewCriteriaReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MULTIPLE_TUTOR_REVIEW_CRITERIA:
      return { ...state, 
        tutorReviewCriteria: action.payload,
        columns: Object.keys(action.payload[0])
      };
    case FETCH_TUTOR_REVIEW_CRITERIA:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_TUTOR_REVIEW_CRITERIA:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_TUTOR_REVIEW_CRITERIA:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_TUTOR_REVIEW_CRITERIA:
      return _.omit(state, action.payload);
    default:
      return state;
  }
}