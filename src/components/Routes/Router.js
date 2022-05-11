import { Route,Switch } from "react-router-dom";
import { HomeComponent } from "../Home/HomeComponent";
import { PermmissionsComponent } from "../Permissions/PermissionsComponent";
import React from "react";
import PermissionsDelete from "../Permissions/PermissionsDelete";
import PermissionsCreate from "../Permissions/PermissionsCreate";

const Router = () => {
  return (
    <Switch>
        <Route path="/" exact component={HomeComponent} />
        <Route path="/permissions" exact component={PermmissionsComponent} />
        <Route path="/permissions/new" exact component={PermissionsCreate} />
        <Route path="/permissions/delete/:id" exact component={PermissionsDelete} />
    </Switch>
  );
};

export default Router;
