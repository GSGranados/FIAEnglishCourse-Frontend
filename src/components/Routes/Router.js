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

const Router = () => {
  return (
    <Routes>
        <Route path="/login" exact element={<LoginPage/>} />
        {/* <Route path="" element={<RequireAuth><MainPage/></RequireAuth>}> */}
        <Route path="" element={<MainPage/>}>
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
        </Route>
    </Routes>
  );
};

export default Router;
