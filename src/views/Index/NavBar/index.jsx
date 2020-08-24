import React, { useState, useEffect } from "react";
import {
  FaHome,
  FaSignInAlt,
  FaSignOutAlt,
  FaFileSignature
} from "react-icons/fa";
import { GiKey } from "react-icons/gi";
import { Link, useRouteMatch } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logOut } from "../../../store/actions";
const styles = {
  active: {
    color: "black",
    fontSize: "43px",
    marginLeft: "8px",
    marginTop: "8px"
  },
  notActive: {
    color: "white",
    fontSize: "40px",
    marginLeft: "8px",
    marginTop: "8px"
  }
};

export default () => {
  const user = useSelector(state => state.user);
  let match = useRouteMatch({
    path: "/secret"
  });
  const dispatch = useDispatch();
  const [active, activeChange] = useState({
    home: false,
    homeClick: false,
    register: false,
    registerClick: false,
    logIn: false,
    logInClick: false,
    logOut: false,
    logOutClick: false,
    secret: false,
    secretClick: false
  });
  const allFalse = onlytrue => {
    const obj = JSON.parse(JSON.stringify(active));
    for (const key in obj) {
      key !== onlytrue ? (obj[key] = false) : (obj[key] = true);
    }
    activeChange(obj);
  };
  if (match && !active.secretClick) {
    allFalse("secretClick");
  }
  const location = window.location.pathname.slice(1);
  useEffect(() => {
    if (location) allFalse(location + "Click");
    else allFalse("homeClick");
  }, [location]);
 

  return (
    <div className="navbarContainer">
      <div className="buttonsConts">
        <Link to="/">
          <div
            className={active.homeClick ? "buttonClick" : "button"}
            onMouseEnter={() => activeChange({ ...active, home: true })}
            onMouseLeave={() => activeChange({ ...active, home: false })}
            onClick={() => allFalse("homeClick")}
          >
            <FaHome
              style={
                active.home || active.homeClick
                  ? styles.active
                  : styles.notActive
              }
            />
          </div>
        </Link>
        <Link to="/secret">
          <div
            className={active.secretClick ? "buttonClick" : "button"}
            onMouseEnter={() => activeChange({ ...active, secret: true })}
            onMouseLeave={() => activeChange({ ...active, secret: false })}
            onClick={() => allFalse("secretClick")}
          >
            <GiKey
              style={
                active.secret || active.secretClick
                  ? styles.active
                  : styles.notActive
              }
            />
          </div>
        </Link>
      </div>

      {!user ? (
        <div className="buttonsConts">
          <Link to="/register">
            <div
              className={active.registerClick ? "buttonClick" : "button"}
              onMouseEnter={() => activeChange({ ...active, register: true })}
              onMouseLeave={() => activeChange({ ...active, register: false })}
              onClick={() => allFalse("registerClick")}
            >
              <FaFileSignature
                style={
                  active.register || active.registerClick
                    ? styles.active
                    : styles.notActive
                }
              />
            </div>
          </Link>
          <Link to="/logIn">
            <div
              className={active.logInClick ? "buttonClick" : "button"}
              onMouseEnter={() => activeChange({ ...active, logIn: true })}
              onMouseLeave={() => activeChange({ ...active, logIn: false })}
              onClick={() => allFalse("logInClick")}
            >
              <FaSignInAlt
                style={
                  active.logIn || active.logInClick
                    ? styles.active
                    : styles.notActive
                }
              />
            </div>
          </Link>
        </div>
      ) : (
        <div className="buttonsConts">
          <p className="personName">Hi {user.username}</p>
          <div
            className="button"
            onMouseEnter={() => activeChange({ ...active, logOut: true })}
            onMouseLeave={() => activeChange({ ...active, logOut: false })}
            onClick={() => dispatch(logOut())}
          >
            <FaSignOutAlt
              style={active.logOut ? styles.active : styles.notActive}
            />
          </div>
        </div>
      )}
    </div>
  );
};
