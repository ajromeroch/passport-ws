import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "../public/stylesheets/main.css";
import App from "./index.jsx";

const Root = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default render(<Root />, document.getElementById("root"));
