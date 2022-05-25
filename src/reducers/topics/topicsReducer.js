import _ from "lodash";
import {
  CREATE_TOPIC,
  FETCH_TOPIC,
  FETCH_TOPICS,
  DELETE_TOPIC,
  EDIT_TOPIC,
} from "../../actions/types";

const initialState = {
  isLoading: false,
  topics: [],
  columns: [],
  error: null
}

export const topicsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TOPICS:
      return { ...state, 
        topics: action.payload,
        columns: Object.keys(action.payload[0])
      };
    case FETCH_TOPIC:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_TOPIC:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_TOPIC:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_TOPIC:
      return _.omit(state, action.payload);
    default:
      return state;
  }
}