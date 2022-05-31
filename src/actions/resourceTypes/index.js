import fiaECAPI from "../../helpers/apiHelper";
import history from "../../history";
import {
  CREATE_RESOURCE_TYPE,
  FETCH_RESOURCE_TYPE,
  FETCH_RESOURCE_TYPES,
  DELETE_RESOURCE_TYPE,
  EDIT_RESOURCE_TYPE,
} from "../types";

/*STREAMS ACTIONS */
const createResourceTypeAction = (resourceType) => {
  return {
    type: CREATE_RESOURCE_TYPE,
    payload: resourceType,
  };
};
const fetchResourceTypeAction = (resourceType) => {
    return {
      type: FETCH_RESOURCE_TYPE,
      payload: resourceType,
    };
  };
const fetchResourceTypesAction = (resourceTypes) => {
  return {
    type: FETCH_RESOURCE_TYPES,
    payload: resourceTypes,
  };
};
const editResourceTypeAction = (resourceType) => {
  return {
    type: EDIT_RESOURCE_TYPE,
    payload: resourceType,
  };
};
const deleteResourceTypeAction = (resourceTypeID) => {
  return {
    type: DELETE_RESOURCE_TYPE,
    payload: resourceTypeID,
  };
};

//Resource Types action creators
//create
export const createResourceType = (formValues) => async (dispatch, getState) => {
  const response = await fiaECAPI.post("/resourceTypes", {
    ...formValues,
  });
  dispatch(createResourceTypeAction(response.data));
  history.push("/resourcetypes");
};

//fetch multiples
export const fetchResourceTypes = () => async (dispatch) => {
  const response = await fiaECAPI.get("/resourceTypes");
  dispatch(fetchResourceTypesAction(response.data));
};

//fetch one
export const fetchResourceType = (resourceTypeID) => async (dispatch) => {
  const response = await fiaECAPI.get(`/resourceTypes/${resourceTypeID}`);
  dispatch(fetchResourceTypeAction(response.data));
};

//edit one
export const editResourceType = (resourceTypeID, formValues) => async (dispatch) => {
  const response = await fiaECAPI.patch(
    `/resourceTypes/${resourceTypeID}`,
    formValues
  );
  dispatch(editResourceTypeAction(response.data));
  history.push("/resourcetypes");
};

//delete one
export const deleteResourceType = (resourceTypeID) => async (dispatch) => {
  await fiaECAPI.delete(`/resourceTypes/${resourceTypeID}`);
  dispatch(deleteResourceTypeAction(resourceTypeID));
  history.push("/resourcetypes");
};
