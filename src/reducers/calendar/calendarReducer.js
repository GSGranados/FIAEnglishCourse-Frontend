import dayjs from "dayjs";
import { getMonth } from "../../helpers/dayUtil";
import {
  GET_MONTH,
  NEXT_MONTH,
  PREV_MONTH,
  CREATE_EVENT,
  FETCH_EVENT,
  FETCH_EVENTS,
  EDIT_EVENT,
  DELETE_EVENT,
} from "../../actions/types";

const initialState = {
  monthIndex: dayjs().month(),
  month: getMonth(),
  events: [],
  selectedEvent: null,
}

export const calendarReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MONTH:
      return { ...state };
    case NEXT_MONTH:
      return { ...state, monthIndex: action.payload };
    case PREV_MONTH:
      return { ...state, monthIndex: action.payload };
    case FETCH_EVENTS:
      return {...state, events: action.payload}
    case FETCH_EVENT:
      return {...state, selectedEvent: action.payload}
    case CREATE_EVENT:
      return { ...state, events: [action.payload, ...state.events] };
    case DELETE_EVENT:
      return {
        ...state,
        events: state.events.filter((event) => event.id !== action.payload.id),
      };
    case EDIT_EVENT:
      const eventIndex = state.events.findIndex(
        (event) => event.id === action.payload.id
      );
      const newEventsArray = [...state.events];
      newEventsArray[eventIndex] = action.payload;
      return { ...state, events: newEventsArray };
    default:
      return state;
  }
};
