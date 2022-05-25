import fiaECAPI from "../../helpers/apiHelper";
import history from "../../history";
import {
  CREATE_ABILITY,
  FETCH_ABILITY,
  FETCH_ABILITIES,
  DELETE_ABILITY,
  EDIT_ABILITY,
} from "../types";

/*STREAMS ACTIONS */
const createAbilityAction = (ability) => {
  return {
    type: CREATE_ABILITY,
    payload: ability,
  };
};
const fetchAbilityAction = (ability) => {
    return {
      type: FETCH_ABILITY,
      payload: ability,
    };
  };
const fetchAbilitiesAction = (abilities) => {
  return {
    type: FETCH_ABILITIES,
    payload: abilities,
  };
};
const editAbilityAction = (ability) => {
  return {
    type: EDIT_ABILITY,
    payload: ability,
  };
};
const deleteAbilityAction = (abilityID) => {
  return {
    type: DELETE_ABILITY,
    payload: abilityID,
  };
};

//Abilitys action creators
//create
export const createAbility = (formValues) => async (dispatch, getState) => {
  const response = await fiaECAPI.post("/abilities", {
    ...formValues,
  });
  dispatch(createAbilityAction(response.data));
  history.push("/abilities");
};

//fetch multiples
export const fetchAbilities = () => async (dispatch) => {
  const response = await fiaECAPI.get("/abilities");
  dispatch(fetchAbilitiesAction(response.data));
};

//fetch one
export const fetchAbility = (abilityID) => async (dispatch) => {
  const response = await fiaECAPI.get(`/abilities/${abilityID}`);
  dispatch(fetchAbilityAction(response.data));
};

//edit one
export const editAbility = (abilityID, formValues) => async (dispatch) => {
  const response = await fiaECAPI.patch(
    `/abilitys/${abilityID}`,
    formValues
  );
  dispatch(editAbilityAction(response.data));
  history.push("/abilities");
};

//delete one
export const deleteAbility = (abilityID) => async (dispatch) => {
  await fiaECAPI.delete(`/abilities/${abilityID}`);
  dispatch(deleteAbilityAction(abilityID));
  history.push("/abilities");
};
