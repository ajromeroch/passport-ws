import { ADD_USER } from "../constants";
import Axios from "axios";

const addUser = user => ({
  type: ADD_USER,
  payload: user
});


export const registerUser = newUser => dispatch =>
  Axios.post("/api/register", newUser)
    .then(res => res.data)
    .then(user => dispatch(addUser(user)));

export const logIn = user => dispatch =>
  Axios.post("/api/login", user)
    .then(res => res.data)
    .then(user => dispatch(addUser(user)))

export const logOut = () => dispatch =>
  Axios.get("/api/logout").then(() => dispatch(addUser(null)))

export const me = () => dispatch =>
  Axios.get("/api/me")
    .then(res => res.data)
    .then(user => dispatch(addUser(user)))
    .catch(() => dispatch(addUser(null)));

