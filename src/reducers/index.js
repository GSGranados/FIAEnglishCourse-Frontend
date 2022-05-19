
import {combineReducers} from 'redux'
import {permissionsReducer} from './permissions/permissionsReducer';
import { reducer as formReducer } from "redux-form";
import loginReducer from "./login/loginReducer";
export default combineReducers({
   login: loginReducer,
   permissions: permissionsReducer,
   form: formReducer
})