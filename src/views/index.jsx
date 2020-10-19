import React, { useEffect, useContext } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import axios from "axios";

import Welcome from "./Welcome.jsx";
import NavBar from "./Navbar.jsx";
import Register from "./Register.jsx";
import Login from "./Login.jsx";
import Secret from "./Secret.jsx";
import ForgotPassword from "./ForgotPassword.jsx";

import { UserContext } from "../Root";

export default () => {
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    axios.get("/api/me").then((user) => {
      setUser(user);
    });
  }, []);

  return (
    <div className="h-screen">
      <NavBar />
      <div className="h-full flex justify-center items-center">
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/forgot-password" component={ForgotPassword} />
          {user.id && <Route exact path="/secret" component={Secret} />}
          <Redirect to="/" />
        </Switch>
      </div>
    </div>
  );
};
