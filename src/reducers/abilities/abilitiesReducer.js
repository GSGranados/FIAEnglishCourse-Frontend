import {
  CREATE_ABILITY,
  FETCH_ABILITY,
  FETCH_ABILITIES,
  DELETE_ABILITY,
  EDIT_ABILITY,
} from "../../actions/types";

const initialState = {
  isLoading: false,
  abilities: [],
  columns: [],
  error: null
}

export const abilitiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ABILITIES:
      return { ...state, 
        abilities: action.payload.data,
        columns: action.payload.columns
      };
    case FETCH_ABILITY:
      return { ...state, abilities:[action.payload, ...state.abilities]};
    case CREATE_ABILITY:
      return { ...state, abilities:[action.payload, ...state.abilities] };
    case EDIT_ABILITY:
      const abilityIndex = state.abilities.findIndex(
        (career) => career.id === action.payload.id
      );
      const newAbilitiesArray = [...state.abilities];
      newAbilitiesArray[abilityIndex] = action.payload;
      return { ...state, abilities: newAbilitiesArray };
    case DELETE_ABILITY:
      return {
        ...state,
        abilities: state.abilities.filter((ability) => ability.id !== action.payload.id),
      };
    default:
      return state;
  }
}