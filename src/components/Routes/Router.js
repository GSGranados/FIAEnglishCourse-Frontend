import { Route,Routes } from "react-router-dom";
import PermmissionsComponent  from "../Permissions/PermissionsComponent";
import React from "react";
import PermissionsDelete from "../Permissions/PermissionsDelete";
import PermissionsCreate from "../Permissions/PermissionsCreate";
import PermissionsEdit from "../Permissions/PermissionsEdit";
import MainPage from "../../pages/Main/MainPage";
import PermissionsPage from "../../pages/Permissions/PermissionsPage";
import LoginPage from "../../pages/Login/LoginPage";

const Router = () => {
  return (
    <Routes>
        <Route path="/login" exact element={<LoginPage/>} />
        <Route path="" element={<MainPage/>}>
          <Route path="/permissions/*" exact element={<PermissionsPage/>}>
            <Route path="" exact element={<PermmissionsComponent/>} />
            <Route path="new" exact element={<PermissionsCreate/>} />
            <Route path="edit/:id" exact element={<PermissionsEdit/>} />
            <Route path="delete/:id" exact element={<PermissionsDelete/>} />
          </Route>
        </Route>
    </Routes>
  );
};

export default Router;
