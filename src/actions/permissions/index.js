import fiaECAPI from "../../helpers/apiHelper";
import history from "../../history";
import {
  CREATE_PERMISSION,
  FETCH_PERMISSIONS,
  FETCH_PERMISSION,
  DELETE_PERMISSION,
  EDIT_PERMISSION,
} from "../types";

/*STREAMS ACTIONS */
const createPermissionsAction = (stream) => {
  return {
    type: CREATE_PERMISSION,
    payload: stream,
  };
};

const fetchPermissionsAction = (streams) => {
  return {
    type: FETCH_PERMISSIONS,
    payload: streams,
  };
};
const fetchPermissionAction = (stream) => {
  return {
    type: FETCH_PERMISSION,
    payload: stream,
  };
};
const editPermissionAction = (stream) => {
  return {
    type: EDIT_PERMISSION,
    payload: stream,
  };
};
const deletePermissionAction = (streamID) => {
  return {
    type: DELETE_PERMISSION,
    payload: streamID,
  };
};

//Permissions action creators

//create
export const createPermission = (formValues) => async (dispatch, getState) => {
  const response = await fiaECAPI.post("/permissions2", {
    ...formValues,
  });
  dispatch(createPermissionsAction(response.data));
  history.push("/permissions");
};

//fetch multiples
export const fetchPermissions = () => async (dispatch) => {
  const response = await fiaECAPI.get("/permissions");
  dispatch(fetchPermissionsAction(response.data));
};

//fetch one
export const fetchPermission = (permissionID) => async (dispatch) => {
  const response = await fiaECAPI.get(`/permissions2/${permissionID}`);
  dispatch(fetchPermissionAction(response.data));
};

//edit one
export const editPermission = (permissionID, formValues) => async (dispatch) => {
  const response = await fiaECAPI.patch(
    `/permissions2/${permissionID}`,
    formValues
  );
  dispatch(editPermissionAction(response.data));
  history.push("/permissions");
};
//delete one
export const deletePermission = (permissionID) => async (dispatch) => {
  await fiaECAPI.delete(`/permissions/${permissionID}`);
  dispatch(deletePermissionAction(permissionID));
  history.push("/permissions");
};
