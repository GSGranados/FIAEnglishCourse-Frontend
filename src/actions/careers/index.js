import fiaECAPI from "../../helpers/apiHelper";
import history from "../../history";
import {
  CREATE_CAREER,
  FETCH_CAREER,
  FETCH_CAREERS,
  DELETE_CAREER,
  EDIT_CAREER,
} from "../types";

/*STREAMS ACTIONS */
const createCareerAction = (career) => {
  return {
    type: CREATE_CAREER,
    payload: career,
  };
};
const fetchCareerAction = (career) => {
    return {
      type: FETCH_CAREER,
      payload: career,
    };
  };
const fetchCareersAction = (careers) => {
  return {
    type: FETCH_CAREERS,
    payload: careers,
  };
};
const editCareerAction = (career) => {
  return {
    type: EDIT_CAREER,
    payload: career,
  };
};
const deleteCareerAction = (careerID) => {
  return {
    type: DELETE_CAREER,
    payload: careerID,
  };
};

//Careers action creators
//create
export const createCareer = (formValues) => async (dispatch, getState) => {
  const response = await fiaECAPI.post("career", {
    ...formValues,
  });
  dispatch(createCareerAction(response.data));
  history.push("/careers");
};

//fetch multiples
export const fetchCareers = () => async (dispatch) => {
  const response = await fiaECAPI.get("career");
  dispatch(fetchCareersAction(response.data));
};

//fetch one
export const fetchCareer = (careerID) => async (dispatch) => {
  const response = await fiaECAPI.get(`career/${careerID}`);
  dispatch(fetchCareerAction(response.data));
};

//edit one
export const editCareer = (careerID, formValues) => async (dispatch) => {
  const response = await fiaECAPI.patch(
    `career/${careerID}`,
    formValues
  );
  dispatch(editCareerAction(response.data));
  history.push("/careers");
};

//delete one
export const deleteCareer = (careerID) => async (dispatch) => {
  await fiaECAPI.delete(`career/${careerID}`);
  dispatch(deleteCareerAction(careerID));
  history.push("/careers");
};
