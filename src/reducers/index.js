
import { combineReducers } from 'redux'
import { permissionsReducer } from './permissions/permissionsReducer';
import { rolesReducer } from './roles/rolesReducer'
import { careersReducer } from './careers/careersReducer';
import { usersReducer } from './users/usersReducer';
import { reducer as formReducer } from "redux-form";
import {calendarReducer} from './calendar/calendarReducer';
export default combineReducers({
   permissions: permissionsReducer,
   roles: rolesReducer,
   careers: careersReducer,
   users: usersReducer,
   form: formReducer,
   calendar: calendarReducer,
})