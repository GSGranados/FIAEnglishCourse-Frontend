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
const createRoleAction = (role) => {
  return {
    type: CREATE_ROLE,
    payload: role,
  };
};
const fetchRoleAction = (role) => {
    return {
      type: FETCH_ROLE,
      payload: role,
    };
  };
const fetchRolesAction = (roles) => {
  return {
    type: FETCH_ROLES,
    payload: roles,
  };
};
const editRoleAction = (role) => {
  return {
    type: EDIT_ROLE,
    payload: role,
  };
};
const deleteRoleAction = (roleID) => {
  return {
    type: DELETE_ROLE,
    payload: roleID,
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
  const response = await fiaECAPI.get("/roles");
  dispatch(fetchRolesAction(response.data));
};

//fetch one
export const fetchRole = (roleID) => async (dispatch) => {
  const response = await fiaECAPI.get(`/roles/${roleID}`);
  dispatch(fetchRoleAction(response.data));
};

//edit one
export const editRole = (roleID, formValues) => async (dispatch) => {
  const response = await fiaECAPI.patch(
    `/roles/${roleID}`,
    formValues
  );
  dispatch(editRoleAction(response.data));
  history.push("/roles");
};

//delete one
export const deleteRole = (roleID) => async (dispatch) => {
  await fiaECAPI.delete(`/roles/${roleID}`);
  dispatch(deleteRoleAction(roleID));
  history.push("/roles");
};
