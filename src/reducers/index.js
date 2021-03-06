
import { combineReducers } from 'redux'
import {loginReducer} from './login/loginReducer';
import { permissionsReducer } from './permissions/permissionsReducer';
import { rolesReducer } from './roles/rolesReducer';
import { careersReducer } from './careers/careersReducer';
import { educationalLevelsReducer } from './educationalLevels/educationalLevelsReducer';
import { topicsReducer } from './topics/topicsReducer';
import { resourceTypesReducer } from './resourceTypes/resourceTypesReducer';
import { educationalResourcesReducer } from './educationalResources/eduactionalResourcesReducer';
import { abilitiesReducer } from './abilities/abilitiesReducer';
import { tutorReviewCriteriaReducer } from './tutorReviewCriteria/tutorReviewCriteriaReducer';
import { usersReducer } from './users/usersReducer';
import { reducer as formReducer } from "redux-form";
import {calendarReducer} from './calendar/calendarReducer';
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
   tutorReviewCriteria: tutorReviewCriteriaReducer,
   users: usersReducer,
   form: formReducer,
   calendar: calendarReducer,
})