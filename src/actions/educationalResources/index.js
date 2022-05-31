import fiaECAPI from "../../helpers/apiHelper";
import history from "../../history";
import {
  CREATE_EDUCATIONAL_RESOURCE,
  FETCH_EDUCATIONAL_RESOURCE,
  FETCH_EDUCATIONAL_RESOURCES,
  DELETE_EDUCATIONAL_RESOURCE,
  EDIT_EDUCATIONAL_RESOURCE,
} from "../types";

/*STREAMS ACTIONS */
const createEducationalResourceAction = (educationalResource) => {
  return {
    type: CREATE_EDUCATIONAL_RESOURCE,
    payload: educationalResource,
  };
};
const fetchEducationalResourceAction = (educationalResource) => {
    return {
      type: FETCH_EDUCATIONAL_RESOURCE,
      payload: educationalResource,
    };
  };
const fetchEducationalResourcesAction = (educationalResources) => {
  return {
    type: FETCH_EDUCATIONAL_RESOURCES,
    payload: educationalResources,
  };
};
const editEducationalResourceAction = (educationalResource) => {
  return {
    type: EDIT_EDUCATIONAL_RESOURCE,
    payload: educationalResource,
  };
};
const deleteEducationalResourceAction = (educationalResourceID) => {
  return {
    type: DELETE_EDUCATIONAL_RESOURCE,
    payload: educationalResourceID,
  };
};

//EducationalResources action creators
//create
export const createEducationalResource = (formValues) => async (dispatch, getState) => {
  const response = await fiaECAPI.post("/educationalResources", {
    ...formValues,
  });
  dispatch(createEducationalResourceAction(response.data));
  history.push("/educationalResources");
};

//fetch multiples
export const fetchEducationalResources = () => async (dispatch) => {
  const response = await fiaECAPI.get("/educationalResources");
  dispatch(fetchEducationalResourcesAction(response.data));
};

//fetch one
export const fetchEducationalResource = (educationalResourceID) => async (dispatch) => {
  const response = await fiaECAPI.get(`/educationalResources/${educationalResourceID}`);
  dispatch(fetchEducationalResourceAction(response.data));
};

//edit one
export const editEducationalResource = (educationalResourceID, formValues) => async (dispatch) => {
  const response = await fiaECAPI.patch(
    `/educationalResources/${educationalResourceID}`,
    formValues
  );
  dispatch(editEducationalResourceAction(response.data));
  history.push("/educationalresources");
};

//delete one
export const deleteEducationalResource = (educationalResourceID) => async (dispatch) => {
  await fiaECAPI.delete(`/educationalResources/${educationalResourceID}`);
  dispatch(deleteEducationalResourceAction(educationalResourceID));
  history.push("/educationalresources");
};
