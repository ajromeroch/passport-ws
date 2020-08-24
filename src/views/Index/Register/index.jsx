import React, { useState } from "react";
import { registerUser } from "../../../store/actions";
import { useDispatch } from "react-redux";

export default (props) => {
  const dispatch = useDispatch();
  const [form, formChange] = useState({
    username: "",
    password: "",
    validatePassword: ""
  });
  const [valid, areValid] = useState(true);
  const [validName, isValidName] = useState(true);
  const [message, setMessage] = useState("");

  const onChange = e => {
    formChange({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = e => {
    e.preventDefault();
    form.password
      ? form.password === form.validatePassword
        ? areValid(true)
        : (areValid(false), setMessage("Passwords do not match"))
      : (areValid(false), setMessage("Fill the blank"));
    form.username
      ? isValidName(true)
      : (isValidName(false), setMessage("Fill the blank"));
    form.username &&
      form.password &&
      form.password === form.validatePassword &&
      (dispatch(
        registerUser({ username: form.username, password: form.password })
      )
        .then(() => props.history.push("/secret"))
        .catch(() => {
          setMessage("Something went wrong!");
          isValidName(false);
          areValid(false)
        }),
      setMessage(""));
  };
  return (
    <div className="registerContainer">
      <form className="registerForm" onChange={onChange} onSubmit={onSubmit}>
        <div className="formTitle">REGISTER</div>
        <h3 className="formSubtitles">USERNAME</h3>
        <input
          type="text"
          name="username"
          className={validName ? "input" : "warningInput"}
        />
        <h3 className="formSubtitles">PASSWORD</h3>
        <input
          type="password"
          name="password"
          className={valid ? "input" : "warningInput"}
        />
        <h3 className="formSubtitles">VALIDATE PASSWORD</h3>
        <input
          type="password"
          name="validatePassword"
          className={valid ? "input" : "warningInput"}
        />
        <div style={{ color: "red" }}>{message}</div>
        <button className="submitButton">SUBMIT</button>
      </form>
    </div>
  );
};
