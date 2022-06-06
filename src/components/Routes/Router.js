import { Route,Routes } from "react-router-dom";
import RequireAuth from "./RequireAuth";
import React from "react";
import MainPage from "../../pages/Main/MainPage";
import LoginPage from "../../pages/Login/LoginPage";
/**PERMISSIONS ROUTES */
import PermmissionsComponent  from "../Permissions/PermissionsComponent";
import PermissionsPage from "../../pages/Permissions/PermissionsPage";
import PermissionsCreate from "../Permissions/PermissionsCreate";
import PermissionsDelete from "../Permissions/PermissionsDelete";
import PermissionsEdit from "../Permissions/PermissionsEdit";
/**ROLES ROUTES */
import RolesComponent from "../Roles/RolesComponent";
import RolesPage from "../../pages/Roles/RolesPage";
import RolesCreate from "../Roles/RolesCreate";
import RolesDelete from "../Roles/RolesDelete";
import RolesEdit from "../Roles/RolesEdit";
/**USER ROUTES */
import UsersPage from "../../pages/Users/UsersPage";
import UsersComponent from "../Users/UsersComponent";
import UsersCreate from "../Users/UsersCreate";
import UsersEdit from "../Users/UsersEdit";
import UsersDelete from "../Users/UsersDelete";
/**CAREERS ROUTES */
import CareersComponent from "../Careers/CareersComponent";
import CareersPage from "../../pages/Careers/CareersPage";
import CareersCreate from "../Careers/CareersCreate";
import CareersDelete from "../Careers/CareersDelete";
import CareersEdit from "../Careers/CareersEdit";
/**EDUCATIONAL LEVELS ROUTES */
import EducationalLevelsComponent from "../EducationalLevels/EducationalLevelsComponent";
import EducationalLevelsPage from "../../pages/EducationalLevels/EducationalLevelsPage";
import EducationalLevelsCreate from "../EducationalLevels/EducationalLevelsCreate";
import EducationalLevelsDelete from "../EducationalLevels/EducationalLevelsDelete";
import EducationalLevelsEdit from "../EducationalLevels/EducationalLevelsEdit";
/**TOPICS ROUTES */
import TopicsComponent from "../Topics/TopicsComponent";
import TopicsPage from "../../pages/Topics/TopicsPage";
import TopicsCreate from "../Topics/TopicsCreate";
import TopicsDelete from "../Topics/TopicsDelete";
import TopicsEdit from "../Topics/TopicsEdit";
/**EDUCATIONAL RESOURCES ROUTES */
import EducationalResourcesComponent from "../EducationalResources/EducationalResourcesComponent";
import EducationalResourcesPage from "../../pages/EducationalResources/EducationalResourcesPage";
import EducationalResourcesCreate from "../EducationalResources/EducationalResourcesCreate";
import EducationalResourcesDelete from "../EducationalResources/EducationalResourcesDelete";
import EducationalResourcesEdit from "../EducationalResources/EducationalResourcesEdit";
/**ROLES ROUTES */
import ResourceTypesComponent from "../ResourceTypes/ResourceTypesComponent";
import ResourceTypesPage from "../../pages/ResourceTypes/ResourceTypesPage";
import ResourceTypesCreate from "../ResourceTypes/ResourceTypesCreate";
import ResourceTypesDelete from "../ResourceTypes/ResourceTypesDelete";
import ResourceTypesEdit from "../ResourceTypes/ResourceTypesEdit";
/**ABILITIES ROUTES */
import AbilitiesComponent from "../Abilities/AbilitiesComponent";
import AbilitiesPage from "../../pages/Abilities/AbilitiesPage";
import AbilitiesCreate from "../Abilities/AbilitiesCreate";
import AbilitiesDelete from "../Abilities/AbilitiesDelete";
import AbilitiesEdit from "../Abilities/AbilitiesEdit";
/**TUTOR REVIEW CRITERIA ROUTES */
import TutorReviewCriteriaComponent from "../TutorReviewCriteria/TutorReviewCriteriaComponent";
import TutorReviewCriteriaPage from "../../pages/TutorReviewCriteria/TutorReviewCriteriaPage";
import TutorReviewCriteriaCreate from "../TutorReviewCriteria/TutorReviewCriteriaCreate";
import TutorReviewCriteriaDelete from "../TutorReviewCriteria/TutorReviewCriteriaDelete";
import TutorReviewCriteriaEdit from "../TutorReviewCriteria/TutorReviewCriteriaEdit";

