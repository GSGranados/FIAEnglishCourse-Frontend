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
        topics: action.payload.data,
        columns: action.payload.columns
      };
    case FETCH_TOPIC:
      return { ...state, topics:[action.payload, ...state.topics] };
    case CREATE_TOPIC:
      return { ...state, topics:[action.payload, ...state.topics]};
    case EDIT_TOPIC:
      const topicIndex = state.topics.findIndex(
        (topic) => topic.id === action.payload.id
      );
      const newTopicsArray = [...state.topics];
      newTopicsArray[topicIndex] = action.payload;
      return { ...state, roles: newTopicsArray };
    case DELETE_TOPIC:
      return {...state, topics: state.topics.filter(topic=> topic.id !== action.payload.id)}
    default:
      return state;
  }
}