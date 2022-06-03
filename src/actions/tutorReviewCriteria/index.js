import fiaECAPI from "../../helpers/apiHelper";
import history from "../../history";
import {
  CREATE_TUTOR_REVIEW_CRITERIA,
  FETCH_TUTOR_REVIEW_CRITERIA,
  FETCH_MULTIPLE_TUTOR_REVIEW_CRITERIA,
  DELETE_TUTOR_REVIEW_CRITERIA,
  EDIT_TUTOR_REVIEW_CRITERIA,
} from "../types";

/*STREAMS ACTIONS */
const createTutorReviewCriteriaAction = (tutorReviewCriteria) => {
  return {
    type: CREATE_TUTOR_REVIEW_CRITERIA,
    payload: tutorReviewCriteria,
  };
};
const fetchTutorReviewCriteriaAction = (tutorReviewCriteria) => {
    return {
      type: FETCH_TUTOR_REVIEW_CRITERIA,
      payload: tutorReviewCriteria,
    };
  };
const fetchMultipleTutorReviewCriteriaAction = (multipleTutorReviewCriteria) => {
  return {
    type: FETCH_MULTIPLE_TUTOR_REVIEW_CRITERIA,
    payload: multipleTutorReviewCriteria,
  };
};
const editTutorReviewCriteriaAction = (tutorReviewCriteria) => {
  return {
    type: EDIT_TUTOR_REVIEW_CRITERIA,
    payload: tutorReviewCriteria,
  };
};
const deleteTutorReviewCriteriaAction = (tutorReviewCriteriaID) => {
  return {
    type: DELETE_TUTOR_REVIEW_CRITERIA,
    payload: tutorReviewCriteriaID,
  };
};

//Tutor Review Criteria action creators
//create
export const createTutorReviewCriteria = (formValues) => async (dispatch, getState) => {
  const response = await fiaECAPI.post("/tutorReviewCriteria2", {
    ...formValues,
  });
  dispatch(createTutorReviewCriteriaAction(response.data));
  history.push("/tutorreviewcriteria");
};

//fetch multiples
export const fetchMultipleTutorReviewCriteria = () => async (dispatch) => {
  const response = await fiaECAPI.get("/tutorReviewCriteria");
  dispatch(fetchMultipleTutorReviewCriteriaAction(response.data));
};

//fetch one
export const fetchTutorReviewCriteria = (tutorReviewCriteriaID) => async (dispatch) => {
  const response = await fiaECAPI.get(`/tutorReviewCriteria2/${tutorReviewCriteriaID}`);
  dispatch(fetchTutorReviewCriteriaAction(response.data));
};

//edit one
export const editTutorReviewCriteria = (tutorReviewCriteriaID, formValues) => async (dispatch) => {
  const response = await fiaECAPI.patch(
    `/tutorReviewCriteria2/${tutorReviewCriteriaID}`,
    formValues
  );
  dispatch(editTutorReviewCriteriaAction(response.data));
  history.push("/tutorreviewcriteria");
};

//delete one
export const deleteTutorReviewCriteria = (tutorReviewCriteriaID) => async (dispatch) => {
  await fiaECAPI.delete(`/tutorReviewCriteria2/${tutorReviewCriteriaID}`);
  dispatch(deleteTutorReviewCriteriaAction(tutorReviewCriteriaID));
  history.push("/tutorreviewcriteria");
};
