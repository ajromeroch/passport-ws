import React, { lazy, useEffect } from "react";
import { render } from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import "../public/stylesheets/scss/main.scss";

import IndexWelcome from "./Index/Welcome.jsx";
import NavBar from "./Index/NavBar/index.jsx";
import Register from "./Index/Register/index.jsx";
import LogIn from "./Index/LogIn/index.jsx";
import Secret from "./Index/Secret/index.jsx";
import Footer from "./Index/Footer/index.jsx";
import { useDispatch, useSelector } from "react-redux";
import { me, changeLocation } from "../store/actions";

export default () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(me());
  }, []);
  const user = useSelector(state => state.user);
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/" component={IndexWelcome} />
        {!user && <Route exact path="/register" component={Register} />}
        {!user && <Route exact path="/logIn" component={LogIn} />}
        <Route exact path="/secret" component={Secret} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </div>
  );
};
