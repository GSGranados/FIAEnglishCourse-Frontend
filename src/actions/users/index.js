import fiaECAPI from "../../helpers/apiHelper";
import history from "../../history";
import {
  CREATE_USER,
  FETCH_USERS,
  FETCH_USER,
  DELETE_USER,
  EDIT_USER,
} from "../types";

/*USERS ACTIONS */
const createUsersAction = (user) => {
  return {
    type: CREATE_USER,
    payload: user,
  };
};

const fetchUsersAction = (users) => {
  return {
    type: FETCH_USERS,
    payload: users,
  };
};
const fetchUserAction = (user) => {
  return {
    type: FETCH_USER,
    payload: user,
  };
};
const editUserAction = (user) => {
  return {
    type: EDIT_USER,
    payload: user,
  };
};
const deleteUserAction = (userID) => {
  return {
    type: DELETE_USER,
    payload: userID,
  };
};

//users action creators

//create
export const createUser = (formValues) => async (dispatch, getState) => {
  const response = await fiaECAPI.post("/users2", {
    ...formValues,
  });
  dispatch(createUsersAction(response.data));
  history.push("/users");
};

//fetch multiples
export const fetchUsers = () => async (dispatch) => {
  const response = await fiaECAPI.get("/users");
  dispatch(fetchUsersAction(response.data));
};

//fetch one
export const fetchUser = (userID) => async (dispatch) => {
  const response = await fiaECAPI.get(`/users2/${userID}`);
  dispatch(fetchUserAction(response.data));
};

//edit one
export const editUser = (userID, formValues) => async (dispatch) => {
  const response = await fiaECAPI.patch(
    `/users2/${userID}`,
    formValues
  );
  dispatch(editUserAction(response.data));
  history.push("/users");
};
//delete one
export const deleteUser = (userID, formValues) => async (dispatch) => {
  await fiaECAPI.patch(`/users2/${userID}`,
  formValues);
  dispatch(deleteUserAction(userID));
  history.push("/users");
};
