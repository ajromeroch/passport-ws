import React, { lazy, useEffect } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "../public/stylesheets/scss/main.scss";
import store from "../store";
import App from "./index.jsx";
import { Provider } from "react-redux";
const Root = () => {
  return (
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  );
};

render(<Root />, document.getElementById("root"));
