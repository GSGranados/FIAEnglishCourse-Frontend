
import {combineReducers} from 'redux'
import {permissionsReducer} from './permissions/permissionsReducer';
import {rolesReducer} from './roles/rolesReducer'
import { usersReducer } from './users/usersReducer';
import { reducer as formReducer } from "redux-form";
import loginReducer from "./login/loginReducer";
export default combineReducers({
   login: loginReducer,
   permissions: permissionsReducer,
   roles: rolesReducer,
   users: usersReducer,
   form: formReducer
})