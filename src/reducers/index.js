
import { combineReducers } from 'redux'
import { permissionsReducer } from './permissions/permissionsReducer';
import { rolesReducer } from './roles/rolesReducer';
import { careersReducer } from './careers/careersReducer';
import { educationalLevelsReducer } from './educationalLevels/educationalLevelsReducer';
import { topicsReducer } from './topics/topicsReducer';
import { resourceTypesReducer } from './resourceTypes/resourceTypesReducer';
import { educationalResourcesReducer } from './educationalResources/eduactionalResourcesReducer';
import { abilitiesReducer } from './abilities/abilitiesReducer';
import { usersReducer } from './users/usersReducer';
import { reducer as formReducer } from "redux-form";
import loginReducer from "./login/loginReducer";
export default combineReducers({
   login: loginReducer,
   permissions: permissionsReducer,
   roles: rolesReducer,
   careers: careersReducer,
   educationalLevels: educationalLevelsReducer,
   topics: topicsReducer,
   resourceTypes: resourceTypesReducer,
   educationalResources:  educationalResourcesReducer,
   abilities: abilitiesReducer,
   users: usersReducer,
   form: formReducer
})