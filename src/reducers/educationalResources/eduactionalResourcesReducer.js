import {
  CREATE_EDUCATIONAL_RESOURCE,
  FETCH_EDUCATIONAL_RESOURCE,
  FETCH_EDUCATIONAL_RESOURCES,
  DELETE_EDUCATIONAL_RESOURCE,
  EDIT_EDUCATIONAL_RESOURCE,
} from "../../actions/types";

const initialState = {
  isLoading: false,
  educationalResources: [],
  columns: [],
  error: null,
};

export const educationalResourcesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EDUCATIONAL_RESOURCES:
      return {
        ...state,
        educationalResources: action.payload.data,
        columns: action.payload.columns,
      };
    case FETCH_EDUCATIONAL_RESOURCE:
      return {
        ...state,
        educationalResources: [action.payload, ...state.educationalResources],
      };
    case CREATE_EDUCATIONAL_RESOURCE:
      return {
        ...state,
        educationalResources: [action.payload, ...state.educationalResources],
      };
    case EDIT_EDUCATIONAL_RESOURCE:
      const educationalResoucesIndex = state.educationalResources.findIndex(
        (educationalResource) => educationalResource.id === action.payload.id
      );
      const newEducationalResourcesArray = [...state.educationalResources];
      newEducationalResourcesArray[educationalResoucesIndex] = action.payload;
      return { ...state, educationalResources: newEducationalResourcesArray };
    case DELETE_EDUCATIONAL_RESOURCE:
      return {
        ...state,
        educationalResources: state.educationalResources.filter(
          (educationalResource) => educationalResource.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
};
