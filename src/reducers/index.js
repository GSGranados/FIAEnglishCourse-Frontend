
import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import permissionsReducer from "./permissions/permissionsReducer";
export default combineReducers({
   permissions: permissionsReducer,
   form: formReducer
})