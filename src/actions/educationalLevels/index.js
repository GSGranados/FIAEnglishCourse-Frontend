import fiaECAPI from "../../helpers/apiHelper";
import history from "../../history";
import {
  CREATE_EDUCATIONAL_LEVEL,
  FETCH_EDUCATIONAL_LEVEL,
  FETCH_EDUCATIONAL_LEVELS,
  DELETE_EDUCATIONAL_LEVEL,
  EDIT_EDUCATIONAL_LEVEL,
} from "../types";

/*STREAMS ACTIONS */
const createEducationalLevelAction = (educationalLevel) => {
  return {
    type: CREATE_EDUCATIONAL_LEVEL,
    payload: educationalLevel,
  };
};
const fetchEducationalLevelAction = (educationalLevel) => {
    return {
      type: FETCH_EDUCATIONAL_LEVEL,
      payload: educationalLevel,
    };
  };
const fetchEducationalLevelsAction = (educationalLevels) => {
  return {
    type: FETCH_EDUCATIONAL_LEVELS,
    payload: educationalLevels,
  };
};
const editEducationalLevelAction = (educationalLevel) => {
  return {
    type: EDIT_EDUCATIONAL_LEVEL,
    payload: educationalLevel,
  };
};
const deleteEducationalLevelAction = (educationalLevelID) => {
  return {
    type: DELETE_EDUCATIONAL_LEVEL,
    payload: educationalLevelID,
  };
};

//EducationalLevels action creators
//create
export const createEducationalLevel = (formValues) => async (dispatch, getState) => {
  const response = await fiaECAPI.post("/educationalLevels", {
    ...formValues,
  });
  dispatch(createEducationalLevelAction(response.data));
  history.push("/educationalLevels");
};

//fetch multiples
export const fetchEducationalLevels = () => async (dispatch) => {
  const response = await fiaECAPI.get("/educationalLevels");
  dispatch(fetchEducationalLevelsAction(response.data));
};

//fetch one
export const fetchEducationalLevel = (educationalLevelID) => async (dispatch) => {
  const response = await fiaECAPI.get(`/educationalLevels/${educationalLevelID}`);
  dispatch(fetchEducationalLevelAction(response.data));
};

//edit one
export const editEducationalLevel = (educationalLevelID, formValues) => async (dispatch) => {
  const response = await fiaECAPI.patch(
    `/educationalLevels/${educationalLevelID}`,
    formValues
  );
  dispatch(editEducationalLevelAction(response.data));
  history.push("/educationalLevels");
};
//delete one
export const deleteEducationalLevel = (educationalLevelID) => async (dispatch) => {
  await fiaECAPI.delete(`/educationalLevels/${educationalLevelID}`);
  dispatch(deleteEducationalLevelAction(educationalLevelID));
  history.push("/educationalLevels");
};
