import fiaECAPI from "../../helpers/apiHelper";
import {
  NEXT_MONTH,
  PREV_MONTH,
  CREATE_EVENT,
  FETCH_EVENTS,
  FETCH_EVENT,
  DELETE_EVENT,
  EDIT_EVENT,
} from "../types";

export const nextMonthAction = (monthIndex) => {
  return {
    type: NEXT_MONTH,
    payload: monthIndex,
  };
};

export const prevMonthAction = (monthIndex) => {
  return {
    type: PREV_MONTH,
    payload: monthIndex,
  };
};
const createTuitionAction = (event) => {
    return {
        type: CREATE_EVENT,
        payload: event
    }
};
const fetchEventAction = (event) =>{
    return {
        type: FETCH_EVENT,
        payload: event
    }
}
const fetchEventsAction = (events) =>{
    return{
        type: FETCH_EVENTS,
        payload: events
    }
}
const editEventAction = (event) => {
    return {
      type: EDIT_EVENT,
      payload: event,
    };
  };
  const deleteEventAction = (eventID) => {
    return {
      type: DELETE_EVENT,
      payload: eventID,
    };
  };

/**ACTION CREATORS */

export const createTuitionEvent = (formValues) => async (dispatch, getState) => {
    const response = await fiaECAPI.post("tuitions", {
      ...formValues,
    });
    dispatch(createTuitionAction(response.data));
  };
//fetch multiples
export const fetchEvents = () => async (dispatch) => {
  const response = await fiaECAPI.get("tuitions");
  dispatch(fetchEventsAction(response.data));
};

//fetch one
export const fetchEvent = (event) => async (dispatch) => {
  dispatch(fetchEventAction(event));
};

//edit one
export const editEvent = (eventID, formValues) => async (dispatch) => {
  const response = await fiaECAPI.patch(`tuitions/${eventID}`, formValues);
  dispatch(editEventAction(response.data));
};
//delete one
export const deleteEvent = (eventID) => async (dispatch, getState) => {
  await fiaECAPI.delete(`tuitions/${eventID}`);
  dispatch(deleteEventAction(eventID));
  /**Filtering the array to execute the Interface Re-render  */
  const {events} = getState().calendar;
  const filteredEvents = events.filter(event=>event.id !== eventID);
  dispatch(fetchEventsAction(filteredEvents));


};