/**RESERVATION ROUTES */
import TuitionsPage from "../../pages/Tuitions/TuitionsPage";
import TuitionsList from "../Tuitions/TuitionsList";
import TuitionDetails from "../Tuitions/TuitionDetails";
import { HomeComponent } from "../Home/HomeComponent";

const Router = () => {
  return (
    <Routes>
        <Route path="/login" exact element={<LoginPage/>} />
        {/* <Route path="" element={<RequireAuth><MainPage/></RequireAuth>}> */}
        <Route path="" element={<MainPage/>}>
          <Route path="" exact element={<HomeComponent/>}/>
          <Route path="/permissions/*" exact element={<PermissionsPage/>}>
            <Route path="" exact element={<PermmissionsComponent/>} />
            <Route path="new" exact element={<PermissionsCreate/>} />
            <Route path="edit/:id" exact element={<PermissionsEdit/>} />
            <Route path="delete/:id" exact element={<PermissionsDelete/>} />
          </Route>
          <Route path="/roles/*" element={<RolesPage/>}>
            <Route path="" exact element={<RolesComponent/>} />
            <Route path="new" exact element={<RolesCreate/>} />
            <Route path="edit/:id" exact element={<RolesEdit/>} />
            <Route path="delete/:id" exact element={<RolesDelete/>} />
          </Route>
          <Route path="/users/*" element={<UsersPage/>}>
            <Route path="" exact element={<UsersComponent/>} />
            <Route path="new" exact element={<UsersCreate/>} />
            <Route path="edit/:id" exact element={<UsersEdit/>} />
            <Route path="delete/:id" exact element={<UsersDelete/>} />
          </Route>
          <Route path="/careers/*" element={<CareersPage/>}>
            <Route path="" exact element={<CareersComponent/>} />
            <Route path="new" exact element={<CareersCreate/>} />
            <Route path="edit/:id" exact element={<CareersEdit/>} />
            <Route path="delete/:id" exact element={<CareersDelete/>} />
          </Route>
          <Route path="/educationallevels/*" element={<EducationalLevelsPage/>}>
            <Route path="" exact element={<EducationalLevelsComponent/>} />
            <Route path="new" exact element={<EducationalLevelsCreate/>} />
            <Route path="edit/:id" exact element={<EducationalLevelsEdit/>} />
            <Route path="delete/:id" exact element={<EducationalLevelsDelete/>} />
          </Route>
          <Route path="/topics/*" element={<TopicsPage/>}>
            <Route path="" exact element={<TopicsComponent/>} />
            <Route path="new" exact element={<TopicsCreate/>} />
            <Route path="edit/:id" exact element={<TopicsEdit/>} />
            <Route path="delete/:id" exact element={<TopicsDelete/>} />
          </Route>
          <Route path="/educationalresources/*" element={<EducationalResourcesPage/>}>
            <Route path="" exact element={<EducationalResourcesComponent/>} />
            <Route path="new" exact element={<EducationalResourcesCreate/>} />
            <Route path="edit/:id" exact element={<EducationalResourcesEdit/>} />
            <Route path="delete/:id" exact element={<EducationalResourcesDelete/>} />
          </Route>
          <Route path="/resourcetypes/*" element={<ResourceTypesPage/>}>
            <Route path="" exact element={<ResourceTypesComponent/>} />
            <Route path="new" exact element={<ResourceTypesCreate/>} />
            <Route path="edit/:id" exact element={<ResourceTypesEdit/>} />
            <Route path="delete/:id" exact element={<ResourceTypesDelete/>} />
          </Route>
          <Route path="/abilities/*" element={<AbilitiesPage/>}>
            <Route path="" exact element={<AbilitiesComponent/>} />
            <Route path="new" exact element={<AbilitiesCreate/>} />
            <Route path="edit/:id" exact element={<AbilitiesEdit/>} />
            <Route path="delete/:id" exact element={<AbilitiesDelete/>} />
          </Route>
          <Route path="/tutorreviewcriteria/*" element={<TutorReviewCriteriaPage/>}>
            <Route path="" exact element={<TutorReviewCriteriaComponent/>} />
            <Route path="new" exact element={<TutorReviewCriteriaCreate/>} />
            <Route path="edit/:id" exact element={<TutorReviewCriteriaEdit/>} />
            <Route path="delete/:id" exact element={<TutorReviewCriteriaDelete/>} />
          </Route>
          <Route path="/tuitions/*" element={<TuitionsPage/>}>
            <Route path="" exact element={<TuitionsList/>} />
            <Route path="view/:id" exact element={<TuitionDetails/>} />
          </Route>
        </Route>
    </Routes>
  );
};

export default Router;


