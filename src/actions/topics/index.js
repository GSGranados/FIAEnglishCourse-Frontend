import fiaECAPI from "../../helpers/apiHelper";
import history from "../../history";
import {
  CREATE_TOPIC,
  FETCH_TOPIC,
  FETCH_TOPICS,
  DELETE_TOPIC,
  EDIT_TOPIC,
} from "../types";

/*STREAMS ACTIONS */
const createTopicAction = (topic) => {
  return {
    type: CREATE_TOPIC,
    payload: topic,
  };
};
const fetchTopicAction = (topic) => {
    return {
      type: FETCH_TOPIC,
      payload: topic,
    };
  };
const fetchTopicsAction = (topics) => {
  return {
    type: FETCH_TOPICS,
    payload: topics,
  };
};
const editTopicAction = (topic) => {
  return {
    type: EDIT_TOPIC,
    payload: topic,
  };
};
const deleteTopicAction = (topicID) => {
  return {
    type: DELETE_TOPIC,
    payload: topicID,
  };
};

//Topics action creators
//create
export const createTopic = (formValues) => async (dispatch, getState) => {
  const response = await fiaECAPI.post("/topics2", {
    ...formValues,
  });
  dispatch(createTopicAction(response.data));
  history.push("/topics");
};

//fetch multiples
export const fetchTopics = () => async (dispatch) => {
  const response = await fiaECAPI.get("/topics");
  dispatch(fetchTopicsAction(response.data));
};

//fetch one
export const fetchTopic = (topicID) => async (dispatch) => {
  const response = await fiaECAPI.get(`/topics2/${topicID}`);
  dispatch(fetchTopicAction(response.data));
};

//edit one
export const editTopic = (topicID, formValues) => async (dispatch) => {
  const response = await fiaECAPI.patch(
    `/topics2/${topicID}`,
    formValues
  );
  dispatch(editTopicAction(response.data));
  history.push("/topics");
};

//delete one
export const deleteTopic = (topicID) => async (dispatch) => {
  await fiaECAPI.delete(`/topics2/${topicID}`);
  dispatch(deleteTopicAction(topicID));
  history.push("/topics");
};