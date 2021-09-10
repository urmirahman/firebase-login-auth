import React from "react";
import { Switch, Route } from "react-router-dom";
import { Dashboard } from "../../pages/Dashboard";
import { Login } from "../../pages/Login";
import { SignUp } from "../../pages/SignUp";
import { PrivateRoute } from "./PrivateRoute";

export const Router = () => {
  return (
    <Switch>
      <PrivateRoute exact path="/" component={Dashboard} />
      <Route  path="/signup" component={SignUp} />
      <Route  path="/login" component={Login} />
    </Switch>
  );
};
