import React, { useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Welcome from "./Index/Welcome.jsx";
import NavBar from "./Index/NavBar/index.jsx";
import Register from "./Index/Register/index.jsx";
import Login from "./Index/Login/index.jsx";
import Secret from "./Index/Secret/index.jsx";

export default () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(me());
  }, []);
  const user = useSelector((state) => state.user);
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/private" component={Secret} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
};
