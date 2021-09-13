import React from "react";
import { Switch, Route } from "react-router-dom";
import { Dashboard } from "../../pages/Dashboard";
import { ForgotPassword } from "../../pages/ForgotPassword";
import { Login } from "../../pages/Login";
import { SignUp } from "../../pages/SignUp";
import { UpdateProfile } from "../../pages/UpdateProfile";
import { PrivateRoute } from "./PrivateRoute";

export const Router = () => {
  return (
    <Switch>
      <PrivateRoute exact path="/" component={Dashboard} />
      <PrivateRoute exact path="/updateprofile" component={UpdateProfile} />
      <Route  path="/signup" component={SignUp} />
      <Route  path="/login" component={Login} />
      <Route  path="/forgotpass" component={ForgotPassword} />
    </Switch>
  );
};
