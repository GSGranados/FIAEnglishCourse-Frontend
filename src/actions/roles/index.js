import fiaECAPI from "../../helpers/apiHelper";
import history from "../../history";
import {
  CREATE_ROLE,
  FETCH_ROLE,
  FETCH_ROLES,
  DELETE_ROLE,
  EDIT_ROLE,
} from "../types";

/*STREAMS ACTIONS */
const createRoleAction = (stream) => {
  return {
    type: CREATE_ROLE,
    payload: stream,
  };
};
const fetchRoleAction = (stream) => {
    return {
      type: FETCH_ROLE,
      payload: stream,
    };
  };
const fetchRolesAction = (streams) => {
  return {
    type: FETCH_ROLES,
    payload: streams,
  };
};
const editRoleAction = (stream) => {
  return {
    type: EDIT_ROLE,
    payload: stream,
  };
};
const deleteRoleAction = (streamID) => {
  return {
    type: DELETE_ROLE,
    payload: streamID,
  };
};

//Roles action creators
//create

export const createRole = (formValues) => async (dispatch, getState) => {
  const response = await fiaECAPI.post("/roles", {
    ...formValues,
  });
  dispatch(createRoleAction(response.data));
  history.push("/roles");
};

//fetch multiples
export const fetchRoles = () => async (dispatch) => {
  const response = await fiaECAPI.get("/roles2");
  console.log("B");
  console.log(response);
  dispatch(fetchRolesAction(response.data));
};

//fetch one
export const fetchRole = (roleID) => async (dispatch) => {
  const response1 = await fiaECAPI.get(`/roles/1`);
  console.log("B: " + response1);
  const response = await fiaECAPI.get(`/roles`);
  console.log("A: " + response.data.data[roleID-1]);
  dispatch(fetchRoleAction(response.data.data[roleID-1]));
};

//edit one
export const editRole = (roleID, formValues) => async (dispatch) => {
  const response = await fiaECAPI.patch(
    `/roles/1/${roleID}`,
    formValues
  );
  dispatch(editRoleAction(response.data));
  history.push("/roles");
};
//delete one
export const deleteRole = (roleID) => async (dispatch) => {
  await fiaECAPI.delete(`/roles/1/${roleID}`);
  dispatch(deleteRoleAction(roleID));
  history.push("/roles");
};